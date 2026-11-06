import { ClosingCta } from "@/components/sections/ClosingCta";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

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
        index="01"
        eyebrow="Services"
        title="Capability, stated plainly."
        text="WEBPI designs and develops digital products for businesses that need a serious presence. Each service below is something we actually take on — scoped honestly, delivered with care."
      />

      {services.map((service) => (
        <section
          key={service.id}
          id={service.id}
          className="scroll-mt-24 border-b border-line py-20 lg:py-28"
        >
          <Container>
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="font-mono text-[0.68rem] text-signal">{service.number}</p>
                  <h2 className="mt-4 font-display text-[clamp(1.6rem,7.6vw,1.875rem)] font-extrabold tracking-tight sm:text-4xl">
                    {service.title}
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-lg leading-8 text-soft">{service.statement}</p>

                  <div className="mt-10 grid gap-10 md:grid-cols-2">
                    <div>
                      <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-mute">
                        Who it is for
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-soft">{service.who}</p>
                    </div>
                    <div>
                      <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-mute">
                        Typical workflow
                      </h3>
                      <ol className="mt-3 space-y-2">
                        {service.workflow.map((step, index) => (
                          <li key={step} className="text-sm leading-6 text-soft">
                            <span className="mr-2 font-mono text-[0.65rem] text-signal">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-mute">
                      What you receive
                    </h3>
                    <ul className="mt-4 divide-y divide-line border-y border-line">
                      {service.delivers.map((item) => (
                        <li key={item} className="py-3 text-sm text-paper">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button href="/start" className="mt-10">
                    Enquire about this
                  </Button>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      ))}

      <ClosingCta
        title="Not sure which of these you need?"
        text="Describe the business problem. We will tell you what we would actually build — and what we would not."
        button="Start a conversation"
      />
    </>
  );
}
