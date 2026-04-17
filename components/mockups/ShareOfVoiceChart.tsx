"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

const ROWS = [
  { name: "Northwind", sov: 24.4, you: true },
  { name: "Vitacost", sov: 15.0 },
  { name: "iHerb", sov: 14.1 },
  { name: "Nature Made", sov: 10.6 },
  { name: "Amazon", sov: 9.8 },
  { name: "Vitamin Shoppe", sov: 8.0 },
  { name: "Thorne", sov: 6.2 },
  { name: "Puritan's Pride", sov: 3.5 },
];

export function ShareOfVoiceChart({
  title = "Share of Answer — last 30 days",
  className,
}: {
  title?: string;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const max = Math.max(...ROWS.map((r) => r.sov));

  return (
    <div ref={ref} className={className}>
      <div className="flex items-center justify-between mb-4">
        <div className="eyebrow">{title}</div>
        <div className="mono text-[11px] text-[color:var(--ink-mute)]">
          5 models · 124 prompts
        </div>
      </div>
      <div className="space-y-2.5">
        {ROWS.map((r, idx) => (
          <div key={r.name} className="grid grid-cols-12 items-center gap-3">
            <div className="col-span-4 sm:col-span-3 text-[12.5px] truncate">
              <span className={r.you ? "text-[color:var(--ink)]" : "text-[color:var(--ink-dim)]"}>
                {r.you ? (
                  <>
                    <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-[--accent] align-middle" />
                    {r.name}
                  </>
                ) : (
                  r.name
                )}
              </span>
            </div>
            <div className="col-span-7 sm:col-span-8 h-6 rounded-md bg-white/[0.03] ring-1 ring-inset ring-white/[0.06] relative overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${(r.sov / max) * 100}%` } : { width: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.08 * idx,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`h-full rounded-md ${
                  r.you
                    ? "bg-gradient-to-r from-[--accent-soft] to-[--accent]"
                    : "bg-gradient-to-r from-white/10 to-white/20"
                }`}
              />
            </div>
            <div className="col-span-1 mono text-[11.5px] text-right text-[color:var(--ink-dim)]">
              {r.sov.toFixed(1)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
