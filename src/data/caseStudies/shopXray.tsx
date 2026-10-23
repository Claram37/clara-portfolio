import PaperNote from "@/components/shopxray/PaperNote";
import shopXray, { openVisitsAlt } from "@/data/projects/shopXray";
import type { StepCaseStudy } from "@/data/projects/types";
import notebook from "@/assets/shopxray/daftari-notebook.png";
import visit05Zoom from "@/assets/shopxray/visit-05-zoom.png";
import visit04Zoom from "@/assets/shopxray/visit-04-zoom.png";
import visit03Zoom from "@/assets/shopxray/visit-03-zoom.png";
import visitJoanZoom from "@/assets/shopxray/visit-joan-zoom.png";
import openVisitsDesktop from "@/assets/shopxray/open-visits-desktop.png";
import paperMatumizi from "@/assets/shopxray/paper-matumizi.png";
import recordExpense from "@/assets/shopxray/record-expense-modal.png";
import daySummary from "@/assets/shopxray/day-summary-modal.png";
import paperSalio from "@/assets/shopxray/paper-salio.png";
import paperSignup from "@/assets/shopxray/paper-signup.png";
import createAccountDesktop from "@/assets/shopxray/create-account-desktop.jpg";
import Zoom from "@/components/mockups/Zoom";
import { cn } from "@/lib/utils";
import Browser from "@/components/mockups/Browser";
import Arrows from "@/components/shopxray/Arrows";

const visits = [
  {
    src: visit05Zoom,
    alt: "Visit #05: pedicure, wash and set, gel nails and one more, totalling TZS 45,000",
    className: "left-[66.67%] top-[2.67%]",
  },
  {
    src: visit04Zoom,
    alt: "Visit #04: pedicure, wash and set, gel nails and one more, totalling TZS 45,000",
    className: "left-[71.11%] top-[24%]",
  },
  {
    src: visit03Zoom,
    alt: "Visit #03: pedicure, wash and set, and coconut oil, totalling TZS 30,000",
    className: "left-[66.67%] top-[45.33%]",
  },
  {
    src: visitJoanZoom,
    alt: "Joan Khalid's visit: full body massage, tips and gel, and a manicure, totalling TZS 105,000",
    className: "left-[71.11%] top-[66.67%]",
  },
];

const lines = ["top-[32.5%]", "top-[36%]", "top-[39.5%]", "top-[42.83%]"];

