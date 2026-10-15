import { useId } from "react";
import { ArrowRight } from "lucide-react";
import projects from "@/data/projects";
import type { Project } from "@/data/projects/types";
import { cn } from "@/lib/utils";
import Button from "./Button";

interface NextProjectProps {
  project: Project;
}

const NextProject = ({ project }: NextProjectProps) => {
  const headingId = useId();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const { stage, caption, link, dark } = next.theme;

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "overflow-hidden px-page pt-16 lg:pt-24",
        stage,
        dark && "focus-light",
      )}
    >
      <div className="mx-auto flex max-w-content flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex max-w-175 flex-col items-start gap-6 lg:pb-28">
          <p
            className={cn("flex items-center gap-2 text-base font-medium", link)}
          >
            Next project
            <ArrowRight className="size-4" aria-hidden="true" />
          </p>
          <h2 id={headingId} className={cn("text-display", caption)}>
            {next.name}
          </h2>
          <p className={cn("text-xl", link)}>{next.caption}</p>
          <Button to={next.caseStudy} variant={dark ? "light" : "dark"} arrow>
            View case study
          </Button>
        </div>

        {next.peek && (
          <div className="relative h-80 w-full shrink-0 lg:h-125 lg:w-150">
            {next.peek}
          </div>
        )}
      </div>
    </section>
  );
};

export default NextProject;
