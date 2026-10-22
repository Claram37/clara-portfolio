import { useId } from "react";
import Eyebrow from "@/components/shared/Eyebrow";
import resumeCaseStudy from "@/data/caseStudies/resumeFeedback";

const { eyebrow, headline, body, screen } = resumeCaseStudy.desktop;

// The same bullet on desktop, as one modal. Cropped just below its button, which the design's crop cut in half
const Desktop = () => {
  const headingId = useId();

  return (
    <section aria-labelledby={headingId} className="px-page pb-20 lg:pb-30">
      <div className="mx-auto flex max-w-content flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex flex-col gap-4 lg:w-100 lg:shrink-0">
          <Eyebrow className="text-resume-feedback-blue">{eyebrow}</Eyebrow>
          <h2 id={headingId} className="text-section text-balance">
            {headline}
          </h2>
          <p className="text-body text-ink-muted">{body}</p>
        </div>
        <img
          src={screen.src}
          alt={screen.alt}
          loading="lazy"
          decoding="async"
          className="aspect-199/180 min-w-0 flex-1 rounded-3xl border border-resume-feedback-line object-cover object-top shadow-resume-feedback"
        />
      </div>
    </section>
  );
};

export default Desktop;
