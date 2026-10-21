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
      className="flex flex-col gap-16 px-page pb-16 xl:hidden"
    >
      {steps.map((step) => (
        <li
          key={step.label}
          className="mx-auto flex w-full max-w-paper-stage flex-col gap-6"
        >
          <Stage>{step.scene}</Stage>
          <StepCaption step={step} />
        </li>
      ))}
    </ol>
  );
};

export default StepCards;
