import type { Route } from "./+types/gallery";
import Header from "@/components/gallery/Header";
import Posts from "@/components/gallery/Posts";
import Contact from "@/components/shared/Contact";
import gallery from "@/data/gallery";
import site from "@/data/site";
import { pageMeta } from "@/lib/meta";

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: `${gallery.title} · ${site.name}`,
    description: gallery.intro,
  });

const GalleryPage = () => {
  return (
    <>
      <Header />
      <Posts />
      <Contact />
    </>
  );
};

export default GalleryPage;
