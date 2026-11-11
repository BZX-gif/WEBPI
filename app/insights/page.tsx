import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
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
        meta={`${String(insights.length).padStart(2, "0")} essays`}
        title="Notes on making digital work *useful.*"
        text="Short essays on websites, stores, design and the business decisions underneath them. Written from practice, not from invented research."
      />
      <section className="pb-24 sm:pb-36">
        <Container>
          <ul>
            {insights.map((insight) => (
              <Reveal as="li" key={insight.slug} className="border-b border-line">
                <Link
                  href={`/insights/${insight.slug}`}
                  className="row grid items-center gap-x-6 gap-y-4 py-9 sm:py-12 lg:grid-cols-12"
                >
                  <span className="mono row-sub lg:col-span-2">
                    {insight.category}
                    <span className="mt-1.5 block">{insight.dateLabel}</span>
                  </span>
                  <span className="row-shift display-md lg:col-span-5">{insight.title}</span>
                  <span className="row-sub max-w-md lg:col-span-4">
                    {insight.excerpt}
                    <span className="mono mt-3 block">{insight.readTime} read</span>
                  </span>
                  <span className="hidden justify-end lg:col-span-1 lg:flex">
                    <span className="row-arrow flex h-12 w-12 items-center justify-center rounded-full border border-current">
                      <ArrowUpRight size={20} strokeWidth={1.6} aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
      <ClosingCta />
    </>
  );
}
