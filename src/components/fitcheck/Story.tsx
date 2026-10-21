import type { ComponentType } from "react";
import { defaultReader } from "@/data/caseStudies/fitCheck";
import type { StoryId } from "@/data/projects/types";
import HardestQuestion from "./HardestQuestion";
import Overview from "./Overview";
import Problem from "./Problem";
import Results from "./Results";
import Screens from "./Screens";
import VersionOne from "./VersionOne";

const sections: Partial<Record<StoryId, ComponentType>> = {
  results: Results,
  problem: Problem,
  versionOne: VersionOne,
  hardest: HardestQuestion,
  screens: Screens,
};

const Story = () => {
  const reader = defaultReader;

  return (
    <div>
      <Overview />
      {reader.order.map((id) => {
        const Section = sections[id];
        return Section && <Section key={id} />;
      })}
    </div>
  );
};

export default Story;
