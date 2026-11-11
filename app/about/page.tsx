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

const chapters = [
  {
    title: "Why we exist",
    paragraphs: [
      "Most businesses do not need a spectacle. They need a digital surface that explains the offer, holds trust, and can take the next step — an enquiry, an order, a conversation. Too many websites fail that simple test.",
      "WEBPI exists to close the gap between a business that is serious and a website that is not. We are a small studio with international standards: the work should feel considered on first sight and remain useful on the hundredth visit.",
      "We are based in India and build for ambitious businesses wherever they operate. We do not pretend to be a large agency. We do intend to be exacting.",
    ],
  },
  {
    title: "Design philosophy",
    paragraphs: [
      "Restraint is a creative position. Colour, type and motion are used like punctuation. If an element does not help someone understand or act, it is removed.",
      "We design mobile-first because that is how most people will arrive. We design for reading, because businesses are asking strangers for time. We design systems, not one-off screens, so the work can grow without falling apart.",
    ],
  },
  {
    title: "Technology",
    paragraphs: [
      "We choose tools that we can stand behind: modern, maintainable web technologies, semantic markup, and performance as a default. The stack should serve the product, not the other way around.",
      "We do not sell technology for its own sake. If a simpler approach will last longer and cost less to keep, that is the recommendation.",
    ],
  },
  {
    title: "How we work",
    paragraphs: [
      "Direct communication. Written scope. Clear milestones. You will know what is being made, when you will see it, and what happens after launch. Quotations and payment stages are agreed before production begins.",
    ],
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        meta="Independent — India"
        title="Small details. *Big ambitions.*"
        text="WEBPI is an independent digital studio. We help businesses establish a strong digital presence through thoughtful design and dependable technology."
      />

      <section className="pb-24 sm:pb-36">
        <Container>
          {chapters.map((chapter, index) => (
            <Reveal
              key={chapter.title}
              className="grid gap-5 border-b border-line py-14 sm:py-20 lg:grid-cols-12"
            >
              <p className="mono text-sub lg:col-span-1">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="display-md lg:col-span-4">{chapter.title}</h2>
              <div className="space-y-5 lg:col-span-6 lg:col-start-7">
                {chapter.paragraphs.map((paragraph, i) => (
                  <p key={i} className={i === 0 ? "lead !text-ink" : "text-sub"}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="rounded-[2rem] bg-ink py-24 text-paper sm:rounded-[3rem] sm:py-36">
        <Container>
          <Reveal>
            <p className="eyebrow">Standards</p>
            <h2 className="display-lg mt-5">
              Four things we hold <span className="em">ourselves to.</span>
            </h2>
          </Reveal>
          <ul className="mt-14 grid border-l border-t border-paper/20 sm:mt-20 sm:grid-cols-2">
            {aboutStandards.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 80}
                className="flex min-h-[20rem] flex-col justify-between gap-10 border-b border-r border-paper/20 p-7 transition-colors duration-500 hover:bg-ink-raised sm:p-9"
              >
                <span className="mono text-accent">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="display-md">{item.title}</h3>
                  <p className="mt-4 text-paper/65">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-24 sm:py-36">
        <Container>
          <Reveal className="grid gap-6 lg:grid-cols-12">
            <p className="eyebrow self-start lg:col-span-3 lg:pt-3">Long-term vision</p>
            <p className="display-lg lg:col-span-9 lg:!text-[clamp(3rem,5.4vw,5.25rem)]">
              To become the studio ambitious businesses think of when they want
              digital work that stands apart and performs.{" "}
              <span className="em">
                Not the largest. The one that is trusted with the first
                impression.
              </span>
            </p>
          </Reveal>

          <Reveal className="mt-20 grid gap-5 rounded-2xl bg-paper-deep p-7 sm:mt-28 sm:rounded-3xl sm:p-12 lg:grid-cols-12">
            <h2 className="display-md lg:col-span-5">Founder &amp; team</h2>
            <p className="lead lg:col-span-6 lg:col-start-7">
              This space is reserved for a verified founder profile and, in
              time, the people who make the work. We will not invent
              biographies to fill the page.
            </p>
          </Reveal>
        </Container>
      </section>

      <ClosingCta title="If this sounds like how you want to work, *write to us.*" />
    </>
  );
}
