import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ScrollScene } from "@/components/ui/ScrollScene";

export function Hero() {
  const project = projects[0];
  const inline = project.images[1] ?? project.images[0];

  return (
    <section className="relative pt-28 sm:pt-36">
      <Container>
        <div className="rise flex items-center justify-between gap-4 border-b border-line pb-4">
          <p className="eyebrow">Independent digital studio</p>
          <p className="mono hidden text-sub md:block">Websites — E-commerce — Digital products</p>
          <p className="mono text-sub">India</p>
        </div>

        <h1 className="display-xl mt-8 sm:mt-10">
          <span className="line-mask">
            <span style={{ "--d": "100ms" } as React.CSSProperties}>
              We build
              {/* A sliver of real work, set into the line like a word. */}
              <span
                className="relative ml-[0.14em] inline-block h-[0.6em] w-[1.35em] overflow-hidden rounded-full align-[0.03em]"
                aria-hidden="true"
              >
                <Image src={inline.src} alt="" fill sizes="280px" className="object-cover" priority />
              </span>
            </span>
          </span>
          <span className="line-mask">
            <span style={{ "--d": "220ms" } as React.CSSProperties}>
              what&apos;s <span className="em">next.</span>
            </span>
          </span>
        </h1>

        <div className="mt-10 grid items-end gap-10 sm:mt-14 lg:grid-cols-12">
          <p
            className="rise lead max-w-xl lg:col-span-5"
            style={{ "--d": "520ms" } as React.CSSProperties}
          >
            Digital experiences designed with purpose, developed with precision
            and built for ambitious businesses.
          </p>

          <div
            className="rise flex flex-wrap items-center gap-x-7 gap-y-3 lg:col-span-5"
            style={{ "--d": "620ms" } as React.CSSProperties}
          >
            <Button href="/start">Start a project</Button>
            <Button href="/work" variant="link">
              Explore our work
            </Button>
          </div>

          <Link
            href="/start"
            aria-label="Start a project"
            className="rise group relative hidden h-36 w-36 items-center justify-center justify-self-end lg:col-span-2 lg:flex"
            style={{ "--d": "720ms" } as React.CSSProperties}
          >
            <svg viewBox="0 0 200 200" className="spin-slow absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <path id="badge-path" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
              </defs>
              <text className="fill-current font-mono text-[15.5px] uppercase" letterSpacing="3.4">
                <textPath href="#badge-path">Start a project ✦ Let&apos;s build it ✦ Say hello ✦</textPath>
              </text>
            </svg>
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent transition-transform duration-700 ease-[var(--ease)] group-hover:scale-110">
              <ArrowDownRight size={26} strokeWidth={1.6} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </Container>

      <Container
        className="rise mt-14 sm:mt-20"
      >
        <ScrollScene start={1} end={-0.6}>
          <Link
            href={`/work/${project.slug}`}
            data-cursor="View"
            className="group relative block overflow-hidden rounded-2xl bg-ink sm:rounded-3xl"
            aria-label={`${project.title} — view the case study`}
          >
            <div className="relative aspect-[4/5] sm:aspect-[16/8]">
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
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 text-paper sm:p-10">
                <p className="display-md">{project.title}</p>
                <p className="mono pb-1 text-right text-paper/70">
                  <span className="hidden sm:inline">Featured — </span>
                  {project.category} · {project.year}
                </p>
              </div>
            </div>
          </Link>
        </ScrollScene>
      </Container>
    </section>
  );
}
