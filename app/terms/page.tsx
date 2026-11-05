import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: "Terms that govern use of the WEBPI website and project enquiries.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        text={`Last updated ${site.copyrightYear}. These terms govern use of this website and the start of a conversation with WEBPI.`}
      />
      <section className="py-16">
        <Container>
          <div className="max-w-2xl space-y-8 text-sm leading-7 text-soft">
            <section>
              <h2 className="font-display text-xl font-bold text-paper">The website</h2>
              <p className="mt-3">
                This website is provided by WEBPI to present our work and to
                receive project enquiries. Content is offered as-is. We take
                care with accuracy but do not warrant that every page is
                complete or current at all times.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-paper">Enquiries are not contracts</h2>
              <p className="mt-3">
                Sending a form is a request for a conversation. It does not
                create an engagement, a reservation of dates, or an obligation
                on either side. A project begins only when scope, quotation
                and payment milestones are agreed in writing.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-paper">Quotations and payment</h2>
              <p className="mt-3">
                Fees, timelines and payment stages are set per project. Work
                does not start until the agreed first payment is received,
                unless we have written otherwise. Support after launch exists
                only where a maintenance arrangement is agreed.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-paper">Intellectual property</h2>
              <p className="mt-3">
                The WEBPI name, wordmark and the design of this website belong
                to WEBPI. Client project materials remain subject to the
                contract for that project. Do not reuse our identity as your
                own.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-paper">Acceptable use</h2>
              <p className="mt-3">
                Do not misuse the enquiry form, attempt to disrupt the site, or
                submit unlawful content. We may ignore or block abusive
                submissions.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-paper">Governing notes</h2>
              <p className="mt-3">
                WEBPI operates from India. Formal governing-law and entity
                details will be added when the studio’s legal registration is
                confirmed. Until then, these terms still describe how we work.
              </p>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
