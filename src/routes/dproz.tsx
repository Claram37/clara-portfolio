import type { Route } from "./+types/dproz";
import CaseHero from "@/components/CaseHero";
import ChapterCard from "@/components/ChapterCard";
import dprozCaseStudy from "@/data/caseStudies/dproz";
import site from "@/data/site";
import { pageMeta } from "@/lib/meta";

const { project, intro, chapters } = dprozCaseStudy;

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: `${project.name} case study · ${site.name}`,
    description: intro,
  });

const DprozCaseStudy = () => {
  return (
    <>
      <CaseHero caseStudy={dprozCaseStudy} />
      <div className="flex flex-col gap-7 px-4 pb-35 md:px-6 xl:px-12">
        {chapters.map((chapter, index) => (
          <ChapterCard
            key={chapter.label}
            chapter={chapter}
            index={index}
            total={chapters.length}
          />
        ))}
      </div>
    </>
  );
};

export default DprozCaseStudy;
