import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/PageHero";
import { LinkButton } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/copy";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { MentionRateLine } from "@/components/mockups/MentionRateLine";
import { ShareOfVoiceChart } from "@/components/mockups/ShareOfVoiceChart";
import { CheckCircle2, Clock } from "lucide-react";

export const metadata = {
  title: "Results",
  description:
    "The only number that matters: are you showing up more often in AI answers.",
  alternates: { canonical: "/results" },
  openGraph: {
    title: "Results | Foxes.ai",
    description:
      "The only number that matters: are you showing up more often in AI answers.",
    url: "/results",
  },
};

const METHOD = [
  {
    t: "Baseline",
    b: "On kickoff, we run your full set of tracked questions across all five AIs. This is the number every future scan is compared against.",
  },
  {
    t: "Weekly tracking",
    b: "Every seven days, we re-run the full scan. Every answer logged. Every competitor mention recorded. Every shift timestamped.",
  },
  {
    t: "Attribution",
    b: "Every piece of content we ship is tagged to the questions it's designed to influence. When the numbers move, we know what moved them.",
  },
  {
    t: "Reporting",
    b: "You see the numbers every week. Flat or down months get the same honest conversation as up months. No cherry-picking.",
  },
];

const OUTCOMES = [
  {
    range: "30–45 days",
    title: "First measurable lift in how often you're named",
  },
  {
    range: "90 days",
    title: "Meaningful movement on 30%+ of tracked questions",
  },
  {
    range: "6–9 months",
    title: "Share of AI answers competitive with category leaders",
  },
  {
    range: "9–18 months",
    title: "The default answer on your priority questions",
  },
];

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title={
          <>
            The only number that matters:
            <br />
            <span className="text-gradient-accent">are you being named more often.</span>
          </>
        }
        subtitle="Every project is measured against one thing — how often your brand gets named by ChatGPT, Claude, Perplexity, Gemini, and Copilot on the questions your buyers actually ask."
      >
        <LinkButton
          href={BOOKING_URL}
          variant="primary"
          size="lg"
          arrow
          className="w-full sm:w-auto justify-center"
        >
          Book a demo
        </LinkButton>
      </PageHero>

      {/* Live chart */}
      <section className="py-24 border-t border-[color:var(--line)]">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-5">
              <Eyebrow>How we measure</Eyebrow>
              <h2 className="headline mt-4 text-[28px] sm:text-[36px] leading-[1.08] tracking-tight">
                One number, tracked honestly.
              </h2>
              <ul className="mt-8 space-y-5">
                {METHOD.map((m, i) => (
                  <li key={m.t} className="flex gap-4">
                    <span className="mono text-[11px] text-[color:var(--ink-mute)] pt-1">
                      0{i + 1}
                    </span>
                    <div>
                      <div className="text-[15px] font-medium tracking-tight">
                        {m.t}
                      </div>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-[color:var(--ink-dim)] max-w-md">
                        {m.b}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <div className="card-border p-5 sm:p-7">
                <MentionRateLine title="Representative client · 12 weeks" />
              </div>
              <div className="mt-4 card-border p-5 sm:p-7">
                <ShareOfVoiceChart title="Share of AI answers · after working together" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Outcome ranges */}
      <section className="py-24 border-t border-[color:var(--line)] bg-[color:var(--bg-elev)]/40">
        <Container size="wide">
          <Eyebrow>What &ldquo;winning&rdquo; typically looks like</Eyebrow>
          <h2 className="headline mt-4 text-[32px] sm:text-[44px] leading-[1.05] tracking-tight max-w-3xl">
            Real ranges, not guarantees.
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-[color:var(--ink-dim)] max-w-2xl">
            In most B2B categories, typical projects land somewhere in the
            following ranges. How mature your category is, how crowded the
            competition is, and how much content we ship all matter. The demo
            audit sets honest expectations for your brand specifically.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {OUTCOMES.map((o, i) => (
              <div key={o.range} className="card-border p-6">
                <div className="flex items-center gap-2 text-[color:var(--ink-mute)]">
                  <Clock className="h-3.5 w-3.5" />
                  <span className="mono text-[11.5px]">{o.range}</span>
                </div>
                <h3 className="mt-4 font-display text-[18px] leading-snug tracking-tight">
                  {o.title}
                </h3>
                <div className="mt-6 flex items-center gap-2 text-[color:var(--success)]">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="mono text-[11px]">Milestone {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case studies placeholder */}
      <section className="py-24 border-t border-[color:var(--line)]">
        <Container size="wide">
          <Eyebrow>Case studies</Eyebrow>
          <h2 className="headline mt-4 text-[32px] sm:text-[44px] leading-[1.05] tracking-tight max-w-3xl">
            Published as client results materialize.
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-[color:var(--ink-dim)] max-w-2xl">
            Full case studies go up once we have named-client permission.
            Reference calls with current clients can be arranged after the demo
            if it helps your evaluation.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                category: "B2B SaaS",
                before: "Named in 8% of answers",
                after: "37% · #2 on ChatGPT",
                weeks: "Weeks 1–16",
              },
              {
                category: "Health & wellness",
                before: "Invisible on 23 of 24 tracked questions",
                after: "Default answer on 7 priority questions",
                weeks: "Weeks 1–20",
              },
              {
                category: "Fintech",
                before: "Not named on Perplexity at all",
                after: "Tied for #1 with incumbent",
                weeks: "Weeks 1–12",
              },
            ].map((c) => (
              <div
                key={c.category}
                className="card-border p-6 relative overflow-hidden group"
              >
                <div className="eyebrow">{c.category}</div>
                <div className="mt-6 space-y-3">
                  <div>
                    <div className="mono text-[10.5px] text-[color:var(--ink-mute)]">
                      Before
                    </div>
                    <div className="text-[14px] text-[color:var(--ink-dim)]">
                      {c.before}
                    </div>
                  </div>
                  <div>
                    <div className="mono text-[10.5px] text-[color:var(--ink-mute)]">
                      After
                    </div>
                    <div className="text-[15px] font-medium">{c.after}</div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="mono text-[10.5px] text-[color:var(--ink-mute)]">
                    {c.weeks}
                  </span>
                  <span className="mono text-[10.5px] rounded-full bg-white/5 px-2 py-0.5 ring-1 ring-inset ring-white/10 text-[color:var(--ink-mute)]">
                    Case study pending
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
