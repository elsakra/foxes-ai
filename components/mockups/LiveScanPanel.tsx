"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MockWindow } from "./MockWindow";
import { ModelIcon } from "./ModelIcon";
import { MODELS, type ModelId } from "@/lib/copy";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

type ScanStep = {
  question: string;
  model: ModelId;
  mentioned: boolean;
  competitors: string[];
  rank: number | null;
  excerpt: string;
};

const STEPS: ScanStep[] = [
  {
    question: "What's the best CRM for a small business?",
    model: "chatgpt",
    mentioned: true,
    rank: 2,
    competitors: ["HubSpot", "Zoho", "Salesforce"],
    excerpt:
      "HubSpot is the most commonly recommended CRM for small businesses, with Pipedrive frequently cited as a strong alternative for sales-focused teams. Zoho is another popular option for budget-conscious teams.",
  },
  {
    question: "Best pediatric dentist in Austin?",
    model: "claude",
    mentioned: true,
    rank: 1,
    competitors: ["Pediatric Dentistry of Austin", "Smile Avenue Family Dentistry"],
    excerpt:
      "Highly recommended pediatric dentists in Austin include Austin Kids Dentistry, Pediatric Dentistry of Austin, and Smile Avenue Family Dentistry.",
  },
  {
    question: "Which companies offer workplace training on burnout?",
    model: "perplexity",
    mentioned: false,
    rank: null,
    competitors: ["Purdue Global", "LinkedIn Learning", "American Institute of Stress"],
    excerpt:
      "Leading providers include Purdue Global, LinkedIn Learning, and the American Institute of Stress. Purdue Global is often cited for research-backed corporate wellness programs.",
  },
  {
    question: "Best protein powder for women over 40?",
    model: "gemini",
    mentioned: true,
    rank: 3,
    competitors: ["Ritual", "Orgain", "Garden of Life"],
    excerpt:
      "Ritual Essential Protein and Orgain Clean Protein are the most commonly recommended, with Garden of Life Raw Organic also frequently cited for its clean ingredient profile.",
  },
  {
    question: "Best commercial HVAC companies in Phoenix?",
    model: "copilot",
    mentioned: true,
    rank: 2,
    competitors: ["Howard Air", "George Brazil", "Parker & Sons"],
    excerpt:
      "Top commercial HVAC providers in Phoenix include Howard Air, George Brazil, and Parker & Sons — all frequently recommended for installation and service.",
  },
];

