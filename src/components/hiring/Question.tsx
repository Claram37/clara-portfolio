import { useId } from "react";
import type { Question as QuestionCopy } from "@/data/projects/types";
import Eyebrow from "@/components/shared/Eyebrow";
import { cn } from "@/lib/utils";

interface QuestionProps {
  question: QuestionCopy;
  number: number;
  total: number;
}

// A recruiter's question on the left, answered by a screen of the tracker on the right
const Question = ({ question, number, total }: QuestionProps) => {
  const headingId = useId();
  const { headline, body, icon: Icon, view, screen, crop } = question;

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "px-page py-16 read-progress md:py-20 lg:py-24",
        number % 2 === 1 && "bg-hiring-tint",
      )}
    >
      <div className="mx-auto flex max-w-content flex-col gap-10 lg:flex-row lg:gap-16">
        {/* Pins while its screen scrolls past */}
        <div className="flex flex-col gap-5 md:max-w-140 lg:sticky lg:top-24 lg:w-80 lg:shrink-0 lg:self-start xl:w-95">
          {/* One segment per question, filled up to this one. This one's fills as the screen is read */}
          <div aria-hidden="true" className="flex gap-2">
            {Array.from({ length: total }, (_, index) => (
              <span
                key={index}
                className="h-1 w-7 overflow-hidden rounded-full bg-hiring-track"
              >
                {index < number && (
                  <span
                    data-read={index === number - 1 || undefined}
                    className="block size-full bg-hiring"
                  />
                )}
              </span>
            ))}
          </div>
          <Eyebrow className="text-hiring">
            Question {String(number).padStart(2, "0")}
          </Eyebrow>
          <h2 id={headingId} className="text-chapter">
            {headline}
          </h2>
          <p className="text-body text-ink-muted lg:text-body-lg">{body}</p>
          <p className="flex items-center gap-2 text-base text-muted-foreground">
            <Icon className="size-4 shrink-0" aria-hidden="true" />
            {view}
          </p>
        </div>

        <div
          data-answer
          className="min-w-0 flex-1 overflow-hidden rounded-3xl border border-hiring-line bg-paper shadow-hiring"
        >
          <img
            src={screen.src}
            alt={screen.alt}
            loading="lazy"
            decoding="async"
            className={cn("w-full", crop && "object-cover object-top", crop)}
          />
        </div>
      </div>
    </section>
  );
};

export default Question;
