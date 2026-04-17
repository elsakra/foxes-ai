import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowUpRight, BookOpen, BarChart3, Newspaper, FileBarChart2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Resources",
  description: "What we're learning about winning the answer.",
};

const CATS = [
  {
    id: "guides",
    icon: BookOpen,
    title: "Guides",
    body: "Deep how-tos on AEO concepts",
  },
  {
    id: "research",
    icon: BarChart3,
    title: "Research",
    body: "What we're seeing in client data (aggregated, anonymized)",
  },
  {
    id: "case-studies",
    icon: Newspaper,
    title: "Case studies",
    body: "Published as results materialize with client permission",
  },
  {
    id: "reports",
    icon: FileBarChart2,
    title: "Category reports",
    body: "\"State of AEO\" for specific verticals",
  },
];

const PREVIEW_POSTS = [
  {
    cat: "Guide",
    title: "The AEO Content Formats That Actually Get Cited",
    read: "12 min read",
    tag: "Fundamentals",
  },
  {
    cat: "Research",
    title: "What ChatGPT, Claude, and Perplexity Trust in Health & Wellness",
    read: "9 min read",
    tag: "Category analysis",
  },
  {
    cat: "Guide",
    title: "Writing for Extraction: Answer-First Content, Properly Structured",
    read: "7 min read",
    tag: "Fundamentals",
  },
  {
    cat: "Research",
    title: "The Top 20 Citation Sources in B2B SaaS, Ranked",
    read: "11 min read",
    tag: "Data",
  },
  {
    cat: "Guide",
    title: "Schema & Structured Data Every B2B Brand Should Have Shipped Yesterday",
    read: "14 min read",
    tag: "Technical",
  },
  {
    cat: "Report",
    title: "State of AEO · Q2 2026",
    read: "22 min read",
    tag: "Quarterly",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            What we&apos;re learning
            <br />
            <span className="text-gradient-accent">about winning the answer.</span>
          </>
        }
        subtitle="The AEO playbook is still being written. Here's what we're seeing across client engagements, updated as we learn."
      />

      {/* Categories */}
      <section className="py-20 border-t border-[color:var(--line)]">
        <Container size="wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATS.map((c) => (
              <Link
                key={c.id}
                href={`#${c.id}`}
                className="card-border p-6 group hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[--accent]/10 text-[--accent] ring-1 ring-inset ring-[--accent]/20">
                    <c.icon className="h-4 w-4" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[color:var(--ink-mute)] opacity-0 group-hover:opacity-100 transition" />
                </div>
                <h3 className="mt-6 font-display text-[20px] tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[color:var(--ink-dim)]">
                  {c.body}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Latest */}
      <section id="guides" className="py-20 border-t border-[color:var(--line)]">
        <Container size="wide">
          <div className="flex items-end justify-between mb-10">
            <div>
              <Eyebrow>Latest</Eyebrow>
              <h2 className="headline mt-4 text-[28px] sm:text-[36px] leading-tight tracking-tight">
                From the working notes.
              </h2>
            </div>
            <span className="mono text-[11px] text-[color:var(--ink-mute)]">
              Updated weekly
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PREVIEW_POSTS.map((p, i) => (
              <article
                key={i}
                className={cn(
                  "card-border p-6 hover:bg-white/[0.02] transition-colors group",
                  i === 0 && "lg:col-span-3 lg:row-span-1"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="mono text-[10.5px] rounded-full bg-white/5 px-2 py-0.5 ring-1 ring-inset ring-white/10 text-[color:var(--ink-dim)]">
                    {p.cat}
                  </span>
                  <span className="mono text-[10.5px] text-[color:var(--ink-mute)]">
                    {p.read}
                  </span>
                </div>
                <h3
                  className={cn(
                    "mt-6 font-display tracking-tight",
                    i === 0
                      ? "text-[28px] sm:text-[34px] leading-[1.08] max-w-3xl"
                      : "text-[18px] leading-snug"
                  )}
                >
                  {p.title}
                </h3>
                <div className="mt-6 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[--accent]" />
                  <span className="mono text-[10.5px] text-[color:var(--ink-mute)]">
                    {p.tag}
                  </span>
                  <span className="ml-auto inline-flex items-center gap-1 text-[12px] text-[color:var(--ink-dim)] group-hover:text-[color:var(--ink)]">
                    Read <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
