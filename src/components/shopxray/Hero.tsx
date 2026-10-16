import type { CaseStudyIntro } from "@/data/projects/types";
import Eyebrow from "./Eyebrow";

interface HeroProps {
  caseStudy: CaseStudyIntro;
}
const Hero = ({ caseStudy }: HeroProps) => {
  const { project, intro, details } = caseStudy;
  return (
    <section
      data-daftari
      className="px-page pt-12 pb-16 flex flex-col items-center gap-6 text-center"
    >
      <Eyebrow>Case study · MkatabaHQ</Eyebrow>
      <h1 className="text-case-title">{project.name}</h1>
      <p className="text-xl md:text-2xl text-ink-muted">{intro}</p>
      <dl className="grid grid-cols-2 gap-x-8 gap-y-6 pt-4 text-left md:flex md:gap-x-18">
        {details.map(({ label, value }) => (
          <div key={label} className="flex flex-col gap-2">
            <dt className="text-xs text-muted-foreground">{label}</dt>
            <dd className="text-base font-medium">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Hero;
