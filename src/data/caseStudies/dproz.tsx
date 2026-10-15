import dproz from "@/data/projects/dproz";
import homeFeedPhone from "@/assets/hero/dproz-home-feed.png";
import smartProfilePhone from "@/assets/dproz/smart-profile-phone.png";
import smartProfileLoadingPhone from "@/assets/dproz/smart-profile-loading-phone.png";
import allSetPhone from "@/assets/dproz/all-set-phone.png";
import type { CaseStudy } from "@/data/projects/types";

const dprozCaseStudy: CaseStudy = {
  project: dproz,
  intro:
    "Making Tanzania's job market visible, then getting job seekers through the door.",
  details: [
    { label: "Role", value: "UI/UX Designer" },
    { label: "Company", value: dproz.name },
    { label: "Platform", value: "Mobile app and web" },
    {
      label: "Scope",
      value: "Onboarding, profile, homepage, job recommendations",
    },
  ],
  chapters: [
    {
      label: "Overview",
      tone: "surface",
      layout: "split",
      headline: "A job search and resume-building platform for Tanzania.",
      body: "Dproz helps job seekers discover and apply for jobs. Beyond listings, it gives them resume creation, Fitcheck, application tracking, and AI that matches people with jobs based on their preferences.",
      stats: [
        { value: "+40%", label: "profile completion" },
        { value: "< 60s", label: "to a complete profile" },
        { value: "1,000s", label: "apply every day" },
      ],
    },
    {
      label: "The problem",
      tone: "paper",
      layout: "split",
      headline: "Both sides were out there. They just couldn't see each other.",
      body: "Every year, thousands of graduates finish their studies and start looking for work. Jobs were scattered across PDFs, company websites, Word documents and WhatsApp groups. So graduates kept searching, and roles stayed empty.",
    },
    {
      label: "The goal",
      tone: "blue",
      layout: "split",
      headline:
        "Make Dproz the single source of truth for Tanzania's job market.",
      body: "One central, easy-to-use platform that gathers scattered listings and closes the visibility gap between employers and job seekers.",
    },
    {
      label: "Phone first",
      tone: "surface",
      layout: "split",
      headline: "Designing for the phone in every pocket.",
      body: "Many Tanzanian job seekers rely entirely on their smartphones. So mobile-first wasn't a style choice. It was the starting point for every decision.",
      checklist: {
        title: "My approach",
        items: [
          "Personas, user flows and journey maps for every new feature",
          "Built within Dproz's existing design system",
          "Every screen started on mobile, then adapted for desktop",
        ],
      },
    },
    {
      label: "The turning point",
      tone: "ink",
      layout: "split",
      headline:
        "Sign-up asked 10 questions, and every single one was required.",
      body: "Our AI matching could only be as good as the data people gave it. We saw a significant drop-off during onboarding: many job seekers abandoned sign-up, others browsed anonymously, and the AI made poor matches.",
    },
    {
      label: "What I changed",
      tone: "tint",
      layout: "split",
      headline: "A lighter path on each platform.",
      body: "On mobile, a gamified, step-by-step wizard that turns onboarding into a series of quick wins. On web, resume upload, so job seekers can build their profile from a resume they already have.",
      highlight:
        "Users now reach their profile in under 60 seconds, with a feeling of momentum instead of a wall of questions.",
    },
    {
      label: "The solution",
      tone: "paper",
      layout: "screens",
      headline: "Onboarding, profile, homepage and job recommendations.",
      screens: [
        {
          src: smartProfilePhone,
          alt: "Let's Build Your Smart Profile, with a CV uploaded and a Continue button",
          title: "Onboarding",
          caption: "A complete profile in under a minute.",
        },
        {
          src: smartProfileLoadingPhone,
          alt: "A job seeker's new profile loading under an Almost there sheet",
          title: "Profile",
          caption: "The details that power their matches.",
        },
        {
          src: homeFeedPhone,
          alt: "Dproz home feed with job categories and the latest jobs",
          title: "Homepage",
          caption: "Jobs from across Tanzania, easy to scan.",
        },
        {
          src: allSetPhone,
          alt: "You're all set, over the feed, with a Start Exploring button",
          title: "Recommendations",
          caption: "Match score badges show what fits best.",
        },
      ],
    },
    {
      label: "Impact",
      tone: "blue",
      layout: "impact",
      figure: "+40%",
      headline:
        "We saw a 40% increase in profile completion, and more new profiles were created in the month after the redesign.",
      body: "Today, thousands of job seekers see and apply for jobs on Dproz every day, and that number keeps growing.",
    },
    {
      label: "What I learned",
      tone: "ink",
      layout: "statement",
      headline:
        "The smartest algorithm can't help someone who leaves before it gets to know them.",
      body: "This project taught me that removing friction at the very start can matter more than any feature added later.",
    },
  ],
};

export default dprozCaseStudy;
