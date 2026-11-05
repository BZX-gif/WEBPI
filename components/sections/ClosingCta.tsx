import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ClosingCta({
  eyebrow = "Next",
  title = "Have something ambitious in mind?",
  text = "Tell us what you are building. If it is a fit, we will reply with a clear first conversation — not a brochure.",
  button = "Let's Build It.",
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  button?: string;
}) {
  return (
    <section className="border-t border-line py-24 lg:py-36">
      <Container>
        <Reveal>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-signal">
            {eyebrow}
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-soft">{text}</p>
          <div className="mt-10">
            <Button href="/start">{button}</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
