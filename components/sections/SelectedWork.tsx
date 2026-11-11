import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollScene } from "@/components/ui/ScrollScene";

export function SelectedWork() {
  const project = projects[0];
  const detail = project.images[1];

  return (
    <section className="rounded-t-[2rem] bg-ink py-24 text-paper sm:rounded-t-[3rem] sm:py-36">
      <Container>
        <Reveal className="flex flex-col gap-6 border-b border-paper/15 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="display-lg mt-5">
              Work that can be <span className="em">visited.</span>
            </h2>
          </div>
          <p className="max-w-xs text-paper/60 lg:pb-3">
            We show only projects that exist. The archive is small on purpose.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-12">
          <ScrollScene start={1} end={-0.6} className="lg:col-span-8">
            <Link
              href={`/work/${project.slug}`}
              data-cursor="View"
              className="group relative block overflow-hidden rounded-2xl bg-ink-raised sm:rounded-3xl"
              aria-label={`${project.title} — view the case study`}
            >
              <div className="relative aspect-[4/5] sm:aspect-[4/3]">
                <div className="scene-parallax absolute inset-0">
                  <Image
                    src={project.cover}
                    alt={project.images[0]?.alt ?? project.title}
                    fill
                    sizes="(min-width: 1024px) 66vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Link>
          </ScrollScene>

          <div className="flex flex-col gap-5 lg:col-span-4">
            {detail ? (
              <Reveal className="reveal-clip relative hidden aspect-[4/3] overflow-hidden rounded-3xl bg-ink-raised lg:block">
                <Image src={detail.src} alt={detail.alt} fill sizes="33vw" className="object-cover" />
              </Reveal>
            ) : null}

            <Reveal className="flex flex-1 flex-col justify-between gap-10 rounded-2xl bg-ink-raised p-7 sm:rounded-3xl sm:p-9">
              <div>
                <p className="mono text-paper/55">
                  {project.category} · {project.year}
                </p>
                <h3 className="display-md mt-4">{project.title}</h3>
                <p className="mt-4 text-paper/65">{project.summary}</p>
              </div>
              <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
                <Button href={`/work/${project.slug}`} variant="light">
                  Case study
                </Button>
                <Button href={project.liveUrl} external variant="link">
                  Visit live site
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
