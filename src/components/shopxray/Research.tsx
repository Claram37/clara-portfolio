import { useId } from "react";
import type { SectionCopy } from "@/data/projects/types";
import Heading from "./Heading";

interface ResearchProps {
  research: SectionCopy;
}

const Research = ({ research }: ResearchProps) => {
  const { eyebrow, headline, body } = research;
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="px-page py-20 lg:py-24 2xl:py-30 snap-start"
    >
      <div className="mx-auto flex max-w-content flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <Heading
          id={headingId}
          eyebrow={eyebrow}
          headline={headline}
          className="lg:max-w-150"
        />
        <p className="text-body text-ink-muted lg:max-w-125 lg:text-body-lg">
          {body}
        </p>
      </div>
    </section>
  );
};

export default Research;
