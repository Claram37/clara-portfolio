import pastries from "@/data/projects/pastries";
import type { PastriesCaseStudy } from "@/data/projects/types";
import hero from "@/assets/pastries/1-hero.jpg";
import easterSpecials from "@/assets/pastries/2-easter-specials.jpg";
import readyMade from "@/assets/pastries/3-ready-made-pastries.jpg";
import dreamCakeSteps from "@/assets/pastries/4-dream-cake-steps.jpg";
import inspirationGallery from "@/assets/pastries/5-inspiration-gallery.jpg";
import createDreamCake from "@/assets/pastries/6-create-your-dream-cake.jpg";
import menuPhone from "@/assets/pastries/menu-phone.png";
import customCakePhone from "@/assets/pastries/custom-cake-phone.png";
import homePhone from "@/assets/pastries/home-phone.png";
import fullDesktop from "@/assets/pastries/full-page-desktop.jpg";
import fullMobile from "@/assets/pastries/landing-full-mobile.jpg";

const pastriesCaseStudy: PastriesCaseStudy = {
  project: pastries,
  title: "Pastries",
  intro:
    "A warm, appetite-first landing page for browsing and ordering pastries.",
  details: [
    { label: "Role", value: "UI/UX Designer" },
    { label: "Type", value: "Concept" },
    { label: "Format", value: "Landing page · Mobile and desktop" },
  ],
  // From Idea 03 · Side by Side
  overview: {
    eyebrow: "Overview",
    body: "A landing page that helps people browse available and seasonal pastries and order a custom pastry, designed for both mobile and desktop.",
  },
  menu: {
    headline: "Our Menu",
    chips: ["All", "Desktop", "Mobile", "Seasonal", "Custom cakes"],
    // In the design's column order: the grid fills each column top to bottom
    items: [
      {
        title: "Homepage hero",
        format: "Desktop",
        crop: "aspect-40/23",
        screen: {
          src: hero,
          alt: "Pâtisserie's homepage hero: Freshly Baked Daily. Custom Crafted for You., with Shop Now and Order Custom Cake buttons over a cake topped with macarons and berries",
        },
      },
      {
        title: "Menu",
        format: "Mobile",
        screen: {
          src: menuPhone,
          alt: "Our Menu on a phone: filter chips for All, Cakes, Cupcakes and Pies over product cards, each with a price and a cart button",
        },
      },
      {
        title: "Inspiration gallery",
        format: "Desktop",
        crop: "aspect-10/9",
        screen: {
          src: inspirationGallery,
          alt: "Inspiration Gallery: filters for Weddings, Birthdays, Corporate and Minimalist over cakes made for real occasions, from Floral Cascade to Pastel Macaron Tower",
        },
      },
      {
        title: "Easter specials",
        format: "Desktop",
        category: "Seasonal",
        crop: "aspect-2/1",
        screen: {
          src: easterSpecials,
          alt: "Easter Specials: a carousel card for Easter Nest Cupcakes, a pack of 4 for $16.50, with an Add to Cart button",
        },
      },
      {
        title: "Ready-made pastries",
        format: "Desktop",
        crop: "aspect-5/4",
        screen: {
          src: readyMade,
          alt: "Ready-Made Pastries: a card each for Cakes, Cupcakes, Doughnuts, Bread, Pies and Cookies, each with a View Details button",
        },
      },
      {
        title: "Custom cake",
        format: "Mobile",
        category: "Custom cakes",
        screen: {
          src: customCakePhone,
          alt: "Create Your Dream Cake on a phone, with a Start Custom Cake button, then How It Works: browse, customise and order",
        },
      },
      {
        title: "Home",
        format: "Mobile",
        screen: {
          src: homePhone,
          alt: "Pâtisserie's homepage on a phone: Freshly Baked Daily. Custom Crafted for You., with Shop Now and Order Custom Cake buttons, then Easter Specials",
        },
      },
      {
        title: "Your dream cake in 4 steps",
        format: "Desktop",
        category: "Custom cakes",
        crop: "aspect-5/2",
        screen: {
          src: dreamCakeSteps,
          alt: "Your Dream Cake in 4 Steps: Browse Inspiration, Customise Your Cake, Place Your Order, and We Bake & Deliver, with a See Inspiration Gallery button",
        },
      },
      {
        title: "Create your dream cake",
        format: "Desktop",
        category: "Custom cakes",
        crop: "aspect-2/1",
        screen: {
          src: createDreamCake,
          alt: "Create Your Dream Cake: a pink banner with a Start from Scratch button beside a tiered wedding cake with roses",
        },
      },
    ],
  },
  wholePage: {
    headline: "See the whole page",
    body: "Every section, top to bottom, on desktop and mobile.",
    desktop: { label: "Desktop page", src: fullDesktop },
    mobile: { label: "Mobile page", src: fullMobile },
  },
};

export default pastriesCaseStudy;
