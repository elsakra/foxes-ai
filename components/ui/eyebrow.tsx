import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  dot = true,
}: {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}) {
  return (
    <div className={cn("eyebrow inline-flex items-center gap-2", className)}>
      {dot && (
        <span className="relative inline-flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[--accent] opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[--accent]" />
        </span>
      )}
      {children}
    </div>
  );
}
