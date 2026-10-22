import { useId, type MouseEvent } from "react";
import { CirclePlay } from "lucide-react";
import serenityCaseStudy from "@/data/caseStudies/serenity";

const { headline, tags, cta, cover } = serenityCaseStudy.featured;

interface FeaturedProps {
  story: string; // the first chapter's id
}

// The project as the app's featured session: its cover render, with Play leading into the story
const Featured = ({ story }: FeaturedProps) => {
  const headingId = useId();

  // Glides down to the first chapter, which fades in as it arrives. Jumps for reduced motion
  const play = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById(story)?.scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };

  return (
    <section aria-labelledby={headingId} className="px-page">
      <div className="focus-light relative mx-auto flex aspect-4/5 max-w-content flex-col items-center justify-end gap-4 overflow-hidden rounded-4xl border border-serenity-glow px-5 pb-8 text-center text-paper shadow-serenity sm:aspect-4/3 md:pb-12 lg:aspect-39/20">
        <img
          src={cover.src}
          alt={cover.alt}
          decoding="async"
          className="absolute inset-0 size-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-3/5 bg-linear-to-b from-transparent to-serenity-night/93 to-75%"
        />

        <h2 id={headingId} className="relative text-section">
          {headline}
        </h2>
        <ul className="relative flex flex-wrap justify-center gap-x-3 text-base text-serenity-soft md:text-xl">
          {tags.map((tag, index) => (
            <li key={tag} className="flex items-center gap-3">
              {index > 0 && (
                <span aria-hidden="true" className="size-1 rounded-full bg-current" />
              )}
              {tag}
            </li>
          ))}
        </ul>
        <a
          href={`#${story}`}
          onClick={play}
          className="focus-ring relative mt-2 flex h-16 w-full max-w-130 items-center justify-center gap-3 rounded-2xl bg-serenity-violet text-xl font-semibold transition-colors hover:bg-serenity-violet/85"
        >
          {cta}
          <CirclePlay className="size-6" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default Featured;
