import Browser from "@/components/mockups/Browser";
import Phone from "@/components/mockups/Phone";
import Zoom from "@/components/mockups/Zoom";
import dproz from "@/data/projects/dproz";
import homepageDesktop from "@/assets/dproz/homepage-desktop.png";
import jobsDesktop from "@/assets/dproz/jobs-desktop.png";
import onboardingDesktop from "@/assets/dproz/onboarding-desktop.png";
import homeFeedPhone from "@/assets/hero/dproz-home-feed.png";
import onboardingFindJobsPhone from "@/assets/dproz/onboarding-find-jobs-phone.png";
import onboardingMatchPhone from "@/assets/dproz/onboarding-match-phone.png";
import smartProfilePhone from "@/assets/dproz/smart-profile-phone.png";
import smartProfileLoadingPhone from "@/assets/dproz/smart-profile-loading-phone.png";
import allSetPhone from "@/assets/dproz/all-set-phone.png";
import tenQuestionsZoom from "@/assets/dproz/ten-questions-zoom.png";
import sourcePdf from "@/assets/dproz/source-pdf.png";
import sourceWhatsapp from "@/assets/dproz/source-whatsapp.png";
import sourceWebsite from "@/assets/dproz/source-website.png";
import sourceDocx from "@/assets/dproz/source-docx.png";
import sourceNewspaper from "@/assets/dproz/source-newspaper.png";
import type { CaseStudy } from "@/data/projects/types";

const sources = [
  {
    src: sourcePdf,
    alt: "A vacancy announcement shared as a PDF",
    className: "top-[6.6%] left-[5.65%] w-[36.72%] -rotate-6",
  },
  {
    src: sourceWhatsapp,
    alt: "A job ad forwarded on WhatsApp",
    className: "top-[4.95%] left-[46.61%] w-[46.05%] rotate-4",
  },
  {
    src: sourceWebsite,
    alt: "Current openings on a company website",
    className: "top-[54.46%] left-[8.47%] w-[45.76%] -rotate-3",
  },
  {
    src: sourceDocx,
    alt: "A job advert in a Word document",
    className: "top-[41.25%] left-[59.32%] w-[33.62%] rotate-6",
  },
  {
    src: sourceNewspaper,
    alt: "Job ads in a newspaper's classifieds",
    className: "top-[70.96%] left-[35.31%] w-[34.46%] -rotate-4",
  },
];

