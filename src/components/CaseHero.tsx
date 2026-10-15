import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import type { CaseStudy } from "@/data/projects/types";

interface CaseHeroProps {
  caseStudy: CaseStudy;
}

const CaseHero = ({ caseStudy }: CaseHeroProps) => {
  const { project, intro, details } = caseStudy;

  return (
    <section className="px-page pt-12 pb-16">
      <div className="mx-auto flex max-w-content flex-col gap-8">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 self-start text-base leading-5 font-medium text-muted-foreground transition-colors hover:text-ink focus-ring"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to work
        </Link>

        <div className="flex flex-col gap-6 pt-6 lg:flex-row lg:items-end lg:justify-between lg:pt-10">
          <h1 className="text-case-title">{project.name}</h1>
          <p className="max-w-125 text-xl/snug text-pretty text-ink-soft md:text-2xl/snug">
            {intro}
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-x-8 gap-y-6 pt-8 md:grid-cols-3 lg:grid-cols-4 lg:pt-16">
          {details.map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-2 border-t pt-4">
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
