import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { BOOKING_URL } from "@/lib/copy";

const cols = [
  {
    title: "Platform",
    links: [
      { label: "How it works", href: "/platform" },
      { label: "Measurement", href: "/platform#measurement" },
      { label: "Content", href: "/platform#content" },
      { label: "Authority", href: "/platform#authority" },
      { label: "Reporting", href: "/platform#reporting" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "For AEO Teams", href: "/solutions#aeo" },
      { label: "For Content Teams", href: "/solutions#content" },
      { label: "For PR & Brand", href: "/solutions#pr" },
      { label: "For In-house Leaders", href: "/solutions#leaders" },
      { label: "For Agencies (white-label)", href: "/solutions#agencies" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Results", href: "/results" },
      { label: "Careers", href: "/about#careers" },
      { label: "Contact", href: "mailto:contact@foxes.ai" },
      { label: "Book a demo", href: BOOKING_URL },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources" },
      { label: "AEO Guide", href: "/resources#guide" },
      { label: "FAQ", href: "/faq" },
      { label: "Free Audit", href: BOOKING_URL },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[color:var(--line)] bg-[color:var(--bg)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[--accent]/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-[color:var(--ink-dim)] leading-relaxed">
              The AEO agency that gets your brand named by ChatGPT, Claude,
              Perplexity, Gemini, and Copilot.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pill hover:text-[color:var(--ink)] transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[--accent] pulse-dot" />
                Book a demo — audit included
              </Link>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {cols.map((col) => (
              <div key={col.title}>
                <div className="eyebrow mb-4">{col.title}</div>
                <ul className="space-y-2.5">
                  {col.links.map((l) => {
                    const externalHttps =
                      typeof l.href === "string" &&
                      l.href.startsWith("https://");
                    return (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          {...(externalHttps
                            ? {
                                target: "_blank" as const,
                                rel: "noopener noreferrer",
                              }
                            : {})}
                          className="text-[13.5px] text-[color:var(--ink-dim)] hover:text-[color:var(--ink)] transition-colors"
                        >
                          {l.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-[color:var(--line)]">
          <p className="text-xs text-[color:var(--ink-mute)]">
            © {new Date().getFullYear()} Foxes.ai, a Lazarus LLC company ·
            30 N Gould St, Sheridan, WY 82801
          </p>
          <p className="text-[11px] mono tracking-widest text-[color:var(--ink-mute)] uppercase">
            AEO · Answer Engine Optimization
          </p>
        </div>
      </div>

      {/* Giant watermark */}
      <div
        aria-hidden
        className="pointer-events-none select-none overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pb-10">
          <div className="font-display text-[18vw] leading-[0.85] tracking-[-0.04em] text-gradient opacity-[0.08]">
            foxes.ai
          </div>
        </div>
      </div>
    </footer>
  );
}
