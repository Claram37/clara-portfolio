import { useId, useRef } from "react";
import resumeCaseStudy from "@/data/caseStudies/resumeFeedback";
import useReveal from "@/hooks/useReveal";
import ZoomStep from "./ZoomStep";

const { zoom } = resumeCaseStudy;

// The feedback as one zoom, from the whole resume to one bullet's fix. From lg the phones sit in a row,
// with the design's 240px phones and 96px gaps as shares of the row, so the magnifier lines meet the next phone
const Zoom = () => {
  const headingId = useId();
  const section = useRef<HTMLElement>(null);
  useReveal(section);

  return (
    <section
      ref={section}
      aria-labelledby={headingId}
      className="bg-resume-feedback px-page py-16 lg:pt-35 lg:pb-24"
    >
      <div className="mx-auto flex max-w-content flex-col gap-16 lg:gap-20">
        <ol className="flex flex-col items-center gap-12 zoom-in lg:grid lg:grid-cols-4 lg:items-start lg:gap-x-[7.69%]">
          {zoom.steps.map((step, index) => (
            <ZoomStep key={step.title} step={step} number={index + 1} />
          ))}
        </ol>
        <h2 id={headingId} className="text-center text-chapter text-balance">
          {zoom.line}
        </h2>
      </div>
    </section>
  );
};

export default Zoom;
