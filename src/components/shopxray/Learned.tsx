import { useId } from "react";
import Eyebrow from "@/components/shared/Eyebrow";
import type { SectionCopy } from "@/data/projects/types";

interface LearnedProps {
  learned: SectionCopy;
}

const Learned = ({ learned }: LearnedProps) => {
  const { eyebrow, headline, body } = learned;
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="px-page py-20 lg:py-24 2xl:py-30 snap-start"
    >
      <div className="mx-auto flex max-w-content flex-col gap-6 rounded-3xl bg-daftari-stage p-8 md:p-12 xl:p-16">
        <Eyebrow className="text-shopxray">{eyebrow}</Eyebrow>
        <h2 id={headingId} className="max-w-240 text-lesson text-balance">
          {headline}
        </h2>
        <p className="max-w-175 text-body text-ink-muted lg:text-body-lg">
          {body}
        </p>
      </div>
    </section>
  );
};

export default Learned;
