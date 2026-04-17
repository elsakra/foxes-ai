import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Tone = "accent" | "white" | "black";

const SRC: Record<Tone, string> = {
  accent: "/brand/icon.png",
  white: "/brand/icon-white.png",
  black: "/brand/icon-black.png",
};

export function FoxMark({
  className,
  tone = "accent",
  size = 24,
}: {
  className?: string;
  tone?: Tone;
  size?: number;
}) {
  return (
    <Image
      src={SRC[tone]}
      alt=""
      width={size * 2}
      height={size * 2}
      priority
      aria-hidden="true"
      className={cn("select-none", className)}
    />
  );
}

export function Logo({
  className,
  tone = "accent",
}: {
  className?: string;
  tone?: Tone;
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5 group", className)}
      aria-label="Foxes.ai home"
    >
      <FoxMark tone={tone} size={22} className="h-[22px] w-[22px]" />
      <span className="font-display text-[17px] tracking-tight text-[color:var(--ink)]">
        Foxes<span className="text-[--accent]">.ai</span>
      </span>
    </Link>
  );
}
