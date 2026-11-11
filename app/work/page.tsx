import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollScene } from "@/components/ui/ScrollScene";
import { projects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Work",
  description:
    "Selected work from WEBPI — digital products and shopping experiences designed and developed with intent.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        meta={`${String(projects.length).padStart(2, "0")} published`}
        title="Selected *work.*"
        text="We show only projects that exist. The archive is small on purpose. It will grow as the work does."
      />

      <section className="py-12 sm:py-16">
        <Container>
          <ul className="grid gap-16">
            {projects.map((project, index) => (
              <li key={project.slug}>
                <Link href={`/work/${project.slug}`} data-cursor="View" className="group block">
                  <ScrollScene start={1} end={-0.6}>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink sm:aspect-[16/8] sm:rounded-3xl">
                      <div className="scene-parallax absolute inset-0">
                        <Image
                          src={project.cover}
                          alt={project.images[0]?.alt ?? project.title}
                          fill
                          priority={index === 0}
                          sizes="(min-width: 1520px) 1440px, 100vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </ScrollScene>
                  <Reveal className="mt-6 grid gap-x-8 gap-y-4 border-b border-line pb-8 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-6">
                      <p className="mono text-sub">
                        {String(index + 1).padStart(2, "0")} — {project.category} · {project.year}
                      </p>
                      <h2 className="display-lg mt-3">{project.title}</h2>
                    </div>
                    <p className="max-w-lg text-sub lg:col-span-5">{project.summary}</p>
                    <span className="hidden justify-end lg:col-span-1 lg:flex">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ink transition-all duration-500 ease-[var(--ease)] group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent">
                        <ArrowUpRight size={22} strokeWidth={1.6} aria-hidden="true" />
                      </span>
                    </span>
                  </Reveal>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ClosingCta
        title="Your project could be *next.*"
        text="If you have a business that needs a digital home equal to its ambition, we would like to hear about it."
      />
    </>
  );
}
