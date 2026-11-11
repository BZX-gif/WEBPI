"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";

type Tone = "mist" | "white" | "dark";

const tones: Record<Tone, string> = {
  mist: "",
  white: "tile-white",
  dark: "tile-dark",
};

function track(event: React.PointerEvent<HTMLElement>) {
  if (event.pointerType !== "mouse") return;
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  el.style.setProperty("--my", `${event.clientY - rect.top}px`);
}

/**
 * Rounded surface with a soft light that follows the pointer.
 * Renders a link when `href` is given.
 */
export function Tile({
  children,
  className,
  tone = "mist",
  href,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: Tone;
  href?: string;
  id?: string;
}) {
  const classes = cn("tile tile-glow", tones[tone], href && "group block", className);

  if (href) {
    return (
      <Link href={href} id={id} className={classes} onPointerMove={track}>
        {children}
      </Link>
    );
  }

  return (
    <div id={id} className={classes} onPointerMove={track}>
      {children}
    </div>
  );
}
