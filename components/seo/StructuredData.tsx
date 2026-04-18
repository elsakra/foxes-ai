import Script from "next/script";

/**
 * Server component that injects JSON-LD into the page.
 * Use one `<StructuredData />` per schema block.
 */
export function StructuredData({
  id,
  data,
}: {
  id: string;
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Helpers to generate common schema shapes. */

export function organizationSchema({
  name,
  url,
  logo,
  parent,
  address,
  email,
}: {
  name: string;
  url: string;
  logo: string;
  parent: string;
  address: string;
  email: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    email,
    parentOrganization: {
      "@type": "Organization",
      name: parent,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "30 N Gould St",
      addressLocality: "Sheridan",
      addressRegion: "WY",
      postalCode: "82801",
      addressCountry: "US",
      name: address,
    },
    sameAs: [
      // Add real socials as they come online.
    ],
  };
}

export function websiteSchema({ name, url }: { name: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/resources?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function blogPostingSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
  publisherName,
  publisherLogo,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  publisherName: string;
  publisherLogo: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image,
    datePublished,
    dateModified: dateModified ?? datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Organization",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: publisherName,
      logo: {
        "@type": "ImageObject",
        url: publisherLogo,
      },
    },
  };
}

export function articleSchema(args: Parameters<typeof blogPostingSchema>[0]) {
  return { ...blogPostingSchema(args), "@type": "Article" };
}

export function faqPageSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };
}
