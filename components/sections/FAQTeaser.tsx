import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";

const QS = [
  {
    q: "Is there really no catch with the free audit?",
    a: "No. We run the audit before every demo because it's the only honest way to have the conversation. You keep the report regardless of what happens next.",
  },
  {
    q: "How is this different from an AEO tool we could buy?",
    a: "Tools tell you what's wrong. We fix it. Most AEO tools end up with someone on your team logging in, seeing a gap list, feeling overwhelmed, and never logging in again. We run the measurement and produce the content.",
  },
  {
    q: "How quickly do results show?",
    a: "Most clients see measurable mention-rate lift within 30–60 days of content shipping. We report weekly.",
  },
  {
    q: "How is this different from SEO?",
    a: "Different channel, different signals, different formats. SEO optimizes for Google's ranking algorithm. AEO optimizes for what ChatGPT, Claude, Perplexity, Gemini, and Copilot cite when they generate answers. Some overlap, but the wins come from different work.",
  },
];

export function FAQTeaser() {
  return (
    <section className="relative py-28 border-t border-[color:var(--line)]">
      <Container>
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="headline text-[32px] sm:text-[42px] leading-[1.05] tracking-tight">
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
