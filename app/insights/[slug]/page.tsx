import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { getInsight, getNextInsight, insights } from "@/data/insights";
import { pageMetadata } from "@/lib/metadata";
import { ClosingCta } from "@/components/sections/ClosingCta";

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return pageMetadata({
    title: insight.title,
    description: insight.excerpt,
    path: `/insights/${insight.slug}`,
  });
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();
  const next = getNextInsight(insight.slug);

  return (
    <article className="pt-28 sm:pt-36">
      <Container>
        <div className="rise flex items-center justify-between gap-4 border-b border-line pb-4">
          <Link href="/insights" className="eyebrow transition-colors duration-300 hover:text-accent-ink">
            Insights / {insight.category}
          </Link>
          <p className="mono text-sub">
            {insight.dateLabel} · {insight.readTime} read
          </p>
        </div>

        <h1 className="display-lg mt-8 max-w-[16ch] sm:mt-12">
          <span className="line-mask">
            <span style={{ "--d": "100ms" } as React.CSSProperties}>{insight.title}</span>
          </span>
        </h1>

        <div className="mt-12 grid gap-10 border-t border-line pt-10 sm:mt-16 lg:grid-cols-12">
          <p
            className="rise display-sm lg:col-span-4"
            style={{ "--d": "380ms" } as React.CSSProperties}
          >
            {insight.excerpt}
          </p>

          <div
            className="rise prose lg:col-span-7 lg:col-start-6"
            style={{ "--d": "480ms" } as React.CSSProperties}
          >
            {insight.content.map((block, index) => {
              if (block.type === "h2") {
                return <h2 key={index}>{block.text}</h2>;
              }
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={index}
                    className="display-md !my-14 border-l-2 border-accent pl-6 italic text-ink"
                  >
                    {block.text}
                  </blockquote>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={index}>
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3 border-b border-line py-3 first:border-t">
                        <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return <p key={index}>{block.text}</p>;
            })}
          </div>
        </div>

        {next ? (
          <Link
            href={`/insights/${next.slug}`}
            className="group mt-24 block border-t border-ink pt-10 sm:mt-32"
          >
            <p className="mono text-sub">Read next</p>
            <p className="display-lg mt-3 max-w-[18ch] break-words transition-colors duration-300 group-hover:text-accent">
              {next.title}
            </p>
          </Link>
        ) : null}
      </Container>

      <div className="mt-24 sm:mt-32">
        <ClosingCta />
      </div>
    </article>
  );
}
