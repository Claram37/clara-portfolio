import Eyebrow from "@/components/shared/Eyebrow";
import type { SectionCopy } from "@/data/projects/types";

interface HeadProps {
  headingId: string;
  copy: SectionCopy;
}

const Head = ({ headingId, copy }: HeadProps) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-12">
      <div className="flex max-w-160 flex-col gap-3">
        <Eyebrow className="text-pride-pink">{copy.eyebrow}</Eyebrow>
        <h2 id={headingId} className="text-section">
          {copy.headline}
        </h2>
      </div>
      <p className="max-w-110 text-base text-on-dark-muted">{copy.body}</p>
    </div>
  );
};

export default Head;
