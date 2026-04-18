import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BRAND } from "@/lib/copy";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Foxes.ai (operated by Lazarus LLC) collects, uses, and protects information from people who visit foxes.ai or book a demo.",
  alternates: { canonical: "/legal/privacy" },
  openGraph: {
    title: "Privacy Policy | Foxes.ai",
    description:
      "How Foxes.ai (operated by Lazarus LLC) collects, uses, and protects information from people who visit foxes.ai or book a demo.",
    url: "/legal/privacy",
  },
};

const EFFECTIVE = "April 17, 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Privacy Policy</>}
        subtitle={`Effective ${EFFECTIVE}. This explains what we collect, why, and the choices you have. Written in plain English — no dark patterns.`}
      />

      <section className="pb-24">
        <Container>
          <article className="prose-body space-y-12 text-[15.5px] leading-relaxed text-[color:var(--ink-dim)]">
            <Block title="1. Who we are">
              <p>
                &ldquo;Foxes.ai&rdquo; is the brand operated by{" "}
                <strong>{BRAND.parent}</strong>, a Wyoming limited liability
                company with a registered office at {BRAND.address}. When this
                policy says &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;Foxes.ai,&rdquo; it means Lazarus LLC. You can reach us
                any time at{" "}
                <a
                  className="text-[color:var(--ink)] underline underline-offset-4"
                  href={`mailto:${BRAND.email}`}
                >
                  {BRAND.email}
                </a>
                .
              </p>
            </Block>

            <Block title="2. What this policy covers">
              <p>
                This policy covers the Foxes.ai marketing website at{" "}
                <strong>{BRAND.domain}</strong> and the demo-booking workflow
                that runs through it. It does not cover how individual paid
                clients are processed under our Master Services Agreement; that
                is handled under a separate Data Processing Addendum available
                on request.
              </p>
            </Block>

            <Block title="3. What we collect">
              <p>We collect three categories of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Information you give us.</strong> When you submit the
                  demo form, request a free audit, or email us, we collect
                  things like your name, work email, company, website URL,
                  competitors, and any notes you share.
                </li>
                <li>
                  <strong>Information collected automatically.</strong> Like
                  most sites, we log standard technical information — IP
                  address, browser type, referring URL, pages visited, and
                  timestamps — to keep the site secure and understand what
                  content is useful.
                </li>
                <li>
                  <strong>Information from third-party tools we use.</strong>{" "}
                  Calendly handles the actual scheduling of demo calls and
                  sends us the meeting time and contact info you provide.
                  Vercel hosts this site and Supabase stores our lead-form
                  submissions.
                </li>
              </ul>
              <p>
                We do not ask for and do not want special-category information
                (health data, government IDs, payment-card numbers, and so on).
                Please don&apos;t send it.
              </p>
            </Block>

            <Block title="4. How we use it">
              <p>We use the information above to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prepare your free AEO audit before the demo call.</li>
                <li>
                  Schedule and conduct the demo call, and follow up afterwards.
                </li>
                <li>
                  Send you the occasional relevant email (a new guide, a
                  category report, etc.) when you&apos;ve opted in.
                </li>
                <li>Operate, secure, and improve the website.</li>
                <li>
                  Comply with legal obligations (for example, responding to a
                  valid subpoena).
                </li>
              </ul>
            </Block>

            <Block title="5. The legal basis for processing">
              <p>
                If you are in the EEA or UK, our legal basis is either (a) your
                consent (which you can withdraw at any time), (b) our
                legitimate interest in running a B2B marketing function, or (c)
                the steps we take at your request before entering into a
                contract.
              </p>
            </Block>

            <Block title="6. Who we share it with">
              <p>
                We sell nothing to anyone. We share information only with the
                vendors we use to run the site and the business, under written
                contracts that limit what they can do with it:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Calendly</strong> — demo scheduling.
                </li>
                <li>
                  <strong>Vercel</strong> — website hosting, basic analytics.
                </li>
                <li>
                  <strong>Supabase</strong> — lead-form storage.
                </li>
                <li>
                  <strong>Google Workspace</strong> — email and documents.
                </li>
                <li>
                  <strong>Our CRM</strong> — to manage sales follow-up.
                </li>
              </ul>
              <p>
                We may also share information if we&apos;re legally required to,
                if we need to protect someone&apos;s safety, or as part of a
                merger, acquisition, or sale of assets (in which case we&apos;ll
                tell you first).
              </p>
            </Block>

            <Block title="7. How long we keep it">
              <p>
                Lead-form and demo data is kept for up to 24 months after your
                last interaction with us, then deleted or anonymized. You can
                ask us to delete it sooner at any time.
              </p>
            </Block>

            <Block title="8. Cookies and analytics">
              <p>
                We use essential cookies to keep the site working, and
                privacy-respecting analytics (through Vercel) to understand
                which pages get read. We do not run third-party ad cookies on
                this site.
              </p>
            </Block>

            <Block title="9. Your rights">
              <p>
                Depending on where you live, you may have the right to access,
                correct, export, or delete your information, or object to how
                we use it. Email{" "}
                <a
                  className="text-[color:var(--ink)] underline underline-offset-4"
                  href={`mailto:${BRAND.email}`}
                >
                  {BRAND.email}
                </a>{" "}
                and we&apos;ll respond within 30 days. California residents can
                make requests under the CCPA/CPRA the same way.
              </p>
            </Block>

            <Block title="10. International transfers">
              <p>
                Lazarus LLC is based in the United States. If you&apos;re
                contacting us from outside the US, your information will be
                processed in the US. Where required, we rely on Standard
                Contractual Clauses with our vendors.
              </p>
            </Block>

            <Block title="11. Security">
              <p>
                We use commercially reasonable measures — TLS in transit,
                encryption at rest, access controls, audit logs — to protect
                information. No system is perfectly secure. If we ever have a
                breach that affects you, we will notify you promptly and
                transparently.
              </p>
            </Block>

            <Block title="12. Children">
              <p>
                The site is built for business buyers and is not directed at
                anyone under 16. We don&apos;t knowingly collect information
                from children.
              </p>
            </Block>

            <Block title="13. Changes to this policy">
              <p>
                We&apos;ll post material updates here and update the effective
                date at the top. If you&apos;ve given us your email, we&apos;ll
                also email you for material changes.
              </p>
            </Block>

            <Block title="14. Contact">
              <p>
                Questions or requests:{" "}
                <a
                  className="text-[color:var(--ink)] underline underline-offset-4"
                  href={`mailto:${BRAND.email}`}
                >
                  {BRAND.email}
                </a>
                .
              </p>
              <p>
                {BRAND.parent}
                <br />
                {BRAND.address}
              </p>
            </Block>

            <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-elev)] p-5 text-[12.5px] text-[color:var(--ink-mute)]">
              Template note: this policy is a plain-language template. Before
              go-live, have it reviewed by your legal counsel against the
              specific laws that apply to you (GDPR, UK GDPR, CCPA/CPRA, state
              privacy acts, etc.).
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
