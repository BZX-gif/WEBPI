import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "dark" | "light" | "link";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  dark: "btn btn-dark",
  light: "btn btn-light",
  link: "link",
};

const sizes: Record<Size, string> = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
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
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isLink = variant === "link";
  const classes = cn(variants[variant], !isLink && sizes[size], className);
  const content = (
    <>
      <span className="link-label">{children}</span>
      {external ? (
        <ArrowUpRight size={isLink ? 17 : 16} strokeWidth={1.8} aria-hidden="true" />
      ) : isLink ? (
        <ChevronRight size={17} strokeWidth={1.8} aria-hidden="true" />
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
