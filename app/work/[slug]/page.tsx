import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
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

  return (
    <>
      <section className="pt-32 pb-10 lg:pt-40">
        <Container>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-signal">
            {project.category} · {project.year}
          </p>
          <h1 className="mt-5 font-display text-[clamp(2rem,9vw,3rem)] font-extrabold tracking-tight sm:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-soft">{project.overview}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={project.liveUrl} external arrow>
              Visit live project
            </Button>
            <Button href="/start" variant="secondary">
              Start a similar project
            </Button>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-mute">{project.role}</p>
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <div className="relative aspect-[16/9] overflow-hidden bg-raised">
            <Image
              src={project.cover}
              alt={project.images[0]?.alt ?? project.title}
              fill
              priority
              sizes="(min-width: 1024px) 1200px, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <article className="space-y-12 lg:col-span-8">
              <Block title="Business context" text={project.context} />
              <Block title="Objective" text={project.objective} />
              <Block title="Design direction" text={project.direction} />
              <div>
                <h2 className="font-display text-2xl font-bold">Features developed</h2>
                <ul className="mt-5 divide-y divide-line border-y border-line">
                  {project.features.map((item) => (
                    <li key={item} className="py-3 text-sm leading-6 text-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Block title="Responsive experience" text={project.responsive} />
              <div>
                <h2 className="font-display text-2xl font-bold">Technical implementation</h2>
                <p className="mt-3 text-sm text-mute">
                  Only the stack we can verify from the live project is listed.
                </p>
                <ul className="mt-5 divide-y divide-line border-y border-line">
                  {project.technical.map((item) => (
                    <li key={item} className="py-3 text-sm text-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            <aside className="lg:col-span-4">
              <div className="border border-line p-6 lg:sticky lg:top-28">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-mute">
                  Project
                </p>
                <dl className="mt-4 space-y-4 text-sm">
                  <div>
                    <dt className="text-mute">Category</dt>
                    <dd className="mt-1">{project.category}</dd>
                  </div>
                  <div>
                    <dt className="text-mute">Year</dt>
                    <dd className="mt-1">{project.year}</dd>
                  </div>
                  <div>
                    <dt className="text-mute">Live</dt>
                    <dd className="mt-1">
                      <a
                        href={project.liveUrl}
                        className="inline-flex min-h-9 items-center gap-1 hover:text-signal"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open site
                        <ArrowUpRight size={14} />
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {project.images.map((image) => (
              <div key={image.src} className="relative aspect-[4/5] overflow-hidden bg-raised">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {next && next.slug !== project.slug ? (
        <section className="border-t border-line py-16">
          <Container>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-mute">
              Next project
            </p>
            <Link href={`/work/${next.slug}`} className="mt-4 block font-display text-4xl font-extrabold hover:text-signal">
              {next.title}
            </Link>
          </Container>
        </section>
      ) : (
        <section className="border-t border-line py-16">
          <Container>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-mute">
              Archive
            </p>
            <p className="mt-4 max-w-xl text-soft">
              This is currently the only published case study. Future work will
              appear here as it is completed.
            </p>
            <Link href="/work" className="mt-6 inline-flex min-h-11 items-center text-sm uppercase tracking-[0.18em] hover:text-signal">
              All work
            </Link>
          </Container>
        </section>
      )}

      <ClosingCta title="Need a store or a site with this level of care?" />
    </>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold">{title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-8 text-soft">{text}</p>
    </div>
  );
}
