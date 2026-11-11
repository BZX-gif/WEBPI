import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How WEBPI handles personal information submitted through this website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        text={`Last updated ${site.copyrightYear}. This policy describes how WEBPI handles information you share with us.`}
      />
      <section className="pb-24 sm:pb-32">
        <Container size="narrow">
          <div className="prose border-t border-hair pt-12">
            <p>
              WEBPI is an independent digital studio. We do not invent a legal
              entity, GST number or registered office here. Those details will
              be added when they are confirmed. Until then, this policy still
              governs how we treat information sent through this website.
            </p>
            <section>
              <h2>What we collect</h2>
              <p>
                If you submit the project enquiry form, we collect the details
                you provide: name, email, phone, business name, project type,
                budget, timeline, description and optional website URL. Server
                logs may include an IP address used only for rate limiting and
                abuse prevention.
              </p>
            </section>
            <section>
              <h2>How we use it</h2>
              <p>
                We use enquiry details solely to understand the request and
                reply. We do not sell personal information. We do not use it
                for advertising networks.
              </p>
            </section>
            <section>
              <h2>Storage and email</h2>
              <p>
                Submissions may be stored on the server running this site and,
                when configured, emailed to the studio via a transactional
                email provider (Resend). You should only send information you
                are comfortable sharing with a prospective studio.
              </p>
            </section>
            <section>
              <h2>Analytics</h2>
              <p>
                Analytics scripts load only if the studio has configured a
                privacy-respecting or analytics provider. If none is
                configured, we do not load third-party analytics.
              </p>
            </section>
            <section>
              <h2>Your requests</h2>
              <p>
                To ask what we hold, or to ask that it be deleted, use the
                contact form or the studio email once it is published on this
                site.
              </p>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
