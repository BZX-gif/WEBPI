import { principles } from "@/data/principles";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Principles() {
  return (
    <section className="bg-mist py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <p className="eyebrow">Why WEBPI</p>
            <h2 className="display-lg mt-3">Principles we actually work by.</h2>
            <p className="lead mt-5 max-w-md">
              No invented years in business. No borrowed logos. Credibility is
              the work, and the way the work is done.
            </p>
          </Reveal>

          <ul className="lg:col-span-7">
            {principles.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                className="grid gap-x-6 gap-y-2 border-t border-hair py-8 first:border-t-0 first:pt-0 sm:grid-cols-[3rem_1fr] lg:first:pt-2"
              >
                <span className="pt-1 text-sm tabular-nums text-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="display-sm">{item.title}</h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-sub">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
