import gallery from "@/data/gallery";

const { eyebrow, title, intro } = gallery;

const Header = () => {
  return (
    <section className="px-page pt-14 pb-12">
      <div className="mx-auto flex max-w-content flex-col gap-5">
        <p className="text-base font-semibold tracking-eyebrow text-dproz uppercase">
          {eyebrow}
        </p>
        <h1 className="text-gallery">{title}</h1>
        <p className="max-w-205 text-xl/snug text-pretty text-ink-soft md:text-2xl/snug">
          {intro}
        </p>
      </div>
    </section>
  );
};

export default Header;
