import { useRef } from "react";
import type { Route } from "./+types/fitcheck";
import CaseHero from "@/components/shared/CaseHero";
import Contact from "@/components/shared/Contact";
import NextProject from "@/components/shared/NextProject";
import HardestQuestion from "@/components/fitcheck/HardestQuestion";
import Learned from "@/components/fitcheck/Learned";
import Overview from "@/components/fitcheck/Overview";
import Problem from "@/components/fitcheck/Problem";
import Results from "@/components/fitcheck/Results";
import Screens from "@/components/fitcheck/Screens";
import VersionOne from "@/components/fitcheck/VersionOne";
import fitCheckCaseStudy from "@/data/caseStudies/fitCheck";
import site from "@/data/site";
import useReveal from "@/hooks/useReveal";
import { pageMeta } from "@/lib/meta";

const { project, intro } = fitCheckCaseStudy;

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: `${project.name} case study · ${site.name}`,
    description: intro,
  });

const FitcheckPage = () => {
  const story = useRef<HTMLDivElement>(null);
  useReveal(story);

  return (
    <>
      <CaseHero caseStudy={fitCheckCaseStudy} accent="text-fitcheck-blue" />
      <div ref={story}>
        <Overview />
        <Problem />
        <VersionOne />
        <HardestQuestion />
        <Screens />
        <Results />
        <Learned />
      </div>
      <NextProject project={project} />
      <Contact />
    </>
  );
};

export default FitcheckPage;
