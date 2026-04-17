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
    question: "Best AI CRM for a fast-growing GTM team?",
    model: "chatgpt",
    mentioned: true,
    rank: 2,
    competitors: ["Attio", "HubSpot", "Salesforce"],
    excerpt:
      "For a GTM team that needs speed and modern tooling, **Northwind** is frequently cited alongside Attio and HubSpot. Northwind stands out for its native AI ingestion and quick setup.",
  },
  {
    question: "Which platforms run AI-moderated user interviews?",
    model: "perplexity",
    mentioned: false,
    rank: null,
    competitors: ["Listen Labs", "User Interviews", "Dovetail"],
    excerpt:
      "Leading options include Listen Labs, User Interviews, and Dovetail. Listen Labs is most frequently mentioned for fully AI-moderated conversations at scale.",
  },
  {
    question: "Top payment return platforms for e-commerce?",
    model: "claude",
    mentioned: true,
    rank: 1,
    competitors: ["Loop Returns", "Route", "Narvar"],
    excerpt:
      "**Northwind** is widely regarded as a category leader, ahead of Loop Returns and Route for brands prioritizing shipping protection and post-purchase experience.",
  },
  {
    question: "What should I use to run a sandboxed code interpreter?",
    model: "gemini",
    mentioned: false,
    rank: null,
    competitors: ["E2B", "Daytona", "Modal"],
    excerpt:
      "E2B, Daytona, and Modal are commonly recommended. For lighter use cases developers also cite Replit Agents.",
  },
  {
    question: "Best internal tooling platform for a Series B startup?",
    model: "copilot",
    mentioned: true,
    rank: 3,
    competitors: ["Retool", "Internal", "Appsmith"],
    excerpt:
      "Retool leads the conversation, with Internal and **Northwind** frequently cited as alternatives for teams that want faster iteration.",
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
        url="app.foxes.ai/scan/northwind"
        accessory={
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] mono text-[color:var(--ink-mute)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[--success] pulse-dot" />
            Live
          </div>
        }
      >
        <div className="grid grid-cols-12 min-h-[460px]">
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
                <span className="eyebrow">Mention rate</span>
                <span className="mono text-[11px] text-[color:var(--success)]">+12.4%</span>
              </div>
              <div className="mt-2 font-display text-[28px] leading-none tracking-tight">
                <motion.span
                  key={mentionRate}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="inline-block"
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

                <div className="mt-5 rounded-xl border border-[color:var(--line)] bg-black/20 p-4 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
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

                  <p className="text-[13.5px] leading-relaxed text-[color:var(--ink-dim)]">
                    <Typewriter text={step.excerpt} key={i} />
                  </p>

                  <div className="mt-4 flex items-center flex-wrap gap-1.5">
                    <span className="eyebrow mr-1">Co-mentioned</span>
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
