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
        title="Have something ambitious in mind?"
        text="The most reliable way to reach us is the project form. We read every enquiry and typically reply within two working days."
      />

      <section className="bg-mist py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <aside className="lg:col-span-4">
              <h2 className="display-sm">Studio</h2>
              <p className="mt-3 leading-relaxed text-sub">
                Independent digital studio, {site.location}. We work remotely
                with clients wherever they are.
              </p>
              {hasDirect ? (
                <ul className="mt-8 space-y-1">
                  {configured(site.contact.email) ? (
                    <li>
                      <a className="link break-all" href={`mailto:${site.contact.email}`}>
                        <span className="link-label">{site.contact.email}</span>
                      </a>
                    </li>
                  ) : null}
                  {configured(site.contact.phone) ? (
                    <li>
                      <a className="link" href={`tel:${site.contact.phone}`}>
                        <span className="link-label">{site.contact.phone}</span>
                      </a>
                    </li>
                  ) : null}
                  {whatsapp ? (
                    <li>
                      <a className="link" href={whatsapp} target="_blank" rel="noopener noreferrer">
                        <span className="link-label">WhatsApp</span>
                      </a>
                    </li>
                  ) : null}
                </ul>
              ) : (
                <p className="mt-8 text-sm leading-relaxed text-faint">
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
                        className="inline-flex min-h-9 items-center rounded-full bg-white px-4 text-sm transition-colors duration-300 hover:bg-ink hover:text-white"
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
            <div className="lg:col-span-8">
              <EnquiryForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
