import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Capabilities() {
  return (
    <section className="pb-24 sm:pb-36">
      <Container>
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2 className="display-lg mt-5">
              What we <span className="em">make.</span>
            </h2>
          </div>
          <Button href="/services" variant="link" className="sm:mb-3">
            All services
          </Button>
        </Reveal>

        <ul className="mt-12 border-t border-ink sm:mt-16">
          {services.map((service) => (
            <Reveal as="li" key={service.id} className="border-b border-line">
              <Link
                href={service.href}
                className="row grid items-center gap-x-6 gap-y-3 py-7 sm:py-9 md:grid-cols-12"
              >
                <span className="mono row-sub md:col-span-1">{service.number}</span>
                <span className="row-shift display-md md:col-span-6">{service.title}</span>
                <span className="row-sub max-w-md md:col-span-4">{service.short}</span>
                <span className="hidden justify-end md:col-span-1 md:flex">
                  <span className="row-arrow flex h-12 w-12 items-center justify-center rounded-full border border-current">
                    <ArrowUpRight size={20} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
