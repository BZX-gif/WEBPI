import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Emph } from "@/components/ui/Emph";

export function PageHero({
  eyebrow,
  title,
  text,
  meta,
  className,
  children,
}: {
  eyebrow: string;
  /** Wrap a run in *asterisks* to set it in the italic accent. */
  title: string;
  text?: string;
  /** Short note shown opposite the eyebrow. */
  meta?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={cn("pt-28 sm:pt-36", className)}>
      <Container>
        <div className="rise flex items-center justify-between gap-4 border-b border-line pb-4">
          <p className="eyebrow">{eyebrow}</p>
          {meta ? <p className="mono text-sub">{meta}</p> : null}
        </div>

        <h1 className="display-lg mt-8 max-w-[18ch] sm:mt-12 lg:!text-[clamp(4rem,8.6vw,8.5rem)]">
          <span className="line-mask">
            <span style={{ "--d": "100ms" } as React.CSSProperties}>
              <Emph>{title}</Emph>
            </span>
          </span>
        </h1>

        {text || children ? (
          <div className="mt-10 grid gap-8 border-b border-line pb-12 sm:mt-14 sm:pb-16 lg:grid-cols-12">
            {text ? (
              <p
                className="rise lead max-w-2xl lg:col-span-6 lg:col-start-7"
                style={{ "--d": "380ms" } as React.CSSProperties}
              >
                {text}
              </p>
            ) : null}
            {children ? (
              <div
                className="rise lg:col-span-6 lg:col-start-7"
                style={{ "--d": "480ms" } as React.CSSProperties}
              >
                {children}
              </div>
            ) : null}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
