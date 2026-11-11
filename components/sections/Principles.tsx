import { principles } from "@/data/principles";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Principles() {
  return (
    <section className="py-24 sm:py-36">
      <Container>
        <ul className="grid border-l border-t border-ink/20 sm:grid-cols-2 lg:grid-cols-4">
          <li className="flex min-h-[20rem] flex-col justify-between gap-10 border-b border-r border-ink/20 bg-ink p-7 text-paper sm:p-9">
            <p className="eyebrow">Why WEBPI</p>
            <div>
              <h2 className="display-md">
                Principles we actually <span className="em">work by.</span>
              </h2>
              <p className="mt-4 text-paper/65">
                No invented years in business. No borrowed logos. Credibility
                is the work, and the way the work is done.
              </p>
            </div>
          </li>

          {principles.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={(index % 4) * 70}
              className="group flex min-h-[20rem] flex-col justify-between gap-10 border-b border-r border-ink/20 p-7 transition-colors duration-500 hover:bg-card sm:p-9"
            >
              <span className="mono flex items-center justify-between text-sub">
                {String(index + 1).padStart(2, "0")}
                <span className="h-2 w-2 rounded-full bg-ink/20 transition-colors duration-500 group-hover:bg-accent" />
              </span>
              <div>
                <h3 className="display-sm">{item.title}</h3>
                <p className="mt-3 text-sub">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
