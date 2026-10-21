import { useId } from "react";
import pastriesCaseStudy from "@/data/caseStudies/pastries";
import Button from "@/components/shared/Button";

const { wholePage } = pastriesCaseStudy;
const { desktop, mobile } = wholePage;

// The ask at the end of the menu: each full page opens in a new tab
const WholePage = () => {
  const headingId = useId();

  return (
    <section aria-labelledby={headingId} className="px-page pb-20 lg:pb-35">
      <div className="mx-auto flex max-w-content flex-col gap-8 rounded-4xl bg-pastries-pink px-6 py-10 md:px-18 md:py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-4">
          <h2 id={headingId} className="text-section font-bold">
            {wholePage.headline}
          </h2>
          <p className="text-pastries-body">{wholePage.body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            href={desktop.src}
            arrow
            className="bg-pastries-green hover:bg-pastries-green/90"
          >
            {desktop.label}
          </Button>
          <Button
            href={mobile.src}
            variant="light"
            className="text-pastries-green ring-1 ring-pastries-green ring-inset"
          >
            {mobile.label}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WholePage;
