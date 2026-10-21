import { useId } from "react";
import Eyebrow from "@/components/shared/Eyebrow";
import fitCheckCaseStudy from "@/data/caseStudies/fitCheck";
import { cn } from "@/lib/utils";

const { eyebrow, headline, note, document: resume, cards } =
  fitCheckCaseStudy.results;

const placements = ["top-[17.5%] left-[4.23%]", "top-[65.63%] right-[4.23%]"];

const Results = () => {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="px-page py-20 lg:py-24 2xl:py-30"
    >
      <div className="mx-auto flex max-w-content flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
        <div className="flex flex-col gap-7 lg:flex-1">
          <Eyebrow className="text-muted-foreground">{eyebrow}</Eyebrow>
          <h2 id={headingId} className="max-w-150 text-chapter">
            {headline}
          </h2>
          <p className="text-base text-muted-foreground">{note}</p>
        </div>

        <div className="relative mx-auto aspect-71/80 w-full max-w-142 overflow-hidden rounded-card bg-fitcheck lg:mx-0 lg:max-w-none lg:shrink-0 lg:basis-5/11">
          <img
            src={resume.src}
            alt={resume.alt}
            loading="lazy"
            decoding="async"
            className="absolute top-[10%] left-[21.13%] w-[66.9%] shadow-fitcheck-doc"
          />
          {cards.map(({ icon: Icon, title, text }, index) => (
            <div
              key={title}
              className={cn(
                "absolute flex w-64 items-center gap-4 rounded-card bg-ink px-5 py-4 shadow-fitcheck-note sm:w-72",
                placements[index],
              )}
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-code-chip">
                <Icon className="size-5 text-fitcheck-go" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="font-semibold text-paper">{title}</span>
                <span className="text-xs text-code-muted">{text}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
