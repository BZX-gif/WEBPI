import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ClosingCta({
  eyebrow = "Next",
  title = "Have something ambitious in mind?",
  text = "Tell us what you are building. If it is a fit, we will reply with a clear first conversation — not a brochure.",
  button = "Start a project",
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  button?: string;
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="on-dark relative isolate overflow-hidden rounded-[2rem] bg-night px-6 py-20 text-center text-white sm:px-12 sm:py-28 lg:py-36">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -bottom-1/2 -z-10 mx-auto h-full w-[min(90%,60rem)] rounded-full bg-[radial-gradient(closest-side,rgba(41,151,255,0.38),rgba(123,92,255,0.18)_55%,transparent)] blur-2xl"
            />
            <p className="eyebrow !text-[#2997ff]">{eyebrow}</p>
            <h2 className="display-lg mx-auto mt-3 max-w-3xl">{title}</h2>
            <p className="lead mx-auto mt-5 max-w-xl !text-night-sub">{text}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-x-7 gap-y-2 sm:flex-row">
              <Button href="/start" size="lg">
                {button}
              </Button>
              <Button href="/contact" variant="link">
                Contact the studio
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
