import type { Route } from "./+types/hiring-tracker";
import CaseHero from "@/components/shared/CaseHero";
import hiringCaseStudy from "@/data/caseStudies/hiringTracker";
import site from "@/data/site";
import { pageMeta } from "@/lib/meta";

const { project, intro } = hiringCaseStudy;

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: `${project.name} · ${site.name}`,
    description: intro,
  });

const HiringTrackerPage = () => {
  return (
    <>
      <CaseHero
        caseStudy={hiringCaseStudy}
        eyebrow="Project"
        accent="text-hiring"
      />
    </>
  );
};

export default HiringTrackerPage;
