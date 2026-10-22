import serenity from "@/data/projects/serenity";
import type { SerenityCaseStudy } from "@/data/projects/types";
import coverPhones from "@/assets/meditation/cover-phones.jpg";

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
};

export default serenityCaseStudy;
