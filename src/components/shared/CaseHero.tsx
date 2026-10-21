import type { PageIntro } from "@/data/projects/types";
import { cn } from "@/lib/utils";

interface CaseHeroProps {
  caseStudy: PageIntro;
  accent: string;
  eyebrow?: string;
  dark?: boolean;
}

const CaseHero = ({
  caseStudy,
  accent,
  eyebrow = "Case Study",
  dark = false,
}: CaseHeroProps) => {
  const { project, title = project.name, intro, details } = caseStudy;

  return (
    <section className="px-page pt-12 pb-16">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 text-center">
        <p
          className={cn(
            "inline-flex items-center gap-2 text-base font-semibold uppercase",
            accent,
          )}
        >
          {eyebrow}
        </p>
        <h1 className="text-case-title">{title}</h1>
        <p
          className={cn(
            "text-xl/snug text-pretty md:text-2xl/snug",
            dark ? "text-on-dark" : "text-ink-soft",
          )}
        >
          {intro}
        </p>

        <dl className="grid grid-cols-2 gap-x-8 gap-y-6 pt-4 text-left md:flex md:gap-x-18">
          {details.map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col gap-2"
            >
              <dt
                className={cn(
                  "text-xs",
                  dark ? "text-on-dark-muted" : "text-muted-foreground",
                )}
              >
                {label}
              </dt>
              <dd className="text-base">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default CaseHero;
