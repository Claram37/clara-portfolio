import { useId } from "react";
import fitCheckCaseStudy from "@/data/caseStudies/fitCheck";

const { headline, body } = fitCheckCaseStudy.problem;

const Problem = () => {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="px-page py-20 lg:py-24 2xl:py-30"
    >
      <div className="mx-auto flex max-w-content flex-col gap-6 lg:flex-row lg:justify-between lg:gap-12">
        <h2 id={headingId} className="text-chapter lg:max-w-150">
          {headline}
        </h2>
        <p className="text-body text-ink-muted lg:max-w-125 lg:text-body-lg">
          {body}
        </p>
      </div>
    </section>
  );
};

export default Problem;
