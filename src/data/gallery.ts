import type { Gallery, GallerySlide } from "@/data/projects/types";
import brandReel from "@/assets/gallery/brand-reel/reel.mp4";
import swahiliReel from "@/assets/gallery/swahili-reel/reel.mp4";
import fitcheckReel from "@/assets/gallery/fitcheck-reel/reel.mp4";

// Every slide at full size, and 640px wide for the cards, by its path in assets/gallery
const full = import.meta.glob<string>("../assets/gallery/*/*.{png,jpg}", {
  eager: true,
  import: "default",
});
const cards = import.meta.glob<string>("../assets/gallery/*/*.{png,jpg}", {
  eager: true,
  import: "default",
  query: { w: 640 },
});

const slide = (file: string, alt: string): GallerySlide => ({
  src: full[`../assets/gallery/${file}`],
  card: cards[`../assets/gallery/${file}`],
  alt,
});

const gallery: Gallery = {
  eyebrow: "Gallery",
  title: "Graphics for Dproz",
  intro:
    "Carousels and reels I designed for Dproz's social pages, turning long job ads into posts people swipe through.",
  hint: "Hover a deck to fan it. Click to deal it out.",
  reels: "Reels",
  // The carousels, then the reels, in the table's order
  posts: [
    {
      title: "1,099 jobs at TANESCO",
      brand: "TANESCO",
      slides: [
        slide(
          "tanesco/1-cover.png",
          "1,099 jobs at TANESCO, over a bar chart of the roles by level: 100 Drivers, 777 Artisans, 203 Technicians, 13 ICT Officers and 6 Engineers, all closing Mon 26 Oct 2026, with a Find your level button",
        ),
        slide(
          "tanesco/2-drivers.png",
          "Driver Grade II, level 1 of 5 (Form IV): 100 full-time positions needing a Form IV certificate, a Class C or E driving licence, a VETA or NIT driving course and 1+ year with no accidents",
        ),
        slide(
          "tanesco/3-artisans.png",
          "Artisan Grade II, level 2 of 5 (Secondary + VETA): 777 positions across 7 trades, from Electrical (736) and Automobile (12) to Gorge Attendant (3), closing Mon 26 Oct 2026",
        ),
        slide(
          "tanesco/4-technicians.png",
          "Technician Grade II, level 3 of 5 (Diploma): 203 positions for an NTA Level 6 diploma and computer literacy, in Electrical / Electronics (193), HVAC (7) and Water Systems O&M (3)",
        ),
        slide(
          "tanesco/5-ict-officers.png",
          "ICT Officer Grade II, level 4 of 5 (Degree): 13 positions for computing graduates across 6 roles, from Information Systems Auditor (6) to Oracle Database Administrator (1)",
        ),
        slide(
          "tanesco/6-engineers.png",
          "Engineer Grade II, level 5 of 5 (Degree + ERB): 6 positions for engineering graduates registered with ERB, in Mechanical (3), Electrical & Electronics (2) and Telecommunications (1), with a How to apply button",
        ),
        slide(
          "tanesco/7-how-to-apply.png",
          "Found your level? Here is how to apply. Open to Tanzanian citizens up to 45, in three steps, from reading the 20 listings on Dproz to applying on the Ajira portal by Mon 26 Oct 2026",
        ),
      ],
    },
    {
      title: "2 jobs at CRDB Bank",
      brand: "CRDB Bank",
      slides: [
        slide(
          "crdb/1-cover.png",
          "2 jobs at CRDB Bank, both closing Monday 5 October: an October 2026 calendar with the 5th circled as the last day to apply for 2 Data & AI jobs in Dar es Salaam, and a See the jobs button",
        ),
        slide(
          "crdb/2-data-scientist.png",
          "Data Scientist, 2 positions in Dar es Salaam, apply by Monday 5 October: machine-learning models for fraud and credit risk, needing 3+ years in ML and Azure AI and MLOps certifications",
        ),
        slide(
          "crdb/3-feature-engineering-specialist.png",
          "Feature Engineering Specialist, apply by Monday 5 October: design the feature pipelines behind the bank's machine-learning models, needing 3+ years in data science or ML and strong Python and SQL",
        ),
        slide(
          "crdb/4-apply.png",
          "Mark your calendar: a deadline card to apply to CRDB Bank by Monday 5 October, for Data Scientist (2 positions) and Feature Engineering Specialist (1), with the link dproz.com/companies/crdbbank",
        ),
      ],
    },
    {
      title: "6 jobs at Equity Bank",
      brand: "Equity Bank",
      slides: [
        slide(
          "equity/1-cover.png",
          "6 jobs at Equity Bank are now boarding, under a split-flap Departures sign: a departures board of the six jobs, closing 13 and 16 Oct and all marked Open, with a See the jobs button",
        ),
        slide(
          "equity/2-livestock.png",
          "RM Agribusiness Livestock Specialist, now boarding at Gate 01: finance livestock farmers and processors from Dar es Salaam, closing Tue 13 Oct 2026, with three check-in requirements",
        ),
        slide(
          "equity/3-fishing-and-aquaculture.png",
          "RM Agribusiness Fishing & Aquaculture Specialist, Gate 02: build the bank's fisheries and aquaculture portfolio, closing Tue 13 Oct 2026, needing 7–10 years in aquaculture, fisheries or banking",
        ),
        slide(
          "equity/4-cash-crops.png",
          "RM Agribusiness Cash Crops Specialist, Gate 03: grow the portfolio in cash crop value chains, from farmers to exporters, closing Fri 16 Oct 2026, needing 3–7 years in cash crop finance",
        ),
        slide(
          "equity/5-relationship-manager.png",
          "Relationship Manager – Business, Gate 04: lead the branch business development team, closing Fri 16 Oct 2026, needing a finance or business degree and 3+ years in banking",
        ),
        slide(
          "equity/6-relationship-officer.png",
          "Relationship Officer – Business, Gate 05: win and keep micro and consumer business customers through field sales, closing Fri 16 Oct 2026, needing a record of meeting deposit targets",
        ),
        slide(
          "equity/7-merchant-acquiring.png",
          "Manager, Merchant Acquiring, Gate 06: grow the merchant and POS business, closing Fri 16 Oct 2026, needing planning and reporting skills, with a How to apply button",
        ),
        slide(
          "equity/8-apply.png",
          "Apply on Dproz before the gates close, under a split-flap Final Call sign: the link dproz.com/companies/equity-bank-tanzania, with 2 jobs closing Tue 13 Oct and 4 on Fri 16 Oct",
        ),
      ],
    },
    {
      title: "6 jobs at Yas Tanzania",
      brand: "Yas Tanzania",
      slides: [
        slide(
          "yas/1-cover.png",
          "6 jobs at Yas Tanzania. Pick a number. A USSD-style menu numbers the six jobs, from 1. Fraud & Investigation Mgr to 6. Commission Specialist, with 1 typed in above Cancel and Send",
        ),
        slide(
          "yas/2-fraud-and-investigation-manager.png",
          "Fraud and Investigation Manager, job 1 of 6, on a USSD-style screen: closes Wed 7 Oct 2026 in Dar es Salaam, needing 7+ years in fraud investigation and cybersecurity",
        ),
        slide(
          "yas/3-fiber-bi-and-reporting-manager.png",
          "Fiber BI & Reporting Manager, job 2 of 6, on a USSD-style screen: lead BI and reporting for the fiber business, closes Wed 7 Oct 2026, needing 5+ years and Power BI, Tableau and SQL",
        ),
        slide(
          "yas/4-b2b-operations-manager.png",
          "B2B Operations Manager, job 3 of 6, on a USSD-style screen: lead B2B network operations, closes Sat 17 Oct 2026, needing an engineering degree and 5+ years in network operations",
        ),
        slide(
          "yas/5-it-service-desk-supervisor.png",
          "IT Service Desk Supervisor, job 4 of 6, on a USSD-style screen: lead 24×7 IT service management, closes Sat 17 Oct 2026, needing 3+ years in system testing and monitoring",
        ),
        slide(
          "yas/6-digital-growth-specialist.png",
          "Digital Growth & Engagement Specialist, job 5 of 6, on a USSD-style screen: grow Yas's digital channels, closes Sat 17 Oct 2026, needing 2+ years with customers and knowledge of bundles and VAS",
        ),
        slide(
          "yas/7-commission-specialist.png",
          "Commission Specialist, job 6 of 6, on a USSD-style screen: calculate commissions for every sales channel, closes Sat 17 Oct 2026, needing SQL and financial systems, with a How to apply button",
        ),
        slide(
          "yas/8-apply.png",
          "Found your number? Apply on Dproz. A USSD-style screen with the link dproz.com/companies/yas-tanzania, and two jobs closing Wed 7 Oct and four on Sat 17 Oct",
        ),
      ],
    },
    {
      title: "Teach tech, teach design, or run the systems",
      brand: "The School of St Jude",
      slides: [
        slide(
          "st-jude/1-cover.jpg",
          "Teach tech, teach design, or run the systems, over a classroom photo: 3 jobs at The School of St Jude, Arusha, for an Officer – Applications, a Coding and AI Facilitator and a Graphics Design Facilitator",
        ),
        slide(
          "st-jude/2-officer-applications.jpg",
          "Officer – Applications, a full-time school office job in Arusha, over a photo of a laptop: improve the school's ERP systems, needing accounting skills and ERP experience, closing Wed 21 Oct 2026",
        ),
        slide(
          "st-jude/3-coding-and-ai-facilitator.jpg",
          "Coding and AI Facilitator, a holiday program contract in Arusha, over a photo of someone at a screen: teach coding and AI to 16 to 18 year olds in Python, JavaScript and Scratch, closing Sun 25 Oct 2026",
        ),
        slide(
          "st-jude/4-graphics-design-facilitator.jpg",
          "Graphics Design Facilitator, a holiday program contract in Arusha, over a photo of a hand sketching in pencil: teach graphics design, needing Adobe Creative Suite and Canva, closing Sun 25 Oct 2026",
        ),
        slide(
          "st-jude/5-how-to-apply.jpg",
          "Send your cover letter and CV by email, over a mountain photo: recruitment@schoolofstjude.co.tz, each role's subject-line reference and closing date, and a note that the school never asks for payment",
        ),
      ],
    },
    {
      title: "3 jobs at Stanbic Bank",
      brand: "Stanbic Bank",
      slides: [
        slide(
          "stanbic/1-cover.jpg",
          "Next stop: your new job at Stanbic Bank. 3 open roles on Dproz, boarding closes 12 October 2026, on tilted boarding cards: 01 Software Developer and 02 Solution Architect in Dar es Salaam, and 03 Branch Manager, Dodoma Branch",
        ),
        slide(
          "stanbic/2-software-developer.jpg",
          "Software Developer, role 01 of 03 on a Dproz Job Pass: design, code and maintain banking software at Stanbic Bank Tanzania, full-time in Dar es Salaam, board by 12 Oct 2026, needing 1–2 years in software engineering",
        ),
        slide(
          "stanbic/3-solution-architect.jpg",
          "Solution Architect, role 02 of 03 on a Dproz Job Pass: design solution architectures and help the bank adopt data, automation and AI, full-time in Dar es Salaam, board by 12 Oct 2026, needing 5–7 years in software engineering",
        ),
        slide(
          "stanbic/4-branch-manager.jpg",
          "Branch Manager, Dodoma Branch, role 03 of 03 on a Dproz Job Pass: lead the Dodoma branch team and grow the business, full-time, board by 12 Oct 2026, needing 5+ years in banking and 3+ as a manager",
        ),
        slide(
          "stanbic/5-apply.jpg",
          "Final call: boarding closes 12 October. A dark ticket to board at dproz.com/companies/stanbic-bank-tanzania, with Share with a friend who fits and Save this post",
        ),
      ],
    },
    {
      title: "Your next job should find you",
      brand: "Dproz",
      reel: { video: brandReel, length: "0:36" },
      slides: [
        slide(
          "brand-reel/cover.jpg",
          "Your next job should find, in bold white type on blue, with job in yellow inside a hand-drawn white loop",
        ),
      ],
    },
    {
      title: "Umetuma maombi mara ngapi?",
      brand: "Dproz",
      reel: { video: swahiliReel, length: "1:10" },
      slides: [
        slide(
          "swahili-reel/cover.jpg",
          "Umetuma maombi mara ngapi… bila kupata jibu? (How many applications have you sent… with no reply?) above 47 applications sent, 0 replies and three jobs each marked Hakuna jibu (No reply)",
        ),
      ],
    },
    {
      title: "Je, umeshawahi kutuma CV kuomba kazi?",
      brand: "Dproz · FitCheck",
      reel: { video: fitcheckReel, length: "1:39" },
      slides: [
        slide(
          "fitcheck-reel/cover.jpg",
          "Je, umeshawahi kutuma CV kuomba kazi… (Have you ever sent a CV to apply for a job…) above a green CV imetumwa (CV sent) tag",
        ),
      ],
    },
  ],
};

export default gallery;
