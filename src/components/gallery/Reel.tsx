import { useRef } from "react";
import type { GalleryPost } from "@/data/projects/types";

interface ReelProps {
  post: GalleryPost;
  onOpen: () => void;
}

// A reel as its 9:16 cover, which plays on hover or keyboard focus, unless the reader prefers less motion
const Reel = ({ post, onOpen }: ReelProps) => {
  const { title, brand, slides, reel } = post;
  const video = useRef<HTMLVideoElement>(null);
  const meta = `${brand} · Reel · ${reel?.length}`;

  const play = () => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.current?.play().catch(() => {});
  };
  const pause = () => video.current?.pause();

  return (
    <button
      type="button"
      aria-haspopup="dialog"
      aria-label={`${title}, ${meta}`}
      onClick={() => {
        pause();
        onOpen();
      }}
      onPointerEnter={play}
      onPointerLeave={pause}
      onFocus={(event) => event.currentTarget.matches(":focus-visible") && play()}
      onBlur={pause}
      className="group flex w-full flex-col items-center gap-4 rounded-card focus-ring"
    >
      <span className="relative block aspect-9/16 w-full overflow-hidden rounded-card bg-paper shadow-gallery-card ring-1 ring-ink/8">
        <img
          src={slides[0].src}
          alt=""
          loading="lazy"
          decoding="async"
          className="size-full object-cover"
        />
        <video
          ref={video}
          src={reel?.video}
          poster={slides[0].src}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
        />
      </span>
      <span className="text-base text-muted-foreground">{meta}</span>
    </button>
  );
};

export default Reel;
