import { z } from "zod";
import {
  budgetOptions,
  projectTypes,
  timelineOptions,
} from "@/lib/site";

const projectTypeValues = projectTypes.map((item) => item.value) as [
  string,
  ...string[],
];
const budgetValues = budgetOptions.map((item) => item.value) as [
  string,
  ...string[],
];
const timelineValues = timelineOptions.map((item) => item.value) as [
  string,
  ...string[],
];

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Name is too long."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(120, "Email is too long."),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a phone number we can reach you on.")
    .max(24, "Phone number is too long.")
    .regex(/^[0-9+\-\s()]+$/, "Use digits and ordinary phone characters only."),
  business: z
    .string()
    .trim()
    .min(2, "Enter the business or brand name.")
    .max(120, "Business name is too long."),
  projectType: z.enum(projectTypeValues, {
    message: "Select a project type.",
  }),
  budget: z.enum(budgetValues, { message: "Select an estimated budget." }),
  timeline: z.enum(timelineValues, { message: "Select a timeline." }),
  description: z
    .string()
    .trim()
    .min(24, "Tell us a little more — at least a couple of sentences.")
    .max(4000, "Please keep the description under 4,000 characters."),
  website: z
    .string()
    .trim()
    .max(200, "URL is too long.")
    .optional()
    .or(z.literal("")),
  startedAt: z.string().optional(),
  companyUrl: z.string().optional(),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export type EnquiryFieldErrors = Partial<Record<keyof EnquiryInput, string>>;

function withEmptyStrings(input: unknown) {
  if (!input || typeof input !== "object") return input;
  const source = input as Record<string, unknown>;
  const keys = [
    "name",
    "email",
    "phone",
    "business",
    "projectType",
    "budget",
    "timeline",
    "description",
    "website",
    "startedAt",
    "companyUrl",
  ];
  const next = { ...source };
  for (const key of keys) {
    if (next[key] === undefined || next[key] === null) next[key] = "";
  }
  return next;
}

export function parseEnquiry(input: unknown):
  | { ok: true; data: EnquiryInput }
  | { ok: false; errors: EnquiryFieldErrors } {
  const result = enquirySchema.safeParse(withEmptyStrings(input));
  if (result.success) {
    if (result.data.website) {
      try {
        const url = new URL(
          result.data.website.startsWith("http")
            ? result.data.website
            : `https://${result.data.website}`,
        );
        if (!["http:", "https:"].includes(url.protocol)) {
          return {
            ok: false,
            errors: { website: "Enter a valid website URL." },
          };
        }
      } catch {
        return {
          ok: false,
          errors: { website: "Enter a valid website URL." },
        };
      }
    }
    return { ok: true, data: result.data };
  }

  const errors: EnquiryFieldErrors = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !errors[key as keyof EnquiryInput]) {
      errors[key as keyof EnquiryInput] = issue.message;
    }
  }
  return { ok: false, errors };
}

export function isSpam(data: EnquiryInput) {
  if (data.companyUrl && data.companyUrl.trim() !== "") return true;
  if (data.startedAt) {
    const started = Number(data.startedAt);
    if (Number.isFinite(started)) {
      const elapsed = Date.now() - started;
      if (elapsed < 1600) return true;
    }
  }
  const suspicious = /(https?:\/\/|viagra|crypto\s*invest|seo\s*backlink)/i;
  if (suspicious.test(data.description) && data.description.length < 40) {
    return true;
  }
  return false;
}

export function labelFor(
  value: string,
  list: readonly { value: string; label: string }[],
) {
  return list.find((item) => item.value === value)?.label ?? value;
}
