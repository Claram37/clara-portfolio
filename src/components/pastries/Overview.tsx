import pastriesCaseStudy from "@/data/caseStudies/pastries";
import Eyebrow from "@/components/shared/Eyebrow";

const { overview } = pastriesCaseStudy;

const Overview = () => {
  return (
    <section className="px-page pt-6 pb-16 lg:pb-20">
      <div className="mx-auto flex max-w-content flex-col gap-4 md:flex-row md:gap-16">
        <Eyebrow className="text-pastries-terracotta md:w-65 md:shrink-0">
          {overview.eyebrow}
        </Eyebrow>
        <p className="font-display text-feature leading-snug text-pretty">
          {overview.body}
        </p>
      </div>
    </section>
  );
};

export default Overview;
