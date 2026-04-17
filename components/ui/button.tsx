"use client";

import * as React from "react";
import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--accent)] text-white font-semibold hover:brightness-110 shadow-[0_10px_40px_-12px_rgba(255,107,53,0.6)] ring-1 ring-inset ring-white/15",
        secondary:
          "bg-white/5 text-[color:var(--ink)] hover:bg-white/10 ring-1 ring-inset ring-white/10 backdrop-blur",
        ghost:
          "text-[color:var(--ink)] hover:bg-white/5",
        light:
          "bg-white text-black hover:bg-white/90",
        outline:
          "bg-transparent text-[color:var(--ink)] ring-1 ring-inset ring-white/20 hover:ring-white/30 hover:bg-white/5",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-[15px]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    arrow?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  arrow,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
      {arrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </button>
  );
}

type LinkButtonProps = React.ComponentPropsWithoutRef<typeof Link> &
  VariantProps<typeof buttonVariants> & { arrow?: boolean };

function isExternalHref(href: LinkProps["href"]): boolean {
  return typeof href === "string" && /^https?:\/\//i.test(href);
}

export function LinkButton({
  className,
  variant,
  size,
  arrow,
  children,
  href,
  target,
  rel,
  ...rest
}: LinkButtonProps) {
  const external = isExternalHref(href);
  const resolvedTarget = external ? target ?? "_blank" : target;
  const resolvedRel =
    resolvedTarget === "_blank" ? rel ?? "noopener noreferrer" : rel;

  return (
    <Link
      className={cn(buttonVariants({ variant, size }), className)}
      href={href}
      {...rest}
      target={resolvedTarget}
      rel={resolvedRel}
    >
      {children}
      {arrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </Link>
  );
}
