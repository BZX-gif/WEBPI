import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ScrollScene } from "@/components/ui/ScrollScene";

export function Hero() {
  const project = projects[0];
  const host = project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-36 lg:pt-40">
      <div className="hero-aurora" aria-hidden="true" />

      <Container className="text-center">
        <p className="rise eyebrow">Independent digital studio</p>

        <h1 className="display-xl mx-auto mt-4 max-w-5xl">
          <span className="line-mask">
            <span style={{ "--d": "80ms" } as React.CSSProperties}>We build</span>
          </span>
          <span className="line-mask">
            <span style={{ "--d": "180ms" } as React.CSSProperties}>
              what&apos;s <span className="text-gradient">next.</span>
            </span>
          </span>
        </h1>

        <p
          className="rise lead mx-auto mt-6 max-w-2xl"
          style={{ "--d": "380ms" } as React.CSSProperties}
        >
          Digital experiences designed with purpose, developed with precision
          and built for ambitious businesses.
        </p>

        <div
          className="rise mt-8 flex flex-col items-center justify-center gap-x-7 gap-y-2 sm:flex-row"
          style={{ "--d": "480ms" } as React.CSSProperties}
        >
          <Button href="/start" size="lg">
            Start a project
          </Button>
          <Button href="/work" variant="link">
            Explore our work
          </Button>
        </div>
      </Container>

      <div
        className="rise mx-auto mt-14 w-full max-w-[1240px] px-5 sm:mt-20 sm:px-8"
        style={{ "--d": "620ms" } as React.CSSProperties}
      >
        <ScrollScene start={0.95} end={0.18}>
          <Link
            href={`/work/${project.slug}`}
            className="group scene-scale block"
            aria-label={`${project.title} — view the case study`}
          >
            <BrowserFrame url={host}>
              <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/9]">
                <Image
                  src={project.cover}
                  alt={project.images[0]?.alt ?? project.title}
                  fill
                  priority
                  sizes="(min-width: 1240px) 1176px, 100vw"
                  className="media-zoom object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-left text-white sm:p-10">
                  <div>
                    <p className="text-xs text-white/70 sm:text-sm">
                      {project.category} · {project.year}
                    </p>
                    <p className="mt-1 text-xl font-semibold tracking-[-0.025em] sm:text-4xl">
                      {project.title}
                    </p>
                  </div>
                  <span className="hidden rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur-md transition-colors duration-500 group-hover:bg-white group-hover:text-ink sm:inline-block">
                    View case study
                  </span>
                </div>
              </div>
            </BrowserFrame>
          </Link>
        </ScrollScene>
      </div>
    </section>
  );
}
