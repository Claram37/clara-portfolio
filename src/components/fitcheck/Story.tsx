import type { ComponentType } from "react";
import fitCheckCaseStudy, { defaultReader } from "@/data/caseStudies/fitCheck";
import type { StoryId } from "@/data/projects/types";
import useReader from "@/hooks/useReader";
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
    </div>
  );
};

export default Story;
