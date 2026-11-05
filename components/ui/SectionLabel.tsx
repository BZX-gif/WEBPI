import { cn } from "@/lib/cn";

export function SectionLabel({
  index,
  children,
  className,
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-mute",
        className,
      )}
    >
      {index ? <span className="text-signal">{index}</span> : null}
      {index ? <span className="h-px w-6 bg-line-strong" /> : null}
      <span>{children}</span>
    </p>
  );
}
