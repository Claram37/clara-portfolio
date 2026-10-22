import resumeConfidencePhone from "@/assets/resume-feedback/resume-confidence-phone.jpg";
import Phone from "@/components/mockups/Phone";
import type { NextUp } from "./types";

// Hiring Tracker's next project, on the light grey band the design shows, its phone on a light blue card
const resumeFeedback: NextUp = {
  name: "AI Resume Feedback",
  caption:
    "A mobile flow that scores a resume and gives bullet-by-bullet suggestions.",
  caseStudy: "/work/resume-feedback",
  cta: "View project",
  theme: {
    stage: "bg-surface",
    caption: "text-ink",
    link: "text-muted-foreground",
    dark: false,
  },
  peek: (
    <div className="absolute inset-x-0 top-[8%] bottom-0 rounded-t-3xl bg-resume-feedback">
      <Phone
        src={resumeConfidencePhone}
        alt="Resume Confidence: how confident are you in your resume? 5/10, somewhat confident, set on a slider"
        className="absolute top-[11.3%] left-[29.17%] w-[41.67%]"
      />
    </div>
  ),
};

export default resumeFeedback;
