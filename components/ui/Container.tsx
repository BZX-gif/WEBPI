import { cn } from "@/lib/cn";

const widths = {
  wide: "max-w-[1520px]",
  text: "max-w-[1100px]",
  narrow: "max-w-[760px]",
} as const;

export function Container({
  children,
  className,
  size = "wide",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  size?: keyof typeof widths;
  as?: "div" | "section" | "header" | "footer" | "nav";
}) {
  return (
    <Tag className={cn("mx-auto w-full px-5 sm:px-10", widths[size], className)}>
      {children}
    </Tag>
  );
}
