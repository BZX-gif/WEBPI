import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
  arrow,
  type,
  disabled,
  ...props
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  arrow?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = cn(variants[variant], className);
  const content = (
    <>
      <span>{children}</span>
      {arrow ? <ArrowUpRight size={15} strokeWidth={1.6} /> : null}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
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
