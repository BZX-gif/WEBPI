"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/brand/Wordmark";
import { ctaNav, primaryNav, utilityNav } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
          scrolled || open
            ? "border-b border-line bg-void/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[4.25rem] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            aria-label="WEBPI home"
            className="relative z-50 inline-flex items-center py-2"
            onClick={() => setOpen(false)}
          >
            <Wordmark />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 lg:flex"
          >
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link text-[0.72rem] uppercase tracking-[0.22em] text-soft"
                aria-current={isCurrent(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            {utilityNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link text-[0.72rem] uppercase tracking-[0.22em] text-soft"
                aria-current={isCurrent(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link href={ctaNav.href} className="btn-primary !min-h-10 !px-4 !text-[0.68rem]">
              {ctaNav.label}
            </Link>
          </div>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} strokeWidth={1.4} /> : <Menu size={20} strokeWidth={1.4} />}
          </button>
        </div>
      </header>

      {/*
        The menu lives outside <header> on purpose. The header uses
        backdrop-filter, which makes it the containing block for fixed
        descendants — nesting the menu inside it collapsed the full-screen
        overlay to the 68px header height.
      */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-void transition-opacity duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="flex min-h-full flex-col px-5 pb-10 pt-28 sm:px-8">
          <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1">
            {[...primaryNav, ...utilityNav].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "font-display text-[clamp(1.75rem,9vw,2.25rem)] font-extrabold uppercase tracking-tight text-paper",
                  isCurrent(item.href) && "text-signal",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href={ctaNav.href}
            onClick={() => setOpen(false)}
            className="btn-primary mt-8 w-full"
          >
            {ctaNav.label}
          </Link>
        </div>
      </div>
    </>
  );
}
