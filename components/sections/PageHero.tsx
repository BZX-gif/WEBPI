import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  text,
  className,
  children,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={cn("pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pt-48", className)}>
      <Container size="text" className="text-center">
        <p className="rise eyebrow">{eyebrow}</p>
        <h1 className="display-xl mx-auto mt-4 max-w-4xl !text-[clamp(2.5rem,7vw,5rem)]">
          <span className="line-mask">
            <span style={{ "--d": "80ms" } as React.CSSProperties}>{title}</span>
          </span>
        </h1>
        {text ? (
          <p
            className="rise lead mx-auto mt-6 max-w-2xl"
            style={{ "--d": "260ms" } as React.CSSProperties}
          >
            {text}
          </p>
        ) : null}
        {children ? (
          <div className="rise mt-8" style={{ "--d": "380ms" } as React.CSSProperties}>
            {children}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
