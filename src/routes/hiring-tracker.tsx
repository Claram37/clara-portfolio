import type { Route } from "./+types/hiring-tracker";
import Questions from "@/components/hiring/Questions";
import CaseHero from "@/components/shared/CaseHero";
import Contact from "@/components/shared/Contact";
import Lead from "@/components/shared/Lead";
import NextProject from "@/components/shared/NextProject";
import hiringCaseStudy from "@/data/caseStudies/hiringTracker";
import site from "@/data/site";
import { pageMeta } from "@/lib/meta";

const { title, intro, before, next } = hiringCaseStudy;

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: `${title} · ${site.name}`,
    description: intro,
  });

const HiringTrackerPage = () => {
  return (
    <>
      <CaseHero
        caseStudy={hiringCaseStudy}
        eyebrow="Project"
        accent="text-hiring"
      />
      <Lead {...before} accent="text-hiring md:w-75" className="lg:pb-24" />
      <Questions />
      <NextProject next={next} />
      <Contact />
    </>
  );
};

export default HiringTrackerPage;
