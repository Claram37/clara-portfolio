import type { CaseStudyIntro } from "@/data/projects/types";
import { cn } from "@/lib/utils";

interface CaseHeroProps {
  caseStudy: CaseStudyIntro;
  accent: string;
}

const CaseHero = ({ caseStudy, accent }: CaseHeroProps) => {
  const { project, intro, details } = caseStudy;

  return (
    <section className="px-page pt-12 pb-16">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 text-center">
        <p
          className={cn(
            "inline-flex items-center gap-2 text-base font-semibold uppercase",
            accent,
          )}
        >
          Case Study
        </p>
        <h1 className="text-case-title">{project.name}</h1>
        <p className="text-xl/snug text-pretty text-ink-soft md:text-2xl/snug">
          {intro}
        </p>

        <dl className="grid grid-cols-2 gap-x-8 gap-y-6 pt-4 text-left md:flex md:gap-x-18">
          {details.map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col gap-2"
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
