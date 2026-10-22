import { useId } from "react";
import serenityCaseStudy from "@/data/caseStudies/serenity";
import Eyebrow from "@/components/shared/Eyebrow";
import { cn } from "@/lib/utils";

const { eyebrow, headline, body, swatches } = serenityCaseStudy.palette;

// The app's colours, as swatches on the night they were picked for
const Palette = () => {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="px-page pt-20 md:pt-32 lg:pt-40"
    >
      <div className="mx-auto flex max-w-content flex-col gap-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="flex max-w-160 flex-col gap-3">
            <Eyebrow className="text-serenity-lavender">{eyebrow}</Eyebrow>
            <h2 id={headingId} className="text-chapter text-paper">
              {headline}
            </h2>
          </div>
          <p className="max-w-105 text-base text-serenity-muted">{body}</p>
        </div>

        <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {swatches.map(({ name, fill }) => (
            <li key={name} className="flex flex-col gap-4">
              <span
                aria-hidden="true"
                className={cn(
                  "h-28 rounded-3xl border border-paper/12 md:h-40",
                  fill,
                )}
              />
              <span className="text-base font-semibold text-paper">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Palette;
