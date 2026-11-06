import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Intro() {
  return (
    <section className="border-t border-line py-24 lg:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <SectionLabel index="02">Studio</SectionLabel>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="max-w-4xl font-display text-[clamp(1.7rem,8vw,2.25rem)] font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Good businesses deserve exceptional digital experiences.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-10 max-w-2xl space-y-6 text-base leading-8 text-soft sm:text-lg">
                <p>
                  A website is not a brochure. It is the place a business meets
                  the people it hopes to serve. WEBPI exists to make that
                  meeting considered, clear and capable of growth.
                </p>
                <p>
                  We bring design, engineering and strategy into one practice —
                  so the work looks intentional, functions with precision, and
                  serves a real commercial purpose.
                </p>
                <p className="font-serif text-2xl italic text-paper">
                  We don&apos;t just build websites. We build digital
                  experiences.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
