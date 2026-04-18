import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LinkButton } from "@/components/ui/button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PostRenderer, extractTOC } from "@/components/posts/PostRenderer";
import type { PostBlock } from "@/lib/posts";
import { BOOKING_URL, BRAND, SITE_URL } from "@/lib/copy";
import {
  StructuredData,
  articleSchema,
  breadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Clock3, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "The AEO Guide — how to get named in AI answers",
  description:
    "The cornerstone guide to Answer Engine Optimization: why AI answers are the new shortlist, what content gets cited, and how to build a system that keeps you there.",
  alternates: { canonical: "/aeo-guide" },
  openGraph: {
    type: "article",
    title: "The AEO Guide — how to get named in AI answers | Foxes.ai",
    description:
      "The cornerstone guide to Answer Engine Optimization: why AI answers are the new shortlist, what content gets cited, and how to build a system that keeps you there.",
    url: "/aeo-guide",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The AEO Guide — how to get named in AI answers",
    description:
      "The cornerstone guide to Answer Engine Optimization.",
    images: ["/opengraph-image.png"],
  },
};

const PUBLISHED = "2026-03-10";
const UPDATED = "2026-04-17";

const SECTIONS: PostBlock[] = [
  {
    type: "p",
    text: "This is the full guide we wish every brand had before AI answers started eating the top of the funnel. It is written in plain English. It is what we'd tell you on a whiteboard before quoting a project. Read it once and you will have a better mental model than 95% of marketing teams.",
  },
  {
    type: "p",
    text: "We break it into 8 chapters. You can read linearly or jump around via the table of contents on the left. If you only read one section, read Chapter 3.",
  },
  { type: "divider" },

  // Ch 1
  { type: "h2", text: "Chapter 1. What \"AEO\" actually is", id: "chapter-1" },
  {
    type: "p",
    text: "AEO stands for Answer Engine Optimization. It's the practice of making your brand show up in the answers that tools like ChatGPT, Claude, Perplexity, Gemini, and Copilot generate when people ask questions about your category.",
  },
  {
    type: "p",
    text: "It is adjacent to SEO, but not the same thing. SEO optimizes for Google's ranking. AEO optimizes for what AI cites. There's overlap — good content helps both — but the formats that win AI answers aren't identical to the ones that win Google's blue links.",
  },
  {
    type: "callout",
    title: "One-sentence definition",
    text: "AEO is the discipline of making your brand one of the named answers when AI summarizes your category for a buyer.",
  },
  { type: "models-strip", label: "The five AIs we track" },
  {
    type: "p",
    text: "You can run AEO as a dedicated function, or as a layer on top of your existing content team. Either way, the work is a combination of measurement, content, authority, and site setup. The rest of this guide walks through each.",
  },

  // Ch 2
  { type: "h2", text: "Chapter 2. Why AI answers became the shortlist", id: "chapter-2" },
  {
    type: "p",
    text: "Over 400 million people a week ask AI questions about products, services, and vendors. A large and rising share of buying research now happens inside these tools, before a buyer ever lands on a marketing site or talks to a sales team.",
  },
  {
    type: "p",
    text: "When AI answers a buyer's question, it typically names two or three brands and briefly explains why. That answer is functionally the shortlist. If you're one of the named brands, you enter the set. If you're not, you don't — and in most categories, buyers don't go looking past the three the AI gave them.",
  },
  {
    type: "stat-grid",
    stats: [
      { value: "400M+", label: "weekly AI users", sub: "globally, across the top 5 tools" },
      { value: "62%", label: "mean concentration", sub: "top 3 brands in a category" },
      { value: "9–18 mo", label: "time to category default", sub: "with serious investment" },
      { value: "5 surfaces", label: "where this plays out", sub: "ChatGPT, Claude, Perplexity, Gemini, Copilot" },
    ],
  },
  {
    type: "p",
    text: "The shortlist is also sticky. Once a brand is consistently named in a category, the models keep naming it — they lean on patterns in their training data and on the sources they've learned to trust. Getting in early compounds; getting in late gets expensive.",
  },

  // Ch 3
  { type: "h2", text: "Chapter 3. How AI decides who to name", id: "chapter-3" },
  {
    type: "p",
    text: "This is the chapter most people skip, and the one we'd bet you $1,000 no-one on your marketing team could explain to you if you asked right now.",
  },
  {
    type: "p",
    text: "AI systems combine three things when they answer a category question: what they've been trained on (their baseline), what they can retrieve in real time (citations), and what they've been told to trust (source weighting). Specifics vary by model, but the pattern holds across all five.",
  },
  { type: "h3", text: "3.1 Training-data baselines" },
  {
    type: "p",
    text: "The models have seen a lot of content about most categories. A brand that shows up repeatedly across the training data — Reddit threads, comparison pages, tech publications, GitHub issues, product-review sites — carries a baseline advantage. This is why companies with a decade of organic content can still be cited even when their current marketing is dormant.",
  },
  { type: "h3", text: "3.2 Real-time retrieval" },
  {
    type: "p",
    text: "Most of these tools now retrieve live results to supplement their training data. They browse, they read, they cite. The pages they cite become the answers they give. This is the lever most under your direct control: if you publish the content AI wants to cite, you win the citation.",
  },
  { type: "h3", text: "3.3 Source weighting" },
  {
    type: "p",
    text: "Every major AI has implicit preferences for sources. G2 and Capterra are weighted heavily in B2B SaaS. Reddit is weighted heavily in prosumer and consumer. Industry publications matter more in services. Academic and government sources are weighted in regulated categories. These weights shape which brands get pulled into answers.",
  },
  {
    type: "callout",
    title: "The practical takeaway",
    text: "Figure out which sources AI is citing in your category, and then get into those sources. It sounds obvious but almost no brand does it systematically.",
  },

  // Ch 4
  { type: "h2", text: "Chapter 4. The content formats that get cited", id: "chapter-4" },
  {
    type: "p",
    text: "If you study the content that AI most often cites across categories, you land on a predictable set of formats:",
  },
  {
    type: "ol",
    items: [
      "Comparison pages — honest, table-based head-to-heads between named competitors.",
      "Long-form answer pieces — articles that answer a single specific buyer question in the first two paragraphs, then expand.",
      "Help-doc and knowledge-base articles — plain-language answers under a trusted subdomain.",
      "Third-party reviews and directory listings — G2, Capterra, TrustRadius, industry directories.",
      "Niche-platform presence — Reddit threads, Hacker News discussions, specialty forums.",
      "Podcast and video transcripts — especially for categories where buyers already watch or listen.",
      "Industry-publication placements — guest articles, quoted commentary, expert roundups.",
    ],
  },
  {
    type: "p",
    text: "Notice what's not on the list: generic thought-leadership blog posts, PR-voiced executive-bylined pieces, keyword-stuffed SEO pages. AI is increasingly blind to these. Google is slowly becoming blind to them too.",
  },
  {
    type: "p",
    text: "For a deeper dive into each format, see our guide: ",
  },
  // Links to related posts
  // (We'll end this chapter with a links block as plain paragraph.)

  // Ch 5
  { type: "h2", text: "Chapter 5. Authority — the trust layer", id: "chapter-5" },
  {
    type: "p",
    text: "Models don't trust content on its own. They trust content from sources they've learned are reliable. Building your presence on those sources is what we call the authority layer.",
  },
  { type: "h3", text: "5.1 Third-party directories" },
  {
    type: "p",
    text: "G2, Capterra, TrustRadius, GetApp, Product Hunt — and category-specific directories. Claim every relevant one. Fill every field. Get 20+ recent reviews in the first 90 days of an initiative. Publish comparison content inside the directory's own system where available.",
  },
  { type: "h3", text: "5.2 Podcasts and industry publications" },
  {
    type: "p",
    text: "Getting your senior operators onto 2–4 relevant podcasts per quarter, and into 2–4 expert roundups or guest posts, materially shifts how AI describes your category over 6–9 months.",
  },
  { type: "h3", text: "5.3 Niche platforms" },
  {
    type: "p",
    text: "Reddit is the obvious one, but don't stop there. For developer-focused categories, it's Hacker News and GitHub discussions. For legal and financial services, it's ABA, AICPA, and equivalent association publications. For healthcare, it's peer-reviewed publications and professional associations. Find yours.",
  },

  // Ch 6
  { type: "h2", text: "Chapter 6. Site setup — the boring but essential layer", id: "chapter-6" },
  {
    type: "p",
    text: "The technical layer rarely moves numbers on its own, but it amplifies everything above it. A beautifully-written comparison page with broken schema or slow loading is an opportunity lost.",
  },
  {
    type: "ul",
    items: [
      "Schema.org markup: Article, FAQPage, Product, Organization, WebSite, BreadcrumbList on every page where applicable.",
      "Robots.txt that explicitly allows GPTBot, ClaudeBot, PerplexityBot, and Google's AI crawler.",
      "Sitemap that lists every indexable page, updated on every publish.",
      "Canonical URLs set correctly. No duplicate canonicals. No hidden-by-JS critical content.",
      "Consistent Open Graph, Twitter, and standard meta tags.",
      "Fast load times. AI crawlers skip pages that time out.",
    ],
  },
  {
    type: "callout",
    title: "How much time this takes",
    text: "For a medium-sized B2B SaaS site, a proper technical cleanup is usually 1–3 weeks of a single engineer's time, with a clear checklist and prioritized backlog. It's not a six-month project.",
  },

  // Ch 7
  { type: "h2", text: "Chapter 7. Measurement — what to actually track", id: "chapter-7" },
  {
    type: "p",
    text: "The shortest version: track how often AI names you. The slightly longer version:",
  },
  {
    type: "ol",
    items: [
      "Build a tracked question set — 100 to 250 real questions your buyers type into AI.",
      "Scan all five major AIs weekly.",
      "Log who's named, in what position, alongside whom.",
      "Measure mention rate (percentage of answers naming you), share of AI answers (percentage of named answers that include you), and question-level trends (which specific questions moved).",
      "Tie content to the specific questions it's designed to influence, so when the number moves, you know what moved it.",
    ],
  },
  {
    type: "p",
    text: "Good tracking should also keep you honest. Flat months get the same transparency as good months. If the tools you're using cherry-pick numbers or only show you the wins, they're not doing the job.",
  },

  // Ch 8
  { type: "h2", text: "Chapter 8. A 12-month plan you can actually run", id: "chapter-8" },
  {
    type: "p",
    text: "Here is a 12-month plan for a typical B2B brand running AEO seriously for the first time. Scale up or down based on your category maturity and content velocity.",
  },
  { type: "h3", text: "Months 1–3: foundations" },
  {
    type: "ul",
    items: [
      "Build the tracked question set. Run the baseline scan.",
      "Claim and rebuild every relevant third-party listing.",
      "Ship schema, sitemap, and technical-AEO fixes.",
      "Publish the first 6–12 pieces of content: 2 comparison pages, 3 answer-first long-forms, 5 help-doc articles.",
      "Get one founder or senior operator onto 2 podcasts.",
    ],
  },
  { type: "h3", text: "Months 4–6: cadence" },
  {
    type: "ul",
    items: [
      "Two comparison pages and four long-form answer pieces per month.",
      "Weekly help-doc publishing.",
      "Reddit presence established under real names.",
      "Four more podcast appearances.",
      "Mid-engagement strategy review. Kill anything that isn't moving numbers.",
    ],
  },
  { type: "h3", text: "Months 7–12: compounding" },
  {
    type: "ul",
    items: [
      "Content cadence continues. Budget shifts toward highest-yielding formats.",
      "Industry-publication and guest-author placements open up.",
      "Share of AI answers competitive with category leaders.",
      "Quarterly leadership review. Plan year two.",
    ],
  },
  {
    type: "callout",
    title: "What this looks like in numbers",
    text: "In most B2B categories, a 12-month program like this takes a brand from single-digit mention rates to 30–55%. The top performers get into the 60s and start setting category defaults.",
  },

  { type: "divider" },

  {
    type: "p",
    text: "If you've made it to the bottom of this guide: you now have a better picture of AEO than almost anyone in your category. If you'd like the version of this tailored specifically to your brand — with the actual numbers for where you stand today, who's beating you, and the first 90-day plan we'd ship — book a demo. We run the audit before every call. You keep the report.",
  },
];

