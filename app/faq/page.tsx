import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accordion } from "@/components/ui/Accordion";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata = {
  title: "FAQ",
  description: "Questions we hear a lot.",
};

const SECTIONS = [
  {
    heading: "About the audit and the demo",
    items: [
      {
        q: "What exactly is the free audit?",
        a: "The same AEO audit we deliver as the first milestone of paid engagements. We map your category's top buyer questions, query them across ChatGPT, Claude, Perplexity, Gemini, and Copilot, score your mention rate, benchmark your top 5 competitors, and identify the first content plays we'd ship. Typically 20–40 pages of custom analysis.",
      },
      {
        q: "Is there really no catch?",
        a: "No catch. We don't charge for the audit, we don't charge for the demo, and you keep the report whether you hire us or not. The economics work because doing excellent work upfront is the best filter we have for the clients we want. Most brands who see what's possible engage. Some don't. Either way, we'd rather have the conversation with real data than pitch from a template.",
      },
      {
        q: "How long does the demo take?",
        a: "30 minutes. ~5 on context, ~20 walking through your audit, ~5 on what you'd like to do next. No pitch deck.",
      },
      {
        q: "What do I need to prepare?",
        a: "Nothing. Book the call, tell us your company and your top three competitors, we do the rest.",
      },
    ],
  },
  {
    heading: "About what we do",
    items: [
      {
        q: "How is this different from SEO?",
        a: "Different channel, different signals, different content. SEO optimizes for Google's ranking algorithm to win blue links. AEO optimizes for what ChatGPT, Claude, Perplexity, Gemini, and Copilot cite when they generate answers. Some overlap (good content helps both), but the formats that win AEO — comparison pages, niche platform mentions, specific answer-shaped content — aren't the same as what wins SEO.",
      },
      {
        q: "How is this different from an AEO tool or platform?",
        a: "Platforms give you a dashboard and a gap list. We do the work. Most teams who buy an AEO tool end up with the same outcome: someone logs in, sees a pile of gaps, feels overwhelmed, and stops logging in. The tool layer is one part of running AEO; we run all the parts.",
      },
      {
        q: "Do you work with our existing SEO, content, or PR agency?",
        a: "Often, yes. AEO doesn't conflict with those workstreams — it complements them. We coordinate with your existing vendors on editorial calendar, shared assets, and anything published on your domain.",
      },
      {
        q: "What categories do you work in?",
        a: "B2B across SaaS, services, finance, healthcare, legal, education, and several verticals we keep private. If your buyers research before they buy, you're probably a fit. The demo audit confirms it.",
      },
    ],
  },
  {
    heading: "About how it works",
    items: [
      {
        q: "How do you detect if our brand is mentioned?",
        a: "We query the actual ChatGPT, Claude, Perplexity, Gemini, and Copilot APIs — not SERP scrapes or simulations. Every answer is parsed for brand mentions, prominence, and competitor co-mentions. Every answer is logged.",
      },
      {
        q: "How often do you scan?",
        a: "Weekly on standard engagements. Daily on enterprise. Daily is overkill for most categories; weekly gives enough signal to catch movement without noise.",
      },
      {
        q: "Do you guarantee results?",
        a: "We guarantee process, transparency, and senior attention. We don't guarantee mention-rate outcomes because they depend on your category, competition, and content velocity. What we do commit to: if we're not moving your mention rate after 90 days of good-faith work, we'll have an honest conversation about whether to continue.",
      },
      {
        q: "Who produces the content?",
        a: "Our in-house strategy, research, and content team. You'll meet everyone on the account during kickoff. No white-labeled contractors, no undisclosed offshoring.",
      },
      {
        q: "Who owns what we produce?",
        a: "You do, fully. Drafts, finals, briefs — everything. If the engagement ends, you keep every asset.",
      },
    ],
  },
  {
    heading: "About pricing and commitment",
    items: [
      {
        q: "Why isn't pricing on the site?",
        a: "Because every engagement is scoped to the category, the competitive density, and the content velocity that'll actually move your mention rate. A generic price tier would either overcharge the simple cases or undershoot the complex ones. We scope on the demo after the audit tells us what it'll take.",
      },
      {
        q: "How long is a typical engagement?",
        a: "Most clients start with a 90-day initial term so AEO has enough runway to show lift, then move to month-to-month. Some start with audit-only, execute in-house, and re-engage later.",
      },
      {
        q: "Can we cancel?",
        a: "After the initial term, yes — any time. We don't play contract games. Our retention comes from results.",
      },
      {
        q: "Is there a minimum investment?",
        a: "Yes, there's a practical floor because AEO doesn't work at too-small a scale. We'll only take the engagement if we can deploy enough to actually move the needle. The demo tells us where that line is for your brand.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={<>Questions we hear a lot.</>}
        subtitle="If yours isn't here, bring it to the demo — we'd rather answer live."
      />

      <section className="pb-24">
        <Container>
          <div className="space-y-20">
            {SECTIONS.map((s, i) => (
              <div key={i}>
                <div className="mb-8 flex items-baseline gap-4">
                  <Eyebrow>Section 0{i + 1}</Eyebrow>
                  <h2 className="headline text-[22px] sm:text-[28px] leading-tight tracking-tight">
                    {s.heading}
                  </h2>
                </div>
                <Accordion items={s.items} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
