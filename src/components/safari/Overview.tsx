import { useId } from "react";
import Eyebrow from "@/components/shared/Eyebrow";
import safariCaseStudy from "@/data/caseStudies/safariSpirits";

const { eyebrow, headline, body, audiences } = safariCaseStudy.overview;

// What the site does, beside who it's for
const Overview = () => {
  const headingId = useId();

  return (
    <section aria-labelledby={headingId} className="px-page pb-20 lg:pb-30">
      <div className="mx-auto flex max-w-content flex-col gap-10 xl:flex-row xl:items-end xl:justify-between xl:gap-16">
        <div className="flex max-w-170 flex-col gap-4">
          <Eyebrow className="text-safari-clay">{eyebrow}</Eyebrow>
          <h2 id={headingId} className="text-chapter text-balance">
            {headline}
          </h2>
          <p className="text-body text-ink-muted lg:text-body-lg">{body}</p>
        </div>

        <ul className="grid gap-4 md:grid-cols-2 xl:w-130 xl:shrink-0">
          {audiences.map(({ name, text }) => (
            <li
              key={name}
              className="flex flex-col gap-2 rounded-card border border-safari-line bg-paper p-5"
            >
              <h3 className="text-base font-semibold text-safari-green">
                {name}
              </h3>
              <p className="text-base text-safari-body">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Overview;
