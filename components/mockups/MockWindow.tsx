import { cn } from "@/lib/utils";

export function MockWindow({
  url,
  children,
  className,
  accessory,
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
  accessory?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {/* chrome */}
      <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-[color:var(--line)] bg-gradient-to-b from-white/[0.04] to-transparent">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/80" />
        </div>
        <div className="mx-auto flex items-center gap-1.5 rounded-md bg-black/30 px-2.5 py-1 text-[11px] mono text-[color:var(--ink-mute)]">
          <LockIcon />
          <span className="truncate max-w-[220px] sm:max-w-none">{url}</span>
        </div>
        {accessory ? <div className="ml-auto">{accessory}</div> : <div className="w-10" />}
      </div>
      {children}
    </div>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden>
      <path
        fill="currentColor"
        d="M6 1.5a2.2 2.2 0 0 0-2.2 2.2V5H3.3a.8.8 0 0 0-.8.8v3.9c0 .4.3.8.8.8h5.4a.8.8 0 0 0 .8-.8V5.8a.8.8 0 0 0-.8-.8H8.2V3.7A2.2 2.2 0 0 0 6 1.5Zm1.3 3.5H4.7V3.7a1.3 1.3 0 0 1 2.6 0V5Z"
      />
    </svg>
  );
}
