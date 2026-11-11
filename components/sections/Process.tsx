"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Container } from "@/components/ui/Container";

export function Process() {
  const track = useRef<HTMLOListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const el = track.current;
    if (!el) return;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      const start = el.scrollLeft <= 4;
      const end = el.scrollLeft >= max - 4;
      setEdges((prev) => (prev.start === start && prev.end === end ? prev : { start, end }));
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  function move(direction: 1 | -1) {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="From first conversation to a product people can use."
        />
      </Container>

      <ol ref={track} className="gallery mt-12 sm:mt-16" aria-label="Process steps">
        {processSteps.map((step) => (
          <li
            key={step.number}
            className="tile flex min-h-[24rem] w-[min(82vw,23rem)] flex-col p-8 sm:p-10"
          >
            <p className="text-gradient w-fit text-6xl font-semibold tracking-[-0.05em]">
              {step.number}
            </p>
            <h3 className="display-sm mt-auto pt-10">{step.title}</h3>
            <p className="mt-3 leading-relaxed text-sub">{step.text}</p>
          </li>
        ))}
      </ol>

      <Container className="flex justify-end gap-3">
        <button
          type="button"
          className="gallery-btn"
          onClick={() => move(-1)}
          disabled={edges.start}
          aria-label="Previous step"
        >
          <ChevronLeft size={22} strokeWidth={1.8} />
        </button>
        <button
          type="button"
          className="gallery-btn"
          onClick={() => move(1)}
          disabled={edges.end}
          aria-label="Next step"
        >
          <ChevronRight size={22} strokeWidth={1.8} />
        </button>
      </Container>
    </section>
  );
}
