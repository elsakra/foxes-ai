import { Container } from "@/components/ui/container";
import { LogoStrip } from "@/components/mockups/LogoStrip";

export function LogosBand() {
  return (
    <section className="py-14 border-y border-[color:var(--line)] bg-[color:var(--bg-elev)]/40">
      <Container size="wide">
        <p className="text-center text-[12px] mono tracking-widest text-[color:var(--ink-mute)] uppercase mb-8">
          Trusted by marketing teams at
        </p>
        <LogoStrip />
      </Container>
    </section>
  );
}
