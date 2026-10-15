import type { Route } from "./+types/dproz";
import Contact from "@/components/shared/Contact";
import NextProject from "@/components/shared/NextProject";
import dprozCaseStudy from "@/data/caseStudies/dproz";
import site from "@/data/site";
import { pageMeta } from "@/lib/meta";
import shopXrayCaseStudy from "@/data/caseStudies/shopXray";
import Hero from "@/components/shopxray/Hero";

const { project, intro } = dprozCaseStudy;

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: `${project.name} case study · ${site.name}`,
    description: intro,
  });

const DprozCaseStudy = () => {
  return (
    <>
      <Hero caseStudy={shopXrayCaseStudy} />
      <NextProject project={project} />
      <Contact />
    </>
  );
};

export default DprozCaseStudy;
