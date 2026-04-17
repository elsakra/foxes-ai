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
  { year: "2026", title: "Generative AI", sub: "The answer is the shortlist" },
];

export function Shift() {
  return (
    <section className="relative py-28 border-t border-[color:var(--line)]">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Eyebrow>Why this matters now</Eyebrow>
            <h2 className="headline mt-4 text-[32px] sm:text-[42px] leading-[1.08] tracking-tight">
              The brands that figured out SEO in 2005 owned a decade. AEO is
              the same inflection point.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-5 text-[15.5px] leading-relaxed text-[color:var(--ink-dim)]">
              <p>
                Every few years the layer between your buyer and their decision
                shifts. Search engines. Review sites. Social. Now, generative
                AI.
              </p>
              <p>
                Each shift rewards the brands that invest early and become the
                default answer. Each one punishes the ones waiting for it to
                &ldquo;feel real&rdquo; first.
              </p>
              <p className="text-[color:var(--ink)]">
                AI answers aren&apos;t random. Models lean on a relatively
                stable set of signals — sources they&apos;ve seen cited,
                formats they&apos;ve been trained to trust, platforms
                they&apos;ve been taught to weight. Once a brand gets baked
                into those signals for a category, they keep getting named.
                The compounding advantage starts the day you begin.
              </p>
              <p>
                We build that compounding advantage for our clients. Starting
                right now beats starting in six months.
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
