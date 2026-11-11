import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Emph } from "@/components/ui/Emph";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";

const ticker = ["Start a project", "Let's build it", "Say hello"] as const;

export function ClosingCta({
  eyebrow = "Next",
  title = "Have something ambitious in mind?",
  text = "Tell us what you are building. If it is a fit, we will reply with a clear first conversation — not a brochure.",
  button = "Start a project",
}: {
  eyebrow?: string;
  /** Wrap a run in *asterisks* to set it in italics. */
  title?: string;
  text?: string;
  button?: string;
}) {
  return (
    <section className="pb-5 sm:pb-10">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-accent text-ink sm:rounded-[3rem]">
            <Marquee
              items={ticker}
              speed={26}
              className="border-b border-ink/20 py-4"
              itemClassName="mono [&>span]:!text-ink"
            />
            <div className="grid gap-10 px-6 py-16 sm:px-12 sm:py-24 lg:grid-cols-12 lg:items-end lg:py-32">
              <div className="lg:col-span-8">
                <p className="mono">{eyebrow}</p>
                <h2 className="display-lg mt-6 [&_.em]:text-paper">
                  <Emph>{title}</Emph>
                </h2>
              </div>
              <div className="lg:col-span-4">
                <p className="max-w-sm text-lg leading-snug text-ink/80">{text}</p>
                <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
                  <Button href="/start">{button}</Button>
                  <Button href="/contact" variant="link" arrow={false}>
                    Contact the studio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
