import { useId, useState } from "react";
import { flushSync } from "react-dom";
import pastriesCaseStudy from "@/data/caseStudies/pastries";
import type { MenuItem } from "@/data/projects/types";
import { cn } from "@/lib/utils";
import MenuCard from "./MenuCard";

const { menu } = pastriesCaseStudy;

const onMenu = (item: MenuItem, chip: string) =>
  chip === "All" || item.format === chip || item.category === chip;

const Menu = () => {
  const headingId = useId();
  const [chip, setChip] = useState("All");
  const count = menu.items.filter((item) => onMenu(item, chip)).length;

  // The cards glide to their new places (a view transition), unless the reader prefers less motion
  const pick = (next: string) => {
    if (
      !("startViewTransition" in document) ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setChip(next);
      return;
    }
    document.startViewTransition(() => flushSync(() => setChip(next)));
  };

  return (
    <section aria-labelledby={headingId} className="px-page pt-8 pb-16 lg:pb-24">
      <div className="mx-auto max-w-content">
        <h2 id={headingId} className="text-center text-lesson font-bold">
          {menu.headline}
        </h2>
        <div
          role="group"
          aria-label="Filter the screens"
          className="mt-7 flex flex-wrap justify-center gap-3"
        >
          {menu.chips.map((name) => (
            <button
              key={name}
              type="button"
              aria-pressed={name === chip}
              onClick={() => pick(name)}
              className={cn(
                "rounded-full border px-6 py-3 text-base leading-5 transition-colors focus-ring",
                name === chip
                  ? "border-pastries-green bg-pastries-green text-paper"
                  : "border-pastries-chip-line bg-paper text-pastries-muted hover:border-pastries-green hover:text-pastries-green",
              )}
            >
              {name}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="sr-only">
          {count} {count === 1 ? "screen" : "screens"}
        </p>

        {/* Columns, so each card keeps its own height */}
        <ul className="mt-12 gap-6 md:columns-2 lg:columns-3">
          {menu.items.map(
            (item, index) =>
              onMenu(item, chip) && (
                <MenuCard
                  key={item.title}
                  item={item}
                  name={`menu-card-${index}`}
                />
              ),
          )}
        </ul>
      </div>
    </section>
  );
};

export default Menu;