const dprozCaseStudy: CaseStudy = {
  project: dproz,
  intro:
    "Making Tanzania's job market visible, then getting job seekers through the door.",
  details: [
    { label: "Role", value: "UI/UX Designer" },
    { label: "Company", value: dproz.name },
    { label: "Platform", value: "Mobile app and web" },
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
      panel: dproz.theme.stage,
      visual: (
        <>
          <Browser
            url="dproz.com"
            src={homepageDesktop}
            alt="Dproz homepage with a job search and jobs grouped by category"
            shadow="shadow-chapter-window"
            className="absolute top-[14.85%] left-[21.19%] w-[79.1%]"
          />
          <Phone
            src={homeFeedPhone}
            alt="Dproz home feed with job categories and the latest jobs"
            shadow="shadow-chapter-phone"
            className="absolute top-[28.05%] left-[7.06%] w-[31.07%]"
          />
        </>
      ),
    },
    {
      label: "The problem",
      tone: "paper",
      layout: "split",
      headline: "Both sides were out there. They just couldn't see each other.",
      body: "Every year, thousands of graduates finish their studies and start looking for work. Jobs were scattered across PDFs, company websites, Word documents and WhatsApp groups. So graduates kept searching, and roles stayed empty.",
      visual: sources.map(({ src, alt, className }) => (
        <img
          key={src}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`absolute origin-top-left ${className}`}
        />
      )),
    },
    {
      label: "The goal",
      tone: "blue",
      layout: "split",
      headline:
        "Make Dproz the single source of truth for Tanzania's job market.",
      body: "One central, easy-to-use platform that gathers scattered listings and closes the visibility gap between employers and job seekers.",
      visual: (
        <Browser
          url="dproz.com/jobs"
          src={jobsDesktop}
          alt="Dproz jobs page listing companies that are hiring, with jobs grouped by category"
          shadow="shadow-chapter-window"
          className="absolute top-1/2 left-1/2 w-[90.4%] -translate-x-1/2 -translate-y-1/2"
        />
      ),
    },
    {
      label: "Phone first",
      tone: "surface",
      layout: "split",
      headline: "Designing for the phone in every pocket.",
      body: "Many Tanzanian job seekers rely entirely on their smartphones. So mobile-first wasn't a style choice. It was the starting point for every decision.",
      checklist: {
        items: [
          "Personas, user flows and journey maps for every new feature",
          "Built within Dproz's existing design system",
          "Every screen started on mobile, then adapted for desktop",
        ],
      },
      visual: (
        <>
          <Browser
            url="dproz.com"
            src={homepageDesktop}
            alt="Dproz homepage with a job search and jobs grouped by category"
            shadow="shadow-chapter-window"
            className="absolute top-[24.75%] left-[21.19%] w-[79.1%]"
          />
          <Phone
            src={homeFeedPhone}
            alt="Dproz home feed with job categories and the latest jobs"
            shadow="shadow-chapter-phone"
            className="absolute top-[9.9%] left-[6.78%] w-[35.31%]"
          />
        </>
      ),
    },
    {
      label: "The turning point",
      tone: "ink",
      layout: "split",
      headline:
        "Sign-up asked 10 questions, and every single one was required.",
      body: "Our AI matching could only be as good as the data people gave it. We saw a significant drop-off during onboarding: many job seekers abandoned sign-up, others browsed anonymously, and the AI made poor matches.",
      visual: (
        <>
          <Zoom
            src={tenQuestionsZoom}
            alt="The old sign-up form, asking for a dream job title, skills, role types, relocation, graduate status, career start and location"
            className="absolute top-[8.25%] left-[8.47%] w-[50.85%]"
          />
          <div
            className="absolute top-[36.3%] left-[66.38%] flex flex-col gap-2"
            aria-hidden="true"
          >
            <p className="font-display text-impact text-alert">10</p>
            <p className="text-base text-on-dark">required questions</p>
          </div>
        </>
      ),
    },
    {
      label: "What we changed",
      tone: "tint",
      layout: "split",
      headline: "A lighter path on each platform.",
      body: "On mobile, a gamified, step-by-step wizard that turns onboarding into a series of quick wins. On web, resume upload, so job seekers can build their profile from a resume they already have.",
      highlight:
        "Users now reach their profile in under 60 seconds, with a feeling of momentum instead of a wall of questions.",
      visual: (
        <>
          <Phone
            src={onboardingFindJobsPhone}
            alt="Onboarding step one: Find Jobs Faster"
            shadow="shadow-chapter-phone"
            className="absolute top-[5.94%] left-[5.35%] w-[19.52%]"
          />
          <Phone
            src={onboardingMatchPhone}
            alt="Onboarding step two: Get Jobs That Match You"
            shadow="shadow-chapter-phone"
            className="absolute top-[5.94%] left-[26.74%] w-[19.52%]"
          />
          <Phone
            src={smartProfilePhone}
            alt="Let's Build Your Smart Profile, with a CV uploaded and a Continue button"
            shadow="shadow-chapter-phone"
            className="absolute top-[5.94%] left-[48.13%] w-[19.52%]"
          />
          <Browser
            url="dproz.com"
            src={onboardingDesktop}
            alt="Dproz web onboarding: Welcome, Amani, with questions to tailor job recommendations"
            shadow="shadow-chapter-window"
            className="absolute top-[56.11%] left-[37.43%] w-[53.48%]"
          />
        </>
      ),
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
      headline: "40% more people finished their profile than before.",
      body: "Today, thousands of job seekers see and apply for jobs on Dproz every day, and that number keeps growing.",
    },
    {
      label: "What I learned",
      tone: "tint",
      layout: "statement",
      headline:
        "The smartest algorithm can't help someone who leaves before it gets to know them.",
      body: "Removing friction at the very start can matter more than any feature added later.",
    },
  ],
};

export default dprozCaseStudy;
