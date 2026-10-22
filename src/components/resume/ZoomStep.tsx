import Phone from "@/components/mockups/Phone";
import type { ZoomStep as Step } from "@/data/projects/types";

interface ZoomStepProps {
  step: Step;
  number: number;
}

// A phone, its highlight box and the magnifier lines out to the next phone, then its caption.
// The lines end 40% of a phone's width to the right (Zoom's gap), at the next screen's top and bottom,
// and grow from the box's corners (their transform origins)
const ZoomStep = ({ step, number }: ZoomStepProps) => {
  const { title, text, screen, lens } = step;
  const right = lens && lens.left + lens.width;

  return (
    <li className="flex w-60 flex-col gap-7 lg:w-auto">
      <div className="relative">
        <Phone {...screen} className="w-full" />
        {lens && (
          <>
            <span
              data-lens
              data-reveal
              aria-hidden="true"
              className="absolute rounded-lg border-2 border-resume-feedback-blue bg-resume-feedback-blue/8"
              style={{
                left: `${lens.left}%`,
                top: `${lens.top}%`,
                width: `${lens.width}%`,
                height: `${lens.height}%`,
              }}
            />
            <svg
              aria-hidden="true"
              className="absolute inset-0 size-full overflow-visible stroke-resume-feedback-blue/40 max-lg:hidden"
            >
              <line
                x1={`${right}%`}
                y1={`${lens.top}%`}
                x2="140%"
                y2="1.6%"
                strokeWidth={1.5}
                style={{ transformOrigin: `${right}% ${lens.top}%` }}
              />
              <line
                x1={`${right}%`}
                y1={`${lens.top + lens.height}%`}
                x2="140%"
                y2="98.4%"
                strokeWidth={1.5}
                style={{
                  transformOrigin: `${right}% ${lens.top + lens.height}%`,
                }}
              />
            </svg>
          </>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="flex items-center gap-2 text-xl font-semibold">
          <span
            aria-hidden="true"
            className="flex size-6 items-center justify-center rounded-full bg-resume-feedback-blue font-sans text-xs font-bold text-paper"
          >
            {number}
          </span>
          {title}
        </h3>
        <p className="text-base text-ink-muted">{text}</p>
      </div>
    </li>
  );
};

export default ZoomStep;
