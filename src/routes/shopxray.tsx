import type { Route } from "./+types/shopxray";
import Contact from "@/components/shared/Contact";
import NextProject from "@/components/shared/NextProject";
import shopXrayCaseStudy from "@/data/caseStudies/shopXray";
import { nextAfter } from "@/data/projects";
import site from "@/data/site";
import { pageMeta } from "@/lib/meta";
import Hero from "@/components/shopxray/Hero";
import StepCards from "@/components/shopxray/StepCards";
import PinnedSteps from "@/components/shopxray/PinnedSteps";
import Decisions from "@/components/shopxray/Decisions";
import EdgeCases from "@/components/shopxray/EdgeCases";
import Learned from "@/components/shopxray/Learned";

const { project, intro, steps, decisions, edgeCases, learned } =
  shopXrayCaseStudy;

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: `${project.name} case study · ${site.name}`,
    description: intro,
  });

const ShopXrayPage = () => {
  return (
    <>
      <Hero caseStudy={shopXrayCaseStudy} />
      <StepCards steps={steps} />
      <PinnedSteps steps={steps} />
      <Decisions decisions={decisions} />
      <EdgeCases edgeCases={edgeCases} />
      <Learned learned={learned} />
      <NextProject next={nextAfter(project)} />
      <Contact />
    </>
  );
};

export default ShopXrayPage;
