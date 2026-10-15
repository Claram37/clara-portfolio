import { useEffect, type RefObject } from "react";

const useStack = (deck: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const cards = [...(deck.current?.children ?? [])] as HTMLElement[];
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;
        const cover = 1 - next.getBoundingClientRect().top / innerHeight;
        card.style.setProperty(
          "--cover",
          String(Math.min(Math.max(cover, 0), 1)),
        );
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
  }, [deck]);
};

export default useStack;
