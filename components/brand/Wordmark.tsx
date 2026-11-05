import { cn } from "@/lib/cn";
import { Mark } from "@/components/brand/Mark";

export function Wordmark({
  className,
  markClassName,
  withMark = true,
}: {
  className?: string;
  markClassName?: string;
  withMark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {withMark ? <Mark className={markClassName} /> : null}
      <span className="font-display text-[0.95rem] font-extrabold tracking-[0.22em]">
        WEBPI
      </span>
    </span>
  );
}
