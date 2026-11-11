import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { getInsight, getNextInsight, insights } from "@/data/insights";
import { pageMetadata } from "@/lib/metadata";
import { ChevronRight } from "lucide-react";
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
    <article className="pb-8 pt-32 sm:pt-40 lg:pt-48">
      <Container size="narrow">
        <p className="rise text-sm text-faint">
          <span className="font-semibold text-accent">{insight.category}</span>
          {" · "}
          {insight.dateLabel} · {insight.readTime} read
        </p>
        <h1 className="display-lg mt-4">
          <span className="line-mask">
            <span style={{ "--d": "80ms" } as React.CSSProperties}>{insight.title}</span>
          </span>
        </h1>
        <p className="rise lead mt-6" style={{ "--d": "260ms" } as React.CSSProperties}>
          {insight.excerpt}
        </p>

        <div
          className="rise prose mt-12 border-t border-hair pt-12"
          style={{ "--d": "380ms" } as React.CSSProperties}
        >
          {insight.content.map((block, index) => {
            if (block.type === "h2") {
              return <h2 key={index}>{block.text}</h2>;
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={index}
                  className="display-sm !my-12 border-l-[3px] border-accent pl-6 text-ink"
                >
                  {block.text}
                </blockquote>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={index} className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3">
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

        {next ? (
          <Link
            href={`/insights/${next.slug}`}
            className="tile group mt-20 block p-8 sm:p-10"
          >
            <p className="text-sm text-faint">Read next</p>
            <p className="display-md mt-2 break-words">{next.title}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-link">
              Continue reading
              <ChevronRight size={17} strokeWidth={1.8} className="arrow-nudge" aria-hidden="true" />
            </span>
          </Link>
        ) : null}
      </Container>

      <ClosingCta />
    </article>
  );
}
