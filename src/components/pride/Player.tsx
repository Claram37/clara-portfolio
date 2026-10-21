import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import prideCaseStudy from "@/data/caseStudies/pride";
import Head from "./Head";
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
      <Head headingId={headingId} copy={set} />

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
