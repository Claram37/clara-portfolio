import type { Route } from "./+types/pride";
import type { NavHandle } from "@/components/layout/Nav";
import CaseHero from "@/components/shared/CaseHero";
import prideCaseStudy from "@/data/caseStudies/pride";
import site from "@/data/site";
import { pageMeta } from "@/lib/meta";

const { project, intro } = prideCaseStudy;

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: `${project.name} concept · ${site.name}`,
    description: intro,
  });

export const handle: NavHandle = { darkNav: true };

const PridePage = () => {
  return (
    <div className="focus-light bg-pride text-paper">
      <CaseHero
        caseStudy={prideCaseStudy}
        eyebrow="Concept"
        accent="text-pride-pink"
        dark
      />
    </div>
  );
};

export default PridePage;
