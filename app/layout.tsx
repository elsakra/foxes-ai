import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import {
  StructuredData,
  organizationSchema,
  websiteSchema,
} from "@/components/seo/StructuredData";
import { BRAND, SITE_URL } from "@/lib/copy";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Inter({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

// Kept in case a serif accent is wanted later without re-importing
const _serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Foxes.ai — Answer Engine Optimization agency",
    template: "%s · Foxes.ai",
  },
  description:
    "Foxes.ai is the full-service Answer Engine Optimization (AEO) agency that gets your brand named by ChatGPT, Claude, Perplexity, Gemini, and Copilot — and keeps you there.",
  applicationName: BRAND.name,
  keywords: [
    "AEO",
    "Answer Engine Optimization",
    "AEO agency",
    "ChatGPT SEO",
    "Perplexity SEO",
    "AI search optimization",
    "generative engine optimization",
    "GEO",
    "LLM visibility",
    "brand mentions in AI",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Foxes.ai — Answer Engine Optimization agency",
    description:
      "Be the answer on ChatGPT, Claude, Perplexity, Gemini, and Copilot.",
    url: SITE_URL,
    siteName: "Foxes.ai",
    type: "website",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foxes.ai — Answer Engine Optimization agency",
    description:
      "Be the answer on ChatGPT, Claude, Perplexity, Gemini, and Copilot.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${mono.variable} ${_serif.variable}`}
    >
      <body className="min-h-screen antialiased overflow-x-hidden">
        <StructuredData
          id="ld-organization"
          data={organizationSchema({
            name: BRAND.name,
            url: SITE_URL,
            logo: `${SITE_URL}/brand/icon.png`,
            parent: BRAND.parent,
            address: BRAND.address,
            email: BRAND.email,
          })}
        />
        <StructuredData
          id="ld-website"
          data={websiteSchema({ name: BRAND.name, url: SITE_URL })}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-black focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
