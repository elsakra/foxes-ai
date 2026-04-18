import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { DemoForm } from "@/components/DemoForm";
import { AuditReportPreview } from "@/components/mockups/AuditReportPreview";
import { Check } from "lucide-react";
import { MODELS } from "@/lib/copy";
import { ModelIcon } from "@/components/mockups/ModelIcon";

export const metadata = {
  title: "Book a demo",
  description:
    "30 minutes. A custom audit of how often AI names your brand. Yours to keep.",
  alternates: { canonical: "/demo" },
  openGraph: {
    title: "Book a demo | Foxes.ai",
    description:
      "30 minutes. A custom audit of how often AI names your brand. Yours to keep.",
    url: "/demo",
  },
};

const TRUST = [
  "Custom audit of your brand, included",
  "No pitch decks, no templates",
  "30-minute call, senior strategist",
  "Full report to keep, no obligation",
];

export default function DemoPage() {
  return (
    <>
      <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 overflow-hidden noise">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(255,107,53,0.22),transparent_70%)]"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-40 mask-fade-b" />

        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <Eyebrow>Book a demo</Eyebrow>
              <h1 className="headline mt-4 text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-[1.04] tracking-tight">
                30 minutes. A custom audit of your brand.
                <br />
                <span className="text-gradient-accent">Yours to keep.</span>
              </h1>
              <p className="mt-6 text-[16px] leading-relaxed text-[color:var(--ink-dim)] max-w-xl">
                Tell us who you are and three competitors. We&apos;ll run the
                audit before we meet and walk you through it live.
              </p>

              <ul className="mt-8 space-y-2.5">
                {TRUST.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[--accent]/15 text-[--accent]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-[14px] text-[color:var(--ink)]">{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex items-center gap-2 flex-wrap">
                <span className="mono text-[11px] text-[color:var(--ink-mute)]">
                  Running daily across
                </span>
                {MODELS.map((m) => (
                  <span
                    key={m.id}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--line)] bg-white/[0.02] px-2 py-1 text-[11.5px]"
                  >
                    <span
                      className="inline-flex h-4 w-4 items-center justify-center rounded-sm"
                      style={{ background: `${m.color}18`, color: m.color }}
                    >
                      <ModelIcon id={m.id} className="h-2.5 w-2.5" />
                    </span>
                    <span className="text-[color:var(--ink-dim)]">{m.name}</span>
                  </span>
                ))}
              </div>

              <div className="mt-10 text-[12.5px] text-[color:var(--ink-mute)]">
                Not ready for a demo?{" "}
                <a
                  className="text-[color:var(--ink)] underline underline-offset-4 hover:text-[--accent]"
                  href="mailto:contact@foxes.ai"
                >
                  contact@foxes.ai
                </a>
                <br />
                Lazarus LLC · 30 N Gould St, Sheridan, WY 82801
              </div>
            </div>

            <div className="lg:col-span-6 lg:sticky lg:top-24">
              <DemoForm />
            </div>
          </div>
        </Container>
      </section>

      {/* What you'll actually see */}
      <section className="py-24 border-t border-[color:var(--line)] bg-[color:var(--bg-elev)]/40">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <Eyebrow>Preview</Eyebrow>
              <h2 className="headline mt-4 text-[30px] sm:text-[40px] leading-[1.08] tracking-tight">
                A preview of what lands in your inbox.
              </h2>
              <p className="mt-5 text-[15.5px] leading-relaxed text-[color:var(--ink-dim)] max-w-xl">
                Usually 20–40 pages of custom analysis. The same report our
                paid clients get at kickoff.
              </p>
              <div className="mt-8">
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-1.5 text-[13.5px] text-[color:var(--ink-dim)] hover:text-[color:var(--ink)] underline underline-offset-4"
                >
                  How we build it →
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <AuditReportPreview />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
