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
export interface CaseStudyIntro {
  project: Project;
  intro: string;
  details: { label: string; value: string }[];
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
  caption: string;
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
