import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/PageHero";
import { LinkButton } from "@/components/ui/button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BOOKING_URL } from "@/lib/copy";

export const metadata = {
  title: "Solutions",
  description: "AEO, shaped around the team that owns it.",
};

const SOLUTIONS = [
  {
    id: "aeo",
    eyebrow: "For AEO Teams",
    title: "Senior strategy + production leverage",
    body:
      "You already have AEO on someone's plate. We act as the senior strategy layer and the production engine. You own direction; we run measurement, produce content, and report on lift. Your team gets leverage without hiring.",
    keywords: ["Strategy layer", "Production engine", "Weekly measurement"],
    big: true,
  },
  {
    id: "content",
    eyebrow: "For Content Teams",
    title: "The AEO intelligence layer on top of your calendar",
    body:
      "Content is already producing work and you want it to win AEO. We plug into your editorial calendar, add the AEO intelligence layer, and either produce new content or optimize what you're already making.",
    keywords: ["Editorial integration", "AEO intelligence", "Optimization"],
  },
  {
    id: "pr",
    eyebrow: "For PR & Brand Teams",
    title: "Authority, citations, narrative architecture",
    body:
      "Your win condition is brand narrative in AI. We focus the engagement on the authority layer — third-party placements, expert positioning, media citations, and the narrative architecture that shows up when AI describes your category.",
    keywords: ["Citations", "Placements", "Narrative"],
  },
  {
    id: "leaders",
    eyebrow: "For In-House Marketing Leaders",
    title: "AEO as a managed function — no ramp",
    body:
      "You own the full marketing org and want AEO as a function. We run it end-to-end as a managed service — measurement, strategy, content engine, reporting — without the six-month build-out.",
    keywords: ["End-to-end", "Managed service", "No six-month ramp"],
  },
  {
    id: "agencies",
    eyebrow: "For Agencies (white-label)",
    title: "White-label AEO, under your brand",
    body:
      "You run a marketing or SEO agency and your clients are asking about AEO. We white-label measurement and content production so you can offer AEO without building the capability in-house.",
    keywords: ["White-label", "Measurement + content", "Your brand"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            AEO, shaped around the team
            <br />
            <span className="text-gradient-accent">that owns it.</span>
          </>
        }
        subtitle="Every engagement is built around the team responsible for the outcome. Here's how we work with different owners."
      >
        <LinkButton href={BOOKING_URL} variant="primary" size="lg" arrow>
          Book a demo
        </LinkButton>
      </PageHero>

      <section className="py-24 border-t border-[color:var(--line)]">
        <Container size="wide">
          <div className="grid lg:grid-cols-6 gap-4">
            {SOLUTIONS.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                className={cn(
                  "card-border p-7 sm:p-9 relative overflow-hidden transition-all hover:bg-white/[0.02]",
                  s.big ? "lg:col-span-6" : "lg:col-span-3"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{s.eyebrow}</span>
                  <span className="mono text-[10.5px] text-[color:var(--ink-mute)]">
                    0{i + 1}
                  </span>
                </div>

                <h2
                  className={cn(
                    "mt-5 font-display tracking-tight",
                    s.big
                      ? "text-[32px] sm:text-[40px] leading-[1.05]"
                      : "text-[22px] leading-snug"
                  )}
                >
                  {s.title}
                </h2>

                <p
                  className={cn(
                    "mt-4 leading-relaxed text-[color:var(--ink-dim)]",
                    s.big ? "text-[15.5px] max-w-2xl" : "text-[14px]"
                  )}
                >
                  {s.body}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-1.5">
                  {s.keywords.map((k) => (
                    <span
                      key={k}
                      className="mono text-[10.5px] rounded-full bg-white/5 px-2 py-0.5 ring-1 ring-inset ring-white/10 text-[color:var(--ink-dim)]"
                    >
                      {k}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <LinkButton
                    href={BOOKING_URL}
                    variant={s.big ? "primary" : "secondary"}
                    size="sm"
                  >
                    Book a demo <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </LinkButton>
                </div>

                {s.big && (
                  <div
                    aria-hidden
                    className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,107,53,0.18),transparent_65%)] blur-3xl pointer-events-none"
                  />
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
