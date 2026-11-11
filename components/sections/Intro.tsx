import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollScene } from "@/components/ui/ScrollScene";

const statement =
  "A website is not a brochure. It is the place a business meets the people it hopes to serve. WEBPI exists to make that meeting considered, clear and capable of growth.";

export function Intro() {
  const words = statement.split(" ");

  return (
    <section>
      <Marquee
        items={services.map((service) => service.title)}
        speed={48}
        className="mt-14 border-y border-line py-5 sm:mt-20 sm:py-7"
        itemClassName="font-serif text-[clamp(2rem,4.6vw,4rem)] leading-none tracking-[-0.02em]"
      />

      <Container className="py-24 sm:py-36 lg:py-44">
        <div className="grid gap-8 lg:grid-cols-12">
          <p className="eyebrow self-start lg:col-span-3 lg:pt-3">The studio</p>

          <div className="lg:col-span-9">
            {/* Words come into focus one by one as the passage is scrolled. */}
            <ScrollScene start={0.85} end={0.1}>
              <h2
                className="display-md !leading-[1.05]"
                style={{ "--n": words.length } as React.CSSProperties}
              >
                {words.map((word, index) => (
                  <span key={index} className="scene-word" style={{ "--i": index } as React.CSSProperties}>
                    {word}{" "}
                  </span>
                ))}
              </h2>
            </ScrollScene>

            <div className="mt-14 grid gap-8 border-t border-line pt-8 sm:mt-20 md:grid-cols-2 md:gap-14">
              <Reveal>
                <p className="lead">
                  We bring design, engineering and strategy into one practice —
                  so the work looks intentional, functions with precision, and
                  serves a real commercial purpose.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p className="display-sm">
                  We don&apos;t just build websites.{" "}
                  <span className="em">We build digital experiences.</span>
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
