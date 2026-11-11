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
    <span className={cn("inline-flex items-center gap-2", className)}>
      {withMark ? <Mark className={markClassName} /> : null}
      <span className="text-[1.0625rem] font-semibold tracking-[-0.02em]">WEBPI</span>
    </span>
  );
}
