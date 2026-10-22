import safariCover from "@/assets/safari/cover.jpg";
import hiringCover from "@/assets/hiring/cover.png";
import resumeConfidencePhone from "@/assets/resume-feedback/resume-confidence-phone.jpg";
import prideCover from "@/assets/pride/cover.jpg";
import pastriesCover from "@/assets/pastries/cover.jpg";
import meditationCover from "@/assets/meditation/cover.jpg";
import Phone from "@/components/mockups/Phone";
import hiringTracker from "./hiringTracker";
import pastries from "./pastries";
import pride from "./pride";
import resumeFeedback from "./resumeFeedback";
import safariSpirits from "./safariSpirits";
import serenity from "./serenity";
import type { MoreProject } from "./types";

const moreWork: MoreProject[] = [
  {
    name: safariSpirits.name,
    summary: safariSpirits.caption,
    to: safariSpirits.caseStudy,
    cover: (
      <img
        src={safariCover}
        alt="Safari Spirits homepage"
        loading="lazy"
        decoding="async"
        className="size-full object-cover"
      />
    ),
  },
  {
    name: hiringTracker.name,
    summary: hiringTracker.caption,
    to: hiringTracker.caseStudy,
    cover: (
      <img
        src={hiringCover}
        alt="Hiring tracker kanban board with candidates grouped by stage"
        loading="lazy"
        decoding="async"
        className="size-full object-cover"
      />
    ),
  },
  {
    name: resumeFeedback.name,
    summary: resumeFeedback.caption,
    to: resumeFeedback.caseStudy,
    cover: (
      <div className="relative size-full bg-resume-feedback">
        <Phone
          src={resumeConfidencePhone}
          alt="AI Resume Feedback screen showing a resume's confidence score"
          className="absolute top-[13.33%] left-[17.75%] w-[64.5%]"
        />
      </div>
    ),
  },
  {
    name: pride.name,
    summary: pride.caption,
    to: pride.caseStudy,
    tag: "Concept",
    cover: (
      <img
        src={prideCover}
        alt="Pride homepage hero, Music Without Limits"
        loading="lazy"
        decoding="async"
        className="size-full object-cover"
      />
    ),
  },
  {
    name: pastries.name,
    summary: pastries.caption,
    to: pastries.caseStudy,
    tag: "Concept",
    cover: (
      <img
        src={pastriesCover}
        alt="Bakery homepage hero with a celebration cake and cupcakes"
        loading="lazy"
        decoding="async"
        className="size-full object-cover"
      />
    ),
  },
  {
    name: serenity.name,
    summary: serenity.caption,
    to: serenity.caseStudy,
    tag: "Concept",
    cover: (
      <img
        src={meditationCover}
        alt="Serenity meditation app screens"
        loading="lazy"
        decoding="async"
        className="size-full object-cover"
      />
    ),
  },
];

export default moreWork;
