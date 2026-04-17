"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { AuditReportPreview } from "@/components/mockups/AuditReportPreview";
import { Check } from "lucide-react";
import { BOOKING_URL } from "@/lib/copy";

const ITEMS = [
  "Every buyer question your category is being asked across ChatGPT, Claude, Perplexity, Gemini, and Copilot",
  "Your current mention rate across all five models, broken down by question type and funnel stage",
  "Your top 5 competitors' mention rates — who's winning, where, and why",
  "The specific surfaces the models are pulling from in your category (Reddit, G2, comparison pages, YouTube, niche pubs — it varies wildly)",
  "A prioritized gap list ranked by buyer intent and fix difficulty",
  "The first three content plays we'd ship in the first 30 days",
];

export function Offer() {
  return (
    <section className="relative overflow-hidden">
      {/* Warm contrast band */}
      <div className="relative bg-[#F6F5F1] text-black py-28 border-y border-black/10">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:22px_22px]"
        />
        <div
          aria-hidden
          className="absolute -top-24 -left-24 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(255,107,53,0.4),transparent_65%)] blur-3xl opacity-70"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -right-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,107,53,0.3),transparent_65%)] blur-3xl opacity-70"
        />

        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="mono text-[11px] tracking-widest text-black/60 uppercase">
                What you get on the demo
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="headline mt-3 text-[36px] sm:text-[48px] leading-[1.05] tracking-tight"
              >
                The audit we charge paid clients for — <span className="text-[#B84700]">yours free</span>.
              </motion.h2>

              <p className="mt-5 text-[15.5px] leading-relaxed text-black/75 max-w-xl">
                Before every demo, we run our full AEO audit on your brand.
                It&apos;s the same deliverable our paid engagements kick off
                with. On the call, we walk you through it live. You leave with
                the full report.
              </p>

              <div className="mt-8 mono text-[11px] tracking-widest text-black/55 uppercase">
                What&apos;s in it
              </div>
              <ul className="mt-3 space-y-2.5">
                {ITEMS.map((it, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.04 * i }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-[14px] text-black/80 leading-snug">
                      {it}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl border border-black/10 bg-white p-5">
                <div className="mono text-[11px] tracking-widest text-black/55 uppercase">
                  Why free
                </div>
                <p className="mt-2 text-[13.5px] text-black/75 leading-relaxed">
                  Because pitching from a template is useless, and doing real
                  work upfront is the best filter we have for the clients we
                  want. Some of the brands we audit hire us. Some take the
                  report and execute in-house. Some walk away. Every one of
                  them leaves with more insight into their AI visibility than
                  99% of their competitors will ever have.
                </p>
              </div>

              <div className="mt-8">
                <LinkButton
                  href={BOOKING_URL}
                  variant="light"
                  size="lg"
                  arrow
                  className="!bg-black !text-white hover:!bg-black/90"
                >
                  Book a demo — audit included
                </LinkButton>
              </div>
            </div>

            <div className="lg:col-span-7">
              <AuditReportPreview />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
