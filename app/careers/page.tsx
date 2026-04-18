import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LinkButton } from "@/components/ui/button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BRAND } from "@/lib/copy";
import { ArrowUpRight, Users, Wrench, BookOpen, BarChart3 } from "lucide-react";

export const metadata = {
  title: "Careers",
  description:
    "Small, senior team. Building the AEO agency from scratch. Open roles in strategy, content, technical SEO, and research.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers | Foxes.ai",
    description:
      "Small, senior team. Building the AEO agency from scratch. Open roles in strategy, content, technical SEO, and research.",
    url: "/careers",
  },
};

const ROLES = [
  {
    title: "Senior AEO Strategist",
    type: "Full-time · Remote (US)",
    body:
      "Own the strategy layer for 3–5 client accounts. Map buyer questions, prioritize gaps, drive weekly decisions about what to ship. 7+ years in B2B marketing, SEO, or content strategy. You're the kind of person who has strong opinions, is happy to be wrong, and ships the work either way.",
    icon: Users,
  },
  {
    title: "Content Lead — Long-form & Comparisons",
    type: "Full-time · Remote (US)",
    body:
      "Lead production on the content formats AI cites most: comparison pages, long-form answers, help docs. You'll edit and write across 5–10 client brands at a time, mentoring our junior writers and partnering with the strategists. 5+ years writing for B2B audiences, with a portfolio of work that has actually moved rankings or revenue.",
    icon: BookOpen,
  },
  {
    title: "Technical AEO Engineer",
    type: "Full-time · Remote (US)",
    body:
      "The person who makes sure every client site is perfectly readable to AI crawlers. Schema, structured data, crawl posture, JSON-LD, Next.js and Webflow integrations. You'll work across our whole client base. Experienced technical SEOs welcome — but this is specifically about AI surfaces, not just Google.",
    icon: Wrench,
  },
  {
    title: "Research Analyst",
    type: "Full-time · Remote (US)",
    body:
      "Our research publication is the highest-leverage marketing we do. Build the quarterly category reports, the State-of-AEO by vertical, and the deep teardowns that explain why specific brands are winning (or losing) in AI answers. Strong quantitative instincts, clean prose, and a point of view.",
    icon: BarChart3,
  },
];

const PRINCIPLES = [
  {
    t: "Small, senior team",
    b: "We stay small on purpose. Everyone on the team has shipped work that moved the needle somewhere else first.",
  },
  {
    t: "Opinionated, not prescriptive",
    b: "We have a house point of view. We expect you to disagree with it when you think we're wrong.",
  },
  {
    t: "Calm, no cargo-culted urgency",
    b: "Deep work matters more than Slack response time. Weekly rhythms, quarterly goals, protected heads-down blocks.",
  },
  {
    t: "Fully remote. Anywhere in the US.",
    b: "We meet in person a few times a year. Otherwise, work from wherever your best work happens.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Small, senior team.
            <br />
            <span className="text-gradient-accent">
              Building the AEO agency from scratch.
            </span>
          </>
        }
        subtitle="We're a new kind of marketing agency for a new layer of the internet. If this is the decade you want to help invent a discipline, read on."
      >
        <LinkButton
          href={`mailto:careers@${BRAND.domain}?subject=Careers%20inquiry`}
          variant="primary"
          size="lg"
          arrow
          className="w-full sm:w-auto justify-center"
        >
          Email careers@{BRAND.domain}
        </LinkButton>
      </PageHero>

      {/* How we work */}
      <section className="py-20 border-t border-[color:var(--line)] bg-[color:var(--bg-elev)]/40">
        <Container size="wide">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="headline mt-4 text-[28px] sm:text-[36px] md:text-[42px] leading-[1.05] tracking-tight max-w-3xl">
            Four things we say out loud so you know what you&apos;re walking
            into.
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            {PRINCIPLES.map((p, i) => (
              <div key={p.t} className="card-border p-7">
                <div className="flex items-center gap-3">
                  <span className="mono text-[11px] text-[color:var(--ink-mute)]">
                    0{i + 1}
                  </span>
                  <span className="h-0.5 w-8 bg-gradient-to-r from-[--accent] to-transparent" />
                </div>
                <h3 className="mt-4 font-display text-[20px] tracking-tight">
                  {p.t}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--ink-dim)]">
                  {p.b}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Open roles */}
      <section className="py-24 border-t border-[color:var(--line)]">
        <Container size="wide">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <Eyebrow>Open roles</Eyebrow>
              <h2 className="headline mt-4 text-[28px] sm:text-[36px] md:text-[42px] leading-[1.05] tracking-tight">
                Currently hiring.
              </h2>
            </div>
            <span className="mono text-[11px] text-[color:var(--ink-mute)]">
              Updated monthly · Apply via email
            </span>
          </div>

          <div className="mt-10 space-y-4">
            {ROLES.map((r) => (
              <article
                key={r.title}
                className="card-border p-6 sm:p-7 hover:bg-white/[0.02] transition-colors group"
              >
                <div className="flex items-start gap-5">
                  <span className="hidden sm:inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[--accent]/10 text-[--accent] ring-1 ring-inset ring-[--accent]/20">
                    <r.icon className="h-4 w-4" />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-6 flex-wrap">
                      <h3 className="font-display text-[20px] sm:text-[22px] tracking-tight">
                        {r.title}
                      </h3>
                      <span className="mono text-[11px] text-[color:var(--ink-mute)]">
                        {r.type}
                      </span>
                    </div>
                    <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--ink-dim)] max-w-3xl">
                      {r.body}
                    </p>
                    <div className="mt-5">
                      <a
                        href={`mailto:careers@${BRAND.domain}?subject=${encodeURIComponent(
                          `Application: ${r.title}`
                        )}`}
                        className="inline-flex items-center gap-1.5 text-[13.5px] text-[color:var(--ink)] underline underline-offset-4 hover:text-[--accent]"
                      >
                        Apply by email
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 card-border p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <div className="eyebrow">Don&apos;t see your role?</div>
              <p className="mt-2 text-[14.5px] text-[color:var(--ink-dim)] max-w-2xl">
                If you&apos;d be great on this team and we&apos;re not
                currently advertising the role you want, tell us anyway. We
                hire early when we meet the right people.
              </p>
            </div>
            <LinkButton
              href={`mailto:careers@${BRAND.domain}?subject=General%20interest`}
              variant="secondary"
              size="md"
              arrow
              className="w-full sm:w-auto justify-center"
            >
              Get in touch
            </LinkButton>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
