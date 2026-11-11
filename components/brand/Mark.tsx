import { cn } from "@/lib/cn";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path
        d="M4 8 L11.5 28 L18 13 L24.5 28 L32 8"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
