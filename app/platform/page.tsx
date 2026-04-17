import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/PageHero";
import { LinkButton } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/copy";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { MentionRateLine } from "@/components/mockups/MentionRateLine";
import { ShareOfVoiceChart } from "@/components/mockups/ShareOfVoiceChart";
import { ContentPipelineBoard } from "@/components/mockups/ContentPipelineBoard";
import { MODELS } from "@/lib/copy";
import { ModelIcon } from "@/components/mockups/ModelIcon";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Platform · How it works",
  description:
    "Four workstreams. One repeating loop. Your mention rate, climbing.",
};

const LOOP = [
  {
    num: "01",
    t: "Measure",
    b: "We map the real buyer questions in your category and run them across ChatGPT, Claude, Perplexity, Gemini, and Copilot. Weekly. We log every answer, every competitor mention, every shift.",
  },
  {
    num: "02",
    t: "Prioritize",
    b: "We rank your gaps by buyer intent and fix difficulty. You get a plan — what to publish, what to earn, what to optimize, in what order.",
  },
  {
    num: "03",
    t: "Produce",
    b: "We produce the content — comparison pages, long-form, help docs, Reddit, video, third-party placements. Under your brand, through your review.",
  },
  {
    num: "04",
    t: "Report",
    b: "Every week, one number: did your mention rate move. We report honestly, iterate fast, and kill what isn't working.",
  },
];

const STACK = [
  {
    id: "measurement",
    title: "Measurement",
    items: [
      {
        t: "Live LLM queries",
        b: "Real ChatGPT, Claude, Perplexity, Gemini, and Copilot. Never SERP proxies. Weekly standard, daily for enterprise.",
      },
      {
        t: "Custom question sets",
        b: "Tailored to your category, ICP, and funnel stage. Built on the demo audit, refined through the first 90 days.",
      },
      {
        t: "Competitor benchmarking",
        b: "Your top 5–10 rivals tracked on every question alongside you. Share of answer, not just presence.",
      },
      {
        t: "Dashboard",
        b: "Live access for your team. Weekly email digest. Monthly strategy review. Quarterly leadership review.",
      },
    ],
  },
  {
    id: "content",
    title: "Content engine",
    items: [
      {
        t: "Long-form and comparison pages",
        b: "The format models cite most across most B2B categories. Researched, written, published under your brand.",
      },
      {
        t: "Reddit and niche platforms",
        b: "Where models actually learn your category's conventional wisdom. Done authentically, not spammy.",
      },
      {
        t: "Help docs and knowledge base",
        b: "Often the highest-leverage content nobody invests in. We find the questions, we write the answers.",
      },
      {
        t: "Video and YouTube",
        b: "For categories where models lean on video. Scripts, briefs, optimization — ready for your team or ours to produce.",
      },
      {
        t: "Third-party placements",
        b: "G2, Capterra, industry publications, podcasts, expert roundups. Earned, not bought.",
      },
    ],
  },
  {
    id: "authority",
    title: "Authority",
    items: [
      {
        t: "Citation engineering",
        b: "Models have favorite sources. We identify them for your category and get your brand into them.",
      },
      {
        t: "Structured data & technical AEO",
        b: "Schema, markup, crawl posture for AI agents. The technical floor that amplifies everything above it.",
      },
      {
        t: "Brand mention monitoring",
        b: "Where your brand shows up across the web and how to pull more of those mentions into surfaces AI cites.",
      },
    ],
  },
  {
    id: "reporting",
    title: "Reporting",
    items: [
      {
        t: "Weekly digest",
        b: "What moved, what didn't, what shipped, what's next. Five minutes to read.",
      },
      {
        t: "Monthly report",
        b: "Mention rate change across every tracked question. Competitive shifts. Content attribution.",
      },
      {
        t: "Quarterly review",
        b: "Strategic pivots, category changes, leadership-level narrative.",
      },
    ],
  },
];

