import dproz from "./dproz";
import shopXray from "./shopXray";
import fitCheck from "./fitCheck";
import type { NextUp, Project } from "./types";

const projects = [dproz, shopXray, fitCheck];

// The project after this one, wrapping back to the first, unless it sets its own next
export const nextAfter = (project: Project): NextUp =>
  project.next ?? projects[(projects.indexOf(project) + 1) % projects.length];

export default projects;
