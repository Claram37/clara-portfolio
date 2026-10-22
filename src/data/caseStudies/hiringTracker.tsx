import hiringTracker from "@/data/projects/hiringTracker";
import type { HiringCaseStudy } from "@/data/projects/types";
import kanbanBoard from "@/assets/hiring/kanban-board.png";
import applicantsTable from "@/assets/hiring/applicants-table.png";
import candidateEvaluation from "@/assets/hiring/candidate-evaluation.png";

const hiringCaseStudy: HiringCaseStudy = {
  project: hiringTracker,
  intro: "Every candidate, every stage, in one view.",
  details: [
    { label: "Role", value: "UI/UX Designer" },
    { label: "Company", value: "Dproz" },
    { label: "Platform", value: "Web" },
  ],
  before: {
    eyebrow: "Before",
    body: "Most hiring managers in Tanzania still shortlist by hand, with no good way to track an application from one stage to the next.",
  },
  questions: [
    {
      headline: "Where is everyone?",
      body: "The kanban view shows every candidate as a card, moved from stage to stage.",
      view: "Kanban view",
      screen: {
        src: kanbanBoard,
        alt: "The kanban board: candidates as cards under Screening, Phone Interview and In Person, each with a score, phone number and email",
      },
    },
    {
      headline: "Who should I look at first?",
      body: "The table puts many applications side by side, with skills, experience, education and a fit score to compare.",
      view: "Table view",
      screen: {
        src: applicantsTable,
        alt: "The applicants table: each candidate's interview stage, years of experience, skills, experience and education matches, and fit score",
      },
    },
    {
      headline: "What happened with this person?",
      body: "The candidate drawer keeps their full history across stages, opened without leaving the board.",
      view: "Candidate drawer",
      screen: {
        src: candidateEvaluation,
        alt: "John Smith Mushi's candidate drawer on its Evaluation tab: the recruiter's review of his Excel proficiency, what he meets and misses, and who reviewed it",
      },
      crop: "aspect-67/60",
    },
  ],
};

export default hiringCaseStudy;
