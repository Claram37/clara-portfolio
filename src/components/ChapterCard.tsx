import { useId } from "react";
import type { Chapter } from "@/data/projects/types";
import { cn } from "@/lib/utils";
import SplitBody from "./SplitBody";

const light = {
  text: "text-ink",
  accent: "text-dproz",
  label: "text-ink-muted",
  counter: "text-muted-foreground",
  body: "text-ink-muted",
};

const dark = {
  text: "text-paper",
  accent: "text-paper",
  label: "text-on-dark-label",
  counter: "text-paper/70",
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

const pad = (n: number) => String(n).padStart(2, "0");

const ChapterCard = ({ chapter, index, total }: ChapterCardProps) => {
  const labelId = useId();
  const tone = tones[chapter.tone];

  return (
    <section
      aria-labelledby={labelId}
      className={cn(
        "flex flex-col gap-8 rounded-card p-6 md:p-10 xl:p-14",
        tone.card,
        tone.text,
      )}
    >
      <div className="flex items-center justify-between gap-6">
        <p id={labelId} className={cn("text-base font-medium", tone.label)}>
          {chapter.label}
        </p>
        <p
          className={cn("text-xs tabular-nums", tone.counter)}
          aria-hidden="true"
        >
          {pad(index + 1)} / {pad(total)}
        </p>
      </div>

      {chapter.layout === "split" ? (
        <SplitBody chapter={chapter} tone={tone} reverse={index % 2 === 1} />
      ) : (
        <h2 className="max-w-160 text-section">{chapter.headline}</h2>
      )}
    </section>
  );
};

export default ChapterCard;
