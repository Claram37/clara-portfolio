import type { Route } from "./+types/safari-spirits";
import HeroShot from "@/components/safari/HeroShot";
import Overview from "@/components/safari/Overview";
import CaseHero from "@/components/shared/CaseHero";
import Contact from "@/components/shared/Contact";
import safariCaseStudy from "@/data/caseStudies/safariSpirits";
import site from "@/data/site";
import { pageMeta } from "@/lib/meta";

const { project, intro } = safariCaseStudy;

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: `${project.name} · ${site.name}`,
    description: intro,
  });

const SafariSpiritsPage = () => {
  return (
    <>
      <div className="bg-safari">
        <CaseHero
          caseStudy={safariCaseStudy}
          eyebrow="Project"
          accent="text-safari-clay"
        />
        <HeroShot />
        <Overview />
      </div>
      <Contact />
    </>
  );
};

export default SafariSpiritsPage;
