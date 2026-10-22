import { useId } from "react";
import { Check } from "lucide-react";
import Phone from "@/components/mockups/Phone";
import Eyebrow from "@/components/shared/Eyebrow";
import safariCaseStudy from "@/data/caseStudies/safariSpirits";

const { eyebrow, headline, features, screens } = safariCaseStudy.included;

// What this version ships, ticked off beside two of its phone screens
const Included = () => {
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

        <div className="flex flex-col gap-8 rounded-3xl border border-safari-line bg-paper p-5 md:p-10 xl:flex-row xl:items-center xl:gap-12">
          <ul className="flex-1">
            {features.map(({ name, text }) => (
              <li
                key={name}
                className="flex gap-4 border-b border-safari-line py-5 first:pt-0 last:border-0 last:pb-0"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-safari-tick">
                  <Check
                    className="size-4 text-safari-green"
                    aria-hidden="true"
                  />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-sans text-xl font-semibold text-safari-green">
                    {name}
                  </h3>
                  <p className="text-base text-safari-body">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* The phones run off the bottom of their stage */}
          <div className="flex h-80 items-start justify-center gap-4 overflow-hidden rounded-2xl bg-safari-stage pt-8 md:h-120 md:gap-8 md:pt-12 xl:w-150 xl:shrink-0">
            {screens.map((screen) => (
              <Phone
                key={screen.alt}
                src={screen.src}
                alt={screen.alt}
                className="w-36 shrink-0 md:w-55"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Included;
