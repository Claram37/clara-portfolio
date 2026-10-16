import type { Route } from "./+types/shopxray";
import Contact from "@/components/shared/Contact";
import NextProject from "@/components/shared/NextProject";
import shopXrayCaseStudy from "@/data/caseStudies/shopXray";
import site from "@/data/site";
import { pageMeta } from "@/lib/meta";
import Hero from "@/components/shopxray/Hero";

const { project, intro } = shopXrayCaseStudy;

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: `${project.name} case study · ${site.name}`,
    description: intro,
  });

const ShopXrayPage = () => {
  return (
    <>
      <Hero caseStudy={shopXrayCaseStudy} />
      <NextProject project={project} />
      <Contact />
    </>
  );
};

export default ShopXrayPage;
