import { Maximize2 } from "lucide-react";
import type { MenuItem } from "@/data/projects/types";
import Phone from "@/components/mockups/Phone";
import { cn } from "@/lib/utils";

interface MenuCardProps {
  item: MenuItem;
  name: string; // its view transition name, so it glides when the chips reflow the grid
  onOpen: () => void;
}

const MenuCard = ({ item, name, onOpen }: MenuCardProps) => {
  const { title, format, category, screen, crop } = item;

  return (
    <li
      style={{ viewTransitionName: name }}
      className="group relative mb-6 break-inside-avoid overflow-hidden rounded-card border border-pastries-line bg-paper"
    >
      {format === "Mobile" ? (
        <div className="relative aspect-20/21 overflow-hidden bg-pastries-stage">
          <Phone
            src={screen.src}
            alt={screen.alt}
            className="absolute top-[8.57%] left-[23.75%] w-[52.5%]"
          />
        </div>
      ) : (
        <img
          src={screen.src}
          alt={screen.alt}
          loading="lazy"
          decoding="async"
          className={cn("w-full object-cover", crop)}
        />
      )}

      <div className="flex items-center justify-between gap-4 p-5">
        <div className="flex flex-col items-start gap-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="rounded-full bg-pastries-tag px-3 py-1 text-xs text-pastries-muted">
            {category ?? format}
          </span>
        </div>
        {/* Stretched over the card, so a click anywhere on it opens the screen */}
        <button
          type="button"
          aria-haspopup="dialog"
          aria-label={`View ${title} full size`}
          onClick={onOpen}
          className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-pastries-terracotta text-paper transition-colors group-hover:bg-pastries-terracotta/85 focus-ring after:absolute after:inset-0"
        >
          <Maximize2 className="size-5" aria-hidden="true" />
        </button>
      </div>
    </li>
  );
};

export default MenuCard;
