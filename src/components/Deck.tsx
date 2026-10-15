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

  return (
    <div className="mx-auto flex max-w-360 flex-col gap-7 px-4 pb-35 md:px-6 xl:px-12">
      <div ref={deck} className="flex flex-col gap-7">
        {chapters.filter(stacks).map(card)}
      </div>
      {chapters.filter((chapter) => !stacks(chapter)).map(card)}
    </div>
  );
};

export default Deck;
