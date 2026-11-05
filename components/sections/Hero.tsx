"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Point } from "@/components/brand/Mark";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const fieldRef = useRef<HTMLDivElement>(null);

  function onMove(event: React.MouseEvent<HTMLDivElement>) {
    const el = fieldRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--hx", x.toFixed(3));
    el.style.setProperty("--hy", y.toFixed(3));
  }

  function onLeave() {
    const el = fieldRef.current;
    if (!el) return;
    el.style.setProperty("--hx", "0");
    el.style.setProperty("--hy", "0");
  }

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden page-grid pt-24"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,184,150,0.07),transparent_55%)]" />

      <Container className="relative flex min-h-[calc(100svh-6rem)] flex-col justify-between pb-8 pt-6">
        <div className="flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.26em] text-mute">
          <span>01 / Opening</span>
          <span className="hidden sm:block">Independent digital studio</span>
          <span>India</span>
        </div>

        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-8">
            <h1 className="hero-type text-[clamp(2.75rem,9.4vw,8.5rem)]">
              <span className="block rise" style={{ animationDelay: "80ms" }}>
                We build
              </span>
              <span className="block rise" style={{ animationDelay: "140ms" }}>
                What&apos;s
              </span>
              <span className="mt-1 flex items-baseline gap-3 rise" style={{ animationDelay: "200ms" }}>
                <span>Next</span>
                <Point className="mb-1.5 bg-signal sm:mb-3" />
              </span>
            </h1>
          </div>

          <div
            ref={fieldRef}
            className="instrument relative mx-auto aspect-square w-full max-w-[320px] lg:col-span-4 lg:max-w-none"
            aria-hidden="true"
          >
            <HeroInstrument />
          </div>
        </div>

        <div className="grid gap-8 border-t border-line pt-8 lg:grid-cols-12">
          <p className="max-w-xl text-base leading-7 text-soft sm:text-lg lg:col-span-6">
            Digital experiences designed with purpose, developed with precision
            and built for ambitious businesses.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:items-end lg:justify-end">
            <Button href="/start">Start a Project</Button>
            <Button href="/work" variant="secondary">
              Explore Our Work
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroInstrument() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full text-paper/80">
      <g className="instrument-shift" fill="none" stroke="currentColor">
        <circle cx="200" cy="200" r="168" strokeWidth="0.6" className="text-line-strong" />
        <circle cx="200" cy="200" r="118" strokeWidth="0.7" className="spin-slow origin-center" style={{ transformOrigin: "200px 200px" }} />
        <circle cx="200" cy="200" r="64" strokeWidth="1" className="text-signal" />
        <path d="M200 18 V382" strokeWidth="0.5" className="text-line-strong" />
        <path d="M18 200 H382" strokeWidth="0.5" className="text-line-strong" />
        <path d="M68 68 L332 332" strokeWidth="0.4" className="text-mute/40" />
        <path d="M110 268 V132 L200 248 L290 132 V268" strokeWidth="1.6" />
        <rect x="286" y="258" width="10" height="10" fill="currentColor" stroke="none" className="text-signal" />
        <circle cx="200" cy="200" r="3" fill="currentColor" stroke="none" />
      </g>
      <text
        x="200"
        y="392"
        textAnchor="middle"
        fill="currentColor"
        className="text-mute"
        style={{ fontSize: "9px", letterSpacing: "0.35em" }}
      >
        PRECISION / CRAFT
      </text>
    </svg>
  );
}
