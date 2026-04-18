import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LinkButton } from "@/components/ui/button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BRAND, BOOKING_URL } from "@/lib/copy";
import { Mail, MapPin, CalendarDays, Building2 } from "lucide-react";

export const metadata = {
  title: "Contact",
  description:
    "The fastest way to reach us is to book a demo. We also read every email that comes in.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Foxes.ai",
    description:
      "The fastest way to reach us is to book a demo. We also read every email that comes in.",
    url: "/contact",
  },
};

const CHANNELS = [
  {
    icon: CalendarDays,
    title: "Book a demo (fastest path)",
    body:
      "30 minutes. A custom audit of your AI visibility. Yours to keep whether we end up working together or not.",
    cta: { href: BOOKING_URL, label: "Book a demo", primary: true },
  },
  {
    icon: Mail,
    title: "Email us",
    body:
      "General questions, press, partnerships, and everything in between. We read every message.",
    cta: {
      href: `mailto:${BRAND.email}`,
      label: BRAND.email,
      primary: false,
    },
  },
  {
    icon: Building2,
    title: "Careers",
    body:
      "We're a small, senior team. See what's open and how to apply.",
    cta: { href: "/careers", label: "See open roles", primary: false },
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            The fastest way to reach us
            <br />
            <span className="text-gradient-accent">is to book a demo.</span>
          </>
        }
        subtitle="Demo calls are the only thing we guarantee a 24-hour response on. For everything else, email works and we read every message."
      >
        <LinkButton
          href={BOOKING_URL}
          variant="primary"
          size="lg"
          arrow
          className="w-full sm:w-auto justify-center"
        >
          Book a demo
        </LinkButton>
      </PageHero>

      <section className="py-20 border-t border-[color:var(--line)]">
        <Container size="wide">
          <Eyebrow>Ways to reach us</Eyebrow>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {CHANNELS.map((c) => (
              <div
                key={c.title}
                className="card-border p-7 flex flex-col"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[--accent]/10 text-[--accent] ring-1 ring-inset ring-[--accent]/20">
                  <c.icon className="h-4 w-4" />
                </span>
                <h3 className="mt-6 font-display text-[20px] tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--ink-dim)] flex-1">
                  {c.body}
                </p>
                <div className="mt-6">
                  <LinkButton
                    href={c.cta.href}
                    variant={c.cta.primary ? "primary" : "secondary"}
                    size="sm"
                    className="w-full justify-center"
                  >
                    {c.cta.label}
                  </LinkButton>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 border-t border-[color:var(--line)] bg-[color:var(--bg-elev)]/40">
        <Container>
          <div className="card-border p-8 sm:p-10">
            <Eyebrow>Mailing address</Eyebrow>
            <h2 className="headline mt-4 text-[24px] sm:text-[32px] leading-[1.1] tracking-tight max-w-xl">
              Operated by Lazarus LLC, out of Wyoming.
            </h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Building2 className="h-4 w-4 mt-0.5 text-[color:var(--ink-mute)]" />
                <div>
                  <div className="mono text-[11px] text-[color:var(--ink-mute)]">
                    Entity
                  </div>
                  <div className="text-[14px]">{BRAND.parent}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-[color:var(--ink-mute)]" />
                <div>
                  <div className="mono text-[11px] text-[color:var(--ink-mute)]">
                    Registered address
                  </div>
                  <div className="text-[14px]">{BRAND.address}</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
