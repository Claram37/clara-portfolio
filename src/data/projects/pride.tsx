import prideCover from "@/assets/pride/cover.jpg";
import type { NextUp } from "./types";

// On the More work section and its own page, and AI Resume Feedback's next project, on the light grey band the design shows
const pride: NextUp = {
  name: "Pride",
  caption: "A landing page for an ad-free music streaming service.",
  caseStudy: "/concepts/pride",
  cta: "View project",
  theme: {
    stage: "bg-surface",
    caption: "text-ink",
    link: "text-muted-foreground",
    dark: false,
  },
  peek: (
    <img
      src={prideCover}
      alt="Pride homepage: Music Without Limits over a listener in headphones, then The Hottest Tracks Of The Week: Only On Pride"
      loading="lazy"
      decoding="async"
      className="absolute top-[20%] left-[5%] w-[90%] rounded-t-3xl lg:top-[8%]"
    />
  ),
};

export default pride;
