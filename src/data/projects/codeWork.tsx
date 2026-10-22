import GameHubVisual from "@/components/home/GameHubVisual";
import type { CodeProject } from "./types";
import portfolioVisual from "@/assets/portfolio/visual.png";
import site from "../site";

const codeWork: CodeProject[] = [
  {
    name: "Game Hub",
    tag: "Personal project",
    summary:
      "A game discovery app built on the RAWG API. Search, filter by genre and platform, sort, and keep scrolling, with trailers and screenshots on every game page.",
    stack: ["React", "TypeScript", "TanStack Query", "Zustand", "React Router"],
    live: "https://game-hub-black-eta.vercel.app",
    code: `${site.github}/game-hub`,
    visual: <GameHubVisual />,
  },
  {
    name: "My portfolio",
    tag: "Designed & built by me",
    summary:
      "Designed, then built by me in React. The project tabs at the top of this page are one of its components, design on one side and code on the other.",
    stack: ["React", "React Router", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    code: `${site.github}/clara-portfolio`,
    visual: (
      <img
        src={portfolioVisual}
        alt="The project tabs as designed, next to their React code"
        loading="lazy"
        decoding="async"
        className="size-full object-cover"
      />
    ),
  },
];
export default codeWork;
