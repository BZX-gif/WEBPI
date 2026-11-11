import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollScene } from "@/components/ui/ScrollScene";
import { getNextProject, getProject, projects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: project.title,
    description: project.summary,
    path: `/work/${project.slug}`,
    image: project.cover,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(project.slug);

  const host = project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const facts = [
    { label: "Category", value: project.category },
    { label: "Year", value: project.year },
    { label: "Role", value: project.role },
  ];

  return (
    <>
      <section className="pt-28 sm:pt-36">
        <Container>
          <div className="rise flex items-center justify-between gap-4 border-b border-line pb-4">
            <Link href="/work" className="eyebrow transition-colors duration-300 hover:text-accent-ink">
              Work / Case study
            </Link>
            <p className="mono text-sub">
              {project.category} · {project.year}
            </p>
          </div>

          <h1 className="display-xl mt-8 sm:mt-10">
            <span className="line-mask">
              <span style={{ "--d": "100ms" } as React.CSSProperties}>{project.title}</span>
            </span>
          </h1>

          <div className="mt-10 grid gap-10 sm:mt-14 lg:grid-cols-12">
            <div
              className="rise order-2 flex flex-wrap items-center gap-x-7 gap-y-3 self-end lg:order-none lg:col-span-5"
              style={{ "--d": "480ms" } as React.CSSProperties}
            >
              <Button href={project.liveUrl} external>
                Visit live project
              </Button>
              <Button href="/start" variant="link">
                Start a similar project
              </Button>
            </div>
            <p
              className="rise lead lg:col-span-6 lg:col-start-7"
              style={{ "--d": "380ms" } as React.CSSProperties}
            >
              {project.overview}
            </p>
          </div>
        </Container>
      </section>

      <section className="pt-14 sm:pt-20">
        <Container>
          <ScrollScene start={1} end={-0.6}>
            <div className="rise relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink sm:aspect-[16/8] sm:rounded-3xl">
              <div className="scene-parallax absolute inset-0">
                <Image
                  src={project.cover}
                  alt={project.images[0]?.alt ?? project.title}
                  fill
                  priority
                  sizes="(min-width: 1520px) 1440px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollScene>

          <dl className="grid border-b border-line sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="border-t border-line py-5 sm:border-t-0 sm:pr-6 sm:pt-6">
                <dt className="mono text-sub">{fact.label}</dt>
                <dd className="mt-2 text-lg leading-snug">{fact.value}</dd>
              </div>
            ))}
            <div className="border-t border-line py-5 sm:border-t-0 sm:pt-6">
              <dt className="mono text-sub">Live</dt>
              <dd className="mt-2 text-lg leading-snug">
                <a
                  href={project.liveUrl}
                  className="break-all underline decoration-1 underline-offset-4 transition-colors duration-300 hover:text-accent-ink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {host}
                </a>
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      <section className="py-20 sm:py-32">
        <Container>
          <Block index="01" title="Business context" text={project.context} />
          <Block index="02" title="Objective" text={project.objective} />
          <Block index="03" title="Design direction" text={project.direction} />
        </Container>
      </section>

      <section className="rounded-[2rem] bg-ink py-20 text-paper sm:rounded-[3rem] sm:py-32">
        <Container>
          <Reveal>
            <p className="eyebrow">Features</p>
            <h2 className="display-lg mt-5">
              What was <span className="em">built.</span>
            </h2>
          </Reveal>
          <ol className="mt-12 grid border-t border-paper/20 sm:mt-16 md:grid-cols-2 md:gap-x-10">
            {project.features.map((item, index) => (
              <Reveal
                as="li"
                key={item}
                delay={(index % 2) * 80}
                className="flex items-baseline gap-5 border-b border-paper/20 py-6"
              >
                <span className="mono text-accent">{String(index + 1).padStart(2, "0")}</span>
                <span className="display-sm">{item}</span>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20 sm:py-32">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {project.images.map((image, index) => (
              <Reveal
                key={image.src}
                delay={index * 120}
                className="reveal-clip relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink sm:rounded-3xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </Reveal>
            ))}
          </div>

          <div className="mt-20 sm:mt-32">
            <Block index="04" title="Responsive experience" text={project.responsive} />
            <Reveal className="grid gap-4 border-t border-line py-10 sm:py-14 lg:grid-cols-12">
              <p className="mono text-sub lg:col-span-1">05</p>
              <h2 className="display-md lg:col-span-4">Technical implementation</h2>
              <div className="lg:col-span-6 lg:col-start-7">
                <ul className="flex flex-wrap gap-2">
                  {project.technical.map((item) => (
                    <li key={item} className="rounded-full border border-ink/25 px-4 py-2 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-faint">
                  Only the stack we can verify from the live project is listed.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 border-t border-ink pt-10">
            {next && next.slug !== project.slug ? (
              <Link href={`/work/${next.slug}`} className="group block">
                <p className="mono text-sub">Next project</p>
                <p className="display-lg mt-3 transition-colors duration-300 group-hover:text-accent">
                  {next.title}
                </p>
              </Link>
            ) : (
              <div className="grid gap-4 lg:grid-cols-12">
                <p className="mono text-sub lg:col-span-5">Archive</p>
                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="lead">
                    This is currently the only published case study. Future
                    work will appear here as it is completed.
                  </p>
                  <Button href="/work" variant="link" className="mt-4">
                    All work
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      <ClosingCta title="Need a store or a site with this level of *care?*" />
    </>
  );
}

function Block({ index, title, text }: { index: string; title: string; text: string }) {
  return (
    <Reveal className="grid gap-4 border-t border-line py-10 sm:py-14 lg:grid-cols-12">
      <p className="mono text-sub lg:col-span-1">{index}</p>
      <h2 className="display-md lg:col-span-4">{title}</h2>
      <p className="lead lg:col-span-6 lg:col-start-7">{text}</p>
    </Reveal>
  );
}
