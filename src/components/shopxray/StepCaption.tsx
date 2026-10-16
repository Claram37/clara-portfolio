import type { Step } from "@/data/projects/types";
import Eyebrow from "./Eyebrow";
import { cn } from "@/lib/utils";

interface StepCaptionProps {
  step: Step;
  className?: string;
}
const StepCaption = ({ step, className }: StepCaptionProps) => {
  const { eyebrow, headline, body } = step;

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-step">{headline}</h2>
      <p className="text-body text-ink-muted">{body}</p>
    </div>
  );
};

export default StepCaption;
