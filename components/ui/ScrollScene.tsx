"use client";

import { useEffect, useRef } from "react";

/**
 * Publishes scroll progress to CSS as `--p` (0 → 1) while the element
 * travels through the viewport. `start` and `end` are the viewport
 * fractions (0 = top, 1 = bottom) the element's top edge moves between.
 *
 * The value is eased toward its target every frame, so wheel steps and
 * touch flicks resolve into one continuous movement instead of jumps.
 * Children read `--p` in CSS (see `.scene-*` in globals.css); nothing
 * re-renders in React.
 */
export function ScrollScene({
  children,
  className,
  start = 1,
  end = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  start?: number;
  end?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      el.style.setProperty("--p", "1");
      return;
    }

    let frame = 0;
    let current = -1;
    let target = 0;
    let visible = false;

    const measure = () => {
      const vh = window.innerHeight;
      const top = el.getBoundingClientRect().top;
      const raw = (start * vh - top) / ((start - end) * vh);
      target = Math.min(1, Math.max(0, raw));
    };

    const tick = () => {
      frame = 0;
      measure();
      if (current < 0) current = target;
      current += (target - current) * 0.14;
      if (Math.abs(target - current) < 0.0005) current = target;
      el.style.setProperty("--p", current.toFixed(4));
      if (current !== target && visible) frame = requestAnimationFrame(tick);
    };

    const request = () => {
      if (!frame && visible) frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        request();
      },
      { rootMargin: "25% 0px" },
    );
    observer.observe(el);

    // Paint the correct starting value before the first scroll.
    measure();
    current = target;
    el.style.setProperty("--p", current.toFixed(4));

    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [start, end]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
