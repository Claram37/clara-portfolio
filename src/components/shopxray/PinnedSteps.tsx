import { useRef } from "react";
import Stage from "./Stage";
import StepCaption from "./StepCaption";
import type { Step } from "@/data/projects/types";
import { cn } from "@/lib/utils";

interface PinnedStepsProps {
  steps: Step[];
}

const PinnedSteps = ({ steps }: PinnedStepsProps) => {
  const track = useRef<HTMLElement>(null);
  const markers = useRef<HTMLDivElement>(null);
  const active = 0;

  return (
    <section
      ref={track}
      aria-label="From paper to ShopXray"
      className="relative hidden xl:block"
    >
      <div ref={markers} data-snap aria-hidden="true">
        {steps.map((step) => (
          <div key={step.label} className="h-svh snap-start" />
        ))}
      </div>
      <div className="absolute inset-0">
        <div className="sticky top-0 flex h-svh items-center px-page">
          <div className="mx-auto grid w-full max-w-content grid-cols-[1fr_3fr] items-start gap-12">
            <div className="flex flex-col gap-7">
              <div className="grid border-t border-daftari-rule pt-5">
                {steps.map((step, i) => (
                  <StepCaption
                    key={step.label}
                    className={cn(
                      "col-start-1 row-start-1 transition-opacity duration-500",
                      i !== active && "opacity-0",
                    )}
                    step={step}
                  />
                ))}
              </div>
            </div>
            <Stage className="w-full max-w-paper-stage justify-self-end">
              {steps.map((step, i) => (
                <div
                  key={step.label}
                  data-scene
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500",
                    i !== active && "opacity-0",
                  )}
                >
                  {step.scene}
                </div>
              ))}
            </Stage>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PinnedSteps;
