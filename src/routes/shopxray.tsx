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
import Research from "@/components/shopxray/Research";

const { project, intro, steps, research } = shopXrayCaseStudy;

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
      <Research research={research} />
      <NextProject next={nextAfter(project)} />
      <Contact />
    </>
  );
};

export default ShopXrayPage;
