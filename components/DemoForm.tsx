"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type State = "idle" | "loading" | "success" | "error";

export function DemoForm() {
  const [state, setState] = React.useState<State>("idle");
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setError(null);

    const form = new FormData(e.currentTarget);
    const body = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      company: String(form.get("company") || ""),
      website: String(form.get("website") || ""),
      competitors: String(form.get("competitors") || ""),
      prompt: String(form.get("prompt") || ""),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong");
      }
      setState("success");
    } catch (err: unknown) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {state === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="card-border p-8 sm:p-10 text-center"
          >
            <div className="mx-auto h-12 w-12 rounded-full bg-[--success]/15 text-[--success] ring-1 ring-inset ring-[--success]/30 grid place-items-center">
              <Check className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-[26px] tracking-tight">
              We&apos;re on it.
            </h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-[color:var(--ink-dim)] max-w-md mx-auto">
              You&apos;ll get a calendar link within one business day, with your
              audit ready for the call. If you&apos;d rather skip the wait, book
              a time below.
            </p>

            {/* TODO: Replace with Calendly embed once link is provided */}
            <div className="mt-8 rounded-xl border border-dashed border-[color:var(--line-strong)] bg-black/20 p-8">
              <div className="mono text-[10.5px] tracking-widest text-[color:var(--ink-mute)] uppercase">
                Live calendar · coming soon
              </div>
              <p className="mt-2 text-[13.5px] text-[color:var(--ink-dim)]">
                Your Calendly embed will drop in here.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            onSubmit={onSubmit}
            className="card-border p-6 sm:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" required placeholder="Jane Smith" />
              <Field
                label="Work email"
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Company" name="company" required placeholder="Acme Inc." />
              <Field
                label="Website URL"
                name="website"
                required
                placeholder="acme.com"
              />
            </div>
            <Field
              label="Top 3 competitors"
              name="competitors"
              required
              placeholder="Comma-separated: Competitor A, Competitor B, Competitor C"
            />
            <Field
              label="What's prompting this?"
              name="prompt"
              textarea
              placeholder="Optional — the specific thing that made you book today."
            />

            <div className="pt-2 flex items-center gap-3">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={state === "loading"}
                arrow={state !== "loading"}
              >
                {state === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Booking…
                  </>
                ) : (
                  "Book my demo"
                )}
              </Button>
              <span className="text-[12px] text-[color:var(--ink-mute)]">
                Takes 20 seconds
              </span>
            </div>

            {state === "error" && (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-[12.5px] text-red-300">
                {error ?? "Something went wrong. Try again."}
              </div>
            )}

            <p className="text-[12px] text-[color:var(--ink-mute)] pt-1 leading-relaxed">
              We run the audit before every call. If we&apos;re not a fit,
              we&apos;ll tell you on the call — with data. If we are,
              you&apos;ll see exactly what we&apos;d do in the first 90 days.
              Either way, you keep the report.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  textarea?: boolean;
}) {
  const common = cn(
    "w-full rounded-lg bg-white/[0.03] border border-[color:var(--line)] px-3.5 py-2.5 text-[14px] text-[color:var(--ink)]",
    "placeholder:text-[color:var(--ink-mute)] outline-none transition-all",
    "focus:border-[--accent]/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-[--accent]/20"
  );
  return (
    <label className="block">
      <div className="mono text-[10.5px] tracking-widest text-[color:var(--ink-mute)] uppercase mb-1.5">
        {label}
        {required && <span className="text-[--accent] ml-1">*</span>}
      </div>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={3}
          className={common}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={common}
        />
      )}
    </label>
  );
}
