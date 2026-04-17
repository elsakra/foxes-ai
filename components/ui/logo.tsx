import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2.5 group", className)} aria-label="Foxes.ai home">
      <FoxMark className="h-6 w-6" />
      <span className="font-display text-[17px] tracking-tight text-[color:var(--ink)]">
        Foxes<span className="text-[--accent]">.ai</span>
      </span>
    </Link>
  );
}

export function FoxMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="foxg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFB088" />
          <stop offset="60%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#FF4D00" />
        </linearGradient>
      </defs>
      {/* Stylized F + spark */}
      <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#foxg)" />
      <path
        d="M10 8h12v3.5h-8.5v3.5h7.5v3.5h-7.5V24H10V8Z"
        fill="#0A0A0B"
      />
      <circle cx="24" cy="9" r="2" fill="#0A0A0B" />
    </svg>
  );
}