const shopXrayCaseStudy: StepCaseStudy = {
  project: shopXray,
  intro: "A digital daftari for shop owners who still run on paper.",
  details: [
    { label: "Role", value: "UI/UX Designer" },
    { label: "Company", value: "MkatabaHQ" },
    { label: "Platform", value: "Web app" },
  ],
  steps: [
    {
      label: "The paper daftari",
      eyebrow: "The problem",
      headline: "The day lives in a paper notebook.",
      body: "At closing, the owner reconciles the cash by hand. When it doesn't add up, they chase their staff for answers.",
      scene: (
        <>
          <img
            src={notebook}
            alt="An open paper daftari. The left page lists 18 January's visits (Amina, hair, 45,000; Neema, manicure, 15,000; Zawadi, colour, 60,000; Rehema, cut, 20,000) and three expenses, ending with Mapato (income) 140,000 and Salio (balance) 114,000. The right page tracks January's stock."
            loading="lazy"
            decoding="async"
            className="absolute left-[7.78%] top-[4.33%] w-[84.44%]"
          />
        </>
      ),
    },
    {
      label: "A blank page",
      eyebrow: "Onboarding",
      headline: "A blank page becomes a shop.",
      body: "Getting a shop set up and ready to record its first day.",
      scene: (
        <>
          <PaperNote
            src={paperSignup}
            alt="A daftari page: Daftari jipya. Jina la duka: ___. Namba ya simu: ___ (New daftari. Shop name. Phone number.)"
            className="left-[4.44%] top-[28.33%] w-[36.67%]"
          />
          <Arrows paths={["M380 300H404"]} />
          <Browser
            src={createAccountDesktop}
            alt="ShopXray's Create Your Account form, asking for a shop name, full name, phone number and email, beside a shop owner smiling at a tablet"
            url="mkatabahq.com/signup"
            shadow="shadow-modal"
            className="absolute left-[45.78%] top-[20%] w-[52.22%] morph-to"
          />
        </>
      ),
    },
    {
      label: "Lines lift off",
      eyebrow: "The goal",
      headline: "A digital daftari that feels as easy as the paper one.",
      body: "Expenses are recorded as they happen, and cash is reconciled in real time. Closing the day just means confirming that the cash in hand matches the daftari.",
      scene: (
        <>
          <img
            src={notebook}
            loading="lazy"
            decoding="async"
            alt="The same daftari, with its four visit lines highlighted"
            className="absolute left-[3.33%] top-[18.67%] w-[55.56%] morph-fade"
          />
          <Arrows
            paths={[
              "M239 207L592 76",
              "M239 228L632 204",
              "M239 249L592 332",
              "M239 269L632 460",
            ]}
          />

          {lines.map((top) => (
            <div
              key={top}
              aria-hidden="true"
              className={cn(
                "absolute left-[10.56%] h-[3.67%] w-[15.56%] rounded-lg border border-shopxray bg-shopxray/15 morph-line",
                top,
              )}
            ></div>
          ))}
          {visits.map(({ src, alt, className }) => (
            <Zoom
              key={src}
              src={src}
              alt={alt}
              shadow="shadow-visit-card"
              className={cn(
                "absolute w-[27.78%] border border-window-line morph-to",
                className,
              )}
            />
          ))}
        </>
      ),
    },
    {
      label: "The day, assembled",
      eyebrow: "Open day",
      headline: "Every visit, as it happens.",
      body: "Recording the day's activity, including drop-offs and collections, as it happens.",
      scene: (
        <>
          <Browser
            src={openVisitsDesktop}
            url="mkatabahq.com/shopxray/today"
            alt={openVisitsAlt}
            shadow="shadow-modal"
            className="absolute left-[12.22%] top-[1.5%] w-[75.56%] morph-to"
          />
        </>
      ),
    },
    {
      label: "Matumizi",
      eyebrow: "Expenses",
      headline: "Matumizi becomes a form.",
      body: "Logging daily expenses in a few taps.",
      scene: (
        <>
          <PaperNote
            src={paperMatumizi}
            alt="A daftari page headed Matumizi (expenses): hair supplies 12,000, tea for staff 6,000, car fuel 8,000"
            className="left-[4.44%] top-[28.33%] w-[35.56%]"
          />
          <Arrows paths={["M372 300H452"]} />
          <Zoom
            src={recordExpense}
            shadow="shadow-modal"
            className="absolute left-[52.22%] top-[17%] w-[43.33%] morph-to"
            alt="ShopXray's Record Expense form: a 10,000 bodaboda ride, partly paid with 5,000, with suggested tags"
          />
        </>
      ),
    },
    {
      label: "Salio",
      eyebrow: "Closed day",
      headline: "Salio becomes the closed day.",
      body: "Confirming the cash in hand against the daftari before closing.",
      scene: (
        <>
          <PaperNote
            src={paperSalio}
            alt="A daftari page: Mapato (income) 140,000, Salio (balance) 114,000, and Droo (the cash drawer) 104,000, followed by two question marks"
            className="left-[4.44%] top-[31.67%] w-[36.67%]"
          />
          <Arrows paths={["M384 300H506"]} />
          <Zoom
            src={daySummary}
            shadow="shadow-modal"
            className="absolute left-[58.89%] top-[5%] w-[30.22%] morph-to"
            alt="The closed day's summary for Friday, Jan 12: visits, revenue expected and collected, a 200,000 cash deficit, expenses, and TZS 15,230,000 net recorded"
          />
        </>
      ),
    },
  ],
  decisions: {
    eyebrow: "Key decisions",
    headline: "Keep the notebook's habits. Take over the maths.",
    items: [
      {
        title: "Record as it happens, not at closing.",
        text: "Visits and expenses are logged when they happen, so closing becomes a quick check instead of rebuilding the day from memory. The trade-off is a few more taps during a busy day. This was worth it because they could record the day as it happens and made all records easy to keep.",
      },
      {
        title: "Show the gap before the day closes.",
        text: "If the cash in hand doesn't match what was recorded, the closing summary shows the shortfall before the owner confirms.",
      },
      {
        title: "One card per visit.",
        text: "Each visit is a card listing its services and total, like one line of the daftari. Cards are easy to scan and each card belongs to one customer.",
      },
    ],
  },
  edgeCases: {
    eyebrow: "When the day doesn't go to plan",
    headline:
      "Real days are messy. The daftari handled that, so ShopXray had to.",
    columns: ["Situation", "What ShopXray does"],
    items: [
      {
        situation:
          "An expense is only partly paid, like a 10,000 bodaboda ride with 5,000 paid now",
        response:
          "Records what was paid and the balance stays visible until all is paid.",
      },
      {
        situation: "A customer drops something off and collects it later",
        response:
          "A customer can drop off an item for repair or for a service. The visit is converted to a drop off with the customer name and their contact details. The day they pay for it is when the payment counts. If they partially paid, the balance is counted when they pay the remaining amount.",
      },
      {
        situation: "The cash doesn't match at closing",
        response:
          "Shows the deficit on the closing summary before the owner confirms, the deficit shows even when the day is closed.",
      },
    ],
  },
  learned: {
    eyebrow: "What I learned",
    headline: "Don't replace the habit. Replace the arithmetic.",
    body: "Owners didn't want a new way to run their shop. They wanted the notebook to add itself up.",
  },
};

export default shopXrayCaseStudy;
