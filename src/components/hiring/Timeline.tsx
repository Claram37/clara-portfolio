import type { ScreenTimeline } from "@/data/projects/types";
import Eyebrow from "@/components/shared/Eyebrow";
import { cn } from "@/lib/utils";

interface TimelineProps {
  timeline: ScreenTimeline;
}

// Beside the screen, from md: a dot on the line for each event, the newest filled
const Timeline = ({ timeline }: TimelineProps) => {
  const { order, line, events } = timeline;

  return (
    <div className="relative hidden w-36 shrink-0 md:block">
      <Eyebrow className="absolute top-6 right-5 text-hiring-label">
        {order}
      </Eyebrow>
      <div
        aria-hidden="true"
        className={cn("absolute right-0 flex w-3 justify-center", line)}
      >
        <span className="border-l-2 border-hiring-track" />
      </div>
      <ol>
        {events.map(({ title, note, top }, index) => (
          <li
            key={title}
            className={cn("absolute right-0 flex items-start gap-3", top)}
          >
            <div className="flex w-30 flex-col gap-1 text-right">
              <p className="font-display text-base leading-tight font-semibold">
                {title}
              </p>
              <p className="text-xs text-muted-foreground">{note}</p>
            </div>
            <span
              className={cn(
                "mt-4 size-3 shrink-0 rounded-full border-2 border-hiring",
                index === 0 ? "bg-hiring" : "bg-paper",
              )}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
