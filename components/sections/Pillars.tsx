"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LinkButton } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/copy";
import { ShareOfVoiceChart } from "@/components/mockups/ShareOfVoiceChart";
import { MentionRateLine } from "@/components/mockups/MentionRateLine";
import { ContentPipelineBoard } from "@/components/mockups/ContentPipelineBoard";
import { MODELS } from "@/lib/copy";
import { ModelIcon } from "@/components/mockups/ModelIcon";
import { cn } from "@/lib/utils";

export function Pillars() {
  return (
    <section className="relative py-28 border-t border-[color:var(--line)]">
      <Container size="wide">
        <div className="max-w-3xl">
          <Eyebrow>End-to-end, done for you</Eyebrow>
          <h2 className="headline mt-4 text-[30px] sm:text-[40px] md:text-[46px] leading-[1.05] tracking-tight">
            Own the AI answer. We handle every surface.
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-[color:var(--ink-dim)] max-w-xl">
            Getting named by AI isn&apos;t one thing. It&apos;s content the
            models cite, platforms they trust, signals they read, and a weekly
            check that shows what&apos;s working. We run all of it.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-6 gap-4">
          {/* Measurement — wide tile */}
          <PillarCard
            title="Measurement"
            eyebrow="01"
            body="We ask the real ChatGPT, Claude, Perplexity, Gemini, and Copilot the questions your buyers actually type — not recycled Google results. Weekly scans, full competitor benchmarking, and a clear number: how often AI names you."
            className="lg:col-span-4"
            accent
          >
            <div className="mt-6 rounded-xl border border-[color:var(--line)] bg-black/20 p-4">
              <ShareOfVoiceChart title="Your category · share of AI answers" />
            </div>
          </PillarCard>

          {/* Authority */}
          <PillarCard
            title="Authority"
            eyebrow="03"
            body="We build the trusted sources AI pulls from — G2, Capterra, industry publications, podcasts, expert roundups — so when a model goes looking for a reliable name, it finds you."
            className="lg:col-span-2"
          >
            <div className="mt-6 space-y-2">
              {[
                "G2 — category page, optimized for AI answers",
                "Capterra — side-by-side breakdown",
                "Reddit — r/marketing top-cited reply",
                "Podcast — Modern GTM · ep. 142",
                "Expert roundup — Search Engine Land",
              ].map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-lg border border-[color:var(--line)] bg-white/[0.02] px-3 py-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[--success]" />
                  <span className="text-[12px] text-[color:var(--ink-dim)] truncate">{t}</span>
                </div>
              ))}
            </div>
          </PillarCard>

          {/* Content */}
          <PillarCard
            title="Content"
            eyebrow="02"
            body="We produce the comparison pages, long-form answers, help docs, Reddit replies, YouTube scripts, and third-party write-ups that models actually pull from. Under your brand, through your review."
            className="lg:col-span-3"
          >
            <div className="mt-6">
              <ContentPipelineBoard />
            </div>
          </PillarCard>

          {/* Reporting */}
          <PillarCard
            title="Reporting"
            eyebrow="04"
            body="One number that matters: are you showing up more often. We report it weekly. Flat months get the same honest conversation as up months."
            className="lg:col-span-3"
            accent
          >
            <div className="mt-6">
              <MentionRateLine title="Weekly share of AI answers · Acme" />
            </div>
          </PillarCard>
        </div>

        <div className="mt-12 flex items-center gap-3 flex-wrap">
          <LinkButton href={BOOKING_URL} variant="primary" size="md" arrow>
            Book a demo
          </LinkButton>
          <LinkButton href="/platform" variant="ghost" size="md">
            Explore the platform →
          </LinkButton>
          <div className="ml-auto flex items-center gap-2 text-[11.5px] mono text-[color:var(--ink-mute)]">
            <span className="mr-1">Running across</span>
            {MODELS.map((m) => (
              <span
                key={m.id}
                title={m.name}
                className="inline-flex h-7 w-7 items-center justify-center rounded-lg ring-1 ring-inset"
                style={{
                  background: `${m.color}14`,
                  boxShadow: `inset 0 0 0 1px ${m.color}28`,
                  color: m.color,
                }}
              >
                <ModelIcon id={m.id} className="h-3.5 w-3.5" />
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function PillarCard({
  title,
  eyebrow,
  body,
  children,
  className,
  accent,
}: {
  title: string;
  eyebrow: string;
  body: string;
  children?: React.ReactNode;
  className?: string;
  accent?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "card-border relative p-6 sm:p-7",
        accent && "bg-gradient-to-b from-[rgba(255,107,53,0.05)] to-transparent",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="eyebrow">{eyebrow}</span>
        <span className="h-0.5 w-10 bg-gradient-to-r from-[--accent] to-transparent" />
      </div>
      <h3 className="mt-4 font-display text-[24px] tracking-tight">{title}</h3>
      <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--ink-dim)] max-w-prose">
        {body}
      </p>
      {children}
    </motion.div>
  );
}
