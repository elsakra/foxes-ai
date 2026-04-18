"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ModelIcon } from "./ModelIcon";
import { MODELS } from "@/lib/copy";

const PAGES = [
  {
    label: "Cover",
    page: 1,
    total: 9,
    content: <Cover />,
  },
  {
    label: "Diagnosis",
    page: 2,
    total: 9,
    content: <Diagnosis />,
  },
  {
    label: "Gap list",
    page: 3,
    total: 9,
    content: <GapList />,
  },
  {
    label: "30-day plan",
    page: 4,
    total: 9,
    content: <ThirtyDayPlan />,
  },
];

export function AuditReportPreview({ className }: { className?: string }) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % PAGES.length), 5000);
    return () => clearInterval(id);
  }, []);

  const active = PAGES[i];

  return (
    <div className={cn("relative", className)}>
      <div className="absolute -inset-10 -z-10 rounded-[40px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.5),transparent_70%)] blur-2xl opacity-40" />

      <div className="relative rounded-2xl border border-black/10 bg-[#F6F5F1] text-[#131316] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.4)] overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-black/10 bg-white">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-gradient-to-br from-[#FFB088] to-[#FF4D00]" />
            <span className="text-[12px] mono tracking-wider">FOXES.AI · AEO AUDIT</span>
          </div>
          <div className="mono text-[10.5px] text-black/50">
            Prepared for Acme · Confidential
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 px-3 py-2 border-b border-black/10 bg-[#FBFAF7]">
          {PAGES.map((p, idx) => (
            <button
              key={p.label}
              onClick={() => setI(idx)}
              className={cn(
                "px-2.5 py-1 rounded-full text-[11.5px] mono transition-colors",
                idx === i
                  ? "bg-black text-white"
                  : "text-black/60 hover:text-black"
              )}
            >
              {p.label}
            </button>
          ))}
          <div className="ml-auto mono text-[10.5px] text-black/45">
            Page {active.page} / {active.total}
          </div>
        </div>

        {/* Page */}
        <div className="relative min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-8"
            >
              {active.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function Cover() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 sm:col-span-7">
        <div className="mono text-[10.5px] tracking-widest text-black/50">
          01 · EXECUTIVE SUMMARY
        </div>
        <h3 className="mt-2 font-display text-[28px] sm:text-[34px] leading-[1.05] tracking-tight">
          Where Acme stands in
          <br />
          AI answers.
        </h3>
        <p className="mt-4 text-[13.5px] leading-relaxed text-black/70 max-w-prose">
          Across 5 model surfaces and 124 buyer-intent prompts, Acme is named on{" "}
          <strong>14%</strong> of answers — behind 3 of the top 5 category
          competitors. The story is not complicated. There is a specific set of
          surfaces the models pull from in your category, and Acme is not yet
          living in most of them.
        </p>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { k: "14%", l: "Your mention rate" },
            { k: "38%", l: "Category leader" },
            { k: "23/24", l: "Priority prompts to win" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-xl border border-black/10 p-3 bg-white"
            >
              <div className="font-display text-[22px] tracking-tight">{s.k}</div>
              <div className="mono text-[10.5px] text-black/55 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-12 sm:col-span-5">
        <div className="rounded-xl border border-black/10 bg-white p-4 h-full">
          <div className="mono text-[10.5px] text-black/55 mb-3">Model coverage</div>
          <div className="space-y-2">
            {MODELS.map((m, i) => {
              const pct = [12, 18, 8, 14, 19][i];
              return (
                <div key={m.id} className="flex items-center gap-2">
                  <span
                    className="inline-flex h-5 w-5 items-center justify-center rounded-md"
                    style={{ background: `${m.color}22`, color: m.color }}
                  >
                    <ModelIcon id={m.id} className="h-3 w-3" />
                  </span>
                  <span className="text-[11.5px] text-black/80 w-20">
                    {m.name}
                  </span>
                  <div className="flex-1 h-1.5 rounded-full bg-black/[0.06] overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${pct * 3}%`,
                        background: "#FF6B35",
                      }}
                    />
                  </div>
                  <span className="mono text-[10.5px] text-black/55 w-10 text-right">
                    {pct}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Diagnosis() {
  return (
    <div>
      <div className="mono text-[10.5px] tracking-widest text-black/50">
        02 · DIAGNOSIS
      </div>
      <h3 className="mt-2 font-display text-[26px] leading-tight tracking-tight">
        Two problems — both solvable.
      </h3>
      <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-black/10 p-4 bg-white">
          <div className="text-[12px] mono text-[#B84700] font-medium">
            Problem 1 · Invisible
          </div>
          <p className="mt-1.5 text-[12.5px] leading-snug text-black/70">
            Across buyer-intent prompts in your category, Acme appears on 14% of answers.
            Competitors with weaker actual products are consistently cited instead.
          </p>
        </div>
        <div className="rounded-xl border border-black/10 p-4 bg-white">
          <div className="text-[12px] mono text-[#B84700] font-medium">
            Problem 2 · Narrative off
          </div>
          <p className="mt-1.5 text-[12.5px] leading-snug text-black/70">
            When the models do name you, the story is a two-generation-old positioning.
            The real differentiators never surface because they aren&apos;t structured for extraction.
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-black/10 p-4 bg-white">
        <div className="mono text-[10.5px] text-black/50">Proof of concept</div>
        <div className="mt-1 text-[13px] text-black/80">
          On one specific prompt where your content already matches the AEO
          format, you rank <strong>#2 on ChatGPT</strong>. Replicating that
          pattern across 23 priority prompts is the engagement.
        </div>
      </div>
    </div>
  );
}

function GapList() {
  const rows: [string, string, string][] = [
    ["Best CRM for a small business", "Critical", "HubSpot, Pipedrive, Zoho"],
    ["Best pediatric dentist in Austin", "Critical", "Austin Kids Dentistry, others"],
    ["Workplace training on burnout", "High", "Purdue Global, LinkedIn Learning"],
    ["Best protein powder for women 40+", "High", "Ritual, Orgain, Garden of Life"],
    ["Commercial HVAC companies Phoenix", "Medium", "Howard Air, George Brazil"],
    ["Affordable meal kit delivery", "Medium", "HelloFresh, Factor, Blue Apron"],
  ];
  return (
    <div>
      <div className="mono text-[10.5px] tracking-widest text-black/50">
        03 · PRIORITY GAP LIST
      </div>
      <h3 className="mt-2 font-display text-[26px] leading-tight tracking-tight">
        Where the opportunity lives.
      </h3>
      <div className="mt-5 rounded-xl border border-black/10 bg-white overflow-hidden">
        <div className="grid grid-cols-12 text-[11px] mono text-black/55 px-4 py-2.5 border-b border-black/10 bg-[#FBFAF7]">
          <div className="col-span-6">Buyer-intent prompt</div>
          <div className="col-span-2">Priority</div>
          <div className="col-span-4">Who&apos;s being named instead</div>
        </div>
        {rows.map(([q, pri, who], i) => (
          <div
            key={i}
            className="grid grid-cols-12 px-4 py-2.5 border-b border-black/[0.06] last:border-b-0 text-[12.5px]"
          >
            <div className="col-span-6 text-black/85">{q}</div>
            <div className="col-span-2">
              <span
                className={cn(
                  "mono text-[10.5px] rounded-full px-1.5 py-0.5 ring-1 ring-inset",
                  pri === "Critical"
                    ? "bg-[#FFE8DD] text-[#B84700] ring-[#FFC5AA]"
                    : pri === "High"
                    ? "bg-[#FFF6E0] text-[#8A6A00] ring-[#E8D48A]"
                    : "bg-black/[0.04] text-black/55 ring-black/10"
                )}
              >
                {pri}
              </span>
            </div>
            <div className="col-span-4 text-black/60 mono text-[11px]">{who}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ThirtyDayPlan() {
  const items = [
    "Ship 3 comparison pages targeting the Critical prompts above",
    "Publish one authority asset on the differentiator the models are missing",
    "Earn 2 citations in the publications your category leaders lean on",
  ];
  return (
    <div>
      <div className="mono text-[10.5px] tracking-widest text-black/50">
        04 · FIRST 30 DAYS
      </div>
      <h3 className="mt-2 font-display text-[26px] leading-tight tracking-tight">
        What we&apos;d ship in week one.
      </h3>
      <p className="mt-3 text-[13px] text-black/70 max-w-prose">
        The first three plays we&apos;d run if you gave us the green light today.
        Each one is tied to a specific prompt on your priority list and a
        specific surface we know your category&apos;s models pull from.
      </p>
      <ol className="mt-5 space-y-2.5">
        {items.map((it, i) => (
          <li
            key={i}
            className="rounded-xl border border-black/10 p-3.5 bg-white flex gap-3 items-start"
          >
            <span className="mt-0.5 font-display text-[16px] h-7 w-7 rounded-full bg-[#0A0A0B] text-white grid place-items-center">
              {i + 1}
            </span>
            <div className="text-[12.5px] leading-snug text-black/80">{it}</div>
          </li>
        ))}
      </ol>
      <div className="mt-5 flex items-center gap-2 text-[11.5px] mono text-black/50">
        <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
        Full 90-day roadmap continues on pages 5–9
      </div>
    </div>
  );
}
