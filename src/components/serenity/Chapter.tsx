import { useId } from "react";
import type { SerenityChapter } from "@/data/projects/types";
import Phone from "@/components/mockups/Phone";
import { cn } from "@/lib/utils";

interface ChapterProps {
  chapter: SerenityChapter;
  id?: string;
  dusk: boolean; // the page is still light enough for ink text
}

// Each phone sits a step lower than the one before
const drops = ["", "mt-8 md:mt-20", "mt-16 md:mt-40"];

// One of the app's own lines, then the screens it comes from
const Chapter = ({ chapter, id, dusk }: ChapterProps) => {
  const headingId = useId();
  const { line, screens } = chapter;

  return (
    <section id={id} aria-labelledby={headingId} className="px-page">
      <h2
        id={headingId}
        className={cn(
          "mx-auto max-w-225 pt-20 pb-10 text-center text-chapter text-balance md:pt-32 md:pb-14",
          dusk ? "text-serenity-ink lg:pt-30" : "text-paper lg:pt-40",
        )}
      >
        “{line}”
      </h2>
      <div className="flex justify-center gap-3 md:gap-12">
        {screens.map((screen, index) => (
          <Phone
            key={screen.src}
            src={screen.src}
            alt={screen.alt}
            className={cn("w-full max-w-70", drops[index])}
          />
        ))}
      </div>
    </section>
  );
};

export default Chapter;
