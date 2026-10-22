import safariSpirits from "@/data/projects/safariSpirits";
import type { SafariCaseStudy } from "@/data/projects/types";
import homeHero from "@/assets/safari/home-hero.jpg";
import journeyMap from "@/assets/safari/journey-map.jpg";
import userFlow from "@/assets/safari/user-flow.jpg";
import maasaiMara from "@/assets/safari/destination-detail-maasai-mara.jpg";

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
  overview: {
    eyebrow: "Overview",
    headline: "Find a place, see the full price, plan the days.",
    body: "Recommendations are shaped by each traveller's budget, interests and trip length, so planning a trip stops being a project of its own.",
    audiences: [
      {
        name: "Local travellers",
        text: "Students, professionals and families planning weekends and holidays.",
      },
      {
        name: "Tourists",
        text: "First-time and returning visitors, and solo travellers who want guidance.",
      },
    ],
  },
  itinerary: {
    eyebrow: "Itinerary",
    headline: "How the project went, day by day.",
    days: [
      {
        headline: "Where can I go this weekend?",
        body: "People spend hours jumping between TikTok and Instagram, then still don't know what fits their budget.",
        facts: [
          { label: "The problem", value: "Too many tabs" },
          { label: "Source", value: "Journey map" },
        ],
        quote: {
          text: "Where can I go this weekend without spending too much?",
          note: "From the trigger stage of the journey map: friends post trips on Instagram, then the search starts on TikTok and in WhatsApp groups.",
          sources: ["Instagram", "TikTok", "WhatsApp groups", "Blogs"],
        },
      },
      {
        headline: "Map the trip",
        body: "What travellers do, think and feel at eight stages, from seeing a friend's post to uploading their own.",
        diagram: {
          src: journeyMap,
          alt: "The journey map: what a traveller does, thinks and feels at eight stages, from Trigger, Research and Discovery to Compare options, Planning, Decision, Experience and Post-experience, with the opportunity at each, from budget-friendly trips on the homepage to Visited and Want to Visit lists",
        },
      },
      {
        headline: "Draw the route",
        body: "One traveller's path from the budget filter to booking, with every decision point.",
        diagram: {
          src: userFlow,
          alt: "The user flow: one traveller's path from the Budget trips filter through destinations and a package's details to booking and paying, with each decision point as an orange diamond and the story of their trip in a note beside it",
        },
      },
      {
        headline: "Design the screens",
        body: "High-fidelity destinations, packages and itineraries, in the site's green and clay.",
        screen: {
          src: maasaiMara,
          alt: "The Maasai Mara destination: a giraffe against the setting sun above three more photos, beside a card from 15,000 KES with its rating, duration, best time and region, Start booking and Request a custom quote",
        },
      },
    ],
  },
};

export default safariCaseStudy;
