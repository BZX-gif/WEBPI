import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { getInsight, getNextInsight, insights } from "@/data/insights";
import { pageMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/Button";

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
    <article className="pt-32 pb-24 lg:pt-40">
      <Container>
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-signal">
          {insight.category} · {insight.dateLabel} · {insight.readTime}
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl">
          {insight.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-soft">{insight.excerpt}</p>

        <div className="mt-16 max-w-2xl space-y-8">
          {insight.content.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={index}
                  className="pt-4 font-display text-2xl font-bold"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={index}
                  className="border-l border-signal pl-6 font-serif text-2xl italic leading-snug text-paper"
                >
                  {block.text}
                </blockquote>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={index} className="space-y-2 pl-1">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-7 text-soft">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-signal" />
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="text-base leading-8 text-soft">
                {block.text}
              </p>
            );
          })}
        </div>

        {next ? (
          <div className="mt-20 border-t border-line pt-10">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-mute">
              Next
            </p>
            <Link
              href={`/insights/${next.slug}`}
              className="mt-3 block font-display text-3xl font-extrabold hover:text-signal"
            >
              {next.title}
            </Link>
          </div>
        ) : null}

        <div className="mt-16">
          <Button href="/start" variant="secondary">
            Start a Project
          </Button>
        </div>
      </Container>
    </article>
  );
}
