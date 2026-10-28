import { useState } from "react";
import { Play } from "lucide-react";
import Button from "@/components/shared/Button";
import gallery from "@/data/gallery";
import { cn } from "@/lib/utils";

const { posts } = gallery;

// The same shuffle on every build, so the pre-rendered page matches. Seed 381 keeps a post's tiles apart
const shuffle = <T,>(items: T[]) => {
  const shuffled = [...items];
  let seed = 381;
  for (let i = shuffled.length - 1; i > 0; i--) {
    seed = (seed * 16807) % 2147483647;
    const j = seed % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const tiles = shuffle(
  posts.flatMap((post, p) =>
    post.slides.map((slide, s) => ({ post: p, slide: s })),
  ),
);

const Wall = () => {
  const [whole, setWhole] = useState(false);

  return (
    <section aria-label="Every slide and reel frame" className="relative">
      <ul
        className={cn(
          "columns-2 gap-1 sm:columns-3 md:columns-4 lg:columns-6 xl:columns-8",
          !whole && "max-h-225 overflow-hidden",
        )}
      >
        {tiles.map(({ post, slide }) => {
          const { reel, slides } = posts[post];

          return (
            <li
              key={`${post}-${slide}`}
              className="relative mb-1 break-inside-avoid"
            >
              <img
                src={slides[slide].thumb}
                alt={slides[slide].alt}
                loading="lazy"
                decoding="async"
                className={cn(
                  "w-full object-cover",
                  reel ? "aspect-9/16" : "aspect-4/5",
                )}
              />
              {reel && (
                <span className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-full bg-ink/50">
                  <Play
                    className="size-3 fill-paper text-paper"
                    aria-hidden="true"
                  />
                </span>
              )}
            </li>
          );
        })}
      </ul>

      {!whole && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-50 items-end justify-center bg-linear-to-b from-paper/0 to-paper to-85% pb-5">
          <Button
            onClick={() => setWhole(true)}
            className="pointer-events-auto"
          >
            Show the whole wall
          </Button>
        </div>
      )}
    </section>
  );
};

export default Wall;
