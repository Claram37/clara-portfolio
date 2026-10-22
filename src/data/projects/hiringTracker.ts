import type { NextUp } from "./types";

// On the More work section, and its own page. No project leads to it yet, so it has no Next project theme
const hiringTracker: Pick<NextUp, "name" | "caption" | "caseStudy"> = {
  name: "Hiring Applications Tracker",
  caption:
    "Kanban and table views that help recruiters follow every candidate through each stage.",
  caseStudy: "/work/hiring-tracker",
};

export default hiringTracker;
