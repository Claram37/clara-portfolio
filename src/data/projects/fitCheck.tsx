import { FileCheck } from "lucide-react";
import Phone from "@/components/mockups/Phone";
import Zoom from "@/components/mockups/Zoom";
import nextStepsPhone from "@/assets/fitcheck/next-steps-phone.png";
import nextStepsZoom from "@/assets/fitcheck/next-steps-zoom.png";
import overviewPhone from "@/assets/fitcheck/overview.png";
import safariSpirits from "./safariSpirits";
import type { Project } from "./types";

const fitCheck: Project = {
  name: "Dproz Fitcheck",
  kind: "AI feature",
  icon: FileCheck,
  caption: "An AI feature to Fitcheck and tailor resumes.",
  caseStudy: "/work/fitcheck",
  theme: {
    tile: "bg-tab-purple",
    tint: "bg-tab-purple-tint",
    stage:
      "bg-fitcheck bg-radial-[at_40%_30%] from-fitcheck-glow to-transparent",
    caption: "text-ink",
    link: "text-muted-foreground",
    dark: false,
  },
  visual: (
    <>
      <Phone
        src={nextStepsPhone}
        alt="Fitcheck's next steps: 3 quick edits for a stronger match, listing the experience and knowledge to add to the CV"
        shadow="shadow-fitcheck"
        className="absolute top-[10%] left-[16.83%] w-[33.17%]"
      />
      <Zoom
        src={nextStepsZoom}
        alt="2 on your CV, 3 to add, 0 to build toward, shown as a five-part bar"
        shadow="shadow-fitcheck-card"
        className="absolute top-[27.5%] left-[53.21%] w-[38.14%]"
      />
    </>
  ),
  peek: (
    <Phone
      src={overviewPhone}
      alt="Fitcheck's overview: you show 2 of 5 must-haves, with work experience 0 of 1, skills 1 of 3 and education 1 of 1"
      shadow="shadow-fitcheck"
      className="absolute top-[8%] left-[31.67%] w-[63.33%]"
    />
  ),
  next: safariSpirits,
};

export default fitCheck;
