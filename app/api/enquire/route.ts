import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { budgetOptions, projectTypes, timelineOptions } from "@/lib/site";
import { isSpam, labelFor, parseEnquiry } from "@/lib/enquiry";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const limited = rateLimit(ip);
  if (!limited.ok) {
    return Response.json(
      {
        ok: false,
        message: "Please wait a few minutes before sending another enquiry.",
      },
      {
        status: 429,
        headers: limited.retryAfter
          ? { "Retry-After": String(limited.retryAfter) }
          : undefined,
      },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, message: "The form could not be read. Please try again." },
      { status: 400 },
    );
  }

  const parsed = parseEnquiry(body);
  if (!parsed.ok) {
    return Response.json(
      { ok: false, errors: parsed.errors, message: "Please check the highlighted fields." },
      { status: 400 },
    );
  }

  if (isSpam(parsed.data)) {
    return Response.json({ ok: true });
  }

  const enquiry = {
    ...parsed.data,
    receivedAt: new Date().toISOString(),
    ip,
  };

  const stored = await storeEnquiry(enquiry);
  const emailed = await emailEnquiry(enquiry);

  if (!stored && !emailed.sent) {
    console.error("Enquiry delivery failed", emailed.error);
    return Response.json(
      {
        ok: false,
        message:
          "We could not deliver the enquiry just now. Please try again shortly.",
      },
      { status: 503 },
    );
  }

  if (!emailed.sent) {
    console.warn(
      "Enquiry stored without email delivery. Configure RESEND_API_KEY, ENQUIRY_TO_EMAIL and ENQUIRY_FROM_EMAIL before production launch.",
      emailed.error ?? "",
    );
  }

  return Response.json({ ok: true });
}

async function storeEnquiry(enquiry: Record<string, unknown>) {
  try {
    const dir = path.join(process.cwd(), "data", "enquiries");
    await mkdir(dir, { recursive: true });
    const stamp = new Date().toISOString().replace(/[:.]/g, "-");
    const file = path.join(dir, `${stamp}.json`);
    await writeFile(file, JSON.stringify(enquiry, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error("Could not persist enquiry to disk", error);
    return false;
  }
}

async function emailEnquiry(enquiry: {
  name: string;
  email: string;
  phone: string;
  business: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  website?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return {
      sent: false,
      error: "Email provider is not configured.",
    };
  }

  const project = labelFor(enquiry.projectType, projectTypes);
  const budget = labelFor(enquiry.budget, budgetOptions);
  const timeline = labelFor(enquiry.timeline, timelineOptions);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: enquiry.email,
        subject: `WEBPI enquiry — ${enquiry.business}`,
        text: [
          `Name: ${enquiry.name}`,
          `Email: ${enquiry.email}`,
          `Phone: ${enquiry.phone}`,
          `Business: ${enquiry.business}`,
          `Project: ${project}`,
          `Budget: ${budget}`,
          `Timeline: ${timeline}`,
          `Website: ${enquiry.website || "—"}`,
          "",
          enquiry.description,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      return { sent: false, error: detail };
    }

    return { sent: true as const };
  } catch (error) {
    return {
      sent: false,
      error: error instanceof Error ? error.message : "Unknown email error",
    };
  }
}
