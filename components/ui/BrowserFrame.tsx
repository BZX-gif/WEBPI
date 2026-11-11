import { cn } from "@/lib/cn";

/**
 * A quiet browser window used to present real, shipped work.
 */
export function BrowserFrame({
  children,
  url,
  className,
}: {
  children: React.ReactNode;
  url?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl bg-night-raised shadow-float ring-1 ring-black/10 sm:rounded-[1.75rem]",
        className,
      )}
    >
      <div className="relative flex h-9 items-center px-4 sm:h-11 sm:px-5" aria-hidden="true">
        <div className="flex gap-1.5 sm:gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20 sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20 sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20 sm:h-3 sm:w-3" />
        </div>
        {url ? (
          <span className="absolute left-1/2 max-w-[60%] -translate-x-1/2 truncate rounded-md bg-white/10 px-3 py-0.5 text-[0.6875rem] text-white/60 sm:px-10 sm:py-1 sm:text-xs">
            {url}
          </span>
        ) : null}
      </div>
      {children}
    </div>
  );
}
