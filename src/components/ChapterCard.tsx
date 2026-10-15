import { useId } from "react";
import type { Chapter } from "@/data/projects/types";
import { cn } from "@/lib/utils";

const light = {
  text: "text-ink",
  number: "text-dproz",
  label: "text-ink-muted",
  rule: "bg-rule",
  counter: "text-code-muted",
  body: "text-ink-muted",
};

const dark = {
  text: "text-paper",
  number: "text-paper",
  label: "text-on-dark-label",
  rule: "bg-paper/40",
  counter: "text-paper/50",
  body: "text-on-dark",
};

const tones = {
  surface: { ...light, card: "bg-surface", panel: "bg-paper" },
  paper: { ...light, card: "border bg-paper", panel: "bg-surface" },
  tint: { ...light, card: "bg-dproz-tint", panel: "bg-paper" },
  blue: { ...dark, card: "bg-dproz focus-light", panel: "bg-paper/8" },
  ink: { ...dark, card: "bg-ink focus-light", panel: "bg-ink-raised" },
};

interface ChapterCardProps {
  chapter: Chapter;
  index: number;
  total: number;
}

const ChapterCard = ({ chapter, index, total }: ChapterCardProps) => {
  const labelId = useId();
  const tone = tones[chapter.tone];
  const number = String(index + 1).padStart(2, "0");

  return (
    <section
      aria-labelledby={labelId}
      className={cn(
        "flex flex-col gap-8 rounded-card p-6 md:p-10 xl:gap-11 xl:p-14",
        tone.card,
        tone.text,
      )}
    >
      <div className="flex items-center justify-between gap-6">
        <p className="flex items-center gap-3 text-base">
          <span className={cn("font-semibold", tone.number)}>{number}</span>
          <span className={cn("h-px w-5", tone.rule)} aria-hidden="true"></span>
          <span id={labelId} className={cn("font-medium", tone.label)}>
            {chapter.label}
          </span>
        </p>
        <p className={cn("text-xs", tone.counter)} aria-hidden="true">
          {number} / {String(total).padStart(2, "0")}
        </p>
      </div>

      <h2 className="max-w-160 text-section">{chapter.headline}</h2>
    </section>
  );
};

export default ChapterCard;
