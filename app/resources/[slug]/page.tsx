import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LinkButton } from "@/components/ui/button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PostRenderer, extractTOC } from "@/components/posts/PostRenderer";
import {
  POSTS,
  getPostBySlug,
  getAllSlugs,
  getRelatedPosts,
  categoryLabel,
} from "@/lib/posts";
import { BOOKING_URL, BRAND, SITE_URL } from "@/lib/copy";
import {
  StructuredData,
  blogPostingSchema,
  breadcrumbSchema,
} from "@/components/seo/StructuredData";
import { ArrowUpRight, Clock3, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `${SITE_URL}/resources/${post.slug}`;
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/resources/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      url,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [BRAND.name],
      images: ["/opengraph-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: ["/opengraph-image.png"],
    },
  };
}

export default async function ResourcePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const url = `${SITE_URL}/resources/${post.slug}`;
  const toc = extractTOC(post.sections);
  const related = getRelatedPosts(post.slug, 3);
  const publishedLong = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <StructuredData
        id={`ld-post-${post.slug}`}
        data={blogPostingSchema({
          title: post.title,
          description: post.summary,
          url,
          image: `${SITE_URL}/opengraph-image.png`,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          authorName: BRAND.name,
          publisherName: BRAND.name,
          publisherLogo: `${SITE_URL}/brand/icon.png`,
        })}
      />
      <StructuredData
        id={`ld-breadcrumbs-${post.slug}`}
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Resources", url: `${SITE_URL}/resources` },
          { name: post.title, url },
        ])}
      />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-10 overflow-hidden noise">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(255,107,53,0.16),transparent_70%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-grid opacity-40 mask-fade-b"
        />
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 flex-wrap">
              <Link
                href="/resources"
                className="inline-flex items-center gap-1.5 text-[12.5px] text-[color:var(--ink-mute)] hover:text-[color:var(--ink)]"
              >
                <ArrowLeft className="h-3 w-3" />
                All resources
              </Link>
              <span className="mono text-[10.5px] rounded-full bg-white/5 px-2 py-0.5 ring-1 ring-inset ring-white/10 text-[color:var(--ink-dim)]">
                {categoryLabel(post.category)}
              </span>
              {post.heroEyebrow && <Eyebrow>{post.heroEyebrow}</Eyebrow>}
            </div>

            <h1 className="headline mt-5 text-[30px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-tight">
              {post.title}
            </h1>

            <p className="mt-5 text-[16px] sm:text-[18px] leading-relaxed text-[color:var(--ink-dim)] max-w-2xl">
              {post.summary}
            </p>

            <div className="mt-6 flex items-center gap-5 mono text-[11.5px] text-[color:var(--ink-mute)] uppercase tracking-[0.14em]">
              <time dateTime={post.publishedAt}>{publishedLong}</time>
              <span className="flex items-center gap-1.5">
                <Clock3 className="h-3 w-3" />
                {post.readingMinutes} min read
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="pb-24">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10">
            {/* TOC */}
            {toc.length > 1 && (
              <aside className="lg:col-span-3 order-last lg:order-first">
                <div className="sticky top-24">
                  <div className="eyebrow mb-4">On this page</div>
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
                    <div className="eyebrow mb-2">Get the audit</div>
                    <p className="text-[13px] text-[color:var(--ink-dim)] leading-relaxed">
                      Every demo includes a full audit of how often AI names
                      your brand — yours to keep.
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
            )}

            {/* Body */}
            <article className={toc.length > 1 ? "lg:col-span-9" : "lg:col-span-12 max-w-3xl"}>
              <PostRenderer blocks={post.sections} />

              {/* CTA block */}
              <div className="mt-16 rounded-2xl border border-[color:var(--line)] bg-gradient-to-b from-[rgba(255,107,53,0.06)] to-transparent p-7 sm:p-9">
                <Eyebrow>What&apos;s next</Eyebrow>
                <h3 className="headline mt-3 text-[24px] sm:text-[30px] leading-[1.1] tracking-tight">
                  See where your brand actually stands in AI answers.
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[color:var(--ink-dim)] max-w-xl">
                  We&apos;ll run a full custom audit before the call. You keep
                  the report regardless.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <LinkButton
                    href={BOOKING_URL}
                    variant="primary"
                    size="lg"
                    arrow
                    className="w-full sm:w-auto justify-center"
                  >
                    Book a demo
                  </LinkButton>
                  <LinkButton
                    href="/aeo-guide"
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto justify-center"
                  >
                    Read the full AEO guide
                  </LinkButton>
                </div>
              </div>

              {/* Related */}
              {related.length > 0 && (
                <section className="mt-16">
                  <Eyebrow>Related reading</Eyebrow>
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/resources/${r.slug}`}
                        className="card-border p-6 hover:bg-white/[0.02] transition-colors group"
                      >
                        <span className="mono text-[10.5px] rounded-full bg-white/5 px-2 py-0.5 ring-1 ring-inset ring-white/10 text-[color:var(--ink-dim)]">
                          {categoryLabel(r.category)}
                        </span>
                        <h4 className="mt-4 font-display text-[18px] leading-snug tracking-tight group-hover:text-[--accent] transition-colors">
                          {r.title}
                        </h4>
                        <p className="mt-2 text-[13px] leading-relaxed text-[color:var(--ink-dim)]">
                          {r.summary}
                        </p>
                        <div className="mt-4 inline-flex items-center gap-1 text-[12px] text-[color:var(--ink-dim)] group-hover:text-[color:var(--ink)]">
                          Read <ArrowUpRight className="h-3.5 w-3.5" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </article>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}

export const dynamicParams = false;
void POSTS;
