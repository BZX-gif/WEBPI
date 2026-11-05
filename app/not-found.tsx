import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center pt-24">
      <Container>
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-signal">
          404
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
          This page has gone missing.
        </h1>
        <p className="mt-6 max-w-lg text-base leading-7 text-soft">
          The address does not match anything we built. It may have moved, or
          it may never have existed.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Return home</Button>
          <Button href="/start" variant="secondary">
            Start a Project
          </Button>
        </div>
      </Container>
    </section>
  );
}
