import Phone from "@/components/Phone";
import type { Chapter } from "@/data/projects/types";
import { cn } from "@/lib/utils";

interface ScreensBodyProps {
  chapter: Chapter;
  tone: { body: string; panel: string };
}

const ScreensBody = ({ chapter, tone }: ScreensBodyProps) => {
  const { headline, screens } = chapter;

  return (
    <div className="flex flex-col gap-7 xl:min-h-0 xl:flex-1">
      <h2 className="max-w-160 text-section">{headline}</h2>

      <ul className="grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:min-h-0 xl:flex-1 xl:grid-rows-1">
        {screens?.map(({ src, alt, title, caption }) => (
          <li key={title} className="flex flex-col gap-3 xl:min-h-0">
            <div
              className={cn(
                "relative aspect-293/424 overflow-hidden rounded-card xl:aspect-auto xl:min-h-0 xl:flex-1",
                tone.panel,
              )}
            >
              <Phone
                src={src}
                alt={alt}
                shadow="shadow-chapter-phone"
                className="absolute top-[7.08%] left-[16.38%] w-[68.26%]"
              />
            </div>
            <h3 className="text-base font-semibold">{title}</h3>
            <p className={cn("text-xs", tone.body)}>{caption}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScreensBody;
