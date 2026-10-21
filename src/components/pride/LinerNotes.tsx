import { useId } from "react";
import prideCaseStudy from "@/data/caseStudies/pride";
import Head from "./Head";

const { linerNotes } = prideCaseStudy;

const LinerNotes = () => {
  const headingId = useId();

  return (
    <section aria-labelledby={headingId} className="px-page pb-20 lg:pb-35">
      <div className="mx-auto flex max-w-content flex-col gap-10">
        <Head headingId={headingId} copy={linerNotes} />
        <div className="grid gap-6 md:grid-cols-2">
          {linerNotes.images.map(({ src, alt }) => (
            <img
              key={src}
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="aspect-3/2 w-full rounded-card object-cover object-top"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinerNotes;
