import { useId } from "react";
import Phone from "@/components/mockups/Phone";
import Eyebrow from "@/components/shared/Eyebrow";
import fitCheckCaseStudy from "@/data/caseStudies/fitCheck";

const { eyebrow, headline, body, steps, screen } = fitCheckCaseStudy.overview;

const Overview = () => {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="bg-surface px-page py-20 lg:py-24 2xl:py-30"
    >
      <div className="mx-auto flex max-w-content flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
        <div data-reveal className="flex flex-col gap-6 reveal-stagger lg:flex-1">
          <Eyebrow className="text-muted-foreground">{eyebrow}</Eyebrow>
          <h2 id={headingId} className="text-chapter">
            {headline}
          </h2>
          <p className="text-body text-ink-muted lg:text-body-lg">{body}</p>

          <ol className="pt-2">
            {steps.map(({ name, text }, index) => (
              <li
                key={name}
                className="flex items-baseline gap-5 border-t border-window-line py-4 last:border-b"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex flex-col gap-1 sm:flex-row sm:gap-5">
                  <span className="font-semibold sm:w-28 sm:shrink-0">
                    {name}
                  </span>
                  <span className="text-ink-muted">{text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative mx-auto aspect-13/15 w-full max-w-130 overflow-hidden rounded-card bg-fitcheck lg:mx-0 lg:max-w-none lg:shrink-0 lg:basis-5/12">
          <div data-reveal className="absolute inset-0 reveal-scene delay-150">
            <Phone
              src={screen.src}
              alt={screen.alt}
              shadow="shadow-fitcheck-phone"
              className="absolute top-[9.33%] left-[17.31%] w-[65.38%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
