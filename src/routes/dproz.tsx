import type { Route } from "./+types/dproz";
import CaseHero from "@/components/shared/CaseHero";
import Contact from "@/components/shared/Contact";
import Deck from "@/components/dproz/Deck";
import NextProject from "@/components/shared/NextProject";
import dprozCaseStudy from "@/data/caseStudies/dproz";
import site from "@/data/site";
import { pageMeta } from "@/lib/meta";

const { project, intro, chapters } = dprozCaseStudy;

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: `${project.name} case study · ${site.name}`,
    description: intro,
  });

const DprozPage = () => {
  return (
    <>
      <CaseHero caseStudy={dprozCaseStudy} accent="text-dproz" />
      <Deck chapters={chapters} />
      <NextProject project={project} />
      <Contact />
    </>
  );
};

export default DprozPage;
