import { useId, useState } from "react";
import pastriesCaseStudy from "@/data/caseStudies/pastries";
import Button from "@/components/shared/Button";
import Phone from "@/components/mockups/Phone";
import Lightbox from "./Lightbox";

const { wholePage } = pastriesCaseStudy;
const { desktop, mobile } = wholePage;

// The ask at the end of the menu: each page opens as its Figma prototype, to scroll through
const WholePage = () => {
  const headingId = useId();
  const [viewing, setViewing] = useState<typeof desktop | null>(null);

  const frame = viewing && (
    <iframe
      src={viewing.prototype}
      title={`Pastries ${viewing.label.toLowerCase()}, a Figma prototype`}
      allowFullScreen
      className="size-full border-0 bg-paper"
    />
  );

  return (
    <section aria-labelledby={headingId} className="px-page pb-20 lg:pb-35">
      <div className="mx-auto flex max-w-content flex-col gap-8 rounded-4xl bg-pastries-pink px-6 py-10 md:px-18 md:py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-4">
          <h2 id={headingId} className="text-section font-bold">
            {wholePage.headline}
          </h2>
          <p className="text-pastries-body">{wholePage.body}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:shrink-0">
          <Button
            onClick={() => setViewing(desktop)}
            arrow
            className="bg-pastries-green hover:bg-pastries-green/90"
          >
            {desktop.label}
          </Button>
          <Button
            onClick={() => setViewing(mobile)}
            variant="light"
            className="text-pastries-green ring-1 ring-pastries-green ring-inset"
          >
            {mobile.label}
          </Button>
        </div>
      </div>

      <Lightbox
        open={viewing !== null}
        title={viewing?.label ?? ""}
        onClose={() => setViewing(null)}
        className="h-full max-w-content"
      >
        {viewing === mobile ? (
          <div className="flex min-h-0 flex-1 justify-center">
            <Phone className="h-full">{frame}</Phone>
          </div>
        ) : (
          <div className="min-h-0 flex-1 overflow-hidden rounded-card">
            {frame}
          </div>
        )}
      </Lightbox>
    </section>
  );
};

export default WholePage;
