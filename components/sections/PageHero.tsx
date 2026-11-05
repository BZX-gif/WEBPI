import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function PageHero({
  index,
  eyebrow,
  title,
  text,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="border-b border-line pt-32 pb-16 lg:pt-40 lg:pb-24">
      <Container>
        <SectionLabel index={index}>{eyebrow}</SectionLabel>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {text ? (
          <p className="mt-6 max-w-2xl text-base leading-7 text-soft sm:text-lg">
            {text}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
