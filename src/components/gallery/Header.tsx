import { Hand } from "lucide-react";
import gallery from "@/data/gallery";

const { eyebrow, title, intro, hint } = gallery;

const Header = () => {
  return (
    <section className="px-page py-12 lg:py-16">
      <div className="mx-auto flex max-w-content flex-col items-center gap-5 text-center">
        <p className="text-base font-semibold tracking-eyebrow text-dproz uppercase">
          {eyebrow}
        </p>
        <h1 className="text-gallery">{title}</h1>
        <p className="max-w-205 text-xl/snug text-pretty text-ink-soft md:text-2xl/snug">
          {intro}
        </p>
        <p className="mt-1 flex items-center gap-2 text-base text-muted-foreground">
          <Hand className="size-4 shrink-0" aria-hidden="true" />
          {hint}
        </p>
      </div>
    </section>
  );
};

export default Header;
