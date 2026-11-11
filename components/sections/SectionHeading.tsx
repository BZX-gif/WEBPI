import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  className,
  children,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  className?: string;
  /** Optional action rendered beside the heading on wide screens. */
  children?: React.ReactNode;
}) {
  const centered = align === "center";

  return (
    <Reveal
      className={cn(
        centered
          ? "mx-auto max-w-3xl text-center"
          : "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-10",
        className,
      )}
    >
      <div className={cn(!centered && "max-w-3xl")}>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className={cn("display-lg", eyebrow && "mt-3")}>{title}</h2>
        {text ? <p className={cn("lead mt-5", centered && "mx-auto max-w-2xl")}>{text}</p> : null}
      </div>
      {children ? <div className={cn("shrink-0", centered && "mt-4")}>{children}</div> : null}
    </Reveal>
  );
}
