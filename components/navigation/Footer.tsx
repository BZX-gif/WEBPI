import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Wordmark } from "@/components/brand/Wordmark";
import { configured, footerNav, site, socialLinks, whatsappHref } from "@/lib/site";

const linkClass =
  "inline-flex min-h-9 items-center text-paper/80 transition-colors duration-300 hover:text-accent";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mono text-paper/45">{title}</p>
      <ul className="mt-4">{children}</ul>
    </div>
  );
}

export function Footer() {
  const social = socialLinks();
  const whatsapp = whatsappHref();

  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-[1520px] px-5 pt-16 sm:px-10 sm:pt-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="display-md max-w-md">
              Designed to stand apart. <span className="em">Built to perform.</span>
            </p>
            <p className="mt-6 max-w-sm text-paper/60">
              Independent digital studio. Websites, e-commerce and digital
              products for businesses that want a stronger presence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 lg:col-span-7">
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
            <Column title={social.length > 0 ? "Follow" : "Legal"}>
              {(social.length > 0 ? [] : footerNav.legal).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
              {social.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={linkClass} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </Column>
          </div>
        </div>

        <div className="mono mt-16 flex flex-col gap-4 border-t border-paper/15 pt-6 text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.copyrightYear} WEBPI — {site.location}
          </p>
          {social.length > 0 ? (
            <ul className="flex flex-wrap gap-x-6">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-9 items-center hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
          <a href="#main" className="inline-flex min-h-9 items-center gap-2 hover:text-paper">
            Back to top
            <ArrowUp size={14} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* The name, set as large as the page allows and cropped by the edge. */}
      <div className="pointer-events-none mt-6 select-none px-3 sm:px-6" aria-hidden="true">
        <Wordmark className="-mb-[0.2em] block w-full text-center text-[27vw] leading-[0.8] !tracking-[-0.06em] text-paper min-[1520px]:text-[26rem]" />
      </div>
    </footer>
  );
}
