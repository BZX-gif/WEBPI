import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
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
        index="04"
        eyebrow="Insights"
        title="Notes on making digital work useful."
        text="Short essays on websites, stores, design and the business decisions underneath them. Written from practice, not from invented research."
      />
      <section className="py-16 lg:py-24">
        <Container>
          <ul className="divide-y divide-line border-y border-line">
            {insights.map((insight) => (
              <li key={insight.slug}>
                <Link
                  href={`/insights/${insight.slug}`}
                  className="group grid gap-4 py-10 lg:grid-cols-12"
                >
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-mute lg:col-span-3">
                    {insight.category} · {insight.dateLabel}
                  </p>
                  <div className="lg:col-span-9">
                    <h2 className="font-display text-2xl font-extrabold group-hover:text-signal sm:text-3xl">
                      {insight.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-soft">
                      {insight.excerpt}
                    </p>
                    <p className="mt-4 text-[0.68rem] uppercase tracking-[0.18em] text-mute">
                      {insight.readTime} read
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
