import type { CSSProperties, Ref } from "react";
import { Layers } from "lucide-react";
import Button from "@/components/shared/Button";
import type { GalleryPost } from "@/data/projects/types";

interface DealtProps {
  post: GalleryPost;
  headingRef: Ref<HTMLHeadingElement>;
  onGather: () => void;
  onOpen: (slide: number) => void;
}

// Each dealt card's slight tilt, from the design
const tilts = [1.5, -1, 0.5, -2, -1.5, 2, -0.5, 1];

// A carousel dealt out on the table, its slides in order. Each opens full size
const Dealt = ({ post, headingRef, onGather, onOpen }: DealtProps) => {
  const { title, brand, slides } = post;

  return (
    <div className="flex flex-col gap-9">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <h2
          ref={headingRef}
          tabIndex={-1}
          className="font-sans text-base font-normal text-muted-foreground outline-none"
        >
          <span className="sr-only">{title}, </span>
          {brand} · Carousel · {slides.length} slides
        </h2>
        <Button variant="outline" size="sm" onClick={onGather}>
          <Layers className="size-4" aria-hidden="true" />
          Gather the deck
        </Button>
      </div>

      <ul className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 md:gap-x-6 md:gap-y-10 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-18">
        {/* The first card paints on top, as it did in the deck, so it stays on top as they're gathered */}
        {slides.map(({ card, alt }, index) => (
          <li key={card} style={{ zIndex: slides.length - index }} className="relative">
            <button
              type="button"
              aria-haspopup="dialog"
              onClick={() => onOpen(index)}
              style={
                {
                  "--r": `${tilts[index % tilts.length]}deg`,
                  viewTransitionName: `deal-${index + 1}`,
                } as CSSProperties
              }
              className="block w-full rotate-(--r) overflow-hidden rounded-lg bg-paper shadow-gallery-card ring-1 ring-ink/8 transition hover:-translate-y-1 hover:rotate-0 focus-ring motion-reduce:transition-none"
            >
              <img
                src={card}
                alt={alt}
                decoding="async"
                className="aspect-4/5 w-full object-cover"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dealt;
