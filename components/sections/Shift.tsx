"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LinkButton } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/copy";

const ERAS = [
  { year: "2005", title: "Search engines", sub: "Own Google's blue links" },
  { year: "2012", title: "Content marketing", sub: "Inbound dominates" },
  { year: "2015", title: "Social", sub: "Paid + creator-led reach" },
  { year: "2026", title: "Generative AI", sub: "Recommendations, not just links" },
];

export function Shift() {
  return (
    <section className="relative py-28 border-t border-[color:var(--line)]">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Eyebrow>Why this matters now</Eyebrow>
            <h2 className="headline mt-4 text-[28px] sm:text-[36px] md:text-[42px] leading-[1.08] tracking-tight">
              The brands that figured out Google in 2005 won the next decade.
              AI is the next one.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-5 text-[15.5px] leading-relaxed text-[color:var(--ink-dim)]">
              <p>
                Every few years, the way people find brands changes. First
                Google. Then review sites. Then social media. Now AI.
              </p>
              <p>
                Every time it changes, a handful of brands move fast and become
                the go-to names. Everyone else spends years trying to catch up.
              </p>
              <p className="text-[color:var(--ink)]">
                AI picks favorites. Once it starts recommending a brand, it
                keeps recommending them. The longer you wait, the harder it is
                to become one of those names.
              </p>
              <p>
                Starting now is a lot easier than starting in six months.
              </p>
            </div>

            <div className="mt-10">
              <LinkButton href={BOOKING_URL} variant="secondary" arrow>
                Book a demo
              </LinkButton>
            </div>
          </div>
        </div>

        {/* Era timeline */}
        <div className="mt-20 relative">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[18px] h-px bg-gradient-to-r from-transparent via-[color:var(--line-strong)] to-transparent"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ERAS.map((era, i) => (
              <motion.div
                key={era.year}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="relative"
              >
                <div className="relative flex items-center gap-2">
                  <span
                    className={`h-3 w-3 rounded-full ${
                      i === 3 ? "bg-[--accent]" : "bg-white/15"
                    } ring-4 ring-[color:var(--bg)]`}
                  />
                  <span className="mono text-[11.5px] text-[color:var(--ink-dim)]">
                    {era.year}
                  </span>
                </div>
                <div className="mt-5 font-display text-[20px] tracking-tight">
                  {era.title}
                </div>
                <div className="mt-1 text-[12.5px] text-[color:var(--ink-mute)]">
                  {era.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
