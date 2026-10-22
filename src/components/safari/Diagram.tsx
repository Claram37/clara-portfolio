import { useId } from "react";
import type { SectionCopy, Shot } from "@/data/projects/types";
import Eyebrow from "@/components/shared/Eyebrow";

interface DiagramProps extends SectionCopy {
  image: Shot;
}

// The journey map or the user flow, across the page under its heading. Never wider than its own pixels
const Diagram = ({ eyebrow, headline, body, image }: DiagramProps) => {
  const headingId = useId();

  return (
    <section aria-labelledby={headingId} className="px-page pb-20 lg:pb-30">
      <div className="mx-auto max-w-content">
        <div className="flex max-w-170 flex-col gap-4 pb-10 lg:pb-14">
          <Eyebrow className="text-safari-clay">{eyebrow}</Eyebrow>
          <h2 id={headingId} className="text-chapter text-balance">
            {headline}
          </h2>
          <p className="text-body text-ink-muted lg:text-body-lg">{body}</p>
        </div>

        <div className="rounded-3xl border border-safari-line bg-paper p-4 md:p-8">
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Diagram;
