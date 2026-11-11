import Link from "next/link";
import { Check } from "lucide-react";
import { serviceIcons } from "@/components/sections/Capabilities";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import { footerNav } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Website design and development, e-commerce, UI/UX, custom web applications, maintenance and digital strategy from WEBPI.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Capability, stated plainly."
        text="WEBPI designs and develops digital products for businesses that need a serious presence. Each service below is something we actually take on — scoped honestly, delivered with care."
      />

      {/* Quick jump between services; stays within reach while reading. */}
      <nav
        aria-label="Services"
        className="glass sticky top-12 z-30 border-y border-black/[0.06]"
      >
        <ul className="mx-auto flex max-w-[1240px] gap-1 overflow-x-auto px-3 py-2 [scrollbar-width:none] sm:justify-center sm:px-8 [&::-webkit-scrollbar]:hidden">
          {footerNav.services.map((item) => (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href.replace("/services", "")}
                className="inline-flex min-h-9 items-center rounded-full px-3.5 text-[0.8125rem] text-ink/75 transition-colors duration-300 hover:bg-black/[0.06] hover:text-ink"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <section className="bg-mist py-16 sm:py-24">
        <Container className="grid gap-5 sm:gap-6">
          {services.map((service) => {
            const Icon = serviceIcons[service.id];

            return (
              <Reveal key={service.id}>
                <article
                  id={service.id}
                  className="tile tile-white scroll-mt-28 p-7 sm:p-12 lg:p-16"
                >
                  <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-4">
                        {Icon ? (
                          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist">
                            <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                          </span>
                        ) : null}
                        <span className="text-sm tabular-nums text-faint">{service.number}</span>
                      </div>
                      <h2 className="display-md mt-6">{service.title}</h2>
                      <p className="lead mt-5">{service.statement}</p>

                      <h3 className="mt-10 text-sm font-semibold">Who it is for</h3>
                      <p className="mt-2 max-w-xl leading-relaxed text-sub">{service.who}</p>

                      <Button href="/start" className="mt-9">
                        Enquire about this
                      </Button>
                    </div>

                    <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:content-start">
                      <div>
                        <h3 className="text-sm font-semibold">What you receive</h3>
                        <ul className="mt-4 space-y-3">
                          {service.delivers.map((item) => (
                            <li key={item} className="flex gap-3 leading-snug text-ink/85">
                              <Check
                                size={18}
                                strokeWidth={2.2}
                                className="mt-0.5 shrink-0 text-accent"
                                aria-hidden="true"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold">Typical workflow</h3>
                        <ol className="mt-4 space-y-3">
                          {service.workflow.map((step, index) => (
                            <li key={step} className="flex gap-3 leading-snug text-sub">
                              <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mist text-[0.6875rem] font-medium tabular-nums text-ink">
                                {index + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </Container>
      </section>

      <ClosingCta
        title="Not sure which of these you need?"
        text="Describe the business problem. We will tell you what we would actually build — and what we would not."
        button="Start a conversation"
      />
    </>
  );
}
