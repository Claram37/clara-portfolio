import type { CSSProperties, Ref } from "react";
import type { GalleryPost } from "@/data/projects/types";

interface DeckProps {
  post: GalleryPost;
  named: boolean; // its cards carry view transition names, so they glide when it's dealt out or gathered
  onDeal: () => void;
  ref?: Ref<HTMLButtonElement>;
}

// Where each card rests in the stack: x and y in % of the card, then degrees. The first four are the design's
const rest = [
  [0, 0, 0],
  [1.7, -0.8, -3],
  [-3.3, 1.2, 5],
  [3.8, 2.3, -7],
  [-1.9, 2.8, 3],
  [2.6, -1.4, -5],
  [-3.8, 0.6, 7],
  [1.2, 3, -2],
];

// A carousel as a deck of cards with its cover on top, a card per slide, so its thickness shows its length
const Deck = ({ post, named, onDeal, ref }: DeckProps) => {
  const { title, brand, slides } = post;
  const meta = `${brand} · Carousel · ${slides.length} slides`;

  return (
    <button
      ref={ref}
      type="button"
      aria-label={`${title}, ${meta}`}
      onClick={onDeal}
      className="deck group relative flex w-full flex-col items-center gap-6 rounded-card focus-ring hover:z-10 focus-visible:z-10"
    >
      {/* Square, and the cards 70% of it, so a fanned deck just clears its neighbours */}
      <span className="grid aspect-square w-full place-items-center">
        {slides.map(({ card }, index) => {
          const [x, y, r] = rest[index % rest.length];
          // Fanned out from the cover on the left, the outer cards tilted most and a little lower
          const t = index / (slides.length - 1);
          return (
            <span
              key={card}
              data-card
              style={
                {
                  "--x": `${x}%`,
                  "--y": `${y}%`,
                  "--r": `${r}deg`,
                  "--fx": `${-33 + 66 * t}%`,
                  "--fy": `${2.5 * (2 * t - 1) ** 2}%`,
                  "--fr": `${-11 + 22 * t}deg`,
                  zIndex: slides.length - index,
                  viewTransitionName: named ? `deal-${index + 1}` : undefined,
                } as CSSProperties
              }
              className="relative col-start-1 row-start-1 aspect-4/5 w-7/10 overflow-hidden rounded-lg bg-paper shadow-gallery-card ring-1 ring-ink/8"
            >
              <img
                src={card}
                alt=""
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
            </span>
          );
        })}
      </span>
      <span className="text-base text-muted-foreground">{meta}</span>
    </button>
  );
};

export default Deck;
