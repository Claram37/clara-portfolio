import type { Route } from "./+types/pastries";
import CaseHero from "@/components/shared/CaseHero";
import pastriesCaseStudy from "@/data/caseStudies/pastries";
import site from "@/data/site";
import { pageMeta } from "@/lib/meta";

const { title, intro } = pastriesCaseStudy;

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
      </div>
    </>
  );
};

export default PastriesPage;
