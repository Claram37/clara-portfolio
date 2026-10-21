import prideCaseStudy from "@/data/caseStudies/pride";
import { cn } from "@/lib/utils";

const { tracks } = prideCaseStudy;

// The design's bars (Pride Idea 05's waveform) as a share of the wave's height, 16 per track
const bars = [
  [34, 50, 53, 73, 77, 91, 94, 92, 95, 79, 79, 57, 57, 40, 41, 34],
  [36, 35, 38, 40, 41, 47, 44, 52, 43, 52, 44, 49, 43, 44, 42, 42],
  [44, 42, 50, 45, 57, 50, 64, 57, 65, 60, 60, 58, 53, 54, 46, 51],
  [44, 55, 50, 63, 61, 71, 71, 72, 73, 65, 67, 53, 56, 43, 50, 45],
  [55, 59, 72, 82, 90, 97, 87, 100, 82, 93, 66, 66, 49, 45, 38, 38],
  [42, 48, 63, 65, 86, 74, 92, 73, 74, 56, 48, 37, 30, 25, 21, 21],
];

// Fewer, wider bars on smaller screens: every 4th on phones, every 2nd on tablets
const density = (bar: number) =>
  bar % 4 === 0 ? "" : bar % 2 === 0 ? "max-md:hidden" : "max-lg:hidden";

interface WaveformProps {
  current: number;
  playing: boolean;
  onPlay: (index: number) => void;
}

const Waveform = ({ current, playing, onPlay }: WaveformProps) => {
  return (
    <div className="grid grid-cols-6 gap-1">
      {tracks.map((track, index) => (
        <button
          key={track.title}
          type="button"
          aria-pressed={index === current}
          onClick={() => onPlay(index)}
          className="group flex flex-col gap-7 rounded-lg focus-ring max-md:gap-0"
        >
          <span
            aria-hidden="true"
            className="flex h-32 items-center gap-1 md:h-40 xl:h-55"
          >
            {bars[index].map((height, bar) => (
              <span
                key={bar}
                className={cn(
                  "flex-1 rounded-full transition-colors duration-300",
                  index <= current
                    ? "bg-pride-pink"
                    : "bg-pride-bar group-hover:bg-pride-dim",
                  density(bar),
                  playing && "animate-beat",
                )}
                style={{
                  height: `${height}%`,
                  animationDelay: `${-(((index * 16 + bar) * 7) % 12) / 10}s`,
                  transitionDelay: `${bar * 15}ms`,
                }}
              />
            ))}
          </span>
          <span className="flex flex-col items-center gap-1 text-center">
            <span
              className={cn(
                "text-xs font-bold uppercase tracking-eyebrow max-md:sr-only",
                index === current ? "text-pride-pink" : "text-pride-soft",
              )}
            >
              {track.beat}
            </span>
            <span className="text-base text-pride-dim max-lg:sr-only">
              {track.tag}
            </span>
          </span>
        </button>
      ))}
    </div>
  );
};

export default Waveform;
