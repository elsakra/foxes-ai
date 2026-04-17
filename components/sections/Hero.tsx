"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LiveScanPanel } from "@/components/mockups/LiveScanPanel";
import { BOOKING_URL, MODELS } from "@/lib/copy";
import { ModelIcon } from "@/components/mockups/ModelIcon";

export function Hero() {
  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-20 overflow-hidden noise">
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
              <Eyebrow>The AEO agency</Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="headline mt-4 text-[40px] sm:text-[54px] lg:text-[64px] leading-[1.02] tracking-tight"
            >
              Win the answer in{" "}
              <span className="inline-flex items-center gap-1.5 align-baseline">
                <ModelBadges />
              </span>
              <span className="text-gradient-accent"> ChatGPT</span>,{" "}
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
              Over 400 million people a week ask AI which brand to buy. The ones
              named in the answer win the shortlist. The ones that aren&apos;t
              don&apos;t get a second chance.
              <br />
              <br />
              Foxes.ai is the full-service AEO agency that gets your brand into
              those answers — and keeps you there.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <LinkButton href={BOOKING_URL} variant="primary" size="lg" arrow>
                Book a demo
              </LinkButton>
              <LinkButton href="/platform" variant="secondary" size="lg">
                See how it works
              </LinkButton>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-5 text-[12.5px] text-[color:var(--ink-mute)] max-w-lg"
            >
              Every demo includes a full custom AEO audit of your brand —
              yours to keep, free, whether we ever work together or not.
            </motion.p>
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
  // Tiny overlapping icon stack — sits in the H1 line, pure decoration.
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
