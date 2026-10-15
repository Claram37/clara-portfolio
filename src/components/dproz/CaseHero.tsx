import type { CaseStudy } from "@/data/projects/types";

interface CaseHeroProps {
  caseStudy: CaseStudy;
}

const CaseHero = ({ caseStudy }: CaseHeroProps) => {
  const { project, intro, details } = caseStudy;

  return (
    <section className="px-page pt-12 pb-16">
      <div className="mx-auto flex max-w-content flex-col gap-8">
        <p className="inline-flex items-center gap-2 self-start text-base font-semibold uppercase text-dproz">
          Case Study
        </p>
        <div className="flex flex-col gap-6 pt-4 lg:flex-col lg:items-start lg:pt-4">
          <h1 className="-ml-1 text-case-title md:-ml-2">{project.name}</h1>
          <p className=" text-xl/snug text-pretty text-ink-soft md:text-2xl/snug">
            {intro}
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-x-8 gap-y-6 pt-4 md:grid-cols-2 lg:grid-cols-4 lg:pt-6">
          {details.map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col gap-2 lg:not-last:border-r lg:not-last:pr-8"
            >
              <dt className="text-xs text-muted-foreground">{label}</dt>
              <dd className="text-base">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default CaseHero;
