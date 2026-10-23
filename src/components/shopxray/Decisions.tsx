import { useId } from "react";
import type { StepCaseStudy } from "@/data/projects/types";
import Heading from "./Heading";

interface DecisionsProps {
  decisions: StepCaseStudy["decisions"];
}

const Decisions = ({ decisions }: DecisionsProps) => {
  const { eyebrow, headline, items } = decisions;
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="px-page py-20 lg:py-24 2xl:py-30 snap-start"
    >
      <div className="mx-auto flex max-w-content flex-col gap-12">
        <Heading
          id={headingId}
          eyebrow={eyebrow}
          headline={headline}
          className="max-w-200"
        />
        <ol className="grid gap-4 lg:grid-cols-3">
          {items.map(({ title, text }, index) => (
            <li
              key={title}
              className="flex flex-col gap-4 rounded-card border border-daftari-rule bg-paper p-6 md:p-8"
            >
              <span
                className="font-display text-xl font-semibold text-shopxray"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
              <p className="text-body text-ink-muted">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Decisions;
