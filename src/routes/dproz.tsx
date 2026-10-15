import type { Route } from "./+types/dproz";
import dproz from "@/data/projects/dproz";
import site from "@/data/site";
import { pageMeta } from "@/lib/meta";

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: `${dproz.name} case study · ${site.name}`,
    description: dproz.caption,
  });

const DprozCaseStudy = () => {
  return <h1 className="px-page">{dproz.name}</h1>;
};

export default DprozCaseStudy;
