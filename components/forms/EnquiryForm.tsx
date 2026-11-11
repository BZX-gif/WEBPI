"use client";

import { useRef, useState } from "react";
import { budgetOptions, projectTypes, timelineOptions } from "@/lib/site";
import type { EnquiryFieldErrors, EnquiryInput } from "@/lib/enquiry";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const empty: EnquiryInput = {
  name: "",
  email: "",
  phone: "",
  business: "",
  projectType: "" as EnquiryInput["projectType"],
  budget: "" as EnquiryInput["budget"],
  timeline: "" as EnquiryInput["timeline"],
  description: "",
  website: "",
  startedAt: "",
  companyUrl: "",
};

export function EnquiryForm() {
  const startedAt = useRef("");
  const [values, setValues] = useState<EnquiryInput>(empty);
  const [errors, setErrors] = useState<EnquiryFieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function markStarted() {
    if (!startedAt.current) startedAt.current = String(Date.now());
  }

  function update<K extends keyof EnquiryInput>(key: K, value: EnquiryInput[K]) {
    markStarted();
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          startedAt: startedAt.current || String(Date.now()),
          companyUrl: values.companyUrl ?? "",
        }),
      });
      const payload = (await response.json()) as {
        ok?: boolean;
        errors?: EnquiryFieldErrors;
        message?: string;
      };

      if (response.status === 429) {
        setStatus("error");
        setMessage(payload.message || "Please wait a few minutes before sending another enquiry.");
        return;
      }

      if (!response.ok || !payload.ok) {
        setErrors(payload.errors ?? {});
        setStatus("error");
        setMessage(payload.message || "Please check the highlighted fields and try again.");
        return;
      }

      setStatus("success");
      setValues(empty);
    } catch {
      setStatus("error");
      setMessage("The network interrupted the submission. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="page-in rounded-2xl bg-ink px-7 py-14 text-paper sm:rounded-3xl sm:px-12 sm:py-20" role="status">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-ink">
          <Check size={26} strokeWidth={2} aria-hidden="true" />
        </span>
        <h2 className="display-lg mt-8">
          Thank <span className="em">you.</span>
        </h2>
        <p className="mt-5 max-w-lg text-lg leading-snug text-paper/70">
          Your enquiry is with us. We read every one personally and typically
          reply within two working days with a clear next step — or an honest
          note if we are not the right studio for the work.
        </p>
        <Button href="/" className="mt-9" variant="light">
          Back to home
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="grid gap-8 rounded-2xl bg-card p-6 ring-1 ring-ink/10 sm:rounded-3xl sm:p-10 lg:p-12"
    >
      <div className="grid gap-8 md:grid-cols-2">
        <Field
          label="Full name"
          name="name"
          value={values.name}
          error={errors.name}
          onChange={(value) => update("name", value)}
          autoComplete="name"
          required
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={(value) => update("email", value)}
          autoComplete="email"
          required
        />
        <Field
          label="Phone / WhatsApp"
          name="phone"
          type="tel"
          value={values.phone}
          error={errors.phone}
          onChange={(value) => update("phone", value)}
          autoComplete="tel"
          required
        />
        <Field
          label="Business or brand name"
          name="business"
          value={values.business}
          error={errors.business}
          onChange={(value) => update("business", value)}
          autoComplete="organization"
          required
        />
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <SelectField
          label="Project type"
          name="projectType"
          value={values.projectType}
          error={errors.projectType}
          onChange={(value) => update("projectType", value as EnquiryInput["projectType"])}
          options={projectTypes}
          required
        />
        <SelectField
          label="Estimated budget"
          name="budget"
          value={values.budget}
          error={errors.budget}
          onChange={(value) => update("budget", value as EnquiryInput["budget"])}
          options={budgetOptions}
          required
        />
        <SelectField
          label="Desired timeline"
          name="timeline"
          value={values.timeline}
          error={errors.timeline}
          onChange={(value) => update("timeline", value as EnquiryInput["timeline"])}
          options={timelineOptions}
          required
        />
      </div>

      <Field
        label="Existing website"
        name="website"
        value={values.website ?? ""}
        error={errors.website}
        onChange={(value) => update("website", value)}
        placeholder="Optional"
      />

      <div>
        <label htmlFor="description" className="mono text-sub">
          Project description
        </label>
        <textarea
          id="description"
          name="description"
          className="field mt-1"
          value={values.description}
          onChange={(event) => update("description", event.target.value)}
          aria-invalid={Boolean(errors.description)}
          aria-describedby={errors.description ? "description-error" : undefined}
          required
          placeholder="What are you building, who is it for, and what would success look like?"
        />
        {errors.description ? (
          <p id="description-error" className="mt-2 text-sm text-danger">
            {errors.description}
          </p>
        ) : null}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="companyUrl">Company website</label>
        <input
          id="companyUrl"
          name="companyUrl"
          tabIndex={-1}
          autoComplete="off"
          value={values.companyUrl ?? ""}
          onChange={(event) => update("companyUrl", event.target.value)}
        />
      </div>

      {status === "error" && message ? (
        <p className="text-sm text-danger" role="alert">
          {message}
        </p>
      ) : null}

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-relaxed text-faint">
          By sending this form you agree we may use the details to reply about
          your project. We do not sell contact information.
        </p>
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send enquiry"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mono text-sub">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="field mt-1"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        required={required}
        placeholder={placeholder}
      />
      {error ? (
        <p id={`${name}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  error,
  options,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  options: readonly { value: string; label: string }[];
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mono text-sub">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="field mt-1"
        data-empty={value === ""}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        required={required}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${name}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
