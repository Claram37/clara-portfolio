import { useRef } from "react";
import Stage from "./Stage";
import StepCaption from "./StepCaption";
import type { Step } from "@/data/projects/types";
import { cn } from "@/lib/utils";
import StepRail from "./StepRail";
import useScrub from "@/hooks/useScrub";

interface PinnedStepsProps {
  steps: Step[];
}

const PinnedSteps = ({ steps }: PinnedStepsProps) => {
  const track = useRef<HTMLElement>(null);
  const scenes = useRef<HTMLDivElement>(null);

  const active = useScrub(track, steps.length);

  const goTo = (i: number) => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    scenes.current?.children[i]?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <section
      ref={track}
      aria-label="From paper to ShopXray"
      className="px-page hidden xl:block"
    >
      <div className="mx-auto grid w-full max-w-content grid-cols-[1fr_3fr] items-start gap-12">
        <div className="sticky top-0 flex h-svh flex-col justify-center gap-7">
          <StepRail steps={steps} active={active} onSelect={goTo} />
          <div className="grid border-t border-daftari-rule pt-5">
            {steps.map((step, i) => (
              <StepCaption
                key={step.label}
                className={cn(
                  "col-start-1 row-start-1",
                  i === active
                    ? "transition-opacity duration-500"
                    : "opacity-0",
                )}
                step={step}
              />
            ))}
          </div>
        </div>
        <div ref={scenes} data-snap="mandatory">
          {steps.map((step) => (
            <div
              key={step.label}
              data-scene
              className="flex h-svh snap-start items-center justify-end"
            >
              <Stage className="w-full max-w-paper-stage">{step.scene}</Stage>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PinnedSteps;
