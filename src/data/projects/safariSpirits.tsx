import safariCover from "@/assets/safari/cover.jpg";
import type { NextUp } from "./types";

const safariSpirits: NextUp = {
  name: "Safari Spirits",
  caption: "Trips matched to budget and time, with every cost shown up front.",
  caseStudy: "/work/safari-spirits",
  cta: "View project",
  theme: {
    stage: "bg-fitcheck",
    caption: "text-ink",
    link: "text-muted-foreground",
    dark: false,
  },
  peek: (
    <img
      src={safariCover}
      alt="Safari Spirits homepage: Unwind on Kenya's Coast"
      loading="lazy"
      decoding="async"
      className="absolute top-[20%] left-[5%] w-[90%] rounded-t-3xl shadow-safari lg:top-[8%]"
    />
  ),
};

export default safariSpirits;