const TIMELINE = [
  {
    phase: "Days 1–14",
    title: "Kickoff",
    body:
      "Tracked question set locked. Baseline scan complete across all five models. Competitor benchmark locked. 90-day content calendar approved. You meet every person on the account.",
  },
  {
    phase: "Days 15–45",
    title: "First wave",
    body:
      "6–12 content assets shipped (volume depends on engagement tier). Weekly scans begin showing early movement. First third-party placements secured.",
  },
  {
    phase: "Days 46–90",
    title: "Second wave",
    body:
      "Next wave of content live. Mid-engagement strategy review. Measurable mention-rate lift on 30%+ of tracked gaps (our target). Roadmap for days 91–180 agreed.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title={
          <>
            Four workstreams. One repeating loop.
            <br />
            <span className="text-gradient-accent">Your mention rate, climbing.</span>
          </>
        }
        subtitle="Here's what happens from the day you book a demo through month twelve of an ongoing engagement."
      >
        <div className="flex items-center gap-3 flex-wrap">
          <LinkButton href={BOOKING_URL} variant="primary" size="lg" arrow>
            Book a demo
          </LinkButton>
          <div className="flex items-center gap-1.5 text-[11.5px] mono text-[color:var(--ink-mute)]">
            Across
            {MODELS.map((m) => (
              <span
                key={m.id}
                className="inline-flex h-5 w-5 items-center justify-center rounded-md"
                style={{ background: `${m.color}18`, color: m.color }}
              >
                <ModelIcon id={m.id} className="h-3 w-3" />
              </span>
            ))}
          </div>
        </div>
      </PageHero>

      {/* The loop */}
      <section className="py-24 border-t border-[color:var(--line)]">
        <Container size="wide">
          <Eyebrow>The loop</Eyebrow>
          <h2 className="headline mt-4 text-[32px] sm:text-[44px] leading-[1.05] tracking-tight max-w-3xl">
            Measure, prioritize, produce, report. Then do it again.
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {LOOP.map((item, i) => (
              <div
                key={item.num}
                className="card-border p-6 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="mono text-[11px] text-[color:var(--ink-mute)]">
                    {item.num}
                  </span>
                  <span className="h-0.5 w-10 bg-gradient-to-r from-[--accent] to-transparent" />
                </div>
                <h3 className="mt-4 font-display text-[22px] tracking-tight">
                  {item.t}
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-[color:var(--ink-dim)]">
                  {item.b}
                </p>
                {i < 3 && (
                  <div
                    aria-hidden
                    className="hidden lg:block absolute -right-2 top-1/2 h-px w-4 bg-gradient-to-r from-[color:var(--line-strong)] to-transparent"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-elev)] p-6 sm:p-8">
            <MentionRateLine title="One number: your mention rate, tracked every week" />
          </div>
        </Container>
      </section>

      {/* The stack */}
      <section className="py-24 border-t border-[color:var(--line)] bg-[color:var(--bg-elev)]/40">
        <Container size="wide">
          <Eyebrow>The stack</Eyebrow>
          <h2 className="headline mt-4 text-[32px] sm:text-[44px] leading-[1.05] tracking-tight max-w-3xl">
            Four systems, one operating team.
          </h2>

          <div className="mt-12 space-y-16">
            {STACK.map((group, gi) => (
              <div
                key={group.id}
                id={group.id}
                className="grid lg:grid-cols-12 gap-8"
              >
                <div className="lg:col-span-3">
                  <div className="sticky top-24">
                    <span className="mono text-[11px] text-[color:var(--ink-mute)]">
                      0{gi + 1}
                    </span>
                    <h3 className="mt-2 font-display text-[28px] tracking-tight">
                      {group.title}
                    </h3>
                  </div>
                </div>
                <div className="lg:col-span-9 grid sm:grid-cols-2 gap-4">
                  {group.items.map((it) => (
                    <div
                      key={it.t}
                      className="card-border p-5 hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="text-[14.5px] font-medium tracking-tight">
                        {it.t}
                      </div>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-[color:var(--ink-dim)]">
                        {it.b}
                      </p>
                    </div>
                  ))}

                  {/* Per-group mockup accent */}
                  {group.id === "measurement" && (
                    <div className="card-border sm:col-span-2 p-5">
                      <ShareOfVoiceChart title="Benchmarking · one of your tracked prompts" />
                    </div>
                  )}
                  {group.id === "content" && (
                    <div className="card-border sm:col-span-2 p-5">
                      <div className="eyebrow mb-3">Content pipeline · live</div>
                      <ContentPipelineBoard />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* First 90 days */}
      <section className="py-24 border-t border-[color:var(--line)]">
        <Container size="wide">
          <Eyebrow>The first 90 days</Eyebrow>
          <h2 className="headline mt-4 text-[32px] sm:text-[44px] leading-[1.05] tracking-tight max-w-3xl">
            What happens in month one, month two, month three.
          </h2>
          <div className="mt-14 relative">
            <div
              aria-hidden
              className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-[--accent] via-[color:var(--line-strong)] to-transparent"
            />
            <div className="space-y-8">
              {TIMELINE.map((t, i) => (
                <div key={t.phase} className="grid grid-cols-12 gap-6 pl-16 relative">
                  <span
                    className={cn(
                      "absolute left-4 top-2 h-4 w-4 rounded-full ring-4 ring-[color:var(--bg)]",
                      i === 0 ? "bg-[--accent]" : "bg-white/15"
                    )}
                  />
                  <div className="col-span-12 sm:col-span-3 mono text-[12px] text-[color:var(--ink-dim)] pt-2">
                    {t.phase}
                  </div>
                  <div className="col-span-12 sm:col-span-9 card-border p-6">
                    <h3 className="font-display text-[22px] tracking-tight">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--ink-dim)]">
                      {t.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
