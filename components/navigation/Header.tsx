"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/brand/Wordmark";
import { Button } from "@/components/ui/Button";
import { configured, ctaNav, primaryNav, site, socialLinks, utilityNav } from "@/lib/site";
import { cn } from "@/lib/cn";

const links = [...primaryNav.filter((item) => item.href !== "/"), ...utilityNav];
const menuLinks = [{ href: "/", label: "Home" }, ...links];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // The bar steps aside while reading down and returns on the way back up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 6) return;
      setHidden(y > last && y > 160);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the menu. Both html and body are locked because
  // iOS Safari ignores overflow rules on body alone.
  useEffect(() => {
    if (!open) return;

    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Close the menu when the route changes or when the viewport grows to
  // the desktop breakpoint (where the menu is no longer offered).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const social = socialLinks();

  return (
    <>
      <header
        className="nav-shell fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-5"
        data-hidden={hidden && !open}
      >
        <div
          className={cn(
            "mx-auto flex h-14 max-w-[1100px] items-center justify-between gap-4 rounded-full pl-5 pr-2 transition-colors duration-500",
            open ? "text-paper" : "nav-pill text-ink",
          )}
        >
          <Link
            href="/"
            aria-label="WEBPI home"
            className="inline-flex items-center py-2 text-xl"
            onClick={() => setOpen(false)}
          >
            <Wordmark />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                aria-current={isCurrent(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <Button
              href={ctaNav.href}
              size="sm"
              className={cn("hidden min-[380px]:inline-flex", open && "!hidden")}
            >
              {ctaNav.label}
            </Button>
            <button
              type="button"
              className={cn(
                "mono flex h-10 items-center rounded-full px-4 transition-colors duration-500 lg:hidden",
                open ? "bg-paper text-ink" : "bg-ink/[0.07] text-ink",
              )}
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      {/*
        The menu lives outside <header> on purpose: the header is transformed
        when it hides, which would make it the containing block for a fixed
        child and collapse the full-screen panel.
      */}
      <div
        id="site-menu"
        className={cn(
          "menu-panel fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-ink text-paper lg:hidden",
          open && "is-open",
        )}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="flex min-h-full flex-col px-5 pb-8 pt-28 sm:px-10">
          <nav aria-label="Menu" className="flex flex-1 flex-col justify-center">
            {menuLinks.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ "--i": index } as React.CSSProperties}
                className={cn(
                  "menu-item flex items-baseline gap-4 overflow-hidden border-b border-paper/15 py-3 font-serif text-[clamp(2.5rem,12vw,4.5rem)] leading-none tracking-[-0.02em]",
                  isCurrent(item.href) && "italic text-accent",
                )}
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="menu-fade mt-10 flex flex-col gap-6">
            <Button href={ctaNav.href} variant="accent" className="w-full">
              {ctaNav.label}
            </Button>
            <div className="mono flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-paper/60">
              <span>{site.location}</span>
              {configured(site.contact.email) ? (
                <a href={`mailto:${site.contact.email}`} className="normal-case tracking-normal">
                  {site.contact.email}
                </a>
              ) : null}
              {social.slice(0, 3).map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
