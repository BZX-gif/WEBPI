import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";
import { Point } from "@/components/brand/Mark";
import {
  configured,
  ctaNav,
  footerNav,
  site,
  socialLinks,
  whatsappHref,
} from "@/lib/site";

export function Footer() {
  const social = socialLinks();
  const whatsapp = whatsappHref();

  return (
    <footer className="border-t border-line bg-void">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Wordmark />
            <p className="mt-6 max-w-sm text-sm leading-7 text-soft">
              Independent digital studio. Websites, e-commerce and digital
              products for businesses that want a stronger presence.
            </p>
            <p className="mt-4 font-serif text-xl italic text-paper">
              {site.tagline}
            </p>
            <Link href={ctaNav.href} className="btn-primary mt-8">
              Start a Project
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-mute">
                Studio
              </p>
              <ul className="mt-4 space-y-2.5">
                {footerNav.studio.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="inline-flex min-h-9 items-center text-sm text-soft hover:text-paper">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-mute">
                Services
              </p>
              <ul className="mt-4 space-y-2.5">
                {footerNav.services.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="inline-flex min-h-9 items-center text-sm text-soft hover:text-paper">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-mute">
                Contact
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-soft">
                <li>
                  <Link href="/contact" className="inline-flex min-h-9 items-center hover:text-paper">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/start" className="inline-flex min-h-9 items-center hover:text-paper">
                    Project enquiry
                  </Link>
                </li>
                {configured(site.contact.email) ? (
                  <li>
                    <a href={`mailto:${site.contact.email}`} className="inline-flex min-h-9 items-center hover:text-paper">
                      {site.contact.email}
                    </a>
                  </li>
                ) : null}
                {configured(site.contact.phone) ? (
                  <li>
                    <a href={`tel:${site.contact.phone}`} className="inline-flex min-h-9 items-center hover:text-paper">
                      {site.contact.phone}
                    </a>
                  </li>
                ) : null}
                {whatsapp ? (
                  <li>
                    <a href={whatsapp} className="inline-flex min-h-9 items-center hover:text-paper" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </li>
                ) : null}
                <li className="pt-2 text-mute">{site.location}</li>
              </ul>
              {social.length > 0 ? (
                <ul className="mt-6 space-y-2.5">
                  {social.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="inline-flex min-h-9 items-center text-sm text-soft hover:text-paper"
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
          </div>
        </div>

        <div className="mt-16 overflow-hidden border-t border-line pt-10">
          <p className="font-display select-none text-[18vw] font-extrabold leading-[0.8] tracking-[-0.06em] text-paper opacity-[0.07] lg:text-[12rem]">
            WEBPI
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 text-[0.72rem] text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.copyrightYear} WEBPI. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            {footerNav.legal.map((item) => (
              <Link key={item.href} href={item.href} className="inline-flex min-h-9 items-center hover:text-paper">
                {item.label}
              </Link>
            ))}
          </div>
          <p className="flex items-center gap-2">
            Designed with intent
            <Point className="bg-signal !h-1.5 !w-1.5" />
            Built with precision
          </p>
        </div>
      </div>
    </footer>
  );
}
