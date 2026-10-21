import { useId } from "react";
import Phone from "@/components/mockups/Phone";
import fitCheckCaseStudy from "@/data/caseStudies/fitCheck";
import { cn } from "@/lib/utils";

const { headline, aside, screens } = fitCheckCaseStudy.screens;

const delays = ["", "delay-150", "delay-300", "delay-450"];

const Screens = () => {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="px-page py-20 lg:py-24 2xl:py-30"
    >
      <div className="mx-auto flex max-w-content flex-col gap-12">
        <div
          data-reveal
          className="flex flex-col gap-3 reveal-stagger md:flex-row md:items-end md:justify-between md:gap-8"
        >
          <h2 id={headingId} className="text-chapter text-balance">
            {headline}
          </h2>
          <p className="text-body text-ink-muted lg:text-body-lg">{aside}</p>
        </div>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-4 xl:gap-6">
          {screens.map(({ src, alt, caption }, index) => (
            <li key={caption} className="flex flex-col gap-5">
              <div className="relative aspect-21/40 overflow-hidden rounded-card bg-surface">
                <div
                  data-reveal
                  className={cn("absolute inset-0 reveal-scene", delays[index])}
                >
                  <Phone
                    src={src}
                    alt={alt}
                    shadow="shadow-fitcheck-float"
                    className="absolute top-[7.14%] left-[7.48%] w-[85.03%]"
                  />
                </div>
              </div>
              <p className="text-center text-ink-muted">{caption}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Screens;
