import hiringCover from "@/assets/hiring/cover.png";
import type { NextUp } from "./types";

// On the More work section and its own page, and Safari Spirits' next project, on the light grey band the design shows
const hiringTracker: NextUp = {
  name: "Hiring Applications Tracker",
  caption:
    "Kanban and table views that help recruiters follow every candidate through each stage.",
  caseStudy: "/work/hiring-tracker",
  cta: "View project",
  theme: {
    stage: "bg-surface",
    caption: "text-ink",
    link: "text-muted-foreground",
    dark: false,
  },
  peek: (
    <img
      src={hiringCover}
      alt="Hiring tracker kanban board with candidates under Screening and Phone Interview, each with a score"
      loading="lazy"
      decoding="async"
      className="absolute top-[20%] left-[5%] w-[90%] rounded-t-3xl lg:top-[8%]"
    />
  ),
};

export default hiringTracker;
