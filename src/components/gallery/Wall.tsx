import { useState } from "react";
import { Play } from "lucide-react";
import Button from "@/components/shared/Button";
import gallery from "@/data/gallery";
import { cn } from "@/lib/utils";
import PostView from "./PostView";

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
  const [open, setOpen] = useState<{ post: number; slide: number } | null>(
    null,
  );

  return (
    <section aria-label="Every slide and reel frame" className="relative">
      {/* Tabbing into the wall unfolds it, so no tile is hidden under the fade */}
      <ul
        onKeyUp={(event) => event.key === "Tab" && setWhole(true)}
        className={cn(
          "columns-2 gap-1 sm:columns-3 md:columns-4 lg:columns-6 xl:columns-8",
          !whole && "max-h-225 overflow-hidden",
        )}
      >
        {tiles.map(({ post, slide }) => {
          const { title, reel, slides } = posts[post];

          return (
            <li key={`${post}-${slide}`} className="mb-1 break-inside-avoid">
              <button
                type="button"
                aria-label={`${title} (${reel ? `reel, ${reel.length}` : `slide ${slide + 1} of ${slides.length}`})`}
                onClick={() => setOpen({ post, slide })}
                className="relative block w-full focus-ring focus-visible:z-10"
              >
                <img
                  src={slides[slide].thumb}
                  alt=""
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
              </button>
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

      <PostView
        post={open && posts[open.post]}
        slide={open?.slide ?? 0}
        onStep={(slide) => setOpen((current) => current && { ...current, slide })}
        onClose={() => setOpen(null)}
      />
    </section>
  );
};

export default Wall;
