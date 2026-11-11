import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollScene } from "@/components/ui/ScrollScene";

export function SelectedWork() {
  const project = projects[0];

  return (
    <section className="on-dark bg-night py-24 text-[#f5f5f7] sm:py-32 lg:py-40">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow !text-[#2997ff]">Selected work</p>
          <h2 className="display-lg mt-3">Work that can be visited.</h2>
          <p className="lead mx-auto mt-5 max-w-2xl !text-night-sub">
            We show only projects that exist. The archive is small on purpose.
          </p>
        </Reveal>

        <ScrollScene start={1} end={0.3} className="mt-14 sm:mt-20">
          <Link
            href={`/work/${project.slug}`}
            className="group relative block overflow-hidden rounded-[1.75rem] bg-night-raised"
            aria-label={`${project.title} — view the case study`}
          >
            <div className="relative aspect-[4/5] sm:aspect-[16/9]">
              <div className="scene-zoom absolute inset-0">
                <Image
                  src={project.cover}
                  alt={project.images[0]?.alt ?? project.title}
                  fill
                  sizes="(min-width: 1240px) 1176px, 100vw"
                  className="media-zoom object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-12">
                <p className="text-sm text-white/70">
                  {project.category} · {project.year}
                </p>
                <h3 className="display-lg mt-2 text-white">{project.title}</h3>
              </div>
            </div>
          </Link>
        </ScrollScene>

        <Reveal className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          <p className="max-w-2xl text-lg leading-relaxed text-night-sub lg:col-span-7">
            {project.summary}
          </p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2 lg:col-span-5 lg:justify-end">
            <Button href={`/work/${project.slug}`} variant="light">
              Read the case study
            </Button>
            <Button href={project.liveUrl} external variant="link">
              Visit live site
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
