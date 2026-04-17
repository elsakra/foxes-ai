import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 overflow-hidden noise">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(255,107,53,0.2),transparent_70%)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-40 mask-fade-b" />
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="headline mt-4 text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.02] tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-[16px] sm:text-[18px] leading-relaxed text-[color:var(--ink-dim)] max-w-2xl">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
