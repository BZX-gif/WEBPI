import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export function SelectedWork() {
  const project = projects[0];

  return (
    <section className="border-t border-line py-24 lg:py-36">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel index="04">Selected work</SectionLabel>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Work that can be visited.
            </h2>
          </div>
          <Link
            href="/work"
            className="btn-ghost text-[0.72rem] uppercase tracking-[0.18em]"
          >
            All work
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <Reveal className="mt-14">
          <Link href={`/work/${project.slug}`} className="work-frame group block">
            <div className="relative aspect-[16/10] overflow-hidden bg-raised">
              <Image
                src={project.cover}
                alt={project.images[0]?.alt ?? project.title}
                fill
                sizes="(min-width: 1024px) 1200px, 100vw"
                className="work-image object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-signal">
                  {project.category} · {project.year}
                </p>
                <h3 className="mt-3 font-display text-3xl font-extrabold sm:text-5xl">
                  {project.title}
                </h3>
              </div>
            </div>
          </Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            <p className="max-w-2xl text-base leading-7 text-soft lg:col-span-7">
              {project.summary}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
              <Button href={`/work/${project.slug}`} variant="secondary">
                Case study
              </Button>
              <Button href={project.liveUrl} external arrow variant="ghost">
                Visit live site
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
