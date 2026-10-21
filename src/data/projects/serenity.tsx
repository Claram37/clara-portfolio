import meditationCover from "@/assets/meditation/cover.jpg";
import type { NextUp } from "./types";

// Pastries' next project, on the light grey band the design shows
const serenity: NextUp = {
  name: "Serenity",
  caption:
    "A calming meditation app with guided onboarding and breathing exercises.",
  caseStudy: "/concepts/meditation",
  cta: "View project",
  theme: {
    stage: "bg-surface",
    caption: "text-ink",
    link: "text-muted-foreground",
    dark: false,
  },
  peek: (
    <img
      src={meditationCover}
      alt="Serenity's welcome screen, Welcome to Serenity, on rows of phones"
      loading="lazy"
      decoding="async"
      className="absolute top-[20%] left-[5%] w-[90%] rounded-t-3xl lg:top-[8%]"
    />
  ),
};

export default serenity;
