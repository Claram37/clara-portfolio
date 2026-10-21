import { useId } from "react";
import { ChevronDown, ChevronUp, Play } from "lucide-react";
import type { Track as TrackData } from "@/data/projects/types";
import { cn } from "@/lib/utils";
import Equaliser from "./Equaliser";

interface TrackProps {
  track: TrackData;
  number: string;
  current: boolean;
  open: boolean;
  playing: boolean;
  onPlay: () => void;
}

const Track = ({
  track,
  number,
  current,
  open,
  playing,
  onPlay,
}: TrackProps) => {
  const panelId = useId();
  const Icon = !current ? Play : open ? ChevronUp : ChevronDown;

  return (
    <li className="border-b border-pride-line py-6">
      <div className="group relative flex items-center gap-4 md:gap-7">
        <span className="w-6 shrink-0 md:w-10">
          {current ? (
            <Equaliser playing={playing} />
          ) : (
            <span className="font-semibold text-pride-dim">{number}</span>
          )}
        </span>
        <img
          src={track.screen.src}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-12 w-18 shrink-0 rounded-lg object-cover max-sm:hidden"
        />
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <h3
            className={cn(
              "text-xl font-bold transition-colors md:text-2xl",
              current ? "text-pride-pink" : "group-hover:text-pride-pink",
            )}
          >
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={onPlay}
              className="text-left focus-ring after:absolute after:inset-0"
            >
              {track.title}
            </button>
          </h3>
          <p className="text-base text-on-dark-muted">{track.job}</p>
        </div>
        <span className="shrink-0 rounded-full bg-pride-chip px-4 py-2 text-xs text-pride-soft max-md:hidden">
          {track.tag}
        </span>
        <Icon
          className="size-5 shrink-0 text-pride-soft transition-colors group-hover:text-paper"
          aria-hidden="true"
        />
      </div>

      <div id={panelId} hidden={!open} className="pt-6">
        <img
          src={track.screen.src}
          alt={track.screen.alt}
          loading="lazy"
          decoding="async"
          className="w-full rounded-card animate-in duration-500 fade-in slide-in-from-bottom-4 motion-reduce:animate-none"
        />
      </div>
    </li>
  );
};

export default Track;
