import { cn } from "@/lib/utils";

// Placeholder client logos — intentionally understated monochrome.
const LOGOS = [
  "Northwind",
  "Oakmont",
  "Quarry",
  "Fieldnote",
  "Parallel",
  "Stagecoach",
  "Ridgeline",
  "Monograph",
];

export function LogoStrip({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-4 items-center",
        className
      )}
    >
      {LOGOS.map((name) => (
        <div
          key={name}
          className="flex items-center justify-center h-9"
          aria-label={name}
        >
          <span className="font-display text-[16px] tracking-tight text-[color:var(--ink-mute)] opacity-80">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}
