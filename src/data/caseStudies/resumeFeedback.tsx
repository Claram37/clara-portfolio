import resumeFeedback from "@/data/projects/resumeFeedback";
import type { ResumeCaseStudy } from "@/data/projects/types";

const resumeCaseStudy: ResumeCaseStudy = {
  project: resumeFeedback,
  intro: "Resume feedback that builds confidence, not doubt.",
  details: [
    { label: "Role", value: "UI/UX Designer" },
    { label: "Platform", value: "Mobile" },
  ],
  overview: {
    eyebrow: "Overview",
    body: "Candidates upload their resume and get clear feedback on how to improve it, so they can apply with confidence.",
  },
};

export default resumeCaseStudy;
