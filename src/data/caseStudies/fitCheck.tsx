import { Check, FileDown, Target, X } from "lucide-react";
import dproz from "@/data/projects/dproz";
import fitCheck from "@/data/projects/fitCheck";
import type { FitcheckCaseStudy } from "@/data/projects/types";
import jobEntryPhone from "@/assets/fitcheck/job-entry-phone.png";
import overviewPhone from "@/assets/fitcheck/overview.png";
import questionsPhone from "@/assets/fitcheck/questions-phone.png";
import nextStepsPhone from "@/assets/fitcheck/next-steps-phone.png";
import tailoredResumePhone from "@/assets/fitcheck/tailored-resume-phone.png";
import tailoredResume from "@/assets/fitcheck/tailored-resume.png";
import versionOneReport from "@/assets/fitcheck/version-1-report.png";

const fitCheckCaseStudy: FitcheckCaseStudy = {
  project: fitCheck,
  intro: "Helping qualified candidates get the callback they deserve.",
  details: [
    { label: "Role", value: "UI/UX Designer" },
    { label: "Company", value: dproz.name },
    {
      label: "Scope",
      value: "Gap analysis, conversational UI, resume tailoring",
    },
  ],
  overview: {
    eyebrow: "Overview",
    headline: "A resume check for one specific job.",
    body: "Dproz is Tanzania's leading AI-powered job matching platform. Fitcheck lets candidates compare their resume with a specific job description, see exactly where they fall short, and generate a tailored, ATS-friendly resume.",
    steps: [
      {
        name: "Analyze",
        text: "Reads the CV against each of the job's must-haves.",
      },
      { name: "Interact", text: "Asks one quick question per gap." },
      {
        name: "Generate",
        text: "Tailors the resume, ready to download as a PDF.",
      },
    ],
    screen: {
      src: jobEntryPhone,
      alt: "A Dproz job page on a phone. Under the requirements, a Fitcheck card asks “Does your resume prove you can do this job?” with a Check my fit button, just above How to apply",
    },
    caption:
      "Where it starts: a card under every Dproz job's requirements, just before How to apply.",
  },
  problem: {
    headline: "Qualified candidates kept getting filtered out.",
    body: "User data and recruiter feedback showed a paradox: many job seekers were qualified for the roles they applied for, yet recruiters and applicant tracking systems kept rejecting them. The problem wasn't the people. It was their resumes: the same generic one, sent everywhere.",
  },
  versionOne: {
    eyebrow: "Version 1",
    headline: "The first version named the gaps, then stopped.",
    body: "Our first Fitcheck was text-heavy and focused almost entirely on what candidates lacked. It told people what was wrong, then left them there, with no way to tailor their resume or fix the gaps.",
    callouts: [
      {
        quote: "“Misses Experience”, “Misses Certification”.",
        text: "It said what was wrong, not what to do.",
      },
      {
        quote: "“Take a short course or certification.”",
        text: "Its fix for a gap. Useful someday, not for this application.",
      },
      {
        quote: "“Run Another FitCheck”.",
        text: "Where it ended. Nothing changed on the resume.",
      },
    ],
    report: {
      src: versionOneReport,
      alt: "Fitcheck's first version for a Frontend Developer job: Meets Education, Misses Experience, Meets Skills and Misses Certification, then what you're already bringing, where the job will challenge you, two options (apply now or close gaps first) and a Run Another FitCheck button",
    },
  },
  hardest: {
    eyebrow: "The hardest question",
    headline: "How do we collect what's missing without a massive form?",
    body: "I designed a conversational interface. For each gap, candidates simply confirm whether they have that skill or qualification. Two answers sort the real gaps from the fixable ones.",
    answers: [
      {
        icon: Check,
        tile: "bg-success-bg text-success-text",
        title: "I have it",
        text: "Just not written on my CV yet",
      },
      {
        icon: X,
        tile: "bg-surface text-muted-foreground",
        title: "Not yet",
        text: "I do not have this experience",
      },
    ],
    screen: {
      src: questionsPhone,
      alt: "Fitcheck's questions: question 1 of 3, experience as an IT Technician. This role asks for it, but it is not on your CV. Answers: I have it, or Not yet",
    },
  },
  screens: {
    headline: "Four screens, under 4 minutes.",
    aside: "By hand, an estimated 45.",
    screens: [
      {
        src: overviewPhone,
        alt: "Fitcheck's overview: you show 2 of 5 must-haves, with work experience 0 of 1, skills 1 of 3 and education 1 of 1",
        caption: "Gaps by category, not a score",
      },
      {
        src: questionsPhone,
        alt: "Fitcheck's questions: experience as an IT Technician is not on your CV. I have it, or Not yet?",
        caption: "One question per gap",
      },
      {
        src: nextStepsPhone,
        alt: "Fitcheck's next steps: 3 quick edits for a stronger match, listing the experience and knowledge to add to the CV",
        caption: "3 to add, 0 to build toward",
      },
      {
        src: tailoredResumePhone,
        alt: "Your tailored resume for IT Technician, 2 positions, in the Classic template, with Download PDF and Change template buttons",
        caption: "A tailored resume, as a PDF",
      },
    ],
  },
  results: {
    eyebrow: "Results",
    headline: (
      <>
        In week one, <span className="text-success-text">40%</span> of people
        who ran a Fitcheck downloaded a tailored resume. Each took{" "}
        <span className="text-success-text">under 4 minutes</span>, not 45.
      </>
    ),
    note: "45 minutes is the team's estimate for tailoring by hand.",
    document: {
      src: tailoredResume,
      alt: "A tailored one-page resume for Jane Doe, a UI/UX designer, with her summary, skills, experience, education, certifications and projects",
    },
    cards: [
      {
        icon: Target,
        title: "Tailored for one job",
        text: "IT Technician, 2 positions",
      },
      {
        icon: FileDown,
        title: "Ready to send",
        text: "Classic template, as a PDF",
      },
    ],
  },
  learned: {
    eyebrow: "What I learned",
    headline: "Feedback without a next step is just criticism.",
    body: "The biggest shift was moving from telling people what they lacked to helping them show what they already had.",
  },
};

export default fitCheckCaseStudy;
