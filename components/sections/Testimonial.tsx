"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Quote } from "lucide-react";

export function Testimonial() {
  return (
    <section className="relative py-28 border-t border-[color:var(--line)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-border relative p-10 sm:p-14"
        >
          <Quote className="h-8 w-8 text-[--accent] opacity-60" />
          <blockquote className="mt-6 font-display text-[20px] sm:text-[26px] md:text-[30px] leading-[1.3] tracking-tight max-w-4xl">
            &ldquo;Before Foxes, we had no idea whether AI was recommending us
            or a competitor. Now we watch our name show up more every week —
            and we know exactly why.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[--accent-soft] to-[--accent]" />
            <div>
              <div className="text-[14px] text-[color:var(--ink)]">
                [Client name, title]
              </div>
              <div className="text-[12.5px] text-[color:var(--ink-mute)]">
                [Company] · Customer since 2026
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
