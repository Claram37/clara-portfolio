import { useEffect, useState, type RefObject } from "react";

const clamp = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max);

const useScrub = (track: RefObject<HTMLElement | null>, count: number) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = 0;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const update = () => {
      frame = 0;
      const section = track.current;
      if (!section) return;
      const { top } = section.getBoundingClientRect();
      const x = -top / innerHeight;
      setActive(clamp(Math.round(x), 0, count - 1));
      if (reduce) return;

      const scenes = section.querySelectorAll<HTMLElement>("[data-scene]");
      scenes.forEach((scene, i) => {
        const t = clamp((x - (i - 0.5)) * 2, 0, 1);
        scene.style.setProperty("--t", String(t));
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
    };
  }, [track, count]);

  return active;
};
export default useScrub;
