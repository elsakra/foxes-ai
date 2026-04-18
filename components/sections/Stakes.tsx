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
        <div className="text-center">
          <Eyebrow>The stakes</Eyebrow>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
          className="headline mt-5 text-center text-balance text-[28px] sm:text-[38px] md:text-[48px] lg:text-[56px] leading-[1.12] tracking-tight max-w-[min(100%,40rem)] mx-auto px-2"
        >
          <span className="text-[color:var(--ink)]">
            Your customers are asking AI{" "}
            <br className="sm:hidden" />
            who to buy from.
          </span>
          <span className="mt-3 block text-[color:var(--ink-dim)]">
            Is it telling them about you?
          </span>
        </motion.h2>

        <div className="mt-8 max-w-2xl mx-auto space-y-4 text-center text-[15.5px] leading-relaxed text-[color:var(--ink-dim)] px-2">
          <p>
            Every day, thousands of people in your market type a question into
            ChatGPT, Claude, or Perplexity. The AI gives them two or three brands
            to check out.
          </p>
          <p>
            If yours isn&apos;t one of them, you lose the customer before you even
            knew they existed.
          </p>
          <p>Most brands have no idea how often this is happening.</p>
        </div>

        <div className="mt-8 flex justify-center px-4">
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

        <div className="mt-16 sm:mt-20">
          <div className="mb-4 eyebrow text-center">Live · real prompts, real models</div>
          <BuyerQuestionStream />
        </div>
      </Container>
    </section>
  );
}
