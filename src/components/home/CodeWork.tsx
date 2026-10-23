import SectionHead from "@/components/shared/SectionHead";
import Button from "@/components/shared/Button";
import GitHub from "@/components/icons/GitHub";
import site from "@/data/site";
import codeWork from "@/data/projects/codeWork";
import CodeCard from "./CodeCard";
import { useId } from "react";

const CodeWork = () => {
  const headingId = useId();
  return (
    <section
      aria-labelledby={headingId}
      className="focus-light bg-ink px-page py-20 text-paper lg:py-30"
    >
      <div className="mx-auto max-w-content">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHead
            id={headingId}
            title="I design it. Then I help build it."
          >
            <span className="block max-w-170 text-code-muted">
              I write React, so I think in components and states, know what's
              costly to build, and can talk with engineers in their language.
            </span>
            <span className="mt-4 block text-code-muted">
              Two things I designed and built end to end:
            </span>
          </SectionHead>
          <Button href={site.github} variant="light" className="shrink-0">
            <GitHub className="size-4" aria-hidden="true" />
            See my GitHub
          </Button>
        </div>
        <ul className="mt-16 grid gap-8 lg:grid-cols-2">
          {codeWork.map((project) => (
            <CodeCard key={project.name} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CodeWork;
