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
        title="Let's turn your idea into something real."
        text="A clear brief helps us reply with a useful first response. There is no charge for an initial conversation. If we are not the right studio, we will say so."
      />
      <section className="bg-mist py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <aside className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
              <ol className="space-y-7">
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
                  <li key={item.n} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-medium tabular-nums shadow-card">
                      {Number(item.n)}
                    </span>
                    <div>
                      <h2 className="text-xl font-semibold tracking-[-0.02em]">{item.t}</h2>
                      <p className="mt-1 leading-relaxed text-sub">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-10 text-xs leading-relaxed text-faint">
                Budget ranges are a starting point, expressed in INR, and can
                be edited as the studio’s offering evolves. They help us reply
                with the right level of detail.
              </p>
            </aside>
            <div className="lg:col-span-8">
              <EnquiryForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
