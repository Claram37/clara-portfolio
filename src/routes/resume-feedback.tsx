import type { Route } from "./+types/resume-feedback";
import Scenes from "@/components/resume/Scenes";
import Zoom from "@/components/resume/Zoom";
import CaseHero from "@/components/shared/CaseHero";
import Contact from "@/components/shared/Contact";
import Lead from "@/components/shared/Lead";
import resumeCaseStudy from "@/data/caseStudies/resumeFeedback";
import site from "@/data/site";
import { pageMeta } from "@/lib/meta";

const { project, intro, overview } = resumeCaseStudy;

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: `${project.name} · ${site.name}`,
    description: intro,
  });

const ResumeFeedbackPage = () => {
  return (
    <>
      <CaseHero
        caseStudy={resumeCaseStudy}
        eyebrow="Project"
        accent="text-resume-feedback-blue"
      />
      <Lead
        {...overview}
        accent="text-resume-feedback-blue md:w-75"
        className="lg:pb-20"
      />
      <Zoom />
      <Scenes />
      <Contact />
    </>
  );
};

export default ResumeFeedbackPage;
