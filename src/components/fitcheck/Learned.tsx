import { useId } from "react";
import Eyebrow from "@/components/shared/Eyebrow";
import fitCheckCaseStudy from "@/data/caseStudies/fitCheck";

const { eyebrow, headline, body } = fitCheckCaseStudy.learned;

const Learned = () => {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="px-page py-20 lg:py-24 2xl:pt-30"
    >
      <div className="mx-auto flex max-w-content flex-col gap-5">
        <Eyebrow className="text-muted-foreground">{eyebrow}</Eyebrow>
        <h2 id={headingId} className="max-w-240 text-lesson">
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
