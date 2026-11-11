import { cn } from "@/lib/cn";

/**
 * An endless ticker. The list is rendered twice so the loop is seamless;
 * the copy is hidden from assistive technology.
 */
export function Marquee({
  items,
  className,
  itemClassName,
  speed = 40,
}: {
  items: readonly string[];
  className?: string;
  itemClassName?: string;
  speed?: number;
}) {
  const run = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className={cn("flex items-center whitespace-nowrap", itemClassName)}>
          {item}
          <span className="mx-[0.6em] inline-block text-[0.5em] text-accent" aria-hidden="true">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className="marquee-track"
        style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}
      >
        {run(false)}
        {run(true)}
      </div>
    </div>
  );
}
