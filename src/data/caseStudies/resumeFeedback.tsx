import resumeFeedback from "@/data/projects/resumeFeedback";
import type { ResumeCaseStudy, Shot } from "@/data/projects/types";
import summaryScorePhone from "@/assets/resume-feedback/summary-score-phone.jpg";
import bulletLevelPhone from "@/assets/resume-feedback/bullet-level-phone.jpg";
import workExpIssuePhone from "@/assets/resume-feedback/work-exp-issue-phone.jpg";
import suggestedEditPhone from "@/assets/resume-feedback/work-exp-suggested-edit-phone.jpg";

const summaryScore: Shot = {
  src: summaryScorePhone,
  alt: "The Summary tab: a score of 84, with skills at 29/40, experience at 29/30 and education at 26/30, then three ways to improve: bullet structure, filler words and layout",
};
const bulletLevel: Shot = {
  src: bulletLevelPhone,
  alt: "The Bullet Level Feedback tab: 7 bullet points across 3 sections could better show impact, with 2 issues in Education, 4 in Work Experience and 6 in Skills",
};
const suggestedEdit: Shot = {
  src: suggestedEditPhone,
  alt: "The bullet on its Edit tab: a suggested edit to match the role, with Save New Version",
};

const resumeCaseStudy: ResumeCaseStudy = {
  project: resumeFeedback,
  intro: "Resume feedback that builds confidence, not doubt.",
  details: [
    { label: "Role", value: "UI/UX Designer" },
    { label: "Platform", value: "Mobile" },
  ],
  overview: {
    eyebrow: "Overview",
    body: "Candidates upload their resume and get clear feedback on how to improve it, so they can apply with confidence.",
  },
  zoom: {
    steps: [
      {
        title: "The resume",
        text: "A score of 84, split into skills, experience and education.",
        screen: summaryScore,
        lens: { left: 37, top: 47.1, width: 24.2, height: 10.3 },
      },
      {
        title: "A section",
        text: "7 bullets across 3 sections could show more impact.",
        screen: bulletLevel,
        lens: { left: 6.1, top: 50.5, width: 88.1, height: 10.3 },
      },
      {
        title: "A bullet",
        text: "One line, and the issue holding it back.",
        screen: {
          src: workExpIssuePhone,
          alt: "Work Experience Feedback for a marketing manager at ABC Agency: a bullet about managing social media accounts, open on its Issue tab, which says it lacks a clear result or impact",
        },
        lens: { left: 6.1, top: 39.8, width: 88.1, height: 23 },
      },
      {
        title: "The fix",
        text: "A suggested edit to adjust and save.",
        screen: suggestedEdit,
      },
    ],
    line: "From a number to a sentence you can fix.",
  },
};

export default resumeCaseStudy;
