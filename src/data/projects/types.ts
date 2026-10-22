import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export interface ProjectTheme {
  tile: string;
  tint: string;
  stage: string;
  caption: string;
  link: string;
  dark: boolean;
}

// What the Next project section shows. Every Project fits it, and so does a project that isn't on the homepage
export interface NextUp {
  name: string;
  caption: string;
  caseStudy: string;
  cta?: string;
  theme: Pick<ProjectTheme, "stage" | "caption" | "link" | "dark">;
  peek?: ReactNode;
}

export interface Project {
  name: string;
  kind: string;
  icon: LucideIcon;
  caption: string;
  caseStudy: string;
  theme: ProjectTheme;
  visual: ReactNode;
  peek?: ReactNode;
  next?: NextUp;
}

export interface MoreProject {
  name: string;
  summary: string;
  to: string;
  tag?: string;
  cover: ReactNode;
}
export interface CodeProject {
  name: string;
  tag: string;
  summary: string;
  stack: string[];
  live?: string;
  code: string;
  visual: ReactNode;
}

export type ChapterTone = "surface" | "paper" | "tint" | "blue" | "ink";

export interface Chapter {
  label: string;
  tone: ChapterTone;
  layout: "split" | "screens" | "impact" | "statement";
  headline: string;
  body?: string;
  stats?: { value: string; label: string }[];
  checklist?: { items: string[] };
  highlight?: string;
  figure?: string;
  screens?: { src: string; alt: string; title: string; caption: string }[];
  panel?: string;
  visual?: ReactNode;
}
// What CaseHero shows. A case study's project is on the homepage; a concept's only needs a name
export interface PageIntro {
  project: { name: string };
  title?: string; // the hero's title, when it's shorter than the project's name
  intro: string;
  details: { label: string; value: string }[];
}
export interface CaseStudyIntro extends PageIntro {
  project: Project;
}
// the extend merges both into one interface. So CaseStudy has CaseStudyIntro declarations
export interface CaseStudy extends CaseStudyIntro {
  chapters: Chapter[];
}
export interface Step {
  label: string;
  eyebrow: string;
  headline: string;
  body: string;
  scene: ReactNode;
}
export interface StepCaseStudy extends CaseStudyIntro {
  steps: Step[];
}

// Fitcheck's case study sections
export interface Shot {
  src: string;
  alt: string;
}

export interface FitcheckSection {
  eyebrow?: string;
  headline: ReactNode;
  body?: string;
}

export interface Overview {
  eyebrow: string;
  headline: string;
  body: string;
  steps: { name: string; text: string }[];
  screen: Shot;
}

export interface VersionOneSection extends FitcheckSection {
  callouts: { quote: string; text: string }[];
  report: Shot;
}

export interface HardestSection extends FitcheckSection {
  answers: { icon: LucideIcon; tile: string; title: string; text: string }[];
  screen: Shot;
}

export interface ScreensSection extends FitcheckSection {
  aside: string;
  screens: (Shot & { caption: string })[];
}

export interface ResultsSection extends FitcheckSection {
  note: string;
  document: Shot;
  cards: { icon: LucideIcon; title: string; text: string }[];
}

export interface FitcheckCaseStudy extends CaseStudyIntro {
  overview: Overview;
  problem: FitcheckSection;
  versionOne: VersionOneSection;
  hardest: HardestSection;
  screens: ScreensSection;
  results: ResultsSection;
  learned: FitcheckSection;
}

// Pride's concept page: the set (the waveform), a track per landing page section, and the liner notes
export interface SectionCopy {
  eyebrow: string;
  headline: string;
  body: string;
}

export interface Track {
  title: string;
  job: string;
  tag: string;
  beat: string;
  screen: Shot;
}

export interface LinerNotes extends SectionCopy {
  images: Shot[];
}

export interface PrideCaseStudy extends PageIntro {
  project: NextUp;
  set: SectionCopy;
  tracks: Track[];
  linerNotes: LinerNotes;
  next: NextUp;
}

// Pastries' concept page: its screens served as a menu, which the chips filter by format or category
export interface MenuItem {
  title: string;
  format: "Desktop" | "Mobile";
  category?: "Seasonal" | "Custom cakes";
  screen: Shot;
  crop?: string; // a desktop screen's aspect ratio on its card
}

export interface PastriesCaseStudy extends PageIntro {
  project: NextUp;
  title: string;
  overview: Pick<SectionCopy, "eyebrow" | "body">;
  menu: { headline: string; chips: string[]; items: MenuItem[] };
  wholePage: {
    headline: string;
    body: string;
    desktop: { label: string; prototype: string };
    mobile: { label: string; prototype: string };
  };
  next: NextUp;
}

// The Hiring Tracker page: the three questions a recruiter brings, each answered by one view of the tracker
export interface Question {
  headline: string;
  body: string;
  view: string; // the view that answers it, named on its pill
  screen: Shot;
  crop?: string; // a tall screen's aspect ratio, when only its top shows
}

export interface HiringCaseStudy extends PageIntro {
  project: Pick<NextUp, "name" | "caption" | "caseStudy">;
  before: Pick<SectionCopy, "eyebrow" | "body">;
  questions: Question[];
}
