import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/PageHero";
import { LinkButton } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { MapPin, Building2 } from "lucide-react";

export const metadata = {
  title: "About",
  description:
    "We built Foxes.ai because the layer between buyers and brands just shifted. Again.",
};

const PRINCIPLES = [
  {
    t: "Opinionated, not prescriptive",
    b: "We have a point of view on what works in AEO right now. We'll push back on asks that won't move the needle. That's what you're paying us for.",
  },
  {
    t: "Done, not enabled",
    b: "The agencies that win in an operating category ship the work. The ones that hand you a framework and vanish don't. We ship.",
  },
  {
    t: "Honest numbers",
    b: "The only report that counts is whether your mention rate went up. We don't dress up vanity metrics.",
  },
  {
    t: "Calm, senior team",
    b: "Every account is led by people with a decade-plus in B2B marketing, SEO, and content. You'll know who's on your account and they don't disappear after kickoff.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            We built Foxes.ai because the layer between buyers and brands
            <br />
            <span className="text-gradient-accent">just shifted. Again.</span>
          </>
        }
        subtitle="The teams that figured out SEO in 2005 locked in a decade of advantage. Content marketing in 2012. Social in 2015. AEO is the same inflection point, and most brands are sleeping through it. We're not."
      />

      {/* Thesis */}
      <section className="py-24 border-t border-[color:var(--line)]">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <Eyebrow>Thesis</Eyebrow>
            </div>
            <div className="lg:col-span-8 text-[16px] sm:text-[18px] leading-relaxed text-[color:var(--ink-dim)] space-y-6">
              <p>
                Every few years the layer between your buyer and their decision
                changes.
              </p>
              <p>Search engines. Review sites. Social. Now generative AI.</p>
              <p>
                Each shift rewards the brands that invest early and become the
                default answer. Each one punishes the ones that wait for it to
                &ldquo;feel real&rdquo; before taking it seriously.
              </p>
              <p className="text-[color:var(--ink)]">
                AI answers are the new default. Hundreds of millions of weekly
                users across ChatGPT, Claude, Perplexity, Gemini, and Copilot.
                Your buyers are using these tools to decide who to shortlist —
                and most of them are doing it before they ever land on your
                site or talk to your sales team.
              </p>
              <p>
                We built Foxes.ai to make sure the brands we work with win that
                layer.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* How we operate */}
      <section className="py-24 border-t border-[color:var(--line)] bg-[color:var(--bg-elev)]/40">
        <Container size="wide">
          <Eyebrow>How we operate</Eyebrow>
          <h2 className="headline mt-4 text-[32px] sm:text-[44px] leading-[1.05] tracking-tight max-w-3xl">
            Four operating principles.
          </h2>

          <div className="mt-14 grid sm:grid-cols-2 gap-4">
            {PRINCIPLES.map((p, i) => (
              <div key={p.t} className="card-border p-8">
                <div className="flex items-center gap-3">
                  <span className="mono text-[11px] text-[color:var(--ink-mute)]">
                    0{i + 1}
                  </span>
                  <span className="h-0.5 w-8 bg-gradient-to-r from-[--accent] to-transparent" />
                </div>
                <h3 className="mt-4 font-display text-[22px] tracking-tight">
                  {p.t}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[color:var(--ink-dim)]">
                  {p.b}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Company */}
      <section className="py-24 border-t border-[color:var(--line)]">
        <Container>
          <div className="card-border p-10 sm:p-14">
            <Eyebrow>Company</Eyebrow>
            <h2 className="headline mt-4 text-[28px] sm:text-[36px] leading-[1.1] tracking-tight max-w-2xl">
              Foxes.ai is a service of Lazarus LLC.
            </h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Building2 className="h-4 w-4 mt-0.5 text-[color:var(--ink-mute)]" />
                <div>
                  <div className="mono text-[11px] text-[color:var(--ink-mute)]">
                    Entity
                  </div>
                  <div className="text-[14px]">Lazarus LLC</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-[color:var(--ink-mute)]" />
                <div>
                  <div className="mono text-[11px] text-[color:var(--ink-mute)]">
                    Registered address
                  </div>
                  <div className="text-[14px]">30 N Gould St, Sheridan, WY 82801</div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <LinkButton href="/demo" variant="primary" arrow>
                Book a demo
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
