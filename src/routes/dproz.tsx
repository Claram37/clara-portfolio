import type { Route } from "./+types/dproz";
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
  return <h1 className="px-page">{project.name}</h1>;
};

export default DprozCaseStudy;
