import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BRAND } from "@/lib/copy";

export const metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply when you visit foxes.ai or book a demo. Written in plain English.",
  alternates: { canonical: "/legal/terms" },
  openGraph: {
    title: "Terms of Service | Foxes.ai",
    description:
      "The terms that apply when you visit foxes.ai or book a demo. Written in plain English.",
    url: "/legal/terms",
  },
};

const EFFECTIVE = "April 17, 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Terms of Service</>}
        subtitle={`Effective ${EFFECTIVE}. These terms apply when you use foxes.ai. Paid client work is governed by a separate Master Services Agreement.`}
      />

      <section className="pb-24">
        <Container>
          <article className="space-y-12 text-[15.5px] leading-relaxed text-[color:var(--ink-dim)]">
            <Block title="1. Agreement">
              <p>
                By accessing or using{" "}
                <strong>{BRAND.domain}</strong> (&ldquo;the Site&rdquo;), you
                agree to these Terms and the Privacy Policy. &ldquo;We,&rdquo;
                &ldquo;us,&rdquo; and &ldquo;Foxes.ai&rdquo; refer to{" "}
                <strong>{BRAND.parent}</strong>, a Wyoming limited liability
                company with a registered office at {BRAND.address}. If you
                don&apos;t agree, please don&apos;t use the Site.
              </p>
            </Block>

            <Block title="2. What you can do with the Site">
              <p>
                You can read everything, share links, quote short portions with
                attribution, and book a demo. You can&apos;t scrape the Site
                systematically, reverse-engineer it, remove our brand, or use
                it to train a foundation model without written permission.
              </p>
            </Block>

            <Block title="3. The free audit and demo">
              <p>
                The free audit is offered in good faith as a pre-demo
                deliverable. You keep the report after the call whether you
                hire us or not. The audit is provided &ldquo;as-is&rdquo; and
                is meant to inform strategic thinking — not to be relied upon
                as investment, legal, or other professional advice.
              </p>
              <p>
                We reserve the right to decline requests from competitors,
                automated sign-ups, or anyone who misrepresents themselves on
                the demo form.
              </p>
            </Block>

            <Block title="4. Intellectual property">
              <p>
                The Site (including all copy, design, logos, and code) is owned
                by us or our licensors. The Foxes.ai wordmark and fox icon are
                our trademarks. Your feedback about the Site or our services
                can be used by us without compensation.
              </p>
            </Block>

            <Block title="5. Third-party links and services">
              <p>
                The Site links to third-party tools (Calendly, Vercel, Supabase,
                others). Their terms apply when you use them. We&apos;re not
                responsible for their conduct.
              </p>
            </Block>

            <Block title="6. Disclaimers">
              <p>
                THE SITE IS PROVIDED ON AN &ldquo;AS-IS&rdquo; AND
                &ldquo;AS-AVAILABLE&rdquo; BASIS. TO THE EXTENT PERMITTED BY
                LAW, WE DISCLAIM ALL WARRANTIES — EXPRESS, IMPLIED, STATUTORY
                — INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p>
                Search and AI-answer landscapes change quickly. Nothing on the
                Site is a guarantee of a particular marketing outcome.
              </p>
            </Block>

            <Block title="7. Limitation of liability">
              <p>
                TO THE EXTENT PERMITTED BY LAW, IN NO EVENT WILL LAZARUS LLC BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUE, WHETHER
                INCURRED DIRECTLY OR INDIRECTLY, ARISING OUT OF YOUR USE OF OR
                INABILITY TO USE THE SITE.
              </p>
              <p>
                Our total liability to you for any claim arising from your use
                of the Site is limited to one hundred US dollars (US$100).
              </p>
            </Block>

            <Block title="8. Governing law and disputes">
              <p>
                These Terms are governed by the laws of the State of Wyoming,
                without regard to its conflict-of-laws rules. Any dispute
                arising from these Terms or your use of the Site will be
                resolved in the state or federal courts located in Sheridan
                County, Wyoming, and you consent to personal jurisdiction
                there.
              </p>
            </Block>

            <Block title="9. Changes">
              <p>
                We may update these Terms from time to time. Material changes
                will be posted here with a new effective date. Continuing to
                use the Site after changes means you accept them.
              </p>
            </Block>

            <Block title="10. Contact">
              <p>
                {BRAND.parent}
                <br />
                {BRAND.address}
                <br />
                <a
                  className="text-[color:var(--ink)] underline underline-offset-4"
                  href={`mailto:${BRAND.email}`}
                >
                  {BRAND.email}
                </a>
              </p>
            </Block>

            <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-elev)] p-5 text-[12.5px] text-[color:var(--ink-mute)]">
              Template note: these terms are a plain-language template. Before
              go-live, have them reviewed by your legal counsel.
            </div>
          </article>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-display text-[22px] tracking-tight text-[color:var(--ink)]">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
