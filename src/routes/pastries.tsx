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

// Connect to Figma early: the whole-page prototypes load from these
export const links: Route.LinksFunction = () =>
  [
    "https://embed.figma.com",
    "https://www.figma.com",
    "https://static.figma.com",
  ].map((href) => ({ rel: "preconnect", href }));

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
