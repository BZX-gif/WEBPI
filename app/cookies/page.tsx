import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Cookie Policy",
  description: "How WEBPI uses cookies and similar technologies on this website.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie *Policy*"
        text={`Last updated ${site.copyrightYear}.`}
      />
      <section className="pb-24 pt-12 sm:pb-36 sm:pt-16">
        <Container>
          <div className="prose lg:ml-[50%]">
            <p>
              This website aims to work with as few cookies as possible. We do
              not run advertising cookies. We do not load a cookie banner for
              technologies we do not use.
            </p>
            <section>
              <h2>Essential</h2>
              <p>
                The site may use strictly necessary storage required to run the
                application (for example, security or load-balancing cookies
                set by the host). These are not used for marketing.
              </p>
            </section>
            <section>
              <h2>Analytics</h2>
              <p>
                If the studio later enables Plausible or Google Analytics via
                environment variables, that tool’s cookies or measurement
                scripts will load. Until those variables are set, no analytics
                cookies are introduced by WEBPI.
              </p>
            </section>
            <section>
              <h2>Changes</h2>
              <p>
                If we add non-essential cookies, this page will be updated and,
                where required, consent will be requested.
              </p>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
