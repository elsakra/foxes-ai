"use client";

import { MODELS } from "@/lib/copy";
import { ModelIcon } from "./ModelIcon";
import { cn } from "@/lib/utils";

const QUESTIONS = [
  { q: "what's the best CRM for a small business?", model: "chatgpt" },
  { q: "best pediatric dentist in Austin?", model: "claude" },
  { q: "workplace training on burnout for employees", model: "perplexity" },
  { q: "best protein powder for women over 40", model: "gemini" },
  { q: "best commercial HVAC in Phoenix", model: "copilot" },
  { q: "affordable meal kit delivery for families", model: "chatgpt" },
  { q: "how to choose a local financial advisor", model: "claude" },
  { q: "reliable roof repair companies near me", model: "perplexity" },
  { q: "best running shoes for flat feet", model: "gemini" },
  { q: "dog trainer for anxious dogs", model: "copilot" },
  { q: "car insurance for new drivers under 25", model: "chatgpt" },
  { q: "best wedding venues under $10k", model: "claude" },
] as const;

export function BuyerQuestionStream({ className }: { className?: string }) {
  // duplicate to make marquee loop seamless
  const full = [...QUESTIONS, ...QUESTIONS];
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className
      )}
    >
      <div className="flex gap-2 marquee whitespace-nowrap">
        {full.map((row, i) => {
          const m = MODELS.find((x) => x.id === row.model)!;
          return (
            <div
              key={i}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white/[0.025] px-3 py-1.5 text-[12.5px]"
            >
              <span
                className="inline-flex h-5 w-5 items-center justify-center rounded-md"
                style={{ background: `${m.color}18`, color: m.color }}
              >
                <ModelIcon id={m.id} className="h-3 w-3" />
              </span>
              <span className="text-[color:var(--ink-dim)]">{row.q}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
