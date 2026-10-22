import { useId } from "react";
import Day from "@/components/safari/Day";
import Eyebrow from "@/components/shared/Eyebrow";
import safariCaseStudy from "@/data/caseStudies/safariSpirits";

const { eyebrow, headline, days } = safariCaseStudy.itinerary;

// The project's days, numbered on the site's own itinerary rail
const Itinerary = () => {
  const headingId = useId();

  return (
    <section aria-labelledby={headingId} className="px-page pb-20 lg:pb-30">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col gap-4 pb-10 lg:pb-14">
          <Eyebrow className="text-safari-clay">{eyebrow}</Eyebrow>
          <h2 id={headingId} className="text-chapter text-balance">
            {headline}
          </h2>
        </div>

        <ol>
          {days.map((day, index) => (
            <Day
              key={day.headline}
              day={day}
              number={index + 1}
              last={index === days.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Itinerary;
