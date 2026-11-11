import { cn } from "@/lib/cn";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-start font-semibold tracking-[-0.04em]", className)}>
      WEBPI
      <span
        className="ml-[0.12em] mt-[0.18em] inline-block h-[0.28em] w-[0.28em] rounded-full bg-accent"
        aria-hidden="true"
      />
    </span>
  );
}
