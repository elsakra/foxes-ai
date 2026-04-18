import { MODELS } from "@/lib/copy";
import { ModelTile } from "@/components/mockups/ModelIcon";
import type { PostBlock } from "@/lib/posts";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function PostRenderer({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((b, i) => (
        <Block key={i} block={b} />
      ))}
    </div>
  );
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-[16px] sm:text-[17px] leading-[1.75] text-[color:var(--ink-dim)]">
          {block.text}
        </p>
      );
    case "h2": {
      const id = block.id ?? slugify(block.text);
      return (
        <h2
          id={id}
          className="headline mt-10 text-[24px] sm:text-[28px] leading-[1.15] tracking-tight scroll-mt-28"
        >
          {block.text}
        </h2>
      );
    }
    case "h3": {
      const id = block.id ?? slugify(block.text);
      return (
        <h3
          id={id}
          className="font-display mt-6 text-[19px] sm:text-[22px] tracking-tight scroll-mt-28"
        >
          {block.text}
        </h3>
      );
    }
    case "ul":
      return (
        <ul className="list-disc pl-6 space-y-2.5 text-[16px] sm:text-[17px] leading-[1.75] text-[color:var(--ink-dim)] marker:text-[color:var(--accent)]">
          {block.items.map((t, i) => (
            <li key={i} className="pl-1">
              {t}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal pl-6 space-y-2.5 text-[16px] sm:text-[17px] leading-[1.75] text-[color:var(--ink-dim)] marker:text-[color:var(--accent)]">
          {block.items.map((t, i) => (
            <li key={i} className="pl-1">
              {t}
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote className="relative rounded-2xl border-l-2 border-[--accent] bg-white/[0.02] px-6 py-5 text-[17px] leading-relaxed italic text-[color:var(--ink)]">
          &ldquo;{block.text}&rdquo;
          {block.cite && (
            <div className="mt-3 not-italic mono text-[11px] text-[color:var(--ink-mute)]">
              — {block.cite}
            </div>
          )}
        </blockquote>
      );
    case "callout":
      return (
        <aside className="my-4 rounded-2xl border border-[color:var(--line)] bg-gradient-to-b from-[rgba(255,107,53,0.06)] to-transparent p-6 ring-1 ring-inset ring-[--accent]/15">
          {block.title && (
            <div className="eyebrow mb-2 text-[color:var(--accent)]">
              {block.title}
            </div>
          )}
          <p className="text-[15.5px] leading-relaxed text-[color:var(--ink)]">
            {block.text}
          </p>
        </aside>
      );
    case "stat-grid":
      return (
        <div className="my-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {block.stats.map((s, i) => (
            <div
              key={i}
              className="card-border p-5 flex flex-col gap-1"
            >
              <div className="font-display text-[26px] sm:text-[30px] tracking-tight text-[color:var(--ink)]">
                {s.value}
              </div>
              <div className="text-[12.5px] text-[color:var(--ink-dim)]">
                {s.label}
              </div>
              {s.sub && (
                <div className="mt-1 mono text-[10.5px] text-[color:var(--ink-mute)]">
                  {s.sub}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    case "models-strip":
      return (
        <div className="my-6 flex items-center gap-3 flex-wrap rounded-2xl border border-[color:var(--line)] bg-white/[0.02] px-5 py-4">
          <span className="mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--ink-mute)]">
            {block.label ?? "Tracked across"}
          </span>
          <div className="flex items-center gap-2">
            {MODELS.map((m) => (
              <ModelTile
                key={m.id}
                id={m.id}
                color={m.color}
                size={34}
                rounded="lg"
              />
            ))}
          </div>
        </div>
      );
    case "divider":
      return (
        <hr className="my-6 border-none h-px bg-gradient-to-r from-transparent via-[color:var(--line-strong)] to-transparent" />
      );
    default:
      return null;
  }
}

/** Extract H2 blocks from a sections array for a table of contents. */
export function extractTOC(blocks: PostBlock[]) {
  return blocks
    .filter((b) => b.type === "h2")
    .map((b) => {
      if (b.type !== "h2") return null;
      const id = b.id ?? slugify(b.text);
      return { id, text: b.text };
    })
    .filter((x): x is { id: string; text: string } => x !== null);
}
