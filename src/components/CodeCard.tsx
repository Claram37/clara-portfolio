import type { CodeProject } from "@/data/projects/types";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface CodeCardProps {
  project: CodeProject;
}

const CodeCard = ({ project }: CodeCardProps) => {
  return (
    <li className="flex flex-col overflow-hidden rounded-card border border-code-line bg-code-card">
      <div className="relative aspect-152/105 overflow-hidden">
        {project.visual}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 md:px-9 md:pt-8 md:pb-9">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-title">{project.name}</h3>
          <span className="rounded-full bg-code-line px-3 py-1 text-xs font-semibold text-code-muted">
            {project.tag}
          </span>
        </div>
        <p className="text-code-muted">{project.summary}</p>
        <ul className="flex flex-wrap gap-2 pt-1">
          {project.stack.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-code-chip-line bg-code-chip px-3 py-1 text-xs font-medium text-code-chip-text"
            >
              {tool}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-7 pt-2">
          {project.links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "group inline-flex items-center gap-2 font-semibold transition-colors hover:text-paper focus-ring",
                index === 0 ? "text-paper" : "text-code-muted",
              )}
            >
              {link.label}
              <span className="sr-only"> ({project.name})</span>
              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </li>
  );
};

export default CodeCard;
