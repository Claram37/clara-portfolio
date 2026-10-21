import { useEffect, type RefObject } from "react";

// Hides each [data-reveal] element that starts below the screen until it scrolls in (the reveal-* utilities animate it)
const useReveal = (root: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const element = root.current;
    if (!element || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const target = entry.target as HTMLElement;
          target.dataset.reveal = "shown";
          observer.unobserve(target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    element.querySelectorAll<HTMLElement>("[data-reveal]").forEach((item) => {
      if (item.getBoundingClientRect().top < innerHeight) return;
      item.dataset.reveal = "waiting";
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [root]);
};

export default useReveal;
