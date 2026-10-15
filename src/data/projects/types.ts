import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export interface ProjectTheme {
  tile: string;
  tint: string;
  stage: string;
  caption: string;
  link: string;
}

export interface Project {
  name: string;
  kind: string;
  icon: LucideIcon;
  caption: string;
  caseStudy: string;
  theme: ProjectTheme;
  visual: ReactNode;
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
  links: { label: string; href: string }[];
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
  checklist?: { title: string; items: string[] };
  highlight?: string;
  figure?: string;
  screens?: { src: string; alt: string; title: string; caption: string }[];
  visual?: ReactNode;
}

export interface CaseStudy {
  project: Project;
  intro: string;
  details: { label: string; value: string }[];
  chapters: Chapter[];
}
