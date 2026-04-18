"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LinkButton } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/copy";
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
    title: "Finding the right questions",
    body: "We figure out what your customers are actually asking AI — the real words they type, not a keyword list.",
    icon: Search,
    className: "lg:col-span-3 lg:row-span-2",
    big: true,
  },
  {
    title: "Tracking every major AI",
    body: "ChatGPT, Claude, Perplexity, Gemini, and Copilot. Checked every week.",
    icon: Gauge,
    className: "lg:col-span-3",
  },
  {
    title: "Watching your competitors",
    body: "We see who's getting named instead of you, and figure out why.",
    icon: BarChart3,
    className: "lg:col-span-3",
  },
  {
    title: "Writing what AI reads",
    body: "Comparison pages, long posts, help docs, videos, Reddit replies.",
    icon: PenTool,
    className: "lg:col-span-3",
  },
  {
    title: "Getting you on trusted sites",
    body: "Reviews, podcasts, industry blogs, expert roundups — the places AI looks for names to recommend.",
    icon: Link2,
    className: "lg:col-span-3",
  },
  {
    title: "Making your site AI-readable",
    body: "We set up your website so AI can actually find and understand what you do.",
    icon: Cpu,
    className: "lg:col-span-3",
  },
  {
    title: "A clear weekly update",
    body: "One number every week: did AI name you more than last week?",
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
            <h2 className="headline mt-4 text-[30px] sm:text-[40px] md:text-[48px] leading-[1.05] tracking-tight">
              Scale your AI visibility. Not your headcount.
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[color:var(--ink-dim)]">
              To do this in-house, you&apos;d need to hire a strategist, a
              researcher, two writers, and someone technical — plus pay for
              tracking software. That&apos;s six months before anything gets
              published.
              <br />
              <br />
              Or you hire us. The team, the tracking, and the process are
              already set up. You get a weekly report. We do the work.
            </p>
          </div>
          <LinkButton
            href={BOOKING_URL}
            variant="primary"
            arrow
            className="w-full sm:w-auto justify-center"
          >
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
