import Image from "next/image";
import Link from "next/link";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
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
        index="02"
        eyebrow="Work"
        title="Selected work."
        text="We show only projects that exist. The archive is small on purpose. It will grow as the work does."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <ul className="grid gap-16">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link href={`/work/${project.slug}`} className="work-frame group block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-raised">
                    <Image
                      src={project.cover}
                      alt={project.images[0]?.alt ?? project.title}
                      fill
                      sizes="(min-width: 1024px) 1200px, 100vw"
                      className="work-image object-cover"
                    />
                  </div>
                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-signal">
                        {project.category} · {project.year}
                      </p>
                      <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
                        {project.title}
                      </h2>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-soft">
                        {project.summary}
                      </p>
                    </div>
                    <span className="text-[0.72rem] uppercase tracking-[0.18em] text-soft group-hover:text-paper">
                      Case study
                    </span>
                  </div>
                </Link>
              </li>
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
