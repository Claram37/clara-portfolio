import { useState } from "react";
import { Play } from "lucide-react";
import gallery from "@/data/gallery";
import { cn } from "@/lib/utils";
import PostView from "./PostView";

const { posts } = gallery;

const Posts = () => {
  const [open, setOpen] = useState<{ post: number; slide: number } | null>(
    null,
  );

  return (
    <section aria-label="Posts" className="px-page pb-16 lg:pb-24">
      {/* Columns, like Pastries' menu, so each post keeps its own shape */}
      <ul className="mx-auto max-w-content gap-6 md:columns-2 lg:columns-3">
        {posts.map(({ title, cover, reel, slides }, post) => (
          <li key={title} className="mb-6 break-inside-avoid">
            <button
              type="button"
              aria-haspopup="dialog"
              aria-label={`${title} (${reel ? `reel, ${reel.length}` : `${slides.length} slides`})`}
              onClick={() => setOpen({ post, slide: 0 })}
              className="group relative block w-full overflow-hidden rounded-card focus-ring after:absolute after:inset-0 after:rounded-card after:ring-1 after:ring-ink/8 after:ring-inset"
            >
              <img
                src={cover}
                alt=""
                loading="lazy"
                decoding="async"
                className={cn(
                  "w-full bg-surface object-cover transition-transform duration-500 group-hover:scale-103 motion-reduce:transition-none",
                  reel ? "aspect-9/16" : "aspect-4/5",
                )}
              />
              {/* A carousel's cover shows its own slide counter */}
              {reel && (
                <span className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-ink/50">
                  <Play
                    className="size-4 fill-paper text-paper"
                    aria-hidden="true"
                  />
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>

      <PostView
        post={open && posts[open.post]}
        slide={open?.slide ?? 0}
        onStep={(slide) => setOpen((current) => current && { ...current, slide })}
        onClose={() => setOpen(null)}
      />
    </section>
  );
};

export default Posts;
