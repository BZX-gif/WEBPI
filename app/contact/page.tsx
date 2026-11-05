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
        index="05"
        eyebrow="Contact"
        title="Have something ambitious in mind?"
        text="The most reliable way to reach us is the project form. We read every enquiry and typically reply within two working days."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-2xl font-bold">Studio</h2>
              <p className="mt-4 text-sm leading-7 text-soft">
                Independent digital studio, {site.location}. We work remotely
                with clients wherever they are.
              </p>
              {hasDirect ? (
                <ul className="mt-8 space-y-3 text-sm">
                  {configured(site.contact.email) ? (
                    <li>
                      <a className="hover:text-signal" href={`mailto:${site.contact.email}`}>
                        {site.contact.email}
                      </a>
                    </li>
                  ) : null}
                  {configured(site.contact.phone) ? (
                    <li>
                      <a className="hover:text-signal" href={`tel:${site.contact.phone}`}>
                        {site.contact.phone}
                      </a>
                    </li>
                  ) : null}
                  {whatsapp ? (
                    <li>
                      <a
                        className="hover:text-signal"
                        href={whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp
                      </a>
                    </li>
                  ) : null}
                </ul>
              ) : (
                <p className="mt-8 text-sm leading-7 text-mute">
                  Direct email, phone and WhatsApp will appear here once they
                  are configured for the studio.
                </p>
              )}
              {social.length > 0 ? (
                <ul className="mt-8 space-y-2 text-sm">
                  {social.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="hover:text-signal"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <div className="lg:col-span-8">
              <EnquiryForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
