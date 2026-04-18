import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";

export const QS = [
  {
    q: "Is there really no catch with the free audit?",
    a: "No catch. We'd rather show you real work on your brand than try to sell you. You keep the report either way.",
  },
  {
    q: "How is this different from software for this?",
    a: "Software shows you what's wrong. We fix it. Most people buy one of these tools, log in once, see a huge to-do list, and never log back in. We actually do the work.",
  },
  {
    q: "How quickly do results show?",
    a: "Most clients start getting named more often within 30 to 60 days of us publishing content. You'll see it in your weekly report.",
  },
  {
    q: "How is this different from SEO?",
    a: "SEO gets you ranked on Google. We get you recommended by ChatGPT, Claude, Perplexity, Gemini, and Copilot. They're two different games, and what works for one doesn't always work for the other.",
  },
];

export function FAQTeaser() {
  return (
    <section className="relative py-28 border-t border-[color:var(--line)]">
      <Container>
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="headline text-[28px] sm:text-[36px] md:text-[42px] leading-[1.05] tracking-tight">
            Frequently asked.
          </h2>
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-[13.5px] text-[color:var(--ink-dim)] hover:text-[color:var(--ink)]"
          >
            See all FAQs <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {QS.map((item) => (
            <div
              key={item.q}
              className="card-border p-6 hover:bg-white/[0.02] transition-colors"
            >
              <div className="text-[15px] font-medium tracking-tight text-[color:var(--ink)]">
                {item.q}
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-[color:var(--ink-dim)]">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
