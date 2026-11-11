import { processSteps } from "@/data/process";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const tones = [
  "bg-card text-ink",
  "bg-paper-deep text-ink",
  "bg-accent text-ink",
  "bg-ink text-paper",
  "bg-card text-ink",
  "bg-paper-deep text-ink",
];

export function Process() {
  return (
    <section className="bg-paper py-24 sm:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <p className="eyebrow">Process</p>
            <h2 className="display-lg mt-5 !text-[clamp(2.75rem,5.6vw,5.25rem)]">
              From first conversation to a product people can <span className="em">use.</span>
            </h2>
            <p className="mono mt-8 text-sub">Six steps — one team</p>
          </Reveal>

          {/* Each card sticks a little lower than the last, so they stack like index cards. */}
          <ol className="lg:col-span-7">
            {processSteps.map((step, index) => (
              <li
                key={step.number}
                className={cn(
                  "sticky mb-5 flex min-h-[19rem] flex-col justify-between gap-12 rounded-2xl p-7 shadow-[0_-12px_40px_-24px_rgba(20,19,16,0.35)] ring-1 ring-ink/10 last:mb-0 sm:min-h-[21rem] sm:rounded-3xl sm:p-10",
                  tones[index % tones.length],
                )}
                style={{ top: `calc(6rem + ${index * 0.9}rem)` }}
              >
                <div className="flex items-start justify-between gap-6">
                  <p className="font-serif text-7xl leading-[0.8] tracking-[-0.03em] sm:text-8xl">
                    {step.number}
                  </p>
                  <p className="mono opacity-60">
                    Step {index + 1} / {processSteps.length}
                  </p>
                </div>
                <div>
                  <h3 className="display-md">{step.title}</h3>
                  <p className="mt-3 max-w-lg opacity-75">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
