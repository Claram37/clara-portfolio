import { useEffect, useId, useState } from "react";
import prideCaseStudy from "@/data/caseStudies/pride";
import Player from "./Player";
import Track from "./Track";

const { tracks } = prideCaseStudy;

const number = (index: number) => String(index + 1).padStart(2, "0");

const Tracklist = () => {
  const headingId = useId();
  // The playing track, and whether its panel is open: closing it doesn't stop the music
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(true);
  const [playing, setPlaying] = useState(false);

  // The set starts moving once the page loads, unless the reader prefers less motion (they can still press Play)
  useEffect(() => {
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPlaying(true);
    }
  }, []);

  const play = (index: number) => {
    setCurrent(index);
    setOpen(true);
  };

  return (
    <section aria-labelledby={headingId} className="px-page pb-20 lg:pb-30">
      <Player
        headingId={headingId}
        current={current}
        number={number(current)}
        playing={playing}
        onPlay={play}
        onToggle={() => setPlaying(!playing)}
      />
      <ol className="mx-auto mt-8 max-w-content lg:mt-14">
        {tracks.map((track, index) => (
          <Track
            key={track.title}
            track={track}
            number={number(index)}
            current={index === current}
            open={index === current && open}
            playing={playing}
            onPlay={() => (index === current ? setOpen(!open) : play(index))}
          />
        ))}
      </ol>
    </section>
  );
};

export default Tracklist;
