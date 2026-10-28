import { useEffect, useId, useRef, useState } from "react";
import pastriesCaseStudy from "@/data/caseStudies/pastries";
import Button from "@/components/shared/Button";
import Phone from "@/components/mockups/Phone";
import Lightbox from "@/components/shared/Lightbox";

const { wholePage } = pastriesCaseStudy;
const { desktop, mobile } = wholePage;

type Page = typeof desktop;

// The ask at the end of the menu: each page opens as its Figma prototype, to scroll through
const WholePage = () => {
  const headingId = useId();
  const boxRef = useRef<HTMLDivElement>(null);
  const [viewing, setViewing] = useState<Page | null>(null);
  // Figma takes a few seconds, so both prototypes start loading as the box nears the screen (on click with data saver on)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const box = boxRef.current;
    const { connection } = navigator as Navigator & {
      connection?: { saveData?: boolean };
    };
    if (!box || connection?.saveData) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoading(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100% 0px" },
    );
    observer.observe(box);
    return () => observer.disconnect();
  }, []);

  const open = (page: Page) => {
    setLoading(true);
    setViewing(page);
  };

  const frame = (page: Page) => (
    <iframe
      src={page.prototype}
      title={`Pastries ${page.label.toLowerCase()}, a Figma prototype`}
      allowFullScreen
      className="size-full border-0 bg-paper"
    />
  );

  return (
    <section aria-labelledby={headingId} className="px-page pb-20 lg:pb-35">
      <div
        ref={boxRef}
        className="mx-auto flex max-w-content flex-col gap-8 rounded-4xl bg-pastries-pink px-6 py-10 md:px-18 md:py-16 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="flex flex-col gap-4">
          <h2 id={headingId} className="text-section font-bold">
            {wholePage.headline}
          </h2>
          <p className="text-pastries-body">{wholePage.body}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:shrink-0">
          <Button
            onClick={() => open(desktop)}
            arrow
            className="bg-pastries-green hover:bg-pastries-green/90"
          >
            {desktop.label}
          </Button>
          <Button
            onClick={() => open(mobile)}
            variant="light"
            className="text-pastries-green ring-1 ring-pastries-green ring-inset"
          >
            {mobile.label}
          </Button>
        </div>
      </div>

      {/* Both stay mounted once loading, so switching and reopening don't load them again */}
      <Lightbox
        open={viewing !== null}
        title={viewing?.label ?? ""}
        onClose={() => setViewing(null)}
        className="h-full max-w-content"
      >
        {loading && (
          <>
            <div
              hidden={viewing !== desktop}
              className="min-h-0 flex-1 overflow-hidden rounded-card"
            >
              {frame(desktop)}
            </div>
            <div
              hidden={viewing !== mobile}
              className="flex min-h-0 flex-1 justify-center"
            >
              <Phone className="h-full">{frame(mobile)}</Phone>
            </div>
          </>
        )}
      </Lightbox>
    </section>
  );
};

export default WholePage;
