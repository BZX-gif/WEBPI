import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[86vh] items-center pt-12 text-center">
      <Container size="text">
        <p className="rise text-gradient mx-auto w-fit text-[clamp(5rem,20vw,11rem)] font-semibold leading-none tracking-[-0.06em]">
          404
        </p>
        <h1 className="rise display-md mt-4" style={{ "--d": "120ms" } as React.CSSProperties}>
          This page has gone missing.
        </h1>
        <p
          className="rise lead mx-auto mt-4 max-w-lg"
          style={{ "--d": "220ms" } as React.CSSProperties}
        >
          The address does not match anything we built. It may have moved, or
          it may never have existed.
        </p>
        <div
          className="rise mt-8 flex flex-col items-center justify-center gap-x-7 gap-y-2 sm:flex-row"
          style={{ "--d": "320ms" } as React.CSSProperties}
        >
          <Button href="/" size="lg">
            Return home
          </Button>
          <Button href="/start" variant="link">
            Start a project
          </Button>
        </div>
      </Container>
    </section>
  );
}
