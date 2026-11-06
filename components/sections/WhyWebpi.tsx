import { principles } from "@/data/principles";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function WhyWebpi() {
  return (
    <section className="border-t border-line py-24 lg:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <SectionLabel index="06">Why WEBPI</SectionLabel>
            <h2 className="mt-5 font-display text-[clamp(1.7rem,8vw,2.25rem)] font-extrabold tracking-tight sm:text-5xl">
              Principles we actually work by.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-soft">
              No invented years in business. No borrowed logos. Credibility is
              the work, and the way the work is done.
            </p>
          </div>
          <ul className="lg:col-span-7">
            {principles.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 40} className="border-t border-line py-7">
                <h3 className="font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-7 text-soft">{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
