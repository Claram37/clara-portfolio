import { useRef, useState, type PointerEvent } from "react";
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
      <div className="relative">
        {/* Tabbing into the wall unfolds it, so no tile is hidden under the fade */}
        <ul
          onKeyUp={(event) => event.key === "Tab" && setWhole(true)}
          onPointerMove={follow}
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

      {/* A chip lights up its post from the other direction, and opens it from the first slide */}
      <div className="px-page pt-7 pb-30">
        <div className="mx-auto flex max-w-content flex-wrap items-center gap-3">
          <p className="text-xs text-muted-foreground">Light up a post</p>
          {posts.map(({ title, reel, slides }, post) => (
            <button
              key={title}
              type="button"
              onPointerEnter={() => setLit(post)}
              onPointerLeave={() => setLit(null)}
              onFocus={() => setLit(post)}
              onBlur={() => setLit(null)}
              onClick={() => setOpen({ post, slide: 0 })}
              className={cn(
                "flex gap-2 rounded-full border px-4 py-2 text-xs transition-colors focus-ring",
                lit === post
                  ? "border-ink bg-ink text-paper"
                  : "border-border bg-paper text-ink",
              )}
            >
              <span className="font-semibold">{title}</span>
              <span
                className={
                  lit === post ? "text-paper/60" : "text-muted-foreground"
                }
              >
                {reel ? reel.length : `${slides.length} slides`}
              </span>
            </button>
          ))}
        </div>
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
                ? `${posts[lit].reel.length} reel · click to play from here`
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
