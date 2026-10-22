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
  const { headline, body, view, screen, crop } = question;

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "px-page py-16 md:py-20 lg:py-24",
        number % 2 === 1 && "bg-hiring-tint",
      )}
    >
      <div className="mx-auto flex max-w-content flex-col gap-10 lg:flex-row lg:gap-16">
        <div className="flex flex-col gap-5 md:max-w-140 lg:w-80 lg:shrink-0 xl:w-95">
          {/* One segment per question, filled up to this one */}
          <div aria-hidden="true" className="flex gap-2">
            {Array.from({ length: total }, (_, index) => (
              <span
                key={index}
                className={cn(
                  "h-1 w-7 rounded-full",
                  index < number ? "bg-hiring" : "bg-hiring-track",
                )}
              />
            ))}
          </div>
          <Eyebrow className="text-hiring">
            Question {String(number).padStart(2, "0")}
          </Eyebrow>
          <h2 id={headingId} className="text-chapter">
            {headline}
          </h2>
          <p className="text-body text-ink-muted lg:text-body-lg">{body}</p>
          <p className="self-start rounded-full border border-hiring-pill-line bg-paper px-4 py-2 text-xs font-semibold text-hiring">
            {view}
          </p>
        </div>

        <div className="min-w-0 flex-1 overflow-hidden rounded-3xl border border-hiring-line bg-paper shadow-hiring">
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
