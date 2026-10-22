import type { Route } from "./+types/hiring-tracker";
import CaseHero from "@/components/shared/CaseHero";
import Lead from "@/components/shared/Lead";
import hiringCaseStudy from "@/data/caseStudies/hiringTracker";
import site from "@/data/site";
import { pageMeta } from "@/lib/meta";

const { project, intro, before } = hiringCaseStudy;

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
      <Lead {...before} accent="text-hiring md:w-75" className="lg:pb-24" />
    </>
  );
};

export default HiringTrackerPage;