export function LiveScanPanel({
  className,
  autoplayMs = 4200,
}: {
  className?: string;
  autoplayMs?: number;
}) {
  const [i, setI] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setI((v) => (v + 1) % STEPS.length);
    }, autoplayMs);
    return () => clearInterval(id);
  }, [autoplayMs]);

  // Derive mention rate deterministically from the step index so the bar
  // "climbs" without needing a side-effecting useEffect.
  const mentionRate = React.useMemo(() => {
    let r = 34;
    for (let j = 0; j <= i; j++) {
      r += STEPS[j].mentioned ? 3 : -1;
    }
    return Math.min(82, Math.max(22, r));
  }, [i]);

  const step = STEPS[i];
  const activeModel = step.model;

  return (
    <div className={cn("relative", className)}>
      {/* Glow behind */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[40px] bg-[radial-gradient(ellipse_at_center,rgba(255,107,53,0.18),transparent_70%)] blur-2xl"
      />

      <MockWindow
        url="app.foxes.ai/scan/your-brand"
        accessory={
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] mono text-[color:var(--ink-mute)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[--success] pulse-dot" />
            Live
          </div>
        }
      >
        <div className="grid grid-cols-12 min-h-[460px] sm:min-h-[520px]">
          {/* Left rail: models */}
          <div className="col-span-4 sm:col-span-3 border-r border-[color:var(--line)] p-3 space-y-1">
            <div className="eyebrow px-2 py-1.5 mb-1">Models</div>
            {MODELS.map((m) => {
              const active = m.id === activeModel;
              return (
                <div
                  key={m.id}
                  className={cn(
                    "relative flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12.5px] transition-all",
                    active
                      ? "bg-white/5 text-[color:var(--ink)] ring-1 ring-inset ring-white/10"
                      : "text-[color:var(--ink-dim)] hover:bg-white/[0.03]"
                  )}
                >
                  <span
                    className="inline-flex h-6 w-6 items-center justify-center rounded-md"
                    style={{
                      background: `${m.color}15`,
                      color: m.color,
                    }}
                  >
                    <ModelIcon id={m.id} className="h-3.5 w-3.5" />
                  </span>
                  <span className="truncate">{m.name}</span>
                  {active && (
                    <motion.span
                      layoutId="scan-active-dot"
                      className="ml-auto h-1.5 w-1.5 rounded-full"
                      style={{ background: m.color }}
                    />
                  )}
                </div>
              );
            })}

            <div className="mt-4 rounded-lg border border-[color:var(--line)] p-3 bg-black/20">
              <div className="flex items-center justify-between">
                <span className="eyebrow">Named in answer</span>
                <span className="mono text-[11px] text-[color:var(--success)]">+12.4%</span>
              </div>
              <div className="mt-2 font-display text-[28px] leading-none tracking-tight tabular-nums min-h-[28px]">
                <motion.span
                  key={mentionRate}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="inline-block min-w-[48px]"
                >
                  {mentionRate}
                </motion.span>
                <span className="text-[color:var(--ink-mute)] text-[16px] ml-0.5">%</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  className="h-full bg-gradient-to-r from-[--accent-soft] to-[--accent]"
                  initial={false}
                  animate={{ width: `${mentionRate}%` }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                />
              </div>
            </div>
          </div>

          {/* Center: query + answer */}
          <div className="col-span-8 sm:col-span-9 p-4 sm:p-6 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="flex-1 flex flex-col"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-[color:var(--ink-dim)]">
                    <Sparkles className="h-3.5 w-3.5 text-[--accent]" />
                    <span className="eyebrow">Buyer prompt</span>
                  </div>
                  <div className="flex items-center gap-1.5 mono text-[11px] text-[color:var(--ink-mute)]">
                    <span>Week 6 · Scan {String(2800 + i * 7).padStart(4, "0")}</span>
                  </div>
                </div>

                <div className="mt-2 font-display text-[17px] sm:text-[20px] leading-snug tracking-tight">
                  &ldquo;{step.question}&rdquo;
                </div>

                <div className="mt-5 rounded-xl border border-[color:var(--line)] bg-black/20 p-4 relative overflow-hidden min-h-[220px]">
                  <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-flex h-6 w-6 items-center justify-center rounded-md"
                        style={{
                          background: `${
                            MODELS.find((m) => m.id === activeModel)?.color
                          }18`,
                          color: MODELS.find((m) => m.id === activeModel)?.color,
                        }}
                      >
                        <ModelIcon id={activeModel} className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-[13px] text-[color:var(--ink)]">
                        {MODELS.find((m) => m.id === activeModel)?.name}
                      </span>
                      <span className="mono text-[10.5px] text-[color:var(--ink-mute)]">
                        · answering
                      </span>
                    </div>
                    <div
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] mono",
                        step.mentioned
                          ? "bg-[--success]/10 text-[--success] ring-1 ring-inset ring-[--success]/20"
                          : "bg-white/5 text-[color:var(--ink-mute)] ring-1 ring-inset ring-white/10"
                      )}
                    >
                      {step.mentioned ? (
                        <>
                          <CheckCircle2 className="h-3 w-3" /> Named · #{step.rank}
                        </>
                      ) : (
                        <>Not named</>
                      )}
                    </div>
                  </div>

                  <p className="text-[13.5px] leading-relaxed text-[color:var(--ink-dim)] min-h-[84px]">
                    <Typewriter text={step.excerpt} key={i} />
                  </p>

                  <div className="mt-4 flex items-center flex-wrap gap-1.5">
                    <span className="eyebrow mr-1">Also mentioned</span>
                    {step.competitors.map((c) => (
                      <span
                        key={c}
                        className="mono text-[11px] rounded-md bg-white/5 px-1.5 py-0.5 ring-1 ring-inset ring-white/10"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-[11.5px] text-[color:var(--ink-mute)]">
                    <span className="mono">Weekly scan loop</span>
                    <span className="h-0.5 w-6 bg-gradient-to-r from-[--accent] to-transparent" />
                    <span className="mono">5 models · 124 tracked prompts</span>
                  </div>
                  <div className="inline-flex items-center gap-1 mono text-[11.5px] text-[color:var(--ink-dim)] hover:text-[color:var(--ink)]">
                    Open report <ArrowUpRight className="h-3 w-3" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </MockWindow>
    </div>
  );
}

function Typewriter({ text }: { text: string }) {
  // Component is remounted via `key` whenever a new prompt arrives, so initial
  // state is always an empty string — avoiding a setState-in-effect call.
  const [out, setOut] = React.useState("");
  React.useEffect(() => {
    let idx = 0;
    const id = setInterval(() => {
      idx += 2;
      setOut(text.slice(0, idx));
      if (idx >= text.length) clearInterval(id);
    }, 14);
    return () => clearInterval(id);
  }, [text]);

  // Render bold around **markers**
  const parts = out.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <span key={i} className="text-[color:var(--ink)] font-medium">
            {p.slice(2, -2)}
          </span>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
      <span className="inline-block w-[6px] h-[14px] align-[-2px] ml-[1px] bg-[--accent] animate-pulse" />
    </>
  );
}
