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
};

export default hiringCaseStudy;
