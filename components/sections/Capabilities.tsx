import {
  AppWindow,
  ChevronRight,
  Compass,
  Monitor,
  PenTool,
  ShoppingBag,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";
import { cn } from "@/lib/cn";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Tile } from "@/components/ui/Tile";

export const serviceIcons: Record<string, LucideIcon> = {
  websites: Monitor,
  ecommerce: ShoppingBag,
  ux: PenTool,
  applications: AppWindow,
  maintenance: Wrench,
  strategy: Compass,
};

// Bento rhythm: wide/narrow, narrow/wide, then two halves.
const spans = [
  "lg:col-span-4",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-3",
];

export function Capabilities() {
  return (
    <section className="bg-mist py-24 sm:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="What we make."
          text="Six services, one standard. Each is something we actually take on — scoped honestly, delivered with care."
        >
          <Button href="/services" variant="link">
            All services
          </Button>
        </SectionHeading>

        <ul className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.id] ?? Monitor;
            const dark = index === 0;
            const wide = index === 0 || index === 3;

            return (
              <Reveal as="li" key={service.id} delay={(index % 3) * 90} className={spans[index]}>
                <Tile
                  href={service.href}
                  tone={dark ? "dark" : "white"}
                  className="flex h-full min-h-[19rem] flex-col p-8 sm:p-10"
                >
                  <span
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-2xl",
                      dark ? "bg-white/10 text-white" : "bg-mist text-ink",
                    )}
                  >
                    <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                  </span>

                  <h3 className={cn("mt-auto pt-12", wide ? "display-md max-w-md" : "display-sm")}>
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 max-w-md leading-relaxed",
                      dark ? "text-night-sub" : "text-sub",
                    )}
                  >
                    {service.short}
                  </p>
                  <span
                    className={cn(
                      "mt-6 inline-flex items-center gap-1",
                      dark ? "text-[#2997ff]" : "text-link",
                    )}
                  >
                    Learn more
                    <ChevronRight size={17} strokeWidth={1.8} className="arrow-nudge" aria-hidden="true" />
                  </span>

                  {wide ? <Wireframe dark={dark} /> : null}
                </Tile>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

/** A small abstract interface, drawn in CSS, for the two wide tiles. */
function Wireframe({ dark }: { dark: boolean }) {
  const bar = dark ? "bg-white/15" : "bg-black/[0.07]";
  const panel = dark ? "bg-white/[0.06] ring-white/10" : "bg-mist ring-black/[0.04]";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -right-10 top-10 hidden w-72 rotate-[-4deg] rounded-2xl p-4 ring-1 transition-transform duration-1000 ease-[var(--ease)] group-hover:translate-x-[-6px] group-hover:rotate-[-2deg] md:block",
        panel,
      )}
    >
      <div className="flex items-center gap-2">
        <span className={cn("h-2 w-2 rounded-full", bar)} />
        <span className={cn("h-2 w-16 rounded-full", bar)} />
        <span className="ml-auto h-5 w-14 rounded-full bg-accent" />
      </div>
      <div className={cn("mt-5 h-4 w-40 rounded-full", bar)} />
      <div className={cn("mt-2 h-4 w-28 rounded-full", bar)} />
      <div className="mt-5 grid grid-cols-3 gap-2">
        <span className={cn("h-16 rounded-xl", bar)} />
        <span className={cn("h-16 rounded-xl", bar)} />
        <span className={cn("h-16 rounded-xl", bar)} />
      </div>
    </div>
  );
}
