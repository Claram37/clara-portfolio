import type { Step } from "@/data/projects/types";
import Stage from "./Stage";
import StepCaption from "./StepCaption";

interface StepCardsProps {
  steps: Step[];
}
const StepCards = ({ steps }: StepCardsProps) => {
  return (
    <ol
      aria-label="From paper to ShopXray"
      className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-page pb-16 scroll-px-page xl:hidden focus-ring"
      tabIndex={0}
    >
      {steps.map((step) => (
        <li
          key={step.label}
          className="flex shrink-0 basis-4/5 snap-start flex-col gap-6 md:basis-3/5"
        >
          <Stage>{step.scene}</Stage>
          <StepCaption step={step} />
        </li>
      ))}
    </ol>
  );
};

export default StepCards;
