import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Start a Project",
  description:
    "Start a project with WEBPI. Tell us about the business, the work you need and the budget you have in mind.",
  path: "/start",
});

export default function StartPage() {
  return (
    <>
      <PageHero
        eyebrow="Start a project"
        meta="No charge for a first conversation"
        title="Let's turn your idea into something *real.*"
        text="A clear brief helps us reply with a useful first response. There is no charge for an initial conversation. If we are not the right studio, we will say so."
      />
      <section className="pb-24 pt-12 sm:pb-36 sm:pt-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <aside className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
              <p className="mono text-sub">How it goes</p>
              <ol className="mt-4 border-t border-ink">
                {[
                  {
                    n: "01",
                    t: "You write",
                    d: "Tell us what you are building, who it is for, and what a good outcome looks like.",
                  },
                  {
                    n: "02",
                    t: "We read",
                    d: "We review fit, scope and timing. If we can help, we propose a conversation.",
                  },
                  {
                    n: "03",
                    t: "We agree",
                    d: "Scope, sequence, quotation and payment milestones are written down before production starts.",
                  },
                ].map((item) => (
                  <li key={item.n} className="grid grid-cols-[3.5rem_1fr] items-baseline border-b border-line py-5">
                    <span className="font-serif text-4xl leading-none text-accent">{item.n}</span>
                    <div>
                      <h2 className="display-sm">{item.t}</h2>
                      <p className="mt-1.5 text-sub">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm text-faint">
                Budget ranges are a starting point, expressed in INR, and can
                be edited as the studio’s offering evolves. They help us reply
                with the right level of detail.
              </p>
            </aside>
            <div className="lg:col-span-7 lg:col-start-6">
              <EnquiryForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
