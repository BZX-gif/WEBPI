import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "accent" | "light" | "outline" | "link";
type Size = "sm" | "md";

const variants: Record<Variant, string> = {
  primary: "btn",
  accent: "btn btn-accent",
  light: "btn btn-light",
  outline: "btn btn-outline",
  link: "link",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = true,
  className,
  external,
  type,
  disabled,
  ...props
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  /** Show the arrow chip (buttons) or arrow (links). */
  arrow?: boolean;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isLink = variant === "link";
  const classes = cn(
    variants[variant],
    !isLink && size === "sm" && "btn-sm",
    !isLink && !arrow && "btn-plain",
    className,
  );

  const content = isLink ? (
    <>
      <span className="link-label">{children}</span>
      {arrow ? <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" /> : null}
    </>
  ) : (
    <>
      <span className="btn-roll">
        <span
          className="btn-label"
          data-text={typeof children === "string" ? children : undefined}
        >
          {children}
        </span>
      </span>
      {arrow ? (
        <span className="btn-chip" aria-hidden="true">
          <ArrowUpRight size={size === "sm" ? 15 : 18} strokeWidth={1.8} />
        </span>
      ) : null}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
