import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import Eyebrow from "@/components/shared/Eyebrow";
import prideCaseStudy from "@/data/caseStudies/pride";
import Waveform from "./Waveform";

const { set, tracks } = prideCaseStudy;

interface PlayerProps {
  headingId: string;
  current: number;
  number: string;
  playing: boolean;
  onPlay: (index: number) => void;
  onToggle: () => void;
}

const Player = ({
  headingId,
  current,
  number,
  playing,
  onPlay,
  onToggle,
}: PlayerProps) => {
  const track = tracks[current];
  const step = (by: number) =>
    onPlay((current + by + tracks.length) % tracks.length);

  return (
    <div className="mx-auto flex max-w-content flex-col gap-10 rounded-4xl border border-pride-card-line bg-pride-card p-6 md:p-10 xl:p-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-12">
        <div className="flex max-w-160 flex-col gap-3">
          <Eyebrow className="text-pride-pink">{set.eyebrow}</Eyebrow>
          <h2 id={headingId} className="text-section">
            {set.headline}
          </h2>
        </div>
        <p className="max-w-95 text-base text-on-dark-muted">{set.body}</p>
      </div>

      <Waveform current={current} playing={playing} onPlay={onPlay} />

      <div className="flex items-center gap-4 border-t border-pride-card-line pt-6 md:gap-6">
        <img
          src={track.screen.src}
          alt=""
          decoding="async"
          className="size-14 shrink-0 rounded-lg object-cover max-sm:hidden"
        />
        <div aria-live="polite" className="min-w-0 flex-1">
          <p className="text-xs text-on-dark-muted">Now playing · {number}</p>
          <p className="truncate font-display text-base font-bold md:text-xl">
            {track.title}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2 md:gap-4">
          <button
            type="button"
            aria-label="Previous track"
            onClick={() => step(-1)}
            className="rounded-full p-2 text-pride-soft transition-colors hover:text-paper focus-ring"
          >
            <SkipBack className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={playing ? "Pause" : "Play"}
            onClick={onToggle}
            className="flex size-11 items-center justify-center rounded-full bg-paper text-pride transition-colors hover:bg-paper/90 focus-ring"
          >
            {playing ? (
              <Pause className="size-4" aria-hidden="true" />
            ) : (
              <Play className="size-4" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            aria-label="Next track"
            onClick={() => step(1)}
            className="rounded-full p-2 text-pride-soft transition-colors hover:text-paper focus-ring"
          >
            <SkipForward className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
