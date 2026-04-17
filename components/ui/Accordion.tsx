"use client";

import * as React from "react";
import * as Acc from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({
  items,
  className,
}: {
  items: { q: string; a: React.ReactNode }[];
  className?: string;
}) {
  return (
    <Acc.Root
      type="single"
      collapsible
      className={cn("divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]", className)}
    >
      {items.map((it, i) => (
        <Acc.Item key={i} value={`item-${i}`} className="group">
          <Acc.Header>
            <Acc.Trigger className="flex w-full items-center justify-between gap-6 py-6 text-left hover:text-[color:var(--ink)] transition-colors">
              <span className="text-[15.5px] sm:text-[17px] font-medium tracking-tight pr-4">
                {it.q}
              </span>
              <ChevronDown className="h-4 w-4 shrink-0 text-[color:var(--ink-mute)] transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-[--accent]" />
            </Acc.Trigger>
          </Acc.Header>
          <Acc.Content className="overflow-hidden data-[state=open]:animate-[accordion-down_300ms_ease-out] data-[state=closed]:animate-[accordion-up_300ms_ease-out]">
            <div className="pb-6 pr-8 text-[14.5px] leading-relaxed text-[color:var(--ink-dim)] max-w-3xl">
              {it.a}
            </div>
          </Acc.Content>
        </Acc.Item>
      ))}
    </Acc.Root>
  );
}
