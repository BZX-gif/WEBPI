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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open
          ? "border-b border-line bg-void/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label="WEBPI home" className="relative z-50" onClick={() => setOpen(false)}>
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

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 bg-void lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col px-5 pb-10 pt-28 sm:px-8">
          <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1">
            {[...primaryNav, ...utilityNav].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "font-display text-4xl font-extrabold uppercase tracking-tight text-paper transition-opacity",
                  open ? "opacity-100" : "opacity-0",
                  isCurrent(item.href) && "text-signal",
                )}
                style={{ transitionDelay: open ? `${80 + index * 40}ms` : "0ms" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href={ctaNav.href}
            onClick={() => setOpen(false)}
            className="btn-primary w-full"
          >
            {ctaNav.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
