import type { Route } from "./+types/dproz";
import CaseHero from "@/components/CaseHero";
import Contact from "@/components/Contact";
import Deck from "@/components/Deck";
import NextProject from "@/components/NextProject";
import dprozCaseStudy from "@/data/caseStudies/dproz";
import site from "@/data/site";
import { pageMeta } from "@/lib/meta";

const { project, intro, chapters } = dprozCaseStudy;

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: `${project.name} case study · ${site.name}`,
    description: intro,
  });

const DprozCaseStudy = () => {
  return (
    <>
      <CaseHero caseStudy={dprozCaseStudy} />
      <Deck chapters={chapters} />
      <NextProject project={project} />
      <Contact />
    </>
  );
};

export default DprozCaseStudy;
