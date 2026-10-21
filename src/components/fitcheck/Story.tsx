import type { ComponentType } from "react";
import fitCheckCaseStudy, { defaultReader } from "@/data/caseStudies/fitCheck";
import type { StoryId } from "@/data/projects/types";
import useReader from "@/hooks/useReader";
import Fold from "./Fold";
import HardestQuestion from "./HardestQuestion";
import Learned from "./Learned";
import Overview from "./Overview";
import Problem from "./Problem";
import ReadingAs from "./ReadingAs";
import Results from "./Results";
import Screens from "./Screens";
import VersionOne from "./VersionOne";

const { readers } = fitCheckCaseStudy;

const sections: Record<StoryId, ComponentType> = {
  results: Results,
  problem: Problem,
  versionOne: VersionOne,
  hardest: HardestQuestion,
  screens: Screens,
  learned: Learned,
};

const Story = () => {
  const [reader, pick] = useReader(readers, defaultReader);

  return (
    <div>
      <ReadingAs readers={readers} current={reader} onPick={pick} />
      <Overview />
      {reader.order.map((id) => {
        const Section = sections[id];
        return <Section key={id} />;
      })}

      {reader.folded.length > 0 && (
        <div className="flex flex-col gap-4 pb-20 lg:pb-24 2xl:pb-30">
          {reader.folded.map((id) => {
            const Section = sections[id];
            const { label, summary } = fitCheckCaseStudy[id];
            return (
              <Fold
                key={id}
                title={label}
                summary={`Folded for ${reader.plural}: ${summary}`}
              >
                <Section />
              </Fold>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Story;
