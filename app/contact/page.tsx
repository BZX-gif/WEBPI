import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/metadata";
import { configured, site, socialLinks, whatsappHref } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact WEBPI to discuss a website, store or digital product. Send a project enquiry and we will reply personally.",
  path: "/contact",
});

export default function ContactPage() {
  const social = socialLinks();
  const whatsapp = whatsappHref();
  const hasDirect =
    configured(site.contact.email) ||
    configured(site.contact.phone) ||
    Boolean(whatsapp);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        meta="Replies within two working days"
        title="Have something ambitious *in mind?*"
        text="The most reliable way to reach us is the project form. We read every enquiry and typically reply within two working days."
      />

      <section className="pb-24 pt-12 sm:pb-36 sm:pt-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <aside className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
              <p className="mono text-sub">Studio</p>
              <p className="display-sm mt-4">
                Independent digital studio, {site.location}. We work remotely
                with clients wherever they are.
              </p>
              {hasDirect ? (
                <ul className="mt-8 border-t border-line">
                  {configured(site.contact.email) ? (
                    <li className="border-b border-line">
                      <a className="link break-all" href={`mailto:${site.contact.email}`}>
                        <span className="link-label">{site.contact.email}</span>
                      </a>
                    </li>
                  ) : null}
                  {configured(site.contact.phone) ? (
                    <li className="border-b border-line">
                      <a className="link" href={`tel:${site.contact.phone}`}>
                        <span className="link-label">{site.contact.phone}</span>
                      </a>
                    </li>
                  ) : null}
                  {whatsapp ? (
                    <li className="border-b border-line">
                      <a className="link" href={whatsapp} target="_blank" rel="noopener noreferrer">
                        <span className="link-label">WhatsApp</span>
                      </a>
                    </li>
                  ) : null}
                </ul>
              ) : (
                <p className="mt-8 border-t border-line pt-5 text-sm text-faint">
                  Direct email, phone and WhatsApp will appear here once they
                  are configured for the studio.
                </p>
              )}
              {social.length > 0 ? (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {social.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="inline-flex min-h-10 items-center rounded-full border border-ink/25 px-4 text-sm transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
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
