import { ClosingCta } from "@/components/sections/ClosingCta";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { aboutStandards } from "@/data/principles";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "WEBPI is an independent digital studio helping businesses establish a strong digital presence through thoughtful design and dependable technology.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="03"
        eyebrow="About"
        title="Small details. Big ambitions."
        text="WEBPI is an independent digital studio. We help businesses establish a strong digital presence through thoughtful design and dependable technology."
      />

      <section className="border-b border-line py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <h2 className="font-display text-3xl font-extrabold lg:col-span-4">
              Why we exist
            </h2>
            <div className="max-w-2xl space-y-5 text-base leading-8 text-soft lg:col-span-8">
              <p>
                Most businesses do not need a spectacle. They need a digital
                surface that explains the offer, holds trust, and can take the
                next step — an enquiry, an order, a conversation. Too many
                websites fail that simple test.
              </p>
              <p>
                WEBPI exists to close the gap between a business that is serious
                and a website that is not. We are a small studio with
                international standards: the work should feel considered on
                first sight and remain useful on the hundredth visit.
              </p>
              <p>
                We are based in India and build for ambitious businesses
                wherever they operate. We do not pretend to be a large agency.
                We do intend to be exacting.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <h2 className="font-display text-3xl font-extrabold lg:col-span-4">
              Design philosophy
            </h2>
            <div className="max-w-2xl space-y-5 text-base leading-8 text-soft lg:col-span-8">
              <p>
                Restraint is a creative position. Colour, type and motion are
                used like punctuation. If an element does not help someone
                understand or act, it is removed.
              </p>
              <p>
                We design mobile-first because that is how most people will
                arrive. We design for reading, because businesses are asking
                strangers for time. We design systems, not one-off screens,
                so the work can grow without falling apart.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <h2 className="font-display text-3xl font-extrabold lg:col-span-4">
              Technology
            </h2>
            <div className="max-w-2xl space-y-5 text-base leading-8 text-soft lg:col-span-8">
              <p>
                We choose tools that we can stand behind: modern, maintainable
                web technologies, semantic markup, and performance as a default.
                The stack should serve the product, not the other way around.
              </p>
              <p>
                We do not sell technology for its own sake. If a simpler
                approach will last longer and cost less to keep, that is the
                recommendation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 lg:py-28">
        <Container>
          <h2 className="font-display text-3xl font-extrabold">How we work</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-soft">
            Direct communication. Written scope. Clear milestones. You will
            know what is being made, when you will see it, and what happens
            after launch. Quotations and payment stages are agreed before
            production begins.
          </p>
        </Container>
      </section>

      <section className="border-b border-line py-20 lg:py-28">
        <Container>
          <h2 className="font-display text-3xl font-extrabold">Standards</h2>
          <ul className="mt-12 grid gap-0 md:grid-cols-2">
            {aboutStandards.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 50}
                className="border-t border-line py-8 md:px-8 md:[&:nth-child(2n)]:border-l"
              >
                <h3 className="font-display text-xl font-bold uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-soft">{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-line py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <h2 className="font-display text-3xl font-extrabold lg:col-span-4">
              Long-term vision
            </h2>
            <div className="max-w-2xl space-y-5 text-base leading-8 text-soft lg:col-span-8">
              <p>
                To become the studio ambitious businesses think of when they
                want digital work that stands apart and performs. Not the
                largest. The one that is trusted with the first impression.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-mute">
            People
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold">
            Founder &amp; team
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-soft">
            This space is reserved for a verified founder profile and, in time,
            the people who make the work. We will not invent biographies to fill
            the page.
          </p>
        </Container>
      </section>

      <ClosingCta title="If this sounds like how you want to work, write to us." />
    </>
  );
}
