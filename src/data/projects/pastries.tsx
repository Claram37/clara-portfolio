import pastriesCover from "@/assets/pastries/cover.jpg";
import type { NextUp } from "./types";

// Pride's next project, on a band in Pride's dark colours as the design shows
const pastries: NextUp = {
  name: "Pastries Landing Page",
  caption:
    "A bakery site for browsing pastries and ordering custom celebration cakes.",
  caseStudy: "/concepts/pastries",
  cta: "View project",
  theme: {
    stage: "bg-pride-next",
    caption: "text-paper",
    link: "text-on-dark-muted",
    dark: true,
  },
  peek: (
    <img
      src={pastriesCover}
      alt="Pâtisserie homepage: Freshly Baked Daily, Custom Crafted for You, over a celebration cake and cupcakes, with Easter Specials below"
      loading="lazy"
      decoding="async"
      className="absolute top-[20%] left-[5%] w-[90%] rounded-t-3xl lg:top-[8%]"
    />
  ),
};

export default pastries;
