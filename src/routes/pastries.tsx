import type { Route } from "./+types/pastries";
import Menu from "@/components/pastries/Menu";
import Overview from "@/components/pastries/Overview";
import WholePage from "@/components/pastries/WholePage";
import CaseHero from "@/components/shared/CaseHero";
import Contact from "@/components/shared/Contact";
import NextProject from "@/components/shared/NextProject";
import pastriesCaseStudy from "@/data/caseStudies/pastries";
import site from "@/data/site";
import { pageMeta } from "@/lib/meta";

const { title, intro, next } = pastriesCaseStudy;

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: `${title} concept · ${site.name}`,
    description: intro,
  });

const PastriesPage = () => {
  return (
    <>
      <div className="bg-pastries">
        <CaseHero
          caseStudy={pastriesCaseStudy}
          eyebrow="Concept"
          accent="text-pastries-terracotta"
        />
        <Overview />
        <Menu />
        <WholePage />
      </div>
      <NextProject next={next} />
      <Contact />
    </>
  );
};

export default PastriesPage;
