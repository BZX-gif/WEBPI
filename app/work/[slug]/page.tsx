import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Button } from "@/components/ui/Button";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
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
      <section className="pt-32 sm:pt-40 lg:pt-48">
        <Container size="text" className="text-center">
          <p className="rise eyebrow">
            {project.category} · {project.year}
          </p>
          <h1 className="display-xl mt-4">
            <span className="line-mask">
              <span style={{ "--d": "80ms" } as React.CSSProperties}>{project.title}</span>
            </span>
          </h1>
          <p
            className="rise lead mx-auto mt-6 max-w-3xl"
            style={{ "--d": "260ms" } as React.CSSProperties}
          >
            {project.overview}
          </p>
          <div
            className="rise mt-8 flex flex-col items-center justify-center gap-x-7 gap-y-2 sm:flex-row"
            style={{ "--d": "380ms" } as React.CSSProperties}
          >
            <Button href={project.liveUrl} external size="lg">
              Visit live project
            </Button>
            <Button href="/start" variant="link">
              Start a similar project
            </Button>
          </div>
        </Container>
      </section>

      <section className="pt-14 sm:pt-20">
        <Container>
          <ScrollScene start={0.95} end={0.18}>
            <div
              className="rise"
              style={{ "--d": "520ms" } as React.CSSProperties}
            >
              <BrowserFrame url={host} className="scene-scale">
                <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                  <Image
                    src={project.cover}
                    alt={project.images[0]?.alt ?? project.title}
                    fill
                    priority
                    sizes="(min-width: 1240px) 1176px, 100vw"
                    className="object-cover"
                  />
                </div>
              </BrowserFrame>
            </div>
          </ScrollScene>

          <dl className="mt-10 grid gap-x-8 gap-y-6 border-b border-hair pb-10 sm:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm text-faint">{fact.label}</dt>
                <dd className="mt-1 font-medium">{fact.value}</dd>
              </div>
            ))}
            <div>
              <dt className="text-sm text-faint">Live</dt>
              <dd className="mt-1 font-medium">
                <a
                  href={project.liveUrl}
                  className="text-link hover:underline"
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

      <section className="py-20 sm:py-28">
        <Container size="text" className="grid gap-16 sm:gap-20">
          <Block title="Business context" text={project.context} />
          <Block title="Objective" text={project.objective} />
          <Block title="Design direction" text={project.direction} />
        </Container>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <Container>
          <Reveal>
            <p className="eyebrow">Features</p>
            <h2 className="display-lg mt-3">What was built.</h2>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {project.features.map((item, index) => (
              <Reveal
                as="li"
                key={item}
                delay={(index % 3) * 80}
                className="tile tile-white flex min-h-40 flex-col justify-between gap-8 p-7"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Check size={18} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <p className="text-lg font-medium leading-snug tracking-[-0.015em]">{item}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {project.images.map((image, index) => (
              <Reveal
                key={image.src}
                delay={index * 100}
                className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-night-raised"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="media-zoom object-cover"
                />
              </Reveal>
            ))}
          </div>
        </Container>

        <Container size="text" className="mt-20 grid gap-16 sm:mt-28 sm:gap-20">
          <Block title="Responsive experience" text={project.responsive} />
          <Reveal className="grid gap-4 md:grid-cols-12 md:gap-10">
            <h2 className="display-sm md:col-span-4">Technical implementation</h2>
            <div className="md:col-span-8">
              <p className="text-sm text-faint">
                Only the stack we can verify from the live project is listed.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technical.map((item) => (
                  <li key={item} className="rounded-full bg-mist px-4 py-2 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-hair py-16">
        <Container size="text">
          {next && next.slug !== project.slug ? (
            <>
              <p className="text-sm text-faint">Next project</p>
              <Link
                href={`/work/${next.slug}`}
                className="display-lg mt-2 block transition-colors duration-300 hover:text-accent"
              >
                {next.title}
              </Link>
            </>
          ) : (
            <>
              <p className="text-sm text-faint">Archive</p>
              <p className="lead mt-2 max-w-xl">
                This is currently the only published case study. Future work
                will appear here as it is completed.
              </p>
              <Button href="/work" variant="link" className="mt-3">
                All work
              </Button>
            </>
          )}
        </Container>
      </section>

      <ClosingCta title="Need a store or a site with this level of care?" />
    </>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <Reveal className="grid gap-4 md:grid-cols-12 md:gap-10">
      <h2 className="display-sm md:col-span-4">{title}</h2>
      <p className="lead md:col-span-8">{text}</p>
    </Reveal>
  );
}
