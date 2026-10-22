import { Columns3, PanelRight, Table2 } from "lucide-react";
import hiringTracker from "@/data/projects/hiringTracker";
import resumeFeedback from "@/data/projects/resumeFeedback";
import type { HiringCaseStudy } from "@/data/projects/types";
import kanbanBoard from "@/assets/hiring/kanban-board.png";
import applicantsTable from "@/assets/hiring/applicants-table.png";
import candidateEvaluation from "@/assets/hiring/candidate-evaluation.png";

const hiringCaseStudy: HiringCaseStudy = {
  project: hiringTracker,
  title: "Hiring Tracker",
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
      icon: Columns3,
      view: "Kanban view",
      screen: {
        src: kanbanBoard,
        alt: "The kanban board: candidates as cards under Screening, Phone Interview and In Person, each with a score, phone number and email",
      },
    },
    {
      headline: "Who should I look at first?",
      body: "The table puts many applications side by side, with skills, experience, education and a fit score to compare.",
      icon: Table2,
      view: "Table view",
      screen: {
        src: applicantsTable,
        alt: "The applicants table: each candidate's interview stage, years of experience, skills, experience and education matches, and fit score",
      },
    },
    {
      headline: "What happened with this person?",
      body: "The candidate drawer keeps their full history across stages, opened without leaving the board.",
      icon: PanelRight,
      view: "Candidate drawer",
      more: {
        label: "Other tabs in the drawer",
        items: ["Details", "Interviews", "Documents", "Notes"],
      },
      screen: {
        src: candidateEvaluation,
        alt: "John Smith Mushi's candidate drawer on its Evaluation tab, newest first: the recruiter's review waiting on a decision, his assessment results and submission, his move to Assessment with the recruiter's comment, and the AI screening's strengths and weaknesses",
      },
    },
  ],
  next: resumeFeedback,
};

export default hiringCaseStudy;
