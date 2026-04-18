import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  ArrowUpRight,
  BookOpen,
  BarChart3,
  FileBarChart2,
  Wrench,
} from "lucide-react";
import { POSTS, categoryLabel, type PostCategory } from "@/lib/posts";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Resources",
  description:
    "Guides, research, and teardowns about showing up in AI answers — written for the people doing the work.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Resources | Foxes.ai",
    description:
      "Guides, research, and teardowns about showing up in AI answers — written for the people doing the work.",
    url: "/resources",
  },
};

const CATS: {
  id: PostCategory | "guide-link";
  icon: typeof BookOpen;
  title: string;
  body: string;
  href: string;
}[] = [
  {
    id: "guide-link",
    icon: BookOpen,
    title: "The AEO Guide",
    body: "The cornerstone guide to getting named in AI answers.",
    href: "/aeo-guide",
  },
  {
    id: "guide",
    icon: Wrench,
    title: "Guides",
    body: "How-tos and fundamentals on AEO, from the people running it.",
    href: "#guides",
  },
  {
    id: "research",
    icon: BarChart3,
    title: "Research",
    body: "What we're seeing in client data (aggregated, anonymized).",
    href: "#research",
  },
  {
    id: "teardown",
    icon: FileBarChart2,
    title: "Teardowns",
    body: "Anonymized deep dives into brands winning (or losing) AI answers.",
    href: "#teardowns",
  },
];

const SECTIONS: { id: string; category: PostCategory; title: string }[] = [
  { id: "guides", category: "guide", title: "Guides & how-tos" },
  { id: "research", category: "research", title: "Research" },
  { id: "teardowns", category: "teardown", title: "Teardowns" },
];

function PostCard({
  slug,
  title,
  summary,
  category,
  readingMinutes,
  publishedAt,
  size = "md",
}: {
  slug: string;
  title: string;
  summary: string;
  category: PostCategory;
  readingMinutes: number;
  publishedAt: string;
  size?: "md" | "lg";
}) {
  return (
    <Link
      href={`/resources/${slug}`}
      className={cn(
        "card-border p-6 sm:p-7 hover:bg-white/[0.02] transition-colors group flex flex-col",
        size === "lg" && "sm:col-span-2 lg:col-span-3"
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="mono text-[10.5px] rounded-full bg-white/5 px-2 py-0.5 ring-1 ring-inset ring-white/10 text-[color:var(--ink-dim)]">
          {categoryLabel(category)}
        </span>
        <span className="mono text-[10.5px] text-[color:var(--ink-mute)]">
          {readingMinutes} min read
        </span>
      </div>
      <h3
        className={cn(
          "mt-5 font-display tracking-tight",
          size === "lg"
            ? "text-[24px] sm:text-[30px] leading-[1.1]"
            : "text-[19px] leading-snug"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-3 leading-relaxed text-[color:var(--ink-dim)] flex-1",
          size === "lg" ? "text-[14.5px] max-w-3xl" : "text-[13.5px]"
        )}
      >
        {summary}
      </p>
      <div className="mt-6 flex items-center justify-between gap-4">
        <time
          dateTime={publishedAt}
          className="mono text-[10.5px] text-[color:var(--ink-mute)]"
        >
          {new Date(publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
        <span className="inline-flex items-center gap-1 text-[12px] text-[color:var(--ink-dim)] group-hover:text-[color:var(--ink)]">
          Read <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}

export default function ResourcesPage() {
  const featured = POSTS[0];
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            What we&apos;re learning about
            <br />
            <span className="text-gradient-accent">being the answer.</span>
          </>
        }
        subtitle="The AEO playbook is still being written. Here's what we're seeing across client projects, updated as we learn."
      />

      {/* Categories */}
      <section className="py-16 border-t border-[color:var(--line)]">
        <Container size="wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATS.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="card-border p-6 group hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[--accent]/10 text-[--accent] ring-1 ring-inset ring-[--accent]/20">
                    <c.icon className="h-4 w-4" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[color:var(--ink-mute)] opacity-0 group-hover:opacity-100 transition" />
                </div>
                <h3 className="mt-6 font-display text-[19px] tracking-tight">
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

      {/* Featured */}
      {featured && (
        <section className="py-10">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <PostCard
                slug={featured.slug}
                title={featured.title}
                summary={featured.summary}
                category={featured.category}
                readingMinutes={featured.readingMinutes}
                publishedAt={featured.publishedAt}
                size="lg"
              />
            </div>
          </Container>
        </section>
      )}

      {/* Sectioned lists */}
      {SECTIONS.map((section) => {
        const postsInCat = POSTS.filter(
          (p) => p.category === section.category && p.slug !== featured?.slug
        );
        if (postsInCat.length === 0) return null;
        return (
          <section
            key={section.id}
            id={section.id}
            className="py-16 border-t border-[color:var(--line)] scroll-mt-24"
          >
            <Container size="wide">
              <div className="flex items-end justify-between mb-8 gap-4">
                <div>
                  <Eyebrow>{categoryLabel(section.category)}</Eyebrow>
                  <h2 className="headline mt-4 text-[26px] sm:text-[34px] leading-tight tracking-tight">
                    {section.title}
                  </h2>
                </div>
                <span className="mono text-[11px] text-[color:var(--ink-mute)]">
                  {postsInCat.length}{" "}
                  {postsInCat.length === 1 ? "piece" : "pieces"}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {postsInCat.map((p) => (
                  <PostCard
                    key={p.slug}
                    slug={p.slug}
                    title={p.title}
                    summary={p.summary}
                    category={p.category}
                    readingMinutes={p.readingMinutes}
                    publishedAt={p.publishedAt}
                  />
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <FinalCTA />
    </>
  );
}
