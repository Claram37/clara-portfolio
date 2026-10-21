import type { ComponentType } from "react";
import { defaultReader } from "@/data/caseStudies/fitCheck";
import type { StoryId } from "@/data/projects/types";
import HardestQuestion from "./HardestQuestion";
import Overview from "./Overview";
import Problem from "./Problem";
import Results from "./Results";
import VersionOne from "./VersionOne";

const sections: Partial<Record<StoryId, ComponentType<{ tag?: string }>>> = {
  results: Results,
  problem: Problem,
  versionOne: VersionOne,
  hardest: HardestQuestion,
};

const Story = () => {
  const reader = defaultReader;

  return (
    <div>
      <Overview />
      {reader.order.map((id, index) => {
        const Section = sections[id];
        return (
          Section && (
            <Section
              key={id}
              tag={`${index + 3} of ${reader.order.length + 2} for ${reader.plural}`}
            />
          )
        );
      })}
    </div>
  );
};

export default Story;
