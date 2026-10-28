import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Eyebrow from "@/components/shared/Eyebrow";
import gallery from "@/data/gallery";
import type { GalleryPost } from "@/data/projects/types";
import Dealt from "./Dealt";
import Deck from "./Deck";
import PostView from "./PostView";
import Reel from "./Reel";

const { posts, reels } = gallery;
const carousels = posts.filter((post) => !post.reel);
const reelPosts = posts.filter((post) => post.reel);

// The cards glide between the deck and the table (a view transition), unless the reader prefers less motion
const transition = (update: () => void) => {
  if (
    !("startViewTransition" in document) ||
    matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    update();
    return;
  }
  document.startViewTransition(update);
};

// Every post as a deck on a table. A carousel deals out onto it; a reel opens playing
const Table = () => {
  const [dealt, setDealt] = useState<GalleryPost | null>(null);
  const [named, setNamed] = useState<GalleryPost | null>(null); // the deck last dealt, whose cards glide
  const [open, setOpen] = useState<{ post: GalleryPost; slide: number } | null>(
    null,
  );
  const table = useRef<HTMLElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const decks = useRef(new Map<string, HTMLButtonElement>());

  const deal = (post: GalleryPost) => {
    flushSync(() => setNamed(post));
    transition(() => {
      flushSync(() => setDealt(post));
      if (table.current && table.current.getBoundingClientRect().top < 0) {
        table.current.scrollIntoView();
      }
      heading.current?.focus({ preventScroll: true });
    });
  };

  const gather = () => {
    const title = dealt?.title ?? "";
    transition(() => {
      flushSync(() => setDealt(null));
      const deck = decks.current.get(title);
      deck?.scrollIntoView({ block: "nearest" });
      deck?.focus({ preventScroll: true });
    });
  };

  // Esc gathers the dealt deck, unless a slide is open over it
  useEffect(() => {
    if (!dealt || open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") gather();
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [dealt, open]);

  return (
    <section
      ref={table}
      aria-label="Posts"
      className="overflow-x-clip bg-surface px-page pt-12 pb-16 lg:pt-18 lg:pb-22"
    >
      <div className="mx-auto max-w-content">
        {dealt ? (
          <Dealt
            post={dealt}
            headingRef={heading}
            onGather={gather}
            onOpen={(slide) => setOpen({ post: dealt, slide })}
          />
        ) : (
          <>
            <ul className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {carousels.map((post) => (
                <li key={post.title}>
                  <Deck
                    ref={(node) => {
                      if (node) decks.current.set(post.title, node);
                    }}
                    post={post}
                    named={post === named}
                    onDeal={() => deal(post)}
                  />
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-gallery-line pt-12">
              <Eyebrow className="text-dproz">{reels}</Eyebrow>
            </div>
            <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reelPosts.map((post) => (
                <li key={post.title}>
                  <Reel post={post} onOpen={() => setOpen({ post, slide: 0 })} />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <PostView
        post={open && open.post}
        slide={open?.slide ?? 0}
        onStep={(slide) => setOpen((current) => current && { ...current, slide })}
        onClose={() => setOpen(null)}
      />
    </section>
  );
};

export default Table;
