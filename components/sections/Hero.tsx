"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LiveScanPanel } from "@/components/mockups/LiveScanPanel";
import { BOOKING_URL, MODELS } from "@/lib/copy";
import { ModelIcon, ModelTile } from "@/components/mockups/ModelIcon";

export function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-20 overflow-hidden noise">
      <div aria-hidden className="absolute inset-0 -z-10 hero-glow mask-radial-fade" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-radial-fade opacity-60" />

      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Eyebrow>Answer Engine Optimization</Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="headline mt-4 text-[34px] sm:text-[44px] md:text-[54px] lg:text-[64px] leading-[1.04] tracking-tight"
            >
              Be the answer on{" "}
              <span className="inline-flex items-center gap-1.5 align-baseline">
                <ModelBadges />
              </span>
              <span className="text-gradient-accent">ChatGPT</span>,{" "}
              <span className="text-gradient-accent">Claude</span>,{" "}
              <span className="text-gradient-accent">Perplexity</span>,{" "}
              <span className="text-gradient-accent">Gemini</span>, and{" "}
              <span className="text-gradient-accent">Copilot</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 text-[15.5px] sm:text-[17px] leading-relaxed text-[color:var(--ink-dim)] max-w-xl"
            >
              Your customers are asking ChatGPT and Claude which brand to buy.
              If AI doesn&apos;t name you, they buy from someone else.
              <br />
              <br />
              We get your brand named in those answers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3"
            >
              <LinkButton
                href={BOOKING_URL}
                variant="primary"
                size="lg"
                arrow
                className="w-full sm:w-auto justify-center"
              >
                Book a demo
              </LinkButton>
              <LinkButton
                href="/platform"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto justify-center"
              >
                See how it works
              </LinkButton>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-5 text-[12.5px] text-[color:var(--ink-mute)] max-w-lg"
            >
              Book a demo and we&apos;ll send you a free report showing how often
              AI recommends your brand. Yours to keep.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34 }}
              className="mt-8 flex items-center gap-3 flex-wrap"
            >
              <span className="mono text-[11.5px] uppercase tracking-[0.14em] text-[color:var(--ink-mute)]">
                Tracked across
              </span>
              <div className="flex items-center gap-2.5">
                {MODELS.map((m) => (
                  <ModelTile
                    key={m.id}
                    id={m.id}
                    color={m.color}
                    size={40}
                    rounded="xl"
                  />
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <LiveScanPanel />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function ModelBadges() {
  return (
    <span
      aria-hidden
      className="hidden xl:inline-flex -space-x-2 mr-2 align-[-0.25em]"
    >
      {MODELS.map((m) => (
        <span
          key={m.id}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-[color:var(--bg)]"
          style={{ background: `${m.color}22`, color: m.color }}
        >
          <ModelIcon id={m.id} className="h-4 w-4" />
        </span>
      ))}
    </span>
  );
}
