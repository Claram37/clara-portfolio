import { useState } from "react";
import prideCaseStudy from "@/data/caseStudies/pride";
import Track from "./Track";

const { tracks } = prideCaseStudy;

const Tracklist = () => {
  // The playing track, and whether its panel is open: closing it doesn't stop the music
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(true);
  const playing = true;

  const play = (index: number) => {
    setCurrent(index);
    setOpen(true);
  };

  return (
    <section className="px-page pb-20 lg:pb-30">
      <ol className="mx-auto max-w-content">
        {tracks.map((track, index) => (
          <Track
            key={track.title}
            track={track}
            number={String(index + 1).padStart(2, "0")}
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
