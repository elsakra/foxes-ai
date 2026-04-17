"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LinkButton } from "@/components/ui/button";
import {
  Gauge,
  LineChart,
  Search,
  PenTool,
  Link2,
  Cpu,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";

const CAPS = [
  {
    title: "Query engineering",
    body: "Translating your category into the real questions buyers ask AI",
    icon: Search,
    className: "lg:col-span-3 lg:row-span-2",
    big: true,
  },
  {
    title: "Multi-LLM measurement",
    body: "ChatGPT, Claude, Perplexity, Gemini, Copilot, weekly",
    icon: Gauge,
    className: "lg:col-span-3",
  },
  {
    title: "Competitive intelligence",
    body: "Who's being named, why, and what to do about it",
    icon: BarChart3,
    className: "lg:col-span-3",
  },
  {
    title: "Content production",
    body: "Comparison pages, long-form, help docs, video, Reddit presence",
    icon: PenTool,
    className: "lg:col-span-3",
  },
  {
    title: "Authority building",
    body: "Citations, placements, third-party signals",
    icon: Link2,
    className: "lg:col-span-3",
  },
  {
    title: "Technical AEO",
    body: "Schema, structured data, crawl posture for AI agents",
    icon: Cpu,
    className: "lg:col-span-3",
  },
  {
    title: "Weekly reporting",
    body: "One number, tracked honestly",
    icon: LineChart,
    className: "lg:col-span-3",
  },
];

export function ScalePresence() {
  return (
    <section className="relative py-28 border-t border-[color:var(--line)] bg-[color:var(--bg-elev)]/40">
      <Container size="wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>Done for you</Eyebrow>
            <h2 className="headline mt-4 text-[34px] sm:text-[48px] leading-[1.05] tracking-tight">
              Scale your AI visibility. Not your headcount.
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[color:var(--ink-dim)]">
              Running AEO in-house means hiring a senior strategist, a
              research analyst, two content producers, a technical SEO for the
              structured data layer, and buying a measurement tool. Six months
              before you ship the first thing.
              <br />
              <br />
              Or you book a demo with us and we run all of it. Senior-led team,
              measurement stack, content engine, weekly report. No ramp.
            </p>
          </div>
          <LinkButton href="/demo" variant="primary" arrow>
            Book a demo
          </LinkButton>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
          {CAPS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: 0.04 * i }}
              className={cn(
                "card-border relative p-6 overflow-hidden",
                c.className
              )}
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[--accent]/10 text-[--accent] ring-1 ring-inset ring-[--accent]/20">
                  <c.icon className="h-4.5 w-4.5" />
                </span>
                <span className="mono text-[10.5px] text-[color:var(--ink-mute)]">
                  0{i + 1}
                </span>
              </div>
              <h3
                className={cn(
                  "mt-6 font-display tracking-tight",
                  c.big ? "text-[26px]" : "text-[18px]"
                )}
              >
                {c.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-[color:var(--ink-dim)]">
                {c.body}
              </p>

              {c.big && (
                <div className="mt-6 rounded-lg border border-[color:var(--line)] bg-black/30 p-3">
                  <div className="eyebrow mb-2">Sample prompts we map</div>
                  <ul className="space-y-1.5">
                    {[
                      "best AI CRM for Series B startups",
                      "cheapest place to buy GMP supplements",
                      "usability testing platform 2026",
                      "how do I run a sandboxed code interpreter",
                    ].map((t) => (
                      <li
                        key={t}
                        className="text-[12px] text-[color:var(--ink-dim)] flex items-center gap-2"
                      >
                        <span className="h-1 w-1 rounded-full bg-[--accent]" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
