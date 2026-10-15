import MoreWork from "@/components/home/MoreWork";
import Contact from "@/components/shared/Contact";
import type { Route } from "./+types/home";
import Hero from "@/components/home/Hero";
import Work from "@/components/home/Work";
import site from "@/data/site";
import { pageMeta } from "@/lib/meta";
import CodeWork from "@/components/home/CodeWork";

export const meta: Route.MetaFunction = () =>
  pageMeta({ title: `${site.name} · ${site.role}`, description: site.intro });

const Home = () => {
  return (
    <>
      <Hero />
      <Work />
      <MoreWork />
      <CodeWork />
      <Contact />
    </>
  );
};

export default Home;
