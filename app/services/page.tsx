import Link from "next/link";
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
        meta={`${services.length} capabilities`}
        title="Capability, stated *plainly.*"
        text="WEBPI designs and develops digital products for businesses that need a serious presence. Each service below is something we actually take on — scoped honestly, delivered with care."
      >
        <nav aria-label="Services">
          <ul className="flex flex-wrap gap-2">
            {footerNav.services.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href.replace("/services", "")}
                  className="inline-flex min-h-10 items-center rounded-full border border-ink/25 px-4 text-sm transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <section className="pb-24 sm:pb-36">
        <Container>
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="grid scroll-mt-24 gap-10 border-b border-line py-16 sm:py-24 lg:grid-cols-12"
            >
              <Reveal className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
                <p className="font-serif text-7xl leading-[0.8] tracking-[-0.03em] text-accent sm:text-8xl">
                  {service.number}
                </p>
                <h2 className="display-md mt-6 max-w-md">{service.title}</h2>
                <Button href="/start" className="mt-8">
                  Enquire about this
                </Button>
              </Reveal>

              <Reveal delay={100} className="lg:col-span-7">
                <p className="display-sm !font-sans !leading-snug !tracking-[-0.02em]">
                  {service.statement}
                </p>

                <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
                  <div>
                    <h3 className="mono border-b border-ink pb-3">What you receive</h3>
                    <ul>
                      {service.delivers.map((item) => (
                        <li key={item} className="flex gap-3 border-b border-line py-3 leading-snug">
                          <span className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mono border-b border-ink pb-3">Typical workflow</h3>
                    <ol>
                      {service.workflow.map((step, index) => (
                        <li key={step} className="flex gap-4 border-b border-line py-3 leading-snug">
                          <span className="mono pt-[0.3em] text-faint">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="mt-12 rounded-2xl bg-paper-deep p-6 sm:p-8">
                  <h3 className="mono">Who it is for</h3>
                  <p className="mt-3 max-w-2xl text-lg leading-snug">{service.who}</p>
                </div>
              </Reveal>
            </article>
          ))}
        </Container>
      </section>

      <ClosingCta
        title="Not sure which of these you *need?*"
        text="Describe the business problem. We will tell you what we would actually build — and what we would not."
        button="Start a conversation"
      />
    </>
  );
}