const CROSS_LINKS = [
  {
    slug: "the-content-ai-actually-cites",
    title: "The content AI actually cites — a formats primer",
  },
  {
    slug: "why-reddit-shows-up-in-half-of-ai-answers",
    title: "Why Reddit shows up in half of AI answers",
  },
  {
    slug: "schema-help-docs-and-the-boring-stuff-ai-loves",
    title: "Schema, help docs, and the boring stuff AI loves",
  },
  {
    slug: "g2-capterra-and-the-trust-layer",
    title: "G2, Capterra, and the trust layer AI relies on",
  },
  {
    slug: "what-to-measure-when-seo-no-longer-predicts-pipeline",
    title: "What to measure when SEO no longer predicts pipeline",
  },
  {
    slug: "state-of-aeo-b2b-saas-q2-2026",
    title: "State of AEO — B2B SaaS, Q2 2026",
  },
];

export default function AEOGuidePage() {
  const toc = extractTOC(SECTIONS);
  const url = `${SITE_URL}/aeo-guide`;

  return (
    <>
      <StructuredData
        id="ld-aeo-guide"
        data={articleSchema({
          title: "The AEO Guide — how to get named in AI answers",
          description:
            "The cornerstone guide to Answer Engine Optimization.",
          url,
          image: `${SITE_URL}/opengraph-image.png`,
          datePublished: PUBLISHED,
          dateModified: UPDATED,
          authorName: BRAND.name,
          publisherName: BRAND.name,
          publisherLogo: `${SITE_URL}/brand/icon.png`,
        })}
      />
      <StructuredData
        id="ld-aeo-breadcrumbs"
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Resources", url: `${SITE_URL}/resources` },
          { name: "The AEO Guide", url },
        ])}
      />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-12 overflow-hidden noise">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(255,107,53,0.22),transparent_70%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-grid opacity-40 mask-fade-b"
        />
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>The cornerstone guide</Eyebrow>
            <h1 className="headline mt-4 text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-[1.04] tracking-tight">
              The AEO Guide —{" "}
              <span className="text-gradient-accent">
                how to get named in AI answers.
              </span>
            </h1>
            <p className="mt-6 text-[16px] sm:text-[18px] leading-relaxed text-[color:var(--ink-dim)] max-w-2xl">
              Eight chapters. ~25 minutes. Everything we&apos;d tell you on a
              whiteboard before quoting a project. Read once and you will have
              a better mental model than 95% of marketing teams.
            </p>
            <div className="mt-6 flex items-center gap-5 mono text-[11.5px] text-[color:var(--ink-mute)] uppercase tracking-[0.14em]">
              <time dateTime={PUBLISHED}>Published March 10, 2026</time>
              <span className="flex items-center gap-1.5">
                <Clock3 className="h-3 w-3" />
                25 min read
              </span>
              <time dateTime={UPDATED}>Updated April 17, 2026</time>
            </div>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="pb-20">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10">
            {/* TOC */}
            <aside className="lg:col-span-3 order-last lg:order-first">
              <div className="sticky top-24">
                <div className="eyebrow mb-4">Table of contents</div>
                <nav className="space-y-2.5">
                  {toc.map((t) => (
                    <a
                      key={t.id}
                      href={`#${t.id}`}
                      className="block text-[13px] text-[color:var(--ink-dim)] hover:text-[color:var(--ink)] leading-snug"
                    >
                      {t.text}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 rounded-xl border border-[color:var(--line)] p-5 bg-[color:var(--bg-elev)]/50">
                  <div className="eyebrow mb-2">Want the version for your brand?</div>
                  <p className="text-[13px] text-[color:var(--ink-dim)] leading-relaxed">
                    Every demo includes a full audit of how often AI names
                    your brand.
                  </p>
                  <LinkButton
                    href={BOOKING_URL}
                    variant="primary"
                    size="sm"
                    arrow
                    className="mt-4 w-full justify-center"
                  >
                    Book a demo
                  </LinkButton>
                </div>
              </div>
            </aside>

            <article className="lg:col-span-9">
              <PostRenderer blocks={SECTIONS} />

              {/* Cross-links */}
              <section className="mt-16">
                <Eyebrow>Keep reading</Eyebrow>
                <h3 className="headline mt-3 text-[24px] sm:text-[28px] leading-tight tracking-tight">
                  Go deeper on any chapter.
                </h3>
                <div className="mt-8 grid sm:grid-cols-2 gap-3">
                  {CROSS_LINKS.map((l) => (
                    <Link
                      key={l.slug}
                      href={`/resources/${l.slug}`}
                      className="card-border p-5 hover:bg-white/[0.02] transition-colors group flex items-center justify-between gap-4"
                    >
                      <span className="text-[14.5px] font-medium tracking-tight">
                        {l.title}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-[color:var(--ink-mute)] group-hover:text-[color:var(--ink)]" />
                    </Link>
                  ))}
                </div>
              </section>
            </article>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
