/**
 * Typed post registry — single source of truth for /resources/[slug] routes,
 * the /resources index, the sitemap, and RSS (later).
 */

export type PostCategory = "guide" | "research" | "teardown" | "how-to";

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string; id?: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title?: string; text: string }
  | {
      type: "stat-grid";
      stats: { value: string; label: string; sub?: string }[];
    }
  | { type: "models-strip"; label?: string }
  | { type: "divider" };

export type Post = {
  slug: string;
  title: string;
  summary: string;
  category: PostCategory;
  publishedAt: string; // ISO date
  updatedAt?: string;
  readingMinutes: number;
  tags?: string[];
  heroEyebrow?: string;
  sections: PostBlock[];
  related?: string[]; // slugs
};

const CATEGORY_LABEL: Record<PostCategory, string> = {
  guide: "Guide",
  research: "Research",
  teardown: "Teardown",
  "how-to": "How-to",
};

export function categoryLabel(c: PostCategory) {
  return CATEGORY_LABEL[c];
}

export const POSTS: Post[] = [
  {
    slug: "why-ai-answers-became-the-shortlist",
    title: "Why AI answers became the shortlist — and what that means for your brand",
    summary:
      "The job of the top-of-funnel has quietly moved from Google's ten blue links to a single AI answer. Here's what that shift actually does to your pipeline, and what to do about it.",
    category: "guide",
    publishedAt: "2026-01-18",
    readingMinutes: 9,
    tags: ["Thesis", "Fundamentals"],
    heroEyebrow: "The shift",
    sections: [
      {
        type: "p",
        text: "Ten years ago, a buyer researching a new vendor would open Google, type in a question, and scan ten blue links. The winners were the brands that showed up on page one. The rest were invisible.",
      },
      {
        type: "p",
        text: "Today, the same buyer opens ChatGPT and types the same question. They get one answer, three names, and a paragraph of reasoning. If your brand is one of those three, you get considered. If you're not, you never enter the set.",
      },
      { type: "h2", text: "The shortlist happens before you hear about it", id: "shortlist" },
      {
        type: "p",
        text: "The number we can't stop thinking about: over 400 million people ask AI questions about products and vendors every week. Most buyers now narrow their options in AI before they ever land on a marketing site. By the time a demo request hits your inbox, the shortlist is already written.",
      },
      {
        type: "p",
        text: "That shortlist is sticky. Once a brand is named consistently in a category, it keeps getting named — because the models are leaning on the same patterns they were trained on and the same sources they've learned to trust. Getting in early compounds. Missing it for a year is a year of pipeline you can't easily reclaim.",
      },
      { type: "models-strip", label: "Answers your buyers are reading right now" },
      { type: "h2", text: "It's not one model. It's five.", id: "five-models" },
      {
        type: "p",
        text: "ChatGPT is the one most people talk about, but it isn't the whole story. Claude is excellent at reasoning and gets cited heavily by technical buyers. Perplexity leans on public sources and comparison content. Gemini pulls from Google's index in specific ways. Copilot is increasingly embedded in the tools your buyers already use at work.",
      },
      {
        type: "p",
        text: "Each of them has its own preferences — which sources it trusts, which formats it cites, where it goes when it's unsure. Brands that want to be the answer can't optimize for one and ignore the rest. We scan all five, every week, for every client.",
      },
      { type: "h2", text: "What moves the numbers", id: "what-moves" },
      {
        type: "p",
        text: "There are four things we see move the needle, in roughly this order:",
      },
      {
        type: "ul",
        items: [
          "Content in the formats AI cites most — comparison pages, long-form answers, specific how-tos, help docs.",
          "Presence on the sources models reach for — Reddit, G2, Capterra, YouTube, industry publications.",
          "Clean, well-structured metadata and schema so AI crawlers can read your site without guessing.",
          "Third-party authority — podcasts, expert roundups, citations in the places AI has learned to trust.",
        ],
      },
      {
        type: "callout",
        title: "The compounding effect",
        text: "The brands that start this work now have a 6–12 month runway before their category fully consolidates. Starting later almost always means paying more to displace someone who started sooner.",
      },
      { type: "h2", text: "Why SEO habits don't fully transfer", id: "seo" },
      {
        type: "p",
        text: "A lot of this looks like SEO from a distance, and some of it is. Good content helps both. But the winning formats aren't the same. Google rewards pages that rank for a keyword; AI rewards content that answers a question cleanly, attributes well, and makes it easy to quote.",
      },
      {
        type: "p",
        text: "Same raw ingredients, different recipe. Teams that try to win AI answers with their existing SEO playbook usually see some lift, then stall. The missing layer is writing for extraction, not for clicks.",
      },
      { type: "h2", text: "What to do this quarter", id: "this-quarter" },
      {
        type: "ol",
        items: [
          "Pick 20 questions your best buyers actually type into AI. Not keywords — questions.",
          "Scan your current mention rate across ChatGPT, Claude, Perplexity, Gemini, and Copilot.",
          "Ship one comparison page, one long-form answer, and one help-doc answer per month, minimum.",
          "Track how often you're named every week. Kill anything that isn't moving the number.",
        ],
      },
      {
        type: "p",
        text: "This is exactly the loop we run for our clients. We're happy to walk you through your version of it on a demo call — you get a full audit either way.",
      },
    ],
    related: [
      "how-to-see-if-chatgpt-recommends-you",
      "the-content-ai-actually-cites",
      "what-to-measure-when-seo-no-longer-predicts-pipeline",
    ],
  },
  {
    slug: "how-to-see-if-chatgpt-recommends-you",
    title: "How to see if ChatGPT (and friends) recommends you — a self-audit you can run today",
    summary:
      "A practical, 45-minute check you can do yourself before you ever talk to an agency. Includes the exact prompts we use on our demo audits.",
    category: "how-to",
    publishedAt: "2026-01-25",
    readingMinutes: 11,
    tags: ["Self-audit", "How-to"],
    heroEyebrow: "Self-audit",
    sections: [
      {
        type: "p",
        text: "Before you hire anyone (including us), here is the fastest way to get a real picture of whether AI recommends your brand. This is the shrunk-down version of the audit we run before every demo. It'll take you about 45 minutes.",
      },
      { type: "h2", text: "1. Make your question list", id: "questions" },
      {
        type: "p",
        text: "Write down 15–25 real questions your buyers ask AI. Not keywords — the actual sentences they'd type. Mix early-stage (category-level) and late-stage (vendor-level) questions.",
      },
      {
        type: "ul",
        items: [
          "\"best AI CRM for Series B startups\"",
          "\"Zendesk vs Intercom for ecommerce\"",
          "\"how do I automate onboarding flows\"",
          "\"cheapest HIPAA-compliant hosting\"",
          "\"what's a good creatine brand without fillers\"",
        ],
      },
      {
        type: "p",
        text: "If you're stuck, call three recent customers and ask them exactly what they typed in the week before finding you. It is almost always different from what your team assumes.",
      },
      { type: "h2", text: "2. Ask all five", id: "ask" },
      {
        type: "p",
        text: "Run every question through ChatGPT, Claude, Perplexity, Gemini, and Copilot. Do it in a clean session so you're not training the model on your own brand. For each answer, log three things: were you named, in what position, and who else was named.",
      },
      { type: "models-strip", label: "The five we scan every week" },
      { type: "h2", text: "3. Score honestly", id: "score" },
      {
        type: "p",
        text: "Tally the results. Total mentions, divided by total possible mentions (questions × models). That's your baseline mention rate. Most B2B brands come in between 6% and 18% on their first scan. Don't panic — that's the starting line.",
      },
      {
        type: "callout",
        title: "Ranges to gut-check",
        text: "Under 10% means you're invisible. 10–25% means you're present but not top-of-mind. 25–50% means you're seriously in the conversation. Above 50% means you're winning the category.",
      },
      { type: "h2", text: "4. Note who's winning", id: "competitors" },
      {
        type: "p",
        text: "Track the three brands most often named across your questions. Open the content and sources those brands have published. Look for patterns: are they on G2? Are they writing comparison pages? Are they showing up on Reddit? Whatever is consistent across their presence is what's feeding the models.",
      },
      { type: "h2", text: "5. Pick the three easiest fixes", id: "fixes" },
      {
        type: "ol",
        items: [
          "If you're missing a comparison page for your top two competitors, write it this quarter.",
          "If you're not on G2 or Capterra (and you're B2B SaaS), claim and optimize those listings this month.",
          "If you don't have answer-shaped help-doc content for your top 10 buyer questions, ship that content in the next 60 days.",
        ],
      },
      {
        type: "p",
        text: "You've now done more for your AI visibility than 99% of brands in your category. If you'd like a deeper, scored version of this — with continuous weekly tracking and the content we'd actually ship — that's the free audit every demo includes.",
      },
      { type: "h2", text: "A fair warning", id: "warning" },
      {
        type: "p",
        text: "The manual version of this is useful once. The operational version — tracked weekly, with content tied to specific questions — is what actually moves the numbers over time. Don't confuse an afternoon of prompts with a strategy.",
      },
    ],
    related: [
      "the-content-ai-actually-cites",
      "what-to-measure-when-seo-no-longer-predicts-pipeline",
    ],
  },
  {
    slug: "the-content-ai-actually-cites",
    title: "The content AI actually cites — a formats primer",
    summary:
      "Not all content wins in AI answers. Here are the formats that consistently get cited across ChatGPT, Claude, Perplexity, Gemini, and Copilot — and why.",
    category: "guide",
    publishedAt: "2026-02-02",
    readingMinutes: 12,
    tags: ["Content", "Fundamentals"],
    heroEyebrow: "Content formats",
    sections: [
      {
        type: "p",
        text: "If you looked at every piece of content your best competitor has ever published and asked which ones actually get pulled into AI answers, you'd find the answer is a small, predictable set of formats. Here they are.",
      },
      { type: "h2", text: "1. Comparison pages", id: "comparisons" },
      {
        type: "p",
        text: "When a buyer asks \"what's the best X,\" AI often answers by naming two or three options and briefly contrasting them. The places models learn those comparisons are (a) dedicated comparison pages on brand sites, (b) G2 and Capterra side-by-side views, and (c) Reddit threads where users compare tools directly.",
      },
      {
        type: "p",
        text: "Practical takeaway: if you compete meaningfully with three to five named brands, you should have a comparison page for each pairing. Not \"why we're better\" pages. Actual, honest comparisons with a table of capability-level differences.",
      },
      { type: "h2", text: "2. Long-form answers to specific questions", id: "long-form" },
      {
        type: "p",
        text: "The \"ultimate guide\" is overrated. What AI actually cites is long-form content that cleanly answers a specific question in the first paragraph, then expands with context, trade-offs, and nuance.",
      },
      {
        type: "p",
        text: "We call these \"answer-first\" pieces. The structure: a two-sentence direct answer, then a TL;DR, then the body. The models can extract the opening cleanly, which makes you the source.",
      },
      { type: "h2", text: "3. Help docs and knowledge base content", id: "help-docs" },
      {
        type: "p",
        text: "The single most under-invested format. Help docs answer specific questions in plain language, under a trusted subdomain, with usually-clean HTML. AI loves them. Most brands treat help docs as an afterthought owned by support and never write new ones.",
      },
      {
        type: "callout",
        title: "The help-doc lever",
        text: "For most B2B SaaS brands, investing in help-doc content for the top 25 buyer questions is the single highest-ROI thing they can do in a quarter.",
      },
      { type: "h2", text: "4. Reddit and niche forums", id: "reddit" },
      {
        type: "p",
        text: "Reddit shows up in AI answers more often than almost any other source — especially for consumer and prosumer categories. The models have learned that Reddit often contains the most candid, most specific, most up-to-date takes.",
      },
      {
        type: "p",
        text: "You can't fake presence on Reddit. What you can do is have real experts on your team participating as themselves, answering questions where your product is relevant, and doing it without sounding like a marketing script. Slow, compounding, hard to automate. That's what makes it valuable.",
      },
      { type: "h2", text: "5. Video and podcast transcripts", id: "video" },
      {
        type: "p",
        text: "For categories where YouTube is already the research layer (developer tools, creator tools, fitness, personal finance), AI often reaches for video transcripts. Publishing a decent-quality YouTube series with cleanly-titled, well-described episodes can dramatically shift how models describe your category.",
      },
      { type: "h2", text: "6. Third-party placements", id: "third-party" },
      {
        type: "p",
        text: "Podcast appearances, expert roundups in industry publications, guest posts on trusted sites. These act as co-signs: if a source AI trusts has already cited you, the model is more likely to cite you too.",
      },
      { type: "h2", text: "What doesn't work", id: "doesnt-work" },
      {
        type: "ul",
        items: [
          "Generic \"top 10\" lists written by your own team for your own category.",
          "Content that buries the answer under 600 words of intro.",
          "PR-voiced thought leadership with no specific takeaway.",
          "Pages stuffed with keywords but no real answers.",
        ],
      },
      {
        type: "p",
        text: "Every one of these can rank on Google and get almost no AI citation. The test is simple: if you asked AI the question this page answers, would it cite you? If not, the page isn't doing the job.",
      },
    ],
    related: [
      "why-reddit-shows-up-in-half-of-ai-answers",
      "schema-help-docs-and-the-boring-stuff-ai-loves",
    ],
  },
  {
    slug: "why-reddit-shows-up-in-half-of-ai-answers",
    title: "Why Reddit shows up in half of AI answers — and how to earn it",
    summary:
      "Reddit is the most-cited single source in a surprising number of categories. Here's why, and how to actually build a presence without getting banned.",
    category: "guide",
    publishedAt: "2026-02-09",
    readingMinutes: 10,
    tags: ["Reddit", "Niche platforms"],
    heroEyebrow: "Niche platforms",
    sections: [
      {
        type: "p",
        text: "If you run any serious tracking of AI answers across consumer and prosumer categories, you'll notice Reddit showing up in 30–50% of cited sources. That's not a glitch. It's a design choice the model-makers have made.",
      },
      { type: "h2", text: "Why models reach for Reddit", id: "why" },
      {
        type: "p",
        text: "Three reasons. First, Reddit has specific, real, first-person content — the kind of content that says \"I've tried this, and here's what actually happened.\" Second, it's usually more recent than a brand's own site. Third, the upvote and reply structure gives models a passable signal for what the community considers accurate.",
      },
      {
        type: "p",
        text: "For questions like \"best creatine for gut sensitivity\" or \"best note-taking app for lawyers,\" Reddit threads are often the highest-signal source on the internet. AI has learned this. It quotes from Reddit often.",
      },
      { type: "h2", text: "What you cannot do", id: "cannot" },
      {
        type: "ul",
        items: [
          "Fake accounts posting about your product. Reddit catches these fast and the subreddits will burn you publicly.",
          "Paid promotional posts disguised as organic. Same outcome.",
          "Generic \"we found this great tool\" posts from accounts with one month of activity.",
        ],
      },
      {
        type: "p",
        text: "Every time someone tries one of these shortcuts, they learn expensively that Reddit's antibodies are stronger than their content plan.",
      },
      { type: "h2", text: "What actually works", id: "works" },
      {
        type: "ol",
        items: [
          "Get a real person from your team — ideally a founder, an engineer, or a long-tenured CSM — active under their real name in the subreddits your buyers actually read.",
          "Answer questions where your product is relevant, but only when it genuinely is. Often, the answer is \"this other tool is better for that specific thing.\" Say that.",
          "When you launch something useful, post about it in the relevant subreddits. Be upfront that you work on the thing. Mods are almost always fine with that if you're not spamming.",
          "Host AMAs (Ask Me Anything) in subreddits where you have expertise. These often get archived and cited for years.",
        ],
      },
      {
        type: "callout",
        title: "The slow-compounding nature of Reddit",
        text: "Reddit is one of the few channels where a single well-written comment can still be driving AI citations three years later. It's slow to build, fast to lose. Respect the platform.",
      },
      { type: "h2", text: "Tools and timing", id: "tools" },
      {
        type: "p",
        text: "We use three lightweight tools to stay on top of Reddit for clients: Google Alerts for subreddit-scoped keywords, a dedicated account that follows the relevant subs (not the company account), and a weekly 30-minute review of what's been asked that week.",
      },
      {
        type: "p",
        text: "It adds up to maybe 90 minutes a week of real person time, plus 2–4 substantive contributions a month. That's enough. Over 6–12 months, the compounding is real.",
      },
    ],
    related: ["the-content-ai-actually-cites", "g2-capterra-and-the-trust-layer"],
  },
  {
    slug: "schema-help-docs-and-the-boring-stuff-ai-loves",
    title: "Schema, help docs, and the boring stuff AI quietly loves",
    summary:
      "The technical layer nobody wants to own is often the biggest lever for AI visibility. Here's the short, non-boring version of what to actually do.",
    category: "guide",
    publishedAt: "2026-02-16",
    readingMinutes: 9,
    tags: ["Technical", "Schema"],
    heroEyebrow: "Site setup for AI",
    sections: [
      {
        type: "p",
        text: "There is a quiet technical layer that decides whether AI crawlers can actually understand your site. Most brands never touch it. The ones that do — even without doing anything flashy on top — often see a lift that looks like a mystery from the outside.",
      },
      { type: "h2", text: "Schema and structured data", id: "schema" },
      {
        type: "p",
        text: "Schema.org markup tells crawlers, in a machine-readable way, what each page is: an article, a product, a FAQ, a how-to, a comparison. AI crawlers use these labels to decide how to extract content. Missing or broken schema is the equivalent of showing up to an interview in a costume that says \"I am unclear.\"",
      },
      {
        type: "ul",
        items: [
          "Add Article schema to every blog post and long-form piece.",
          "Add FAQPage schema to every FAQ page (and any page with a structured Q&A block).",
          "Add Product schema to every product and pricing page, where applicable.",
          "Add Organization and WebSite schema to the root domain.",
          "Add BreadcrumbList schema to every interior page.",
        ],
      },
      { type: "h2", text: "Help-doc content", id: "help" },
      {
        type: "p",
        text: "We keep saying this because it is the most consistently underused lever we see. Help-doc content is cheap to produce, sits under a trusted subdomain, and gets cited by AI at a higher rate than anything on most brand blogs. If you don't have a dedicated writer for help-doc content, consider hiring one before you hire another blog writer.",
      },
      { type: "h2", text: "Crawl posture", id: "crawl" },
      {
        type: "p",
        text: "AI crawlers (GPTBot, ClaudeBot, Perplexity's crawler, Google's AI fetcher) behave slightly differently. Make sure your robots.txt allows the ones you want, your pages load cleanly without JavaScript-dependent content being hidden, and your sitemap actually lists every indexable page.",
      },
      {
        type: "callout",
        title: "A quick checklist",
        text: "Robots.txt allows GPTBot / ClaudeBot / PerplexityBot. Sitemap lists every indexable page. Pages render without JS for critical content. Internal links are real <a> tags. Canonical URLs are set. Metadata is consistent across Open Graph, Twitter, and standard meta tags.",
      },
      { type: "h2", text: "Meta, OG, and titles", id: "meta" },
      {
        type: "p",
        text: "Title tags, meta descriptions, and Open Graph images aren't just for Google. AI-enabled search products use them to summarize your pages. Write them like mini-headlines, not keyword soup.",
      },
      { type: "h2", text: "What not to over-engineer", id: "over" },
      {
        type: "p",
        text: "We've watched teams spend three months implementing every schema type under the sun and see almost no lift. The marginal returns above the basics are small. Get the basics right, then spend your time on content and authority — that's where the compounding actually lives.",
      },
    ],
    related: ["the-content-ai-actually-cites", "g2-capterra-and-the-trust-layer"],
  },
  {
    slug: "g2-capterra-and-the-trust-layer",
    title: "G2, Capterra, and the trust layer AI relies on",
    summary:
      "Third-party directories are way more than lead-gen. They are one of the most reliable sources AI reaches for when naming vendors.",
    category: "guide",
    publishedAt: "2026-02-23",
    readingMinutes: 9,
    tags: ["Authority", "Third-party"],
    heroEyebrow: "Authority",
    sections: [
      {
        type: "p",
        text: "If your category has a serious G2 or Capterra footprint, ignoring those directories is one of the most expensive things you can do. We've watched brands double their AI mention rate in 90 days simply by claiming listings, gathering reviews, and writing compared-to-competitor content on their directory profiles.",
      },
      { type: "h2", text: "Why AI trusts directories", id: "trust" },
      {
        type: "p",
        text: "Directories are structured, human-reviewed, up-to-date sources with high editorial oversight. They publish comparison content and category pages that AI crawlers can parse cleanly. They also aggregate reviews with consistent fields — useful for the models.",
      },
      { type: "h2", text: "The quick wins", id: "quick" },
      {
        type: "ol",
        items: [
          "Claim every relevant directory listing: G2, Capterra, TrustRadius, GetApp, Product Hunt, and category-specific ones.",
          "Fill every field. Screenshots, feature matrix, pricing (even a starting-at number), integrations, company information.",
          "Get 20 recent, substantive reviews in the first 90 days. Ask on-boarded customers at 30, 60, and 90 days.",
          "Publish comparison pages within the directory's own content system — most directories let you author head-to-heads.",
        ],
      },
      { type: "h2", text: "What not to do", id: "not" },
      {
        type: "ul",
        items: [
          "Don't trade reviews or incentivize 5-stars without disclosure — you'll get caught and the downside is huge.",
          "Don't post obviously templated reviews. AI and humans both notice.",
          "Don't leave negative reviews unanswered. A calm, specific reply to a negative review can be worth more than three positive reviews.",
        ],
      },
      {
        type: "callout",
        title: "A test that works",
        text: "Ask ChatGPT: \"What are the top 3 [your category] tools, and why?\" If the answer cites G2, Capterra, or a named directory-style source, you have a directory-driven category. Invest accordingly.",
      },
      { type: "h2", text: "Podcasts and expert roundups", id: "podcasts" },
      {
        type: "p",
        text: "Below the directory layer is the trusted-publication layer: industry podcasts, newsletters, roundup articles. Getting your founder or senior operators on 2–4 relevant podcasts a quarter, and contributing to 2–4 roundups, meaningfully shifts how AI describes your category over 6–9 months.",
      },
    ],
    related: ["why-reddit-shows-up-in-half-of-ai-answers", "the-content-ai-actually-cites"],
  },
  {
    slug: "what-to-measure-when-seo-no-longer-predicts-pipeline",
    title: "What to measure when SEO no longer predicts pipeline",
    summary:
      "If your organic traffic is flat and your pipeline is moving the wrong way, the metric that used to explain things isn't explaining anymore. Here's what to track instead.",
    category: "guide",
    publishedAt: "2026-03-02",
    readingMinutes: 10,
    tags: ["Measurement", "Analytics"],
    heroEyebrow: "Measurement",
    sections: [
      {
        type: "p",
        text: "For most of the last decade, a clean relationship held: rank more keywords on page one, get more organic traffic, get more pipeline. That line is now cracked in a lot of categories. Here's what to measure in the world we actually live in.",
      },
      { type: "h2", text: "1. How often AI names you", id: "mention-rate" },
      {
        type: "p",
        text: "The headline number: across a tracked set of buyer questions, how often does ChatGPT, Claude, Perplexity, Gemini, or Copilot name your brand? Track weekly. Break down by model. Break down by early-stage (category) vs. late-stage (vendor) questions.",
      },
      {
        type: "p",
        text: "This is the metric that most directly correlates to whether your brand enters the shortlist AI is writing for your buyers.",
      },
      { type: "h2", text: "2. Share of AI answers", id: "share" },
      {
        type: "p",
        text: "Of the answers that name anyone in your category, what percentage include you? This normalizes for popularity of a question and shows whether you're winning head-to-head.",
      },
      { type: "h2", text: "3. Direct, branded, and AI-referred traffic", id: "traffic" },
      {
        type: "p",
        text: "Organic traffic to your blog is still a signal, but increasingly the interesting line is direct and branded traffic — people who learned about you in AI and then typed your name into a browser. Watch whether that line moves as your AI visibility changes.",
      },
      {
        type: "callout",
        title: "Chatbots and AI-referred traffic",
        text: "Referral data from ChatGPT, Perplexity, and similar tools is slowly getting cleaner. You can already see the rough silhouette in your analytics if you filter on the right referrers. It's noisy but it's directional.",
      },
      { type: "h2", text: "4. Pipeline created from AI-influenced opportunities", id: "pipeline" },
      {
        type: "p",
        text: "The measurement that makes executives care: ask every inbound lead during the form or sales process how they heard about you. Track the growing share that says \"ChatGPT,\" \"Perplexity,\" or \"someone recommended you — I think I saw you in AI.\" That line is almost certainly growing faster than you think.",
      },
      { type: "h2", text: "5. Content attribution", id: "attribution" },
      {
        type: "p",
        text: "Tag every piece of content with the specific questions it's designed to influence. When your mention rate on those questions moves, you know which content moved it. This is how you stop guessing about what's working.",
      },
      {
        type: "p",
        text: "Together, these five measurements give you a real-time picture of whether AI is recommending you. Our clients look at them weekly. Anything on this list that you don't have visibility into is a visibility gap worth closing.",
      },
    ],
    related: [
      "how-to-see-if-chatgpt-recommends-you",
      "state-of-aeo-b2b-saas-q2-2026",
    ],
  },
  {
    slug: "state-of-aeo-b2b-saas-q2-2026",
    title: "State of AEO — B2B SaaS, Q2 2026",
    summary:
      "Our quarterly report on how often AI is naming B2B SaaS brands across 200 tracked categories, based on 48,000+ scans over three months.",
    category: "research",
    publishedAt: "2026-03-15",
    readingMinutes: 14,
    tags: ["Category report", "B2B SaaS"],
    heroEyebrow: "Category report",
    sections: [
      {
        type: "p",
        text: "Every quarter, we publish what we're seeing across a rolling panel of categories we track. This is the Q2 2026 update for B2B SaaS. Data is drawn from 48,000+ scans across 200 categories, ChatGPT, Claude, Perplexity, Gemini, and Copilot, over the three months ending March 31, 2026.",
      },
      {
        type: "stat-grid",
        stats: [
          { value: "48k+", label: "AI answers analyzed", sub: "across 200 categories" },
          { value: "5", label: "AIs scanned weekly", sub: "ChatGPT, Claude, Perplexity, Gemini, Copilot" },
          { value: "28%", label: "Mean mention concentration", sub: "top 3 brands in category" },
          { value: "+19%", label: "QoQ rise in Reddit citations", sub: "across prosumer categories" },
        ],
      },
      { type: "h2", text: "Headline findings", id: "headline" },
      {
        type: "ol",
        items: [
          "Mention concentration keeps rising. The top 3 brands in a mature category now capture an average of 62% of all named citations, up from 54% one quarter ago. The winner-takes-most dynamic is accelerating.",
          "Reddit citations up 19% QoQ across prosumer SaaS. Notion, Linear, Raycast, and Cursor all see a material share of their citations coming from Reddit-originated content.",
          "G2 + Capterra citations remain stable in mid-market categories (HRIS, CRM, helpdesk) and are still the single most-cited source type by AI models.",
          "Help-doc citations are up 34% QoQ in categories where the top 3 brands have invested heavily in docs. The compounding from docs content is now visible in the data.",
          "Competition for category-level questions (\"best X\") has intensified. The gap between brand #1 and brand #10 is wider than last quarter in 80% of tracked categories.",
        ],
      },
      { type: "h2", text: "Category-level movers", id: "movers" },
      {
        type: "p",
        text: "Five SaaS categories where the default answer shifted noticeably this quarter:",
      },
      {
        type: "ul",
        items: [
          "Helpdesk: Zendesk losing share to Intercom and Front in AI answers, specifically on \"best helpdesk for ecommerce.\"",
          "CRM: HubSpot remains dominant in SMB but losing ground to Attio in Series A–C startup-oriented queries.",
          "Analytics: Amplitude and PostHog rising fast in \"product analytics\" answers, at the expense of Mixpanel.",
          "Design: Figma still dominant. Notable: challengers are losing share, not gaining.",
          "Dev tools: Linear's citation density in AI answers for project management has roughly doubled YoY.",
        ],
      },
      {
        type: "callout",
        title: "Methodology",
        text: "We scan a fixed set of ~180 tracked questions per category weekly across all five major AIs. Answers are logged, parsed for brand mentions, and aggregated. Data is de-duplicated by brand and category. Aggregated results only; we never publish individual client data without permission.",
      },
      { type: "h2", text: "What this means if you run marketing at a B2B SaaS", id: "so-what" },
      {
        type: "ul",
        items: [
          "If you're not in the top 3 of your tracked category, the gap is widening. The longer you wait, the more expensive it gets to close.",
          "If you've invested in help-doc content in the last 12 months, you're probably seeing compounding now. If you haven't, start.",
          "Reddit is a bigger lever than almost anyone in B2B SaaS is admitting. Most of our clients' biggest unforced errors are still ignoring it.",
          "Category pages on G2 and Capterra are still underrated. Most teams fire-and-forget their listings. Revisit them.",
        ],
      },
      { type: "h2", text: "What we're watching for Q3", id: "watching" },
      {
        type: "ol",
        items: [
          "Whether the Reddit citation share keeps rising, or plateaus. Our guess: keeps rising for another 2–3 quarters, then plateaus.",
          "Whether AI-native referral traffic becomes a cleanly-attributable line in analytics. Early signals suggest yes.",
          "How the new rounds of model releases change citation patterns. We usually see meaningful drift in the first 30 days after a major release.",
        ],
      },
    ],
    related: [
      "state-of-aeo-professional-services-q2-2026",
      "what-to-measure-when-seo-no-longer-predicts-pipeline",
    ],
  },
  {
    slug: "state-of-aeo-professional-services-q2-2026",
    title: "State of AEO — Professional services, Q2 2026",
    summary:
      "Law firms, accounting firms, boutique consultancies, healthcare practices. The AI visibility picture in services looks different than SaaS — here's how.",
    category: "research",
    publishedAt: "2026-03-22",
    readingMinutes: 13,
    tags: ["Category report", "Services"],
    heroEyebrow: "Category report",
    sections: [
      {
        type: "p",
        text: "Professional services categories — law, accounting, consulting, healthcare practices — behave differently in AI answers than SaaS categories. Buyers are often looking for a specific local or specialty fit, and the trust signals that matter are different. Here's what we saw across 12,000 scans over Q1.",
      },
      {
        type: "stat-grid",
        stats: [
          { value: "12k", label: "answers analyzed", sub: "Q1 2026, services categories" },
          { value: "42%", label: "of answers cite a named firm", sub: "vs. 73% in SaaS" },
          { value: "58%", label: "cite an association or publication", sub: "instead of a specific firm" },
          { value: "3.1x", label: "weight of trust-signal citations", sub: "vs. SaaS peers" },
        ],
      },
      { type: "h2", text: "Why services answers look different", id: "different" },
      {
        type: "p",
        text: "In SaaS, naming three products is a reasonable AI response. In services, naming three specific law firms or accounting practices is harder — the buyer's context (city, specialty, firm size) matters enormously. AI tends to hedge and often names associations, industry publications, or general guidance instead of specific firms.",
      },
      {
        type: "p",
        text: "That's both a challenge and an opportunity. The bar for showing up with a specific name is higher. But once you clear it, you're often one of very few names on the shortlist.",
      },
      { type: "h2", text: "What's citing services brands", id: "sources" },
      {
        type: "ul",
        items: [
          "Industry association directories (ABA, AICPA, equivalents in other regions).",
          "Specialty publications and niche rankings — \"best family law firms in Austin,\" \"top boutique M&A advisors.\"",
          "Podcasts and video interviews with named partners or principals.",
          "Individual-expert profiles on platforms like LinkedIn, with demonstrable specialty and case work.",
          "Firm-published long-form content with author byline and named credentials.",
        ],
      },
      { type: "h2", text: "What doesn't work in services", id: "doesnt" },
      {
        type: "ul",
        items: [
          "Anonymous \"team writes\" blog posts with no author attribution.",
          "Locationless content that tries to serve every geography at once.",
          "Stock-photo-heavy PR-voiced content with no specific case details or results.",
          "SEO-chasing content on overly broad topics (\"what is contract law\").",
        ],
      },
      {
        type: "callout",
        title: "The specialty effect",
        text: "In services, specialty plus location plus named expert is the winning formula. The firms that invest in building the named-expert layer (partner profiles, specialty pages, published case commentary under a specific attorney's byline) are winning disproportionately in AI answers.",
      },
      { type: "h2", text: "Firms that are winning", id: "winning" },
      {
        type: "p",
        text: "Three pattern-matches we see across the winning firms:",
      },
      {
        type: "ol",
        items: [
          "They have a real content cadence — weekly, monthly, or quarterly — with named author bylines and clear specialty attribution.",
          "They show up on specialty podcasts and industry media with specific, case-level commentary.",
          "They keep their association listings, bar directories, and niche-publication profiles fully up to date — most firms let these decay.",
        ],
      },
      { type: "h2", text: "What to do if you run marketing at a services firm", id: "so-what" },
      {
        type: "ul",
        items: [
          "Pick your top 5 specialty + location combinations. Build a real content system for each.",
          "Make every senior practitioner identifiable by name, specialty, and published work.",
          "Invest in one or two serious podcasts/pubs per quarter. Co-signs matter more in services than in SaaS.",
          "Claim and update every directory and association listing. They're boring and they move the needle.",
        ],
      },
    ],
    related: [
      "state-of-aeo-b2b-saas-q2-2026",
      "g2-capterra-and-the-trust-layer",
    ],
  },
  {
    slug: "teardown-how-a-category-leader-got-named-62-percent-of-the-time",
    title: "Teardown: how a category leader got named 62% of the time",
    summary:
      "An anonymized look at the exact content, authority, and site-setup moves a category leader used to get to 62% mention rate in under 12 months.",
    category: "teardown",
    publishedAt: "2026-03-29",
    readingMinutes: 11,
    tags: ["Teardown", "Case study"],
    heroEyebrow: "Teardown",
    sections: [
      {
        type: "p",
        text: "This is a teardown of a real engagement, anonymized at the client's request. The category is a mid-market B2B SaaS segment with six well-funded competitors. Twelve months ago, our client was named in 14% of tracked answers. Today, they're at 62%. Here is what actually moved the number.",
      },
      {
        type: "stat-grid",
        stats: [
          { value: "14% → 62%", label: "Named in AI answers" },
          { value: "12 mo", label: "Time to result" },
          { value: "84", label: "Pieces of content shipped" },
          { value: "11", label: "Third-party placements" },
        ],
      },
      { type: "h2", text: "The first 90 days: foundations", id: "foundations" },
      {
        type: "p",
        text: "We started with a full scan, a tracked question set (182 questions), and a 90-day calendar. The first 90 days were 80% about foundations: claim and rebuild the G2 and Capterra listings, ship schema and structured-data fixes across the main site, and write 18 help-doc articles covering the top category-level questions.",
      },
      {
        type: "p",
        text: "Mention rate moved from 14% to 19% in those 90 days. Modest, but foundational — the compounding we were about to see depended on this layer being clean.",
      },
      { type: "h2", text: "Days 91–180: content engine", id: "content" },
      {
        type: "p",
        text: "We shifted to content volume. Two comparison pages per month (one head-to-head, one three-way). Four long-form answer pieces. A weekly help-doc. An expert-led Reddit cadence from the founder. A monthly industry-publication placement.",
      },
      {
        type: "p",
        text: "By day 180, mention rate was at 37%. The help-doc and comparison-page investments were driving most of the lift; the third-party placements were still in ramp.",
      },
      { type: "h2", text: "Days 181–365: compounding", id: "compounding" },
      {
        type: "p",
        text: "Everything we'd shipped in months 1–6 started compounding. Reddit activity was cited by AI more often. The comparison pages started getting quoted in answers. Two podcast appearances turned into a dozen downstream citations. By day 365, mention rate was at 62%.",
      },
      {
        type: "callout",
        title: "The lesson",
        text: "The shape of the curve mattered more than the slope. The first 90 days looked flat; the last 90 days looked vertical. Most clients that quit in month 3 or 4 would have seen exactly this curve if they'd stayed.",
      },
      { type: "h2", text: "What worked that we didn't expect", id: "surprises" },
      {
        type: "ul",
        items: [
          "A single, highly-detailed \"Brand X vs. Brand Y\" comparison ended up cited in 8 different AI answers independent of the brand comparison context.",
          "The founder's 2 AMA-style Reddit threads have been cited in AI answers for 10+ months now.",
          "Help-doc content for features nobody thought to document publicly drove more mentions than the feature pages themselves.",
          "A single industry-publication placement quoted verbatim in Perplexity answers for 6 straight months.",
        ],
      },
      { type: "h2", text: "What didn't work", id: "didnt" },
      {
        type: "ul",
        items: [
          "A YouTube series we produced for 3 months. Video didn't move the needle in this category — we killed it and redeployed the budget to Reddit and help docs.",
          "A round of thought-leadership-style blog posts from a ghostwriter. Well-written, zero extraction, zero citation. Replaced with answer-first help docs.",
          "A guest-post campaign on low-trust publications. Wasted effort.",
        ],
      },
      { type: "h2", text: "What's next", id: "next" },
      {
        type: "p",
        text: "The client is now focused on category defense — staying ahead of the competitors who started this investment six months after them. Our working hypothesis: category-leader status compounds for another 12–18 months before the gap tightens again.",
      },
    ],
    related: [
      "teardown-when-the-smaller-brand-wins-the-answer",
      "state-of-aeo-b2b-saas-q2-2026",
    ],
  },
  {
    slug: "teardown-when-the-smaller-brand-wins-the-answer",
    title: "Teardown: when the smaller brand wins the answer",
    summary:
      "How a 40-person challenger took share in AI answers from a 4,000-person incumbent — without outspending them.",
    category: "teardown",
    publishedAt: "2026-04-05",
    readingMinutes: 10,
    tags: ["Teardown", "Case study"],
    heroEyebrow: "Teardown",
    sections: [
      {
        type: "p",
        text: "The assumption that \"big brand wins\" doesn't hold as cleanly in AI answers as it did in SEO. Models lean on specificity, not size. This teardown is how a ~40-person challenger in a crowded B2B category took a meaningful share of the default answer away from a 4,000-person incumbent in 9 months.",
      },
      { type: "h2", text: "The starting line", id: "start" },
      {
        type: "p",
        text: "At the start of the engagement, the incumbent was named in 71% of tracked answers. Our client was at 6%. The incumbent had a 30-person marketing team. We had us.",
      },
      { type: "h2", text: "What the incumbent was doing wrong", id: "wrong" },
      {
        type: "ul",
        items: [
          "Heavy PR-voice blog with no named author or specific technical detail.",
          "Stale G2 listing that hadn't been touched in 2 years.",
          "No help-doc investment. Documentation was hidden behind a login.",
          "Reddit presence was essentially a brand-run account that had been downvoted into oblivion.",
          "Technical AEO: schema missing, duplicate canonical tags on key pages.",
        ],
      },
      { type: "h2", text: "What we did", id: "did" },
      {
        type: "ol",
        items: [
          "Wrote the 20 \"Brand X vs. Incumbent\" comparisons the incumbent refused to write. Honest, detailed, with tables of capability differences.",
          "Took help docs public. Rewrote the top 35 into answer-first pieces.",
          "Got the founder (former product engineer at the incumbent, incidentally) into 6 podcasts in the first 3 months.",
          "Rebuilt the G2 listing from scratch. Got to 40 recent reviews in 90 days.",
          "Built a real, signed, named-expert presence on Reddit. No corporate account. Just real people.",
          "Fixed the technical basics.",
        ],
      },
      { type: "h2", text: "The curve", id: "curve" },
      {
        type: "stat-grid",
        stats: [
          { value: "6% → 41%", label: "Named in AI answers", sub: "9 months" },
          { value: "71% → 58%", label: "Incumbent share", sub: "same period" },
          { value: "$0", label: "Paid media budget", sub: "in engagement" },
          { value: "9 mo", label: "Time to result" },
        ],
      },
      {
        type: "p",
        text: "By month 9, the client was named in 41% of answers. The incumbent was at 58% — still ahead, but the gap had meaningfully closed. More importantly, the client was now named alongside the incumbent in most of the high-intent category queries, not just the niche ones.",
      },
      { type: "h2", text: "Why this worked", id: "why" },
      {
        type: "callout",
        title: "The size-doesn't-matter insight",
        text: "AI doesn't know which brand is bigger. It knows which brand is specifically, honestly, and consistently answering the buyer's question on the sources it trusts. Smaller brands that commit to specificity can take share from larger brands who've gotten generic.",
      },
      {
        type: "p",
        text: "The incumbent had stopped doing the work. Enormous marketing team, but the output was beige. Our client was specific, recent, and honest. For AI, that's what actually matters.",
      },
      { type: "h2", text: "The takeaway for smaller brands", id: "takeaway" },
      {
        type: "ul",
        items: [
          "Pick the 20 comparisons your incumbent refuses to write. Write them honestly. Publish them under your own brand.",
          "Put your most credible experts in front of AI-facing surfaces: podcasts, Reddit, specialty publications.",
          "Take your help docs public. The incumbent probably hasn't.",
          "Invest in directory listings and reviews. They still compound disproportionately.",
          "Don't try to out-spend the incumbent. Out-specify them.",
        ],
      },
    ],
    related: [
      "teardown-how-a-category-leader-got-named-62-percent-of-the-time",
      "why-ai-answers-became-the-shortlist",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}

export function getPostsByCategory(cat: PostCategory): Post[] {
  return POSTS.filter((p) => p.category === cat);
}

export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const post = getPostBySlug(slug);
  if (!post) return [];
  const explicit = (post.related ?? [])
    .map((s) => getPostBySlug(s))
    .filter((p): p is Post => Boolean(p));
  if (explicit.length >= limit) return explicit.slice(0, limit);
  const extras = POSTS.filter(
    (p) => p.slug !== slug && !explicit.some((x) => x.slug === p.slug)
  )
    .sort(
      (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt)
    )
    .slice(0, limit - explicit.length);
  return [...explicit, ...extras];
}
