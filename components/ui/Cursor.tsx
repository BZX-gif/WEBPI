"use client";

import { useEffect, useRef } from "react";

/**
 * A label that trails the pointer over anything marked `data-cursor="…"`.
 * Mouse-only: touch and reduced-motion users never see it, and it does not
 * replace the system cursor.
 */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const text = label.current;
    if (!el || !text) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let x = 0;
    let y = 0;
    let tx = 0;
    let ty = 0;
    let frame = 0;
    let active = false;
    let placed = false;

    const tick = () => {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      const settled = Math.abs(tx - x) < 0.1 && Math.abs(ty - y) < 0.1;
      frame = active || !settled ? requestAnimationFrame(tick) : 0;
    };

    const setActive = (target: Element | null) => {
      const host = target?.closest<HTMLElement>("[data-cursor]") ?? null;
      active = Boolean(host);
      if (host) text.textContent = host.dataset.cursor ?? "";
      el.dataset.active = String(active);
      if (active && !frame) frame = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      tx = event.clientX;
      ty = event.clientY;
      if (!placed) {
        placed = true;
        x = tx;
        y = ty;
      }
      setActive(event.target as Element);
    };

    // Content can slide under a resting pointer while scrolling.
    const onScroll = () => {
      if (placed) setActive(document.elementFromPoint(tx, ty));
    };

    const onLeave = () => setActive(null);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="cursor" aria-hidden="true">
      <div className="cursor-dot">
        <span ref={label} />
      </div>
    </div>
  );
}
