import { useId } from "react";
import pastriesCaseStudy from "@/data/caseStudies/pastries";
import MenuCard from "./MenuCard";

const { menu } = pastriesCaseStudy;

const Menu = () => {
  const headingId = useId();

  return (
    <section aria-labelledby={headingId} className="px-page pt-8 pb-16 lg:pb-24">
      <div className="mx-auto max-w-content">
        <h2 id={headingId} className="text-center text-lesson font-bold">
          {menu.headline}
        </h2>
        {/* Columns, so each card keeps its own height */}
        <ul className="mt-12 gap-6 md:columns-2 lg:columns-3">
          {menu.items.map((item) => (
            <MenuCard key={item.title} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Menu;
