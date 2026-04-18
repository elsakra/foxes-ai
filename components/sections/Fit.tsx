"use client";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LinkButton } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/copy";
import { Check } from "lucide-react";

const ITEMS = [
  "You sell B2B and your buyers research before they buy",
  "You have a real product, real customers, and substance worth being cited for",
  "You rank fine on Google, but you're nowhere in AI answers — and you can feel buyers moving to AI",
  "You'd rather hire a team that ships than build one from scratch",
];

export function Fit() {
  return (
    <section className="relative py-28 border-t border-[color:var(--line)]">
      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>Fit</Eyebrow>
            <h2 className="headline mt-4 text-[30px] sm:text-[40px] md:text-[46px] leading-[1.05] tracking-tight">
              Best fit if:
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[color:var(--ink-dim)] max-w-xl">
              We say no to projects where we can&apos;t move the needle. The
              demo call is how we both figure that out — with real data, not
              guesses.
            </p>
            <div className="mt-8">
              <LinkButton
                href={BOOKING_URL}
                variant="primary"
                size="lg"
                arrow
                className="w-full sm:w-auto justify-center"
              >
                Book a demo
              </LinkButton>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-3">
              {ITEMS.map((t, i) => (
                <li
                  key={i}
                  className="card-border p-5 flex items-start gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[--accent]/15 text-[--accent]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-[color:var(--ink)]">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
