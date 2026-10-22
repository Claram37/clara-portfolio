import { useId } from "react";
import Phone from "@/components/mockups/Phone";
import Eyebrow from "@/components/shared/Eyebrow";
import resumeCaseStudy from "@/data/caseStudies/resumeFeedback";
import { cn } from "@/lib/utils";

const { eyebrow, headline, items } = resumeCaseStudy.scenes;

// How the feedback works, a screen at a time, each card tagged with the analysis steps it covers. Tinted and white in turn
const Scenes = () => {
  const headingId = useId();

  return (
    <section aria-labelledby={headingId} className="px-page py-20 lg:py-30">
      <div className="mx-auto flex max-w-content flex-col gap-10 lg:gap-14">
        <div className="flex flex-col gap-4">
          <Eyebrow className="text-resume-feedback-blue">{eyebrow}</Eyebrow>
          <h2 id={headingId} className="text-chapter text-balance">
            {headline}
          </h2>
        </div>

        <ol className="flex flex-col gap-6 lg:gap-12">
          {items.map(({ steps, headline, body, screen }, index) => (
            <li
              key={headline}
              className={cn(
                "grid items-center gap-10 rounded-3xl border p-6 md:grid-cols-2 md:p-10",
                index % 2 === 0
                  ? "border-transparent bg-resume-feedback-tint"
                  : "border-resume-feedback-line bg-paper",
              )}
            >
              <div className="flex max-w-115 flex-col gap-3">
                <p className="w-fit rounded-full bg-resume-feedback px-3 py-1 text-xs font-semibold text-resume-feedback-blue">
                  {steps}
                </p>
                <h3 className="text-section">{headline}</h3>
                <p className="text-body text-ink-muted">{body}</p>
              </div>
              <Phone {...screen} className="mx-auto w-55" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Scenes;
