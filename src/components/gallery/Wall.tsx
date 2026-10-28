import { useRef, useState, type PointerEvent } from "react";
import { Play } from "lucide-react";
import Button from "@/components/shared/Button";
import gallery from "@/data/gallery";
import { cn } from "@/lib/utils";
import PostView from "./PostView";

const { posts } = gallery;

// The same shuffle on every build, so the pre-rendered page matches. Seed 448 keeps a post's tiles apart
const shuffle = <T,>(items: T[]) => {
  const shuffled = [...items];
  let seed = 448;
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
  const [lit, setLit] = useState<number | null>(null);
  const [pointing, setPointing] = useState(false);
  const labelRef = useRef<HTMLDivElement>(null);

  // The label follows the mouse, flipping to its left near the right edge
  const follow = (event: PointerEvent) => {
    const label = labelRef.current;
    if (!label) return;
    const x =
      event.clientX > window.innerWidth - 360
        ? `calc(${event.clientX - 16}px - 100%)`
        : `${event.clientX + 16}px`;
    label.style.translate = `${x} ${event.clientY + 16}px`;
  };

  return (
    <section aria-label="Every slide and reel frame">
      {/* Clipped here, not on the list: a list with a height would push tiles into extra columns */}
      <div className={cn("relative", !whole && "max-h-225 overflow-hidden")}>
        {/* Tabbing into the wall unfolds it, so no tile is hidden under the fade */}
        <ul
          onKeyUp={(event) => event.key === "Tab" && setWhole(true)}
          onPointerMove={follow}
          className="columns-2 gap-1 sm:columns-3 md:columns-4 lg:columns-6 xl:columns-8"
        >
          {tiles.map(({ post, slide }) => {
            const { title, reel, slides } = posts[post];

            return (
              <li key={`${post}-${slide}`} className="mb-1 break-inside-avoid">
                <button
                  type="button"
                  aria-label={`${title} (${reel ? `reel, ${reel.length}` : `slide ${slide + 1} of ${slides.length}`})`}
                  onClick={() => setOpen({ post, slide })}
                  onPointerEnter={(event) => {
                    if (event.pointerType !== "mouse") return;
                    setLit(post);
                    setPointing(true);
                  }}
                  onPointerLeave={() => {
                    setLit(null);
                    setPointing(false);
                  }}
                  onFocus={(event) =>
                    event.currentTarget.matches(":focus-visible") &&
                    setLit(post)
                  }
                  onBlur={() => setLit(null)}
                  className={cn(
                    "relative block w-full transition-opacity duration-300 focus-ring focus-visible:z-10",
                    lit === post &&
                      "after:absolute after:inset-0 after:ring-3 after:ring-dproz after:ring-inset",
                    lit !== null && lit !== post && "opacity-16",
                  )}
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
      </div>

      <div
        ref={labelRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-20 flex max-w-80 flex-col gap-1 rounded-lg bg-ink px-4 py-3 shadow-gallery-label",
          !(pointing && lit !== null) && "invisible",
        )}
      >
        {lit !== null && (
          <>
            <span className="font-display text-base font-semibold text-paper">
              {posts[lit].title}
            </span>
            <span className="text-xs text-paper/70">
              {posts[lit].reel
                ? `${posts[lit].reel.length} reel · click to play`
                : `${posts[lit].slides.length} slides · click to open from here`}
            </span>
          </>
        )}
      </div>

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
