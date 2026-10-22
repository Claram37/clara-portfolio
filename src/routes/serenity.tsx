import type { Route } from "./+types/serenity";
import Featured from "@/components/serenity/Featured";
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

// Play the story leads to the first chapter
const story = "story";

const SerenityPage = () => {
  return (
    <>
      <div className="bg-serenity pb-16">
        <CaseHero
          caseStudy={serenityCaseStudy}
          eyebrow="Concept"
          accent="text-serenity-violet"
        />
        <Featured story={story} />
      </div>
      <Contact />
    </>
  );
};

export default SerenityPage;
