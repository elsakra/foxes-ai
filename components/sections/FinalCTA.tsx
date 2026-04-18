"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/copy";

export function FinalCTA() {
  return (
    <section className="relative py-32 border-t border-[color:var(--line)] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(255,107,53,0.22),transparent_70%)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid-fine opacity-40 mask-radial-fade" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="headline text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-[1.04] tracking-tight">
            Find out where your brand stands in{" "}
            <span className="text-gradient-accent">AI answers</span>.
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-[color:var(--ink-dim)] max-w-2xl mx-auto px-2">
            Book a 30-minute call. We&apos;ll audit your brand before we meet and
            walk you through everything on the call. You keep the full report.
            No strings.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 px-4">
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
          </div>
          <p className="mt-5 text-[12.5px] text-[color:var(--ink-mute)]">
            Custom audit included · No pitch decks · No pricing games
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
