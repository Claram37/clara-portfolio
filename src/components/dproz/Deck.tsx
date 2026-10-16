import { useRef } from "react";
import type { Chapter } from "@/data/projects/types";
import useStack from "@/hooks/useStack";
import ChapterCard from "./ChapterCard";

interface DeckProps {
  chapters: Chapter[];
}

const stacks = ({ layout }: Chapter) =>
  layout === "split" || layout === "screens";

const Deck = ({ chapters }: DeckProps) => {
  const deck = useRef<HTMLDivElement>(null);
  useStack(deck);

  const card = (chapter: Chapter) => (
    <ChapterCard
      key={chapter.label}
      chapter={chapter}
      index={chapters.indexOf(chapter)}
      total={chapters.length}
      stacked={stacks(chapter)}
    />
  );

  const stacked = chapters.filter(stacks);

  return (
    <div className="relative mx-auto flex max-w-360 flex-col gap-7 px-4 pb-35 md:px-6 xl:px-12">
      <div ref={deck} className="flex flex-col gap-7">
        {stacked.map(card)}
      </div>
      {chapters.filter((chapter) => !stacks(chapter)).map(card)}

      <div
        data-snap
        className="pointer-events-none absolute inset-x-0 top-0 hidden flex-col gap-7 xl:flex"
        aria-hidden="true"
      >
        {stacked.map((chapter) => (
          <div
            key={chapter.label}
            className="h-deck-card shrink-0 snap-start scroll-mt-6"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Deck;
