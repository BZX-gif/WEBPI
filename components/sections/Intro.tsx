import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollScene } from "@/components/ui/ScrollScene";

const statement =
  "A website is not a brochure. It is the place a business meets the people it hopes to serve. WEBPI exists to make that meeting considered, clear and capable of growth.";

export function Intro() {
  const words = statement.split(" ");

  return (
    <section className="py-28 sm:py-36 lg:py-48">
      <Container size="text">
        <p className="eyebrow">The studio</p>

        {/* Words come into focus one by one as the passage is scrolled. */}
        <ScrollScene start={0.85} end={0.1} className="mt-6">
          <h2
            className="display-md !leading-[1.14]"
            style={{ "--n": words.length } as React.CSSProperties}
          >
            {words.map((word, index) => (
              <span key={index} className="scene-word" style={{ "--i": index } as React.CSSProperties}>
                {word}{" "}
              </span>
            ))}
          </h2>
        </ScrollScene>

        <div className="mt-16 grid gap-10 sm:mt-20 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="lead">
              We bring design, engineering and strategy into one practice — so
              the work looks intentional, functions with precision, and serves
              a real commercial purpose.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="display-sm">
              We don&apos;t just build websites.{" "}
              <span className="text-gradient">We build digital experiences.</span>
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
