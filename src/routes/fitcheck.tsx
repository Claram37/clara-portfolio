import type { Route } from "./+types/fitcheck";
import CaseHero from "@/components/shared/CaseHero";
import Contact from "@/components/shared/Contact";
import NextProject from "@/components/shared/NextProject";
import Story from "@/components/fitcheck/Story";
import fitCheckCaseStudy from "@/data/caseStudies/fitCheck";
import site from "@/data/site";
import { pageMeta } from "@/lib/meta";

const { project, intro } = fitCheckCaseStudy;

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: `${project.name} case study · ${site.name}`,
    description: intro,
  });

const FitcheckPage = () => {
  return (
    <>
      <CaseHero caseStudy={fitCheckCaseStudy} accent="text-fitcheck-blue" />
      <Story />
      <NextProject project={project} />
      <Contact />
    </>
  );
};

export default FitcheckPage;
