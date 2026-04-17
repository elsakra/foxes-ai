"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
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
        <Eyebrow>The stakes</Eyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
          className="headline mt-4 text-center text-[38px] sm:text-[56px] lg:text-[72px] leading-[1.02] tracking-tight max-w-5xl mx-auto"
        >
          AI is the new shortlist.
          <br />
          <span className="text-[color:var(--ink-dim)]">
            Brands that aren&apos;t in the answer don&apos;t make it.
          </span>
        </motion.h2>

        <div className="mt-10 max-w-2xl mx-auto text-center text-[15.5px] leading-relaxed text-[color:var(--ink-dim)]">
          ChatGPT recommends a vendor. Claude suggests three competitors.
          Perplexity cites a comparison article your category leader wrote.
          Gemini names the company that sponsored the right Reddit thread six
          months ago.
          <br />
          <br />
          This is happening every day, at scale, for every question your buyers
          ask. Most brands have no idea whether they&apos;re in the answer or
          not — and most will find out too late.
        </div>

        <div className="mt-10 text-center">
          <LinkButton href="/demo" variant="primary" size="lg" arrow>
            Book a demo — we&apos;ll tell you exactly where you stand
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
