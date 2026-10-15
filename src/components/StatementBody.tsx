import type { Chapter } from "@/data/projects/types";
import { cn } from "@/lib/utils";

interface StatementBodyProps {
  chapter: Chapter;
  tone: { body: string };
}

const StatementBody = ({ chapter, tone }: StatementBodyProps) => {
  const { headline, body } = chapter;

  return (
    <div className="flex flex-col gap-6">
      <blockquote>
        <h2 className="text-chapter font-medium">“{headline}”</h2>
      </blockquote>
      {body && <p className={cn("text-lead", tone.body)}>{body}</p>}
    </div>
  );
};

export default StatementBody;
