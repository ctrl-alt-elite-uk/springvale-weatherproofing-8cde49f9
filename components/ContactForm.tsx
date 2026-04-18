"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const fieldBase =
  "mt-2 w-full bg-surface-high/70 px-4 py-3 text-[0.9375rem] text-ink placeholder:text-slab/60 " +
  "border-b-2 border-transparent transition-[background,border-color] duration-300 ease-spring " +
  "focus:bg-surface-pure focus:border-signal focus:outline-none";

export function ContactForm({
  accessKey,
  endpoint,
}: {
  accessKey?: string;
  endpoint?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const url = endpoint ?? "https://api.web3forms.com/submit";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    if (accessKey) {
      formData.set("access_key", accessKey);
    }

    try {
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success !== false) {
        setStatus("success");
        form.reset();
        if (typeof window !== "undefined" && (window as any)._cae?.track) {
          (window as any)._cae.track("contact_form_submit");
        }
      } else {
        setStatus("error");
        setErrorMessage(
          typeof json.message === "string"
            ? json.message
            : "Something went wrong. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("Could not reach the form service. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-ink p-10 text-white">
        <span className="eyebrow text-signal">Received</span>
        <p className="mt-4 font-display text-3xl font-black tracking-tight">
          Thanks, we&apos;ll be in touch.
        </p>
        <p className="mt-3 text-white/70 leading-relaxed">
          A member of the team will reply by email the same working day. For
          urgent roof failures, please call us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow text-slab-dim">Your name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            className={fieldBase}
          />
        </label>
        <label className="block">
          <span className="eyebrow text-slab-dim">Organisation</span>
          <input
            type="text"
            name="organisation"
            autoComplete="organization"
            placeholder="Optional"
            className={fieldBase}
          />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow text-slab-dim">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@example.co.uk"
            className={fieldBase}
          />
        </label>
        <label className="block">
          <span className="eyebrow text-slab-dim">Phone</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="Optional"
            className={fieldBase}
          />
        </label>
      </div>

      <label className="block">
        <span className="eyebrow text-slab-dim">Project type</span>
        <select name="project_type" defaultValue="" className={fieldBase}>
          <option value="" disabled>
            Select a system
          </option>
          <option value="built-up-felt">Built-up felt roofing</option>
          <option value="pitched">Pitched roofing</option>
          <option value="liquid-coating">Liquid coating</option>
          <option value="cladding">Profiled cladding</option>
          <option value="inspection">Inspection or survey</option>
          <option value="other">Other / not sure</option>
        </select>
      </label>

      <label className="block">
        <span className="eyebrow text-slab-dim">Tell us about the project</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Scope, location, timeline - as much or as little detail as you have."
          className={fieldBase}
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting" || !accessKey}
          className="eyebrow inline-flex items-center justify-center gap-2 bg-ink px-8 py-5 text-white transition-colors duration-300 ease-spring hover:bg-signal disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Send enquiry"}
          <span aria-hidden="true">&rarr;</span>
        </button>
        <p className="text-xs text-slab">
          We reply the same working day.
        </p>
      </div>

      {!accessKey && (
        <p className="bg-signal-tint/60 p-4 text-xs text-signal-deep">
          Contact form is not yet configured. Set
          {" "}<code>NEXT_PUBLIC_CONTACT_ACCESS_KEY</code>{" "}
          on the Vercel project to enable submissions.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-700">{errorMessage}</p>
      )}
    </form>
  );
}
