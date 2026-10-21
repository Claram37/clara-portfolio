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

export interface Project {
  name: string;
  kind: string;
  icon: LucideIcon;
  caption: string;
  caseStudy: string;
  theme: ProjectTheme;
  visual: ReactNode;
  peek?: ReactNode;
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

// Fitcheck: the hero and overview are the same for everyone, these sections re-order for each reader
export type StoryId =
  | "results"
  | "problem"
  | "versionOne"
  | "hardest"
  | "screens"
  | "learned";

export interface Reader {
  id: string;
  name: string;
  plural: string;
  lead: string;
  icon: LucideIcon;
  order: StoryId[];
  folded: StoryId[];
}

export interface Shot {
  src: string;
  alt: string;
}

export interface StorySection {
  label: string;
  summary: string;
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

export interface ResultsSection extends StorySection {
  note: string;
  document: Shot;
  cards: { icon: LucideIcon; title: string; text: string }[];
}

export interface VersionOneSection extends StorySection {
  callouts: { quote: string; text: string }[];
  report: Shot;
}

export interface HardestSection extends StorySection {
  answers: { icon: LucideIcon; tile: string; title: string; text: string }[];
  screen: Shot;
}

export interface ScreensSection extends StorySection {
  aside: string;
  screens: (Shot & { caption: string })[];
}

export interface ReaderCaseStudy extends CaseStudyIntro {
  readers: Reader[];
  overview: Overview;
  results: ResultsSection;
  problem: StorySection;
  versionOne: VersionOneSection;
  hardest: HardestSection;
  screens: ScreensSection;
  learned: StorySection;
}
