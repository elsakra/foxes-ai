"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { AuditReportPreview } from "@/components/mockups/AuditReportPreview";
import { Check } from "lucide-react";
import { BOOKING_URL } from "@/lib/copy";

const ITEMS = [
  "The real questions your customers are asking AI about products like yours",
  "How often AI names you vs. your top competitors",
  "Which competitors are winning and why",
  "The websites AI is pulling its answers from",
  "What to fix first",
  "The first three things we'd do to get you named more often",
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
                className="headline mt-3 text-[30px] sm:text-[40px] md:text-[48px] leading-[1.05] tracking-tight"
              >
                Book a demo.{" "}
                <span className="text-[#B84700]">Get a free report</span> on how
                AI talks about your brand.
              </motion.h2>

              <p className="mt-5 text-[15.5px] leading-relaxed text-black/75 max-w-xl">
                Before our call, we&apos;ll run the same report we normally charge
                clients for. On the call, we&apos;ll walk you through what we
                found. You keep the report either way.
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
                  We&apos;d rather show you real work on your brand than give you
                  a sales pitch. Some people who get the report hire us to do
                  the work. Some take it and do it themselves. Either way, you end
                  up knowing more about how AI talks about your brand than
                  almost any of your competitors.
                </p>
              </div>

              <div className="mt-8">
                <LinkButton
                  href={BOOKING_URL}
                  variant="light"
                  size="lg"
                  arrow
                  className="!bg-black !text-white hover:!bg-black/90 w-full sm:w-auto justify-center"
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
