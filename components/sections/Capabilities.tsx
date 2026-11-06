import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Capabilities() {
  return (
    <section className="border-t border-line py-24 lg:py-36">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel index="03">Capabilities</SectionLabel>
            <h2 className="mt-5 max-w-xl font-display text-[clamp(1.7rem,8vw,2.25rem)] font-extrabold tracking-tight sm:text-5xl">
              What we make.
            </h2>
          </div>
          <Link
            href="/services"
            className="btn-ghost !min-h-11 text-[0.72rem] uppercase tracking-[0.18em]"
          >
            All services
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <ul className="mt-16 divide-y divide-line border-y border-line">
          {services.map((service, index) => (
            <Reveal as="li" key={service.id} delay={index * 40}>
              <Link
                href={service.href}
                className="group grid gap-3 py-7 sm:grid-cols-12 sm:items-baseline sm:gap-6"
              >
                <span className="font-mono text-[0.68rem] text-signal sm:col-span-1">
                  {service.number}
                </span>
                <span className="font-display text-2xl font-bold tracking-tight sm:col-span-5 sm:text-3xl">
                  {service.title}
                </span>
                <span className="text-sm leading-6 text-soft sm:col-span-5">
                  {service.short}
                </span>
                <span className="hidden justify-end text-mute transition-colors group-hover:text-paper sm:col-span-1 sm:flex">
                  <ArrowUpRight size={18} strokeWidth={1.4} />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
