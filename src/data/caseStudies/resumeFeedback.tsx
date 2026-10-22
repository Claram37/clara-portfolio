import resumeFeedback from "@/data/projects/resumeFeedback";
import type { ResumeCaseStudy, Shot } from "@/data/projects/types";
import resumeConfidencePhone from "@/assets/resume-feedback/resume-confidence-phone.jpg";
import analyzingPhone from "@/assets/resume-feedback/analyzing-phone.jpg";
import summaryScorePhone from "@/assets/resume-feedback/summary-score-phone.jpg";
import bulletLevelPhone from "@/assets/resume-feedback/bullet-level-phone.jpg";
import workExpIssuePhone from "@/assets/resume-feedback/work-exp-issue-phone.jpg";
import suggestedEditPhone from "@/assets/resume-feedback/work-exp-suggested-edit-phone.jpg";
import bulletModal from "@/assets/resume-feedback/bullet-modal.jpg";

// These three show in the zoom and the scenes
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
  scenes: {
    eyebrow: "Analysis steps",
    headline: "Hang tight. Here's what it's doing.",
    items: [
      {
        steps: "Initializing · Processing",
        headline: "It starts with how you feel.",
        body: "A quick confidence check, then one button: upload your resume.",
        screen: {
          src: resumeConfidencePhone,
          alt: "Resume Confidence: how confident are you in your resume? 5/10, somewhat confident, set on a slider, then Upload Resume",
        },
      },
      {
        steps: "Identifying content · Bench-marking",
        headline: "It reads every section.",
        body: "Skills, presentation and education are checked, with each step shown as it happens.",
        screen: {
          src: analyzingPhone,
          alt: "Analyzing Your Resume: the uploaded CV at 40%, and the analysis steps, four ticked off and Identifying Bullets in progress",
        },
      },
      {
        steps: "Calculating scores",
        headline: "Then it scores the whole thing.",
        body: "One number, split into skills, experience and education, with three ways to improve.",
        screen: summaryScore,
      },
      {
        steps: "Identifying bullets · Analyzing bullets",
        headline: "It finds the bullets that need work.",
        body: "Each section shows how many issues it has, so people know where to start.",
        screen: bulletLevel,
      },
      {
        steps: "Analyzing impact · Almost done",
        headline: "And it shows how to fix them.",
        body: "Issue, why it matters, a hint, and a suggested edit for every bullet.",
        screen: suggestedEdit,
      },
    ],
  },
  desktop: {
    eyebrow: "Same zoom, bigger screen",
    headline: "On desktop, the bullet opens in one view.",
    body: "The original line, the issue, why it matters, how to improve it, and a suggested edit to save as a new version.",
    screen: {
      src: bulletModal,
      alt: "The bullet's feedback on desktop, in one modal beside the other bullets to fix: the original line about managing social media accounts, the issue detected, why it matters, how to improve it, and a suggested edit with Save New Version",
    },
  },
};

export default resumeCaseStudy;
