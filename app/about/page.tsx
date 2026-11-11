import { ClosingCta } from "@/components/sections/ClosingCta";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Tile } from "@/components/ui/Tile";
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
        title="Small details. Big ambitions."
        text="WEBPI is an independent digital studio. We help businesses establish a strong digital presence through thoughtful design and dependable technology."
      />

      <section className="pb-24 sm:pb-32">
        <Container size="text">
          {chapters.map((chapter) => (
            <Reveal
              key={chapter.title}
              className="grid gap-5 border-t border-hair py-14 sm:py-20 md:grid-cols-12 md:gap-10"
            >
              <h2 className="display-md md:col-span-5">{chapter.title}</h2>
              <div className="space-y-5 md:col-span-7">
                {chapter.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={index === 0 ? "lead !text-ink" : "leading-relaxed text-sub"}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="bg-mist py-24 sm:py-32">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Standards</p>
            <h2 className="display-lg mt-3">Four things we hold ourselves to.</h2>
          </Reveal>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5">
            {aboutStandards.map((item, index) => (
              <Reveal as="li" key={item.title} delay={(index % 2) * 100}>
                <Tile tone="white" className="flex h-full min-h-64 flex-col p-8 sm:p-10">
                  <span className="text-sm tabular-nums text-faint">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display-md mt-auto pt-10">{item.title}</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-sub">{item.text}</p>
                </Tile>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container size="text">
          <Reveal className="text-center">
            <p className="eyebrow">Long-term vision</p>
            <p className="display-md mx-auto mt-4 max-w-3xl !leading-[1.14]">
              To become the studio ambitious businesses think of when they want
              digital work that stands apart and performs.{" "}
              <span className="text-faint">
                Not the largest. The one that is trusted with the first
                impression.
              </span>
            </p>
          </Reveal>

          <Reveal className="mt-20 grid gap-5 border-t border-hair pt-14 sm:mt-28 sm:pt-20 md:grid-cols-12 md:gap-10">
            <h2 className="display-md md:col-span-5">Founder &amp; team</h2>
            <p className="leading-relaxed text-sub md:col-span-7">
              This space is reserved for a verified founder profile and, in
              time, the people who make the work. We will not invent
              biographies to fill the page.
            </p>
          </Reveal>
        </Container>
      </section>

      <ClosingCta title="If this sounds like how you want to work, write to us." />
    </>
  );
}
