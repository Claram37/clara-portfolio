import { useId } from "react";
import Eyebrow from "@/components/shared/Eyebrow";
import type { StepCaseStudy } from "@/data/projects/types";
import { cn } from "@/lib/utils";
import Heading from "./Heading";

interface EdgeCasesProps {
  edgeCases: StepCaseStudy["edgeCases"];
}

const row = "grid gap-2 md:grid-cols-[2fr_3fr] md:items-baseline md:gap-12";

const EdgeCases = ({ edgeCases }: EdgeCasesProps) => {
  const { eyebrow, headline, columns, items } = edgeCases;
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="px-page py-20 lg:py-24 2xl:py-30"
    >
      <div className="mx-auto flex max-w-content flex-col gap-12">
        <Heading
          id={headingId}
          eyebrow={eyebrow}
          headline={headline}
          className="max-w-200"
        />
        <div>
          <div className={cn(row, "pb-4 max-md:hidden")} aria-hidden="true">
            {columns.map((column) => (
              <Eyebrow key={column} className="text-muted-foreground">
                {column}
              </Eyebrow>
            ))}
          </div>
          <dl className="border-t border-daftari-rule">
            {items.map(({ situation, response }) => (
              <div
                key={situation}
                className={cn(row, "border-b border-daftari-rule py-6")}
              >
                <dt className="text-xl font-semibold tracking-tight">
                  {situation}
                </dt>
                <dd className="text-body text-ink-muted lg:text-body-lg">
                  {response}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default EdgeCases;
