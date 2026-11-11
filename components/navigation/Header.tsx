"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/brand/Wordmark";
import { ctaNav, primaryNav, utilityNav } from "@/lib/site";
import { cn } from "@/lib/cn";

const links = [...primaryNav.filter((item) => item.href !== "/"), ...utilityNav];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the mobile menu. Both html and body are locked
  // because iOS Safari ignores overflow rules on body alone.
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
  // the desktop breakpoint (where the menu is no longer rendered).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "glass fixed inset-x-0 top-0 z-50 transition-[box-shadow,background-color] duration-500",
          scrolled && !open && "hairline-b",
          open && "!bg-white",
        )}
      >
        <div className="mx-auto flex h-12 max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8">
          <Link
            href="/"
            aria-label="WEBPI home"
            className="relative z-50 inline-flex items-center py-2"
            onClick={() => setOpen(false)}
          >
            <Wordmark />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
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

          <div className="flex items-center gap-1">
            <Link href={ctaNav.href} className="btn btn-primary btn-sm">
              {ctaNav.label}
            </Link>
            <button
              type="button"
              className="burger relative z-50 -mr-3 h-11 w-11 md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/*
        The menu lives outside <header> on purpose. The header uses
        backdrop-filter, which makes it the containing block for fixed
        descendants — nesting the menu inside it would collapse the
        full-screen overlay to the header height.
      */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-white transition-[opacity,visibility] duration-500 md:hidden",
          open ? "menu-open visible opacity-100" : "invisible pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="flex min-h-full flex-col px-8 pb-10 pt-24">
          <nav aria-label="Mobile" className="flex flex-1 flex-col">
            {[{ href: "/", label: "Home" }, ...links].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ "--i": index } as React.CSSProperties}
                className={cn(
                  "menu-item py-2 text-[1.75rem] font-semibold leading-tight tracking-[-0.03em]",
                  isCurrent(item.href) ? "text-ink" : "text-ink/55",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href={ctaNav.href}
            onClick={() => setOpen(false)}
            style={{ "--i": links.length + 1 } as React.CSSProperties}
            className="menu-item btn btn-primary btn-lg mt-10 w-full"
          >
            {ctaNav.label}
          </Link>
        </div>
      </div>
    </>
  );
}
