import type { Route } from "./+types/dproz";
import CaseHero from "@/components/CaseHero";
import dprozCaseStudy from "@/data/caseStudies/dproz";
import site from "@/data/site";
import { pageMeta } from "@/lib/meta";

const { project, intro } = dprozCaseStudy;

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: `${project.name} case study · ${site.name}`,
    description: intro,
  });

const DprozCaseStudy = () => {
  return <CaseHero caseStudy={dprozCaseStudy} />;
};

export default DprozCaseStudy;
