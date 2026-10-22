import Phone from "@/components/mockups/Phone";
import hiringTracker from "@/data/projects/hiringTracker";
import safariSpirits from "@/data/projects/safariSpirits";
import type { SafariCaseStudy, Shot } from "@/data/projects/types";
import homeHero from "@/assets/safari/home-hero.jpg";
import journeyMap from "@/assets/safari/journey-map.jpg";
import userFlow from "@/assets/safari/user-flow.jpg";
import destinationCards from "@/assets/safari/destination-cards.jpg";
import tourDetail from "@/assets/safari/tour-detail-diani.jpg";
import tourDetailPhone from "@/assets/safari/tour-detail-diani-phone.png";
import itineraryPhone from "@/assets/safari/itinerary-day-1-phone.png";

// Both phone screens show on the timeline and under Included
const tourPhone: Shot = {
  src: tourDetailPhone,
  alt: "The Diani Beach Escape package: palm trees over the beach, 4 days, rated 4.8 from 96 reviews, a small-group experience from KES 32,000 per person including park fees, and Reserve your seat",
};
const itineraryDayPhone: Shot = {
  src: itineraryPhone,
  alt: "The package's itinerary: Day 1, Arrival at Diani Beach, from Mombasa airport or the SGR train to the resort, with dinner as the meal and Diani Reef Beach Resort as the stay",
};

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
  // Each stop's screens are placed in percentages of its 612×380 panel
  itinerary: {
    eyebrow: "Itinerary",
    headline: "Planning a trip shouldn't be a project of its own.",
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
        headline: "Pick a place that fits",
        body: "Share your budget, group size and interests, and get destinations and packages that fit.",
        facts: [
          { label: "Feature", value: "Personalized discovery" },
          { label: "Screen", value: "Destinations" },
        ],
        visual: (
          <img
            src={destinationCards}
            alt="Destination cards for Maasai Mara National Reserve, from KES 15,000 a night, and Diani Beach, from KES 2,500, each with its tags, rating and county"
            loading="lazy"
            decoding="async"
            className="absolute top-[11.84%] left-0 w-[150%] max-w-none"
          />
        ),
      },
      {
        headline: "Know the full cost first",
        body: "Every package breaks down the true cost upfront: entry fees, transport, meals and activities.",
        facts: [
          { label: "Feature", value: "Clear pricing" },
          { label: "Screen", value: "Package detail" },
        ],
        visual: (
          <>
            <div className="absolute top-[6.84%] left-[7.19%] aspect-262/330 w-[42.81%] overflow-hidden rounded-2xl shadow-safari-card">
              <img
                src={tourDetail}
                alt="The package's price card: 32,000 KES per person, rated 4.8 from 96 reviews, 4 days at the beach in Diani, Mombasa, with Reserve your seat and Request a custom quote"
                loading="lazy"
                decoding="async"
                className="absolute top-[-12.2%] left-[-242.1%] w-[350.9%] max-w-none"
              />
            </div>
            <Phone
              {...tourPhone}
              className="absolute top-[5.79%] left-[60.78%] w-[31.05%]"
            />
          </>
        ),
      },
      {
        headline: "Plan it day by day",
        body: "Day trips, weekend getaways and longer holidays, planned out day by day, then saved for later.",
        facts: [
          { label: "Feature", value: "Curated itineraries" },
          { label: "Screen", value: "Itinerary" },
        ],
        visual: (
          <>
            <Phone
              {...itineraryDayPhone}
              className="absolute top-[10.53%] left-[15.69%] w-[32.68%]"
            />
            <Phone
              {...tourPhone}
              className="absolute top-[20%] left-[51.63%] w-[32.68%]"
            />
          </>
        ),
      },
    ],
  },
  journeyMap: {
    eyebrow: "Journey map",
    headline: "Map the trip",
    body: "What travellers do, think and feel at eight stages, from seeing a friend's post to uploading their own.",
    image: {
      src: journeyMap,
      alt: "The journey map: what a traveller does, thinks and feels at eight stages, from Trigger, Research and Discovery to Compare options, Planning, Decision, Experience and Post-experience, with the opportunity at each, from budget-friendly trips on the homepage to Visited and Want to Visit lists",
    },
  },
  userFlow: {
    eyebrow: "User flow",
    headline: "Draw the route",
    body: "One traveller's path from the budget filter to booking, with every decision point.",
    image: {
      src: userFlow,
      alt: "The user flow: one traveller's path from the Budget trips filter through destinations and a package's details to booking and paying, with each decision point as an orange diamond and the story of their trip in a note beside it",
    },
  },
  included: {
    eyebrow: "Included",
    headline: "What this version ships.",
    features: [
      {
        name: "Personalized discovery",
        text: "Share your budget, group size and interests, and get places that fit.",
      },
      {
        name: "Clear pricing",
        text: "Every package breaks down the true cost upfront.",
      },
      {
        name: "Curated itineraries",
        text: "Day trips, weekends and longer holidays, planned day by day.",
      },
      {
        name: "Hidden gems",
        text: "Places most people don't know about, alongside the classics.",
      },
      {
        name: "Saved trips",
        text: "Save the trips you love and generate an itinerary when you're ready.",
      },
    ],
    screens: [tourPhone, itineraryDayPhone],
  },
  next: hiringTracker,
};

export default safariCaseStudy;
