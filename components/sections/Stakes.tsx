"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/copy";
import { BuyerQuestionStream } from "@/components/mockups/BuyerQuestionStream";
import { Eyebrow } from "@/components/ui/eyebrow";

export function Stakes() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-40" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)]"
      />

      <Container>
        <div className="flex justify-center">
          <Eyebrow>The stakes</Eyebrow>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
          className="headline mt-4 text-center text-[32px] sm:text-[44px] md:text-[56px] lg:text-[72px] leading-[1.04] tracking-tight max-w-5xl mx-auto"
        >
          AI is the new shortlist.
          <br />
          <span className="text-[color:var(--ink-dim)]">
            If you&apos;re not named, you&apos;re not in the running.
          </span>
        </motion.h2>

        <div className="mt-10 max-w-2xl mx-auto text-center text-[15.5px] leading-relaxed text-[color:var(--ink-dim)] px-2">
          Your buyers are asking ChatGPT, Claude, and Perplexity who to buy
          from. The AI gives them three names. If yours isn&apos;t one of them,
          you never hear about the deal.
          <br />
          <br />
          It&apos;s happening thousands of times a day in your category. Most
          brands have no idea if they&apos;re being recommended or skipped.
        </div>

        <div className="mt-10 flex justify-center px-4">
          <LinkButton
            href={BOOKING_URL}
            variant="primary"
            size="lg"
            arrow
            className="w-full sm:w-auto justify-center whitespace-normal sm:whitespace-nowrap text-center leading-snug"
          >
            <span className="hidden sm:inline">
              Book a demo — see where you stand
            </span>
            <span className="sm:hidden">Book a demo</span>
          </LinkButton>
        </div>

        <div className="mt-20">
          <div className="mb-4 eyebrow text-center">Live · real prompts, real models</div>
          <BuyerQuestionStream />
        </div>
      </Container>
    </section>
  );
}
