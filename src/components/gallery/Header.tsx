import gallery from "@/data/gallery";

const { eyebrow, title, intro, posts } = gallery;
const tiles = posts.reduce((count, post) => count + post.slides.length, 0);

const Header = () => {
  return (
    <section className="px-page pt-14 pb-12">
      <div className="mx-auto flex max-w-content flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-5">
          <p className="text-base font-semibold tracking-eyebrow text-dproz uppercase">
            {eyebrow}
          </p>
          <h1 className="text-gallery">{title}</h1>
          <p className="max-w-205 text-xl/snug text-pretty text-ink-soft md:text-2xl/snug">
            {intro}
          </p>
        </div>
        <p className="shrink-0 text-base text-muted-foreground">
          {tiles} tiles from {posts.length} posts
        </p>
      </div>
    </section>
  );
};

export default Header;
