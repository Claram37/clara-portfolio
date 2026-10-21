import { useId } from "react";
import Zoom from "@/components/mockups/Zoom";
import Eyebrow from "@/components/shared/Eyebrow";
import fitCheckCaseStudy from "@/data/caseStudies/fitCheck";
import { cn } from "@/lib/utils";
import Pin from "./Pin";

const { eyebrow, headline, body, callouts, report } =
  fitCheckCaseStudy.versionOne;

const pins = [
  "top-[14.41%] left-[0.91%]",
  "top-[80.88%] left-[4.55%]",
  "top-[94.52%] left-[62.05%]",
];

const VersionOne = () => {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="bg-surface px-page py-20 lg:py-24 2xl:py-30"
    >
      <div className="mx-auto flex max-w-content flex-col gap-12 lg:flex-row lg:items-start lg:gap-16 xl:gap-24">
        <div className="flex flex-col gap-6 lg:flex-1 lg:pt-6">
          <Eyebrow className="text-muted-foreground">{eyebrow}</Eyebrow>
          <h2 id={headingId} className="text-chapter">
            {headline}
          </h2>
          <p className="text-body text-ink-muted lg:text-body-lg">{body}</p>

          <ol className="pt-4">
            {callouts.map(({ quote, text }, index) => (
              <li
                key={quote}
                className="flex gap-4 border-t border-window-line py-5"
              >
                <Pin>{index + 1}</Pin>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">{quote}</p>
                  <p className="text-ink-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative mx-auto w-full max-w-90 lg:mx-0 lg:w-80 lg:max-w-none lg:shrink-0 xl:w-110">
          <Zoom
            src={report.src}
            alt={report.alt}
            shadow="shadow-fitcheck-report"
            className="w-full border border-window-line"
          />
          {pins.map((placement, index) => (
            <Pin key={placement} className={cn("absolute shadow-pin", placement)}>
              {index + 1}
            </Pin>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VersionOne;
