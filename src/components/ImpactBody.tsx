import type { Chapter } from "@/data/projects/types";
import { cn } from "@/lib/utils";

interface ImpactBodyProps {
  chapter: Chapter;
  tone: { body: string };
}

const ImpactBody = ({ chapter, tone }: ImpactBodyProps) => {
  const { figure, headline, body } = chapter;

  return (
    <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
      <p className="font-display text-impact" aria-hidden="true">
        {figure}
      </p>
      <div className="flex flex-col gap-4 xl:w-1/2 xl:pb-5">
        <h2 className="text-2xl font-medium">{headline}</h2>
        {body && <p className={cn("text-body", tone.body)}>{body}</p>}
      </div>
    </div>
  );
};

export default ImpactBody;
