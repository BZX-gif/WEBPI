import { ChevronRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Tile } from "@/components/ui/Tile";
import { cn } from "@/lib/cn";
import { insights } from "@/data/insights";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Insights",
  description:
    "Notes from WEBPI on websites, e-commerce, design restraint and the decisions that make digital work useful.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes on making digital work useful."
        text="Short essays on websites, stores, design and the business decisions underneath them. Written from practice, not from invented research."
      />
      <section className="bg-mist py-16 sm:py-24">
        <Container>
          <ul className="grid gap-4 sm:gap-5 md:grid-cols-2">
            {insights.map((insight, index) => (
              <Reveal
                as="li"
                key={insight.slug}
                delay={(index % 3) * 90}
                className={index === 0 ? "md:col-span-2" : undefined}
              >
                <Tile
                  href={`/insights/${insight.slug}`}
                  tone="white"
                  className={cn(
                    "flex h-full flex-col p-8 sm:p-10",
                    index === 0 ? "min-h-[22rem] sm:p-14" : "min-h-[20rem]",
                  )}
                >
                  <p className="text-sm text-faint">
                    <span className="font-semibold text-accent">{insight.category}</span>
                    {" · "}
                    {insight.dateLabel}
                  </p>
                  <h2 className={cn("mt-auto pt-12", index === 0 ? "display-lg max-w-3xl" : "display-sm")}>
                    {insight.title}
                  </h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-sub">{insight.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-link">
                    Read · {insight.readTime}
                    <ChevronRight size={17} strokeWidth={1.8} className="arrow-nudge" aria-hidden="true" />
                  </span>
                </Tile>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
