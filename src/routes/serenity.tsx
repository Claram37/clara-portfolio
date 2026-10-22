import type { Route } from "./+types/serenity";
import Approach from "@/components/serenity/Approach";
import Chapters from "@/components/serenity/Chapters";
import Featured from "@/components/serenity/Featured";
import Palette from "@/components/serenity/Palette";
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
      <div className="bg-serenity">
        <CaseHero
          caseStudy={serenityCaseStudy}
          eyebrow="Concept"
          accent="text-serenity-violet"
        />
      </div>
      <div className="nightfall pb-20 lg:pb-40">
        <Featured story={story} />
        <Chapters story={story} />
        <Palette />
        <Approach />
      </div>
      <Contact />
    </>
  );
};

export default SerenityPage;
