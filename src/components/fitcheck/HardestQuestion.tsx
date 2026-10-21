import { useId } from "react";
import Phone from "@/components/mockups/Phone";
import Eyebrow from "@/components/shared/Eyebrow";
import fitCheckCaseStudy from "@/data/caseStudies/fitCheck";
import { cn } from "@/lib/utils";

const { eyebrow, headline, body, answers, screen } = fitCheckCaseStudy.hardest;

const HardestQuestion = () => {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="overflow-hidden bg-fitcheck px-page"
    >
      <div className="mx-auto flex max-w-content flex-col gap-12 lg:flex-row lg:items-end lg:gap-16 xl:gap-24">
        <div className="flex flex-col gap-6 pt-20 lg:flex-1 lg:py-24 2xl:py-30">
          <Eyebrow className="text-muted-foreground">{eyebrow}</Eyebrow>
          <h2 id={headingId} className="text-chapter">
            {headline}
          </h2>
          <p className="text-body text-ink-muted lg:text-body-lg">{body}</p>

          <ul className="grid gap-3 pt-3 sm:grid-cols-2">
            {answers.map(({ icon: Icon, tile, title, text }) => (
              <li
                key={title}
                className="flex flex-col gap-3 rounded-card border border-window-line bg-paper p-5"
              >
                <span
                  className={cn(
                    "flex size-9 items-center justify-center rounded-lg",
                    tile,
                  )}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-bold">{title}</span>
                  <span className="text-muted-foreground">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto aspect-7/12 w-full max-w-90 shrink-0 lg:mx-0 lg:w-80 lg:max-w-none xl:w-105">
          <Phone
            src={screen.src}
            alt={screen.alt}
            shadow="shadow-fitcheck-float"
            className="absolute top-[13.33%] left-[7.14%] w-[85.71%]"
          />
        </div>
      </div>
    </section>
  );
};

export default HardestQuestion;
