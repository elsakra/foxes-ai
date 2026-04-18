import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accordion } from "@/components/ui/Accordion";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  StructuredData,
  faqPageSchema,
} from "@/components/seo/StructuredData";

export const metadata = {
  title: "FAQ",
  description: "Questions we hear a lot about AEO and working with Foxes.ai.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | Foxes.ai",
    description:
      "Questions we hear a lot about AEO and working with Foxes.ai.",
    url: "/faq",
  },
};

export const SECTIONS = [
  {
    heading: "First things first",
    items: [
      {
        q: "Wait — are you software or an agency?",
        a: "We're an agency. You hire us and our team does the work — researching, writing, publishing, tracking, reporting. There's no software for you to learn, no dashboard to log into. You just get a weekly report in your inbox and review the content we produce before it goes live.",
      },
    ],
  },
  {
    heading: "About the audit and the demo",
    items: [
      {
        q: "What exactly is the free audit?",
        a: "The same report we deliver as the first milestone of paid projects. We map the top questions your buyers are asking AI, run them across ChatGPT, Claude, Perplexity, Gemini, and Copilot, score how often you're named, benchmark your top 5 competitors, and list the first pieces of content we'd ship. Usually 20–40 pages of custom analysis, specific to your brand.",
      },
      {
        q: "Is there really no catch?",
        a: "No catch. We'd rather show you real work on your brand than try to sell you. You keep the report either way.",
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
        a: "SEO gets you ranked on Google. We get you recommended by ChatGPT, Claude, Perplexity, Gemini, and Copilot. They're two different games, and what works for one doesn't always work for the other.",
      },
      {
        q: "Do you work with our existing SEO, content, or PR agency?",
        a: "Often, yes. What we do doesn't conflict with those — it complements them. We coordinate with your existing partners on editorial calendar, shared assets, and anything published on your domain.",
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
        q: "How do you check whether our brand is being mentioned?",
        a: "We query the actual ChatGPT, Claude, Perplexity, Gemini, and Copilot APIs — not recycled Google results or simulations. Every answer is parsed for brand mentions, prominence, and competitor co-mentions. Every answer is logged.",
      },
      {
        q: "How often do you scan?",
        a: "Weekly by default. Daily on enterprise. Daily is overkill for most categories; weekly gives enough signal to catch movement without noise.",
      },
      {
        q: "Do you guarantee results?",
        a: "We guarantee process, transparency, and senior attention. We don't guarantee outcomes — they depend on your category, competition, and how much we ship. What we do commit to: if we're not moving the numbers after 90 days of good-faith work, we'll have an honest conversation about whether to continue.",
      },
      {
        q: "Who produces the content?",
        a: "Our in-house strategy, research, and content team. You'll meet everyone on the account during kickoff. No white-labeled contractors, no hidden offshoring.",
      },
      {
        q: "Who owns what we produce?",
        a: "You do, fully. Drafts, finals, briefs — everything. If we stop working together, you keep every asset.",
      },
    ],
  },
  {
    heading: "About pricing and commitment",
    items: [
      {
        q: "Why isn't pricing on the site?",
        a: "Because every project is scoped to the category, the competition, and how much content we need to ship to actually move the needle. A generic price tier would either overcharge the simple cases or undershoot the complex ones. We scope on the demo after the audit tells us what it'll take.",
      },
      {
        q: "How long is a typical project?",
        a: "Most clients start with a 90-day initial term so we have enough runway to show lift, then move to month-to-month. Some start with audit-only, execute in-house, and come back later.",
      },
      {
        q: "Can we cancel?",
        a: "After the initial term, yes — any time. We don't play contract games. Our retention comes from results.",
      },
      {
        q: "Is there a minimum investment?",
        a: "Yes. There's a practical floor because this work doesn't move the needle at too-small a scale. We'll only take the project on if we can deploy enough to actually help. The demo tells us where that line is for your brand.",
      },
    ],
  },
];

export default function FAQPage() {
  const allItems = SECTIONS.flatMap((s) => s.items);
  return (
    <>
      <StructuredData id="ld-faq-page" data={faqPageSchema(allItems)} />
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
