import safariSpirits from "@/data/projects/safariSpirits";
import type { SafariCaseStudy } from "@/data/projects/types";
import homeHero from "@/assets/safari/home-hero.jpg";

const safariCaseStudy: SafariCaseStudy = {
  project: safariSpirits,
  intro: "Trip planning across Kenya, with every cost upfront.",
  details: [
    { label: "Role", value: "Product Designer" },
    { label: "Region", value: "Kenya" },
    { label: "For", value: "Locals and tourists" },
    { label: "Scope", value: "Discovery, pricing, itineraries" },
  ],
  hero: {
    src: homeHero,
    alt: "Safari Spirits homepage: Unwind on Kenya's Coast, beach getaways in Mombasa, Diani, Watamu and Lamu, with Explore Destinations and View Packages, over a palm tree and the sea",
  },
};

export default safariCaseStudy;
