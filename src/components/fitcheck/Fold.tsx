import type { ReactNode } from "react";
import { Minus, Plus } from "lucide-react";

interface FoldProps {
  title: string;
  summary: string;
  children: ReactNode;
}

const Fold = ({ title, summary, children }: FoldProps) => {
  return (
    <details className="group">
      <summary className="group/fold block cursor-pointer list-none px-page focus-visible:outline-none [&::-webkit-details-marker]:hidden">
        <div className="mx-auto flex max-w-content flex-col gap-4 rounded-card border border-window-line p-6 group-focus-visible/fold:outline-2 group-focus-visible/fold:outline-offset-2 group-focus-visible/fold:outline-ring sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7">
          <span className="flex flex-col gap-1">
            <span className="font-display text-2xl font-semibold">{title}</span>
            <span className="text-muted-foreground">{summary}</span>
          </span>
          <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-surface px-5 py-3 font-semibold sm:self-auto">
            <Plus className="size-4 group-open:hidden" aria-hidden="true" />
            <Minus className="hidden size-4 group-open:block" aria-hidden="true" />
            <span className="group-open:hidden">Show</span>
            <span className="hidden group-open:inline">Hide</span>
          </span>
        </div>
      </summary>
      {children}
    </details>
  );
};

export default Fold;
