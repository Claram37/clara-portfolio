import hiringTracker from "@/data/projects/hiringTracker";
import type { HiringCaseStudy } from "@/data/projects/types";

const hiringCaseStudy: HiringCaseStudy = {
  project: hiringTracker,
  intro: "Every candidate, every stage, in one view.",
  details: [
    { label: "Role", value: "UI/UX Designer" },
    { label: "Company", value: "Dproz" },
    { label: "Platform", value: "Web" },
  ],
  before: {
    eyebrow: "Before",
    body: "Most hiring managers in Tanzania still shortlist by hand, with no good way to track an application from one stage to the next.",
  },
};

export default hiringCaseStudy;
