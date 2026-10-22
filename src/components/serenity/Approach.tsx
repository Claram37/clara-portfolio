import serenityCaseStudy from "@/data/caseStudies/serenity";
import Eyebrow from "@/components/shared/Eyebrow";

const { eyebrow, body } = serenityCaseStudy.approach;

const Approach = () => {
  return (
    <section className="px-page pt-20 md:pt-28 lg:pt-35">
      <div className="mx-auto flex max-w-190 flex-col items-center gap-4 text-center">
        <Eyebrow className="text-serenity-lavender">{eyebrow}</Eyebrow>
        <p className="text-lead text-serenity-soft">{body}</p>
      </div>
    </section>
  );
};

export default Approach;
