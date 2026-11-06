import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Process() {
  return (
    <section className="border-t border-line py-24 lg:py-36">
      <Container>
        <SectionLabel index="05">Process</SectionLabel>
        <h2 className="mt-5 max-w-3xl font-display text-[clamp(1.7rem,8vw,2.25rem)] font-extrabold tracking-tight sm:text-5xl">
          From first conversation to a product people can use.
        </h2>

        <ol className="mt-16 grid gap-0 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.number}
              delay={index * 60}
              className="border-t border-line py-10 pr-8 md:border-r md:px-8 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(-n+3)]:border-t lg:[&:nth-child(n+4)]:border-b-0"
            >
              <p className="font-mono text-[0.7rem] text-signal">{step.number}</p>
              <h3 className="mt-4 font-display text-2xl font-bold">{step.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-soft">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
