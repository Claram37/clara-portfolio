import type { Step } from "@/data/projects/types";
import { cn } from "@/lib/utils";

interface StepRailProps {
  steps: Step[];
  active: number;
  onSelect: (i: number) => void;
}

const looks = {
  done: { dot: "bg-rail-done", text: "text-rail-done-text" },
  current: { dot: "bg-shopxray", text: "text-ink font-semibold" },
  upcoming: { dot: "bg-rail-todo", text: "text-rail-todo-text" },
};

const StepRail = ({ steps, active, onSelect }: StepRailProps) => {
  return (
    <ol className="flex flex-col gap-2">
      {steps.map((step, i) => {
        const look =
          i < active ? "done" : i === active ? "current" : "upcoming";
        return (
          <li key={step.label}>
            <button
              type="button"
              onClick={() => onSelect(i)}
              aria-current={i === active ? "step" : undefined}
              className={cn(
                "flex items-center gap-3 text-base focus-ring",
                looks[look].text,
              )}
            >
              <span
                aria-hidden="true"
                className={cn("size-2 shrink-0 rounded-full", looks[look].dot)}
              />
              {i + 1} {step.label}
            </button>
          </li>
        );
      })}
    </ol>
  );
};

export default StepRail;
