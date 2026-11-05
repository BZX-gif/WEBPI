import { cn } from "@/lib/cn";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
      className={cn("h-7 w-7", className)}
    >
      <path
        d="M4 7 L12 29 L18 13 L24 29 L32 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="miter"
      />
      <rect x="29" y="27" width="3" height="3" fill="currentColor" />
    </svg>
  );
}

export function Point({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block bg-current align-middle", className)}
      style={{ width: "0.38em", height: "0.38em" }}
    />
  );
}
