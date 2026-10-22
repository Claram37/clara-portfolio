import serenity from "@/data/projects/serenity";
import type { SerenityCaseStudy } from "@/data/projects/types";
import coverPhones from "@/assets/meditation/cover-phones.jpg";
import welcomePhone from "@/assets/meditation/onboarding-1-welcome-phone.jpg";
import restYourMindPhone from "@/assets/meditation/onboarding-2-rest-your-mind-phone.jpg";
import noRightWayPhone from "@/assets/meditation/onboarding-3-no-right-way-phone.jpg";
import helpWithPhone from "@/assets/meditation/question-1-help-with-phone.jpg";
import curatingPhone from "@/assets/meditation/curating-75-phone.jpg";
import homePhone from "@/assets/meditation/home-phone.jpg";
import inhalePhone from "@/assets/meditation/breathing-inhale-phone.jpg";

const serenityCaseStudy: SerenityCaseStudy = {
  project: serenity,
  intro: "A calm, personalized way into sleep, meditation and focus.",
  details: [
    { label: "Role", value: "UI/UX Designer" },
    { label: "Type", value: "Concept" },
    { label: "Format", value: "Mobile app · Onboarding" },
  ],
  featured: {
    headline: "Quiet Your Racing Mind",
    tags: ["The project", "Concept", "Onboarding"],
    cta: "Play the story",
    cover: {
      src: coverPhones,
      alt: "Serenity's welcome screen, Welcome to Serenity, on rows of phones lying on a cream table",
    },
  },
  chapters: [
    {
      line: "A quiet space to slow your thoughts, ease anxiety, and drift into rest.",
      screens: [
        {
          src: welcomePhone,
          alt: "Welcome to Serenity: a moonlit pagoda, a fishing boat and a sleeping monk, over A quiet space to slow your thoughts, ease anxiety, and drift into rest., with a Continue button",
        },
        {
          src: restYourMindPhone,
          alt: "Rest your mind. Calm your body.: a full moon over misty mountains and a lake, with Guided meditations for anxiety and stress",
        },
        {
          src: noRightWayPhone,
          alt: "There's no right way to rest.: someone asleep in a hammock under cherry blossoms, with Whether you have a few minutes or a full night, Serenity adapts to you., and a Get Started button",
        },
      ],
    },
    {
      line: "Rest your mind. Calm your body.",
      screens: [
        {
          src: helpWithPhone,
          alt: "The first of six questions, What would you like help with most?, with Sleeping better ticked above Reducing anxiety, Quieting racing thoughts, Relaxing after long days and Just exploring",
        },
        {
          src: curatingPhone,
          alt: "Curating your personal sanctuary…, with a ring filled to 75%",
        },
      ],
    },
    {
      line: "Ready to wind down?",
      screens: [
        {
          src: homePhone,
          alt: "The home screen: Good Evening, Sleep Seeker! Ready to wind down?, a featured Quiet Your Racing Mind session with a Play Session button, then Sleep Stories, Soundscapes and Breathwork",
        },
        {
          src: inhalePhone,
          alt: "The breathing exercise: Inhale, inside a ring",
        },
      ],
    },
  ],
  palette: {
    eyebrow: "Soundscapes",
    headline: "A palette for the middle of the night.",
    body: "Deep navy, soft violet and lavender, with moonlit illustrations that never glare.",
    swatches: [
      { name: "Night", fill: "bg-serenity-night" },
      { name: "Violet", fill: "bg-serenity-violet" },
      { name: "Lavender", fill: "bg-serenity-lavender" },
      { name: "Moonlight", fill: "bg-serenity-moonlight" },
    ],
  },
  approach: {
    eyebrow: "The approach",
    body: "Content curated to each person, clear paths to Sleep, Meditate and Focus, and a palette that invites people to slow down.",
  },
};

export default serenityCaseStudy;
