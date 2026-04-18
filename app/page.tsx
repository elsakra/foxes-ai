import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { LogosBand } from "@/components/sections/LogosBand";
import { Stakes } from "@/components/sections/Stakes";
import { Pillars } from "@/components/sections/Pillars";
import { Offer } from "@/components/sections/Offer";
import { Shift } from "@/components/sections/Shift";
import { ScalePresence } from "@/components/sections/ScalePresence";
import { Testimonial } from "@/components/sections/Testimonial";
import { FAQTeaser, QS } from "@/components/sections/FAQTeaser";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  StructuredData,
  faqPageSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Foxes.ai — Answer Engine Optimization agency",
  description:
    "Foxes.ai is the full-service AEO agency that gets your brand named by ChatGPT, Claude, Perplexity, Gemini, and Copilot — and keeps you there.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Foxes.ai — Answer Engine Optimization agency",
    description:
      "Be the answer on ChatGPT, Claude, Perplexity, Gemini, and Copilot.",
    url: "/",
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
};

export default function HomePage() {
  return (
    <>
      <StructuredData id="ld-home-faq" data={faqPageSchema(QS)} />
      <Hero />
      <LogosBand />
      <Stakes />
      <Pillars />
      <Offer />
      <Shift />
      <ScalePresence />
      <Testimonial />
      <FAQTeaser />
      <FinalCTA />
    </>
  );
}
