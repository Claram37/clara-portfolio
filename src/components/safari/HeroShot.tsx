import Browser from "@/components/mockups/Browser";
import safariCaseStudy from "@/data/caseStudies/safariSpirits";

const { hero } = safariCaseStudy;

// The homepage in a browser window, under the hero
const HeroShot = () => {
  return (
    <div className="px-page pb-20 lg:pb-24">
      <Browser
        url="safarispirits.co.ke"
        src={hero.src}
        alt={hero.alt}
        loading="eager"
        shadow="shadow-safari-window"
        className="mx-auto max-w-content"
      />
    </div>
  );
};

export default HeroShot;
