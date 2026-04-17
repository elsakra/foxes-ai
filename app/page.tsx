import { Hero } from "@/components/sections/Hero";
import { LogosBand } from "@/components/sections/LogosBand";
import { Stakes } from "@/components/sections/Stakes";
import { Pillars } from "@/components/sections/Pillars";
import { Offer } from "@/components/sections/Offer";
import { Shift } from "@/components/sections/Shift";
import { ScalePresence } from "@/components/sections/ScalePresence";
import { Testimonial } from "@/components/sections/Testimonial";
import { Fit } from "@/components/sections/Fit";
import { FAQTeaser } from "@/components/sections/FAQTeaser";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogosBand />
      <Stakes />
      <Pillars />
      <Offer />
      <Shift />
      <ScalePresence />
      <Testimonial />
      <Fit />
      <FAQTeaser />
      <FinalCTA />
    </>
  );
}
