"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const COLUMNS = [
  {
    title: "Drafting",
    items: [
      { t: "You vs. local competitors — comparison page", tag: "Comparison" },
      { t: "How to choose a CRM for a small team", tag: "Guide" },
    ],
  },
  {
    title: "Review",
    items: [
      { t: "Wellness & training programs · authority brief", tag: "Authority" },
      { t: "Top customer questions in your category", tag: "Category" },
    ],
  },
  {
    title: "Shipped",
    items: [
      { t: "Reddit: helpful reply in r/smallbusiness", tag: "Earned" },
      { t: "G2 profile · refreshed", tag: "Citation" },
      { t: "FAQ: What areas do you serve?", tag: "FAQ" },
    ],
  },
] as const;

export function ContentPipelineBoard({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-3 gap-3", className)}>
      {COLUMNS.map((col, ci) => (
        <div
          key={col.title}
          className="rounded-xl border border-[color:var(--line)] bg-black/20 p-3"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="eyebrow">{col.title}</div>
            <span className="mono text-[10.5px] text-[color:var(--ink-mute)]">
              {col.items.length}
            </span>
          </div>
          <div className="space-y-2">
            {col.items.map((it, i) => (
              <motion.div
                key={it.t}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.35, delay: 0.05 * (ci * 3 + i) }}
                className="rounded-lg border border-[color:var(--line)] bg-white/[0.03] p-2.5"
              >
                <div className="text-[12px] leading-snug text-[color:var(--ink)]">{it.t}</div>
                <div className="mt-2 inline-flex items-center gap-1 text-[10.5px] mono text-[color:var(--ink-mute)]">
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      ci === 2 ? "bg-[--success]" : ci === 1 ? "bg-[--warn]" : "bg-white/30"
                    )}
                  />
                  {it.tag}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
