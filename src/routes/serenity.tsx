import type { Route } from "./+types/serenity";
import CaseHero from "@/components/shared/CaseHero";
import Contact from "@/components/shared/Contact";
import serenityCaseStudy from "@/data/caseStudies/serenity";
import site from "@/data/site";
import { pageMeta } from "@/lib/meta";

const { project, intro } = serenityCaseStudy;

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: `${project.name} concept · ${site.name}`,
    description: intro,
  });

const SerenityPage = () => {
  return (
    <>
      <div className="bg-serenity">
        <CaseHero
          caseStudy={serenityCaseStudy}
          eyebrow="Concept"
          accent="text-serenity-violet"
        />
      </div>
      <Contact />
    </>
  );
};

export default SerenityPage;
