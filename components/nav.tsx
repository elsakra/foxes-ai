"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LinkButton } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

const links = [
  { href: "/platform", label: "Platform" },
  { href: "/solutions", label: "Solutions" },
  { href: "/results", label: "Results" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-[color:var(--bg)]/70 border-b border-[color:var(--line)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-10">
            <Logo />
            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-3 py-2 rounded-full text-[13.5px] text-[color:var(--ink-dim)] hover:text-[color:var(--ink)] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/demo"
              className="hidden sm:inline text-[13.5px] text-[color:var(--ink-dim)] hover:text-[color:var(--ink)] px-3 py-2"
            >
              Sign in
            </Link>
            <LinkButton href="/demo" variant="primary" size="sm" arrow>
              Book a demo
            </LinkButton>
            <button
              className="md:hidden ml-1 inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-inset ring-white/10 bg-white/5"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[color:var(--line)] bg-[color:var(--bg)]/95 backdrop-blur-xl">
          <nav className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-lg text-[14px] text-[color:var(--ink-dim)] hover:text-[color:var(--ink)] hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
