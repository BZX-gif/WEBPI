import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[92vh] items-end pb-16 pt-28 sm:pb-24">
      <Container>
        <p className="rise eyebrow">Error — page not found</p>
        <h1 className="mt-6 font-serif text-[clamp(8rem,34vw,30rem)] leading-[0.74] tracking-[-0.05em]">
          <span className="line-mask">
            <span>
              4<span className="em">0</span>4
            </span>
          </span>
        </h1>
        <div className="mt-10 grid gap-8 border-t border-line pt-8 lg:grid-cols-12 lg:items-end">
          <div className="rise lg:col-span-6" style={{ "--d": "300ms" } as React.CSSProperties}>
            <h2 className="display-md">This page has gone missing.</h2>
            <p className="lead mt-3 max-w-lg">
              The address does not match anything we built. It may have moved,
              or it may never have existed.
            </p>
          </div>
          <div
            className="rise flex flex-wrap items-center gap-x-7 gap-y-3 lg:col-span-6 lg:justify-end"
            style={{ "--d": "420ms" } as React.CSSProperties}
          >
            <Button href="/">Return home</Button>
            <Button href="/start" variant="link">
              Start a project
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
