"use client";

import { MODELS } from "@/lib/copy";
import { ModelIcon } from "./ModelIcon";
import { cn } from "@/lib/utils";

const QUESTIONS = [
  { q: "best AEO agency 2026", model: "chatgpt" },
  { q: "how do I get ChatGPT to recommend my brand?", model: "claude" },
  { q: "cheapest place to buy supplements online", model: "perplexity" },
  { q: "which CRM is best for Series B startups?", model: "chatgpt" },
  { q: "returns platform with best buyer protection", model: "gemini" },
  { q: "top AI-moderated user research tools", model: "copilot" },
  { q: "Notion vs Linear vs Attio for a modern GTM team", model: "claude" },
  { q: "most cited supplement brands on the internet", model: "perplexity" },
  { q: "best tools to build internal dashboards fast", model: "chatgpt" },
  { q: "AI-native platforms that track share of voice", model: "gemini" },
  { q: "who manufactures their own supplements in the US", model: "claude" },
  { q: "what is answer engine optimization", model: "copilot" },
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
