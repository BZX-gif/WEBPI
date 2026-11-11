import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";
import { configured, footerNav, site, socialLinks, whatsappHref } from "@/lib/site";

const linkClass =
  "inline-flex min-h-8 items-center text-ink/80 transition-colors duration-300 hover:text-ink hover:underline underline-offset-2";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-semibold text-ink">{title}</p>
      <ul className="mt-2">{children}</ul>
    </div>
  );
}

export function Footer() {
  const social = socialLinks();
  const whatsapp = whatsappHref();

  return (
    <footer className="bg-mist text-xs text-sub">
      <div className="mx-auto max-w-[1240px] px-5 pb-8 pt-14 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="WEBPI home" className="inline-flex text-ink">
              <Wordmark />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Independent digital studio. Websites, e-commerce and digital
              products for businesses that want a stronger presence.
            </p>
            <p className="mt-3 text-sm font-medium text-ink">{site.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-8">
            <Column title="Studio">
              {footerNav.studio.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </Column>
            <Column title="Services">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </Column>
            <Column title="Contact">
              <li>
                <Link href="/contact" className={linkClass}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/start" className={linkClass}>
                  Start a project
                </Link>
              </li>
              {configured(site.contact.email) ? (
                <li>
                  <a href={`mailto:${site.contact.email}`} className={`${linkClass} break-all`}>
                    {site.contact.email}
                  </a>
                </li>
              ) : null}
              {configured(site.contact.phone) ? (
                <li>
                  <a href={`tel:${site.contact.phone}`} className={linkClass}>
                    {site.contact.phone}
                  </a>
                </li>
              ) : null}
              {whatsapp ? (
                <li>
                  <a href={whatsapp} className={linkClass} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
              ) : null}
            </Column>
            {social.length > 0 ? (
              <Column title="Follow">
                {social.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className={linkClass} target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </a>
                  </li>
                ))}
              </Column>
            ) : null}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-hair pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright © {site.copyrightYear} WEBPI. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-4">
            {footerNav.legal.map((item, index) => (
              <li key={item.href} className="flex items-center gap-4">
                {index > 0 ? <span className="h-3 w-px bg-hair" aria-hidden="true" /> : null}
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
