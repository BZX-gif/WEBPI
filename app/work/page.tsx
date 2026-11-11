import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
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
        title="Selected work."
        text="We show only projects that exist. The archive is small on purpose. It will grow as the work does."
      />

      <section className="pb-8">
        <Container>
          <ul className="grid gap-6">
            {projects.map((project) => (
              <Reveal as="li" key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  className="tile tile-dark group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/9]">
                    <Image
                      src={project.cover}
                      alt={project.images[0]?.alt ?? project.title}
                      fill
                      priority
                      sizes="(min-width: 1240px) 1176px, 100vw"
                      className="media-zoom object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-12">
                      <p className="text-sm text-white/70">
                        {project.category} · {project.year}
                      </p>
                      <h2 className="display-lg mt-2">{project.title}</h2>
                      <p className="mt-4 max-w-2xl leading-relaxed text-white/75">
                        {project.summary}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1 text-[#2997ff]">
                        Read the case study
                        <ChevronRight size={17} strokeWidth={1.8} className="arrow-nudge" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <ClosingCta
        title="Your project could be next."
        text="If you have a business that needs a digital home equal to its ambition, we would like to hear about it."
      />
    </>
  );
}
