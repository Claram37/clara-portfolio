import type { Shot } from "@/data/projects/types";

interface LongScreenProps {
  screen: Shot;
  statusBar: string; // a phone screen, whose top 100 of 1688 rows is the status bar
}

// A mobile screen's whole length, scrolling under the status bar, with the home indicator over it
// (black on light, light on dark, like the real one)
const LongScreen = ({ screen, statusBar }: LongScreenProps) => {
  return (
    <div className="relative flex size-full flex-col">
      <img
        src={statusBar}
        alt=""
        className="aspect-39/5 w-full object-cover object-top"
      />
      {/* Dark like the footer, for the sliver the screen stops short of at the end */}
      <div className="no-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-contain bg-ink">
        <img
          src={screen.src}
          alt={screen.alt}
          decoding="async"
          className="w-full"
        />
      </div>
      <span
        aria-hidden="true"
        className="absolute bottom-[1%] left-1/3 h-[0.6%] w-1/3 rounded-full bg-paper mix-blend-difference"
      />
    </div>
  );
};

export default LongScreen;
