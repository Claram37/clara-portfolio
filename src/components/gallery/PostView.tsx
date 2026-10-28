import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Lightbox from "@/components/shared/Lightbox";
import type { GalleryPost } from "@/data/projects/types";

interface PostViewProps {
  post: GalleryPost | null;
  slide: number;
  onStep: (slide: number) => void;
  onClose: () => void;
}

const stepButton =
  "flex size-11 items-center justify-center rounded-full bg-paper text-ink transition hover:bg-paper/90 focus-ring disabled:opacity-40";

// A post full size, from the tile clicked: a carousel a slide at a time, or a reel playing from that frame
const PostView = ({ post, slide, onStep, onClose }: PostViewProps) => {
  const last = (post?.slides.length ?? 1) - 1;
  const carousel = post !== null && !post.reel;

  // The arrow keys step through a carousel
  useEffect(() => {
    if (!carousel) return;
    const step = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && slide > 0) onStep(slide - 1);
      if (event.key === "ArrowRight" && slide < last) onStep(slide + 1);
    };
    addEventListener("keydown", step);
    return () => removeEventListener("keydown", step);
  }, [carousel, slide, last, onStep]);

  return (
    <Lightbox
      open={post !== null}
      title={post?.title ?? ""}
      onClose={onClose}
      className={post?.reel ? "max-w-reel" : "max-w-post"}
    >
      {post?.reel && (
        <video
          src={`${post.reel.video}#t=${post.reel.frames[slide]}`}
          poster={post.slides[slide].src}
          controls
          autoPlay
          playsInline
          className="aspect-9/16 w-full rounded-card bg-ink"
        />
      )}

      {carousel && (
        <figure className="flex flex-col gap-6">
          {/* Every slide loads with the post, so stepping is instant */}
          {post.slides.map(({ src, alt }, index) => (
            <img
              key={src}
              src={src}
              alt={alt}
              hidden={index !== slide}
              decoding="async"
              className="aspect-4/5 w-full rounded-card bg-surface object-cover"
            />
          ))}
          <figcaption className="flex items-center justify-between gap-4">
            <button
              type="button"
              aria-label="Previous slide"
              disabled={slide === 0}
              onClick={() => onStep(slide - 1)}
              className={stepButton}
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <p aria-live="polite" className="text-base text-paper">
              {slide + 1} / {post.slides.length}
            </p>
            <button
              type="button"
              aria-label="Next slide"
              disabled={slide === last}
              onClick={() => onStep(slide + 1)}
              className={stepButton}
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </figcaption>
        </figure>
      )}
    </Lightbox>
  );
};

export default PostView;
