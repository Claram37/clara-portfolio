import { Check } from "lucide-react";
import type { Chapter } from "@/data/projects/types";
import { cn } from "@/lib/utils";

interface SplitBodyProps {
  chapter: Chapter;
  tone: { accent: string; body: string; panel: string };
  reverse?: boolean;
}

const SplitBody = ({ chapter, tone, reverse = false }: SplitBodyProps) => {
  const { headline, body, stats, checklist, highlight, panel, visual } =
    chapter;

  return (
    <div
      className={cn(
        "flex flex-col gap-8 xl:gap-16",
        reverse ? "xl:flex-row-reverse" : "xl:flex-row",
      )}
    >
      <div className="flex flex-col gap-5 xl:flex-1 xl:justify-end">
        <h2 className="text-section">{headline}</h2>
        {body && <p className={cn("text-body", tone.body)}>{body}</p>}

        {stats && (
          <ul className="flex gap-6 pt-4">
            {stats.map(({ value, label }, index) => (
              <li key={label} className="flex flex-1 flex-col gap-1">
                <span
                  className={cn(
                    "font-display text-figure",
                    index === 0 && tone.accent,
                  )}
                >
                  {value}
                </span>
                <span className="text-xs text-muted-foreground">{label}</span>
              </li>
            ))}
          </ul>
        )}

        {checklist && (
          <div className="pt-3">
            <p className="text-xs font-medium text-muted-foreground">
              {checklist.title}
            </p>
            <ul>
              {checklist.items.map((item) => (
                <li key={item} className="flex gap-3 border-b py-3 text-base">
                  <Check
                    className={cn("mt-1 size-4 shrink-0", tone.accent)}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {highlight && (
          <p className={cn("text-base font-semibold", tone.accent)}>
            {highlight}
          </p>
        )}
      </div>

      <div
        className={cn(
          "relative aspect-708/606 overflow-hidden rounded-card xl:w-150 xl:shrink-0",
          panel ?? tone.panel,
        )}
      >
        {visual}
      </div>
    </div>
  );
};

export default SplitBody;
