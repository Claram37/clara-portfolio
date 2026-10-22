import type { SafariDay } from "@/data/projects/types";
import Eyebrow from "@/components/shared/Eyebrow";
import { cn } from "@/lib/utils";

interface DayProps {
  day: SafariDay;
  number: number;
  last: boolean;
}

// A day on the rail: its number, then a card with the step beside its quote or screen, or above its diagram
const Day = ({ day, number, last }: DayProps) => {
  const { headline, body, facts, quote, screen, diagram } = day;
  const image = screen ?? diagram;

  return (
    <li className="flex gap-3 md:gap-8">
      <div aria-hidden="true" className="flex shrink-0 flex-col items-center">
        <span className="flex size-10 items-center justify-center rounded-full bg-safari-green font-display text-base font-bold text-paper md:size-14 md:text-xl">
          {String(number).padStart(2, "0")}
        </span>
        {!last && <span className="w-0.5 flex-1 bg-safari-rail" />}
      </div>

      <div className={cn("min-w-0 flex-1", !last && "pb-10")}>
        <article
          className={cn(
            "flex flex-col gap-8 rounded-3xl border border-safari-line bg-paper p-5 md:p-10",
            !diagram && "xl:flex-row xl:items-center xl:gap-12",
          )}
        >
          <div
            className={cn(
              "flex flex-col gap-4",
              diagram ? "max-w-160" : "xl:w-105 xl:shrink-0",
            )}
          >
            <Eyebrow className="text-safari-clay">Day {number}</Eyebrow>
            <h3 className="text-section text-safari-green">{headline}</h3>
            <p className="text-body text-ink-muted">{body}</p>
            {facts && (
              <dl className="flex gap-10 border-t border-safari-line pt-5">
                {facts.map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-1">
                    <dt className="text-xs font-semibold uppercase tracking-eyebrow text-safari-muted">
                      {label}
                    </dt>
                    <dd className="text-base font-semibold text-safari-green">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          <div className="flex min-w-0 flex-1 items-center rounded-2xl bg-safari-sand p-4 md:p-8 xl:min-h-95">
            {quote && (
              <div className="flex flex-col gap-5 p-2 md:p-0">
                <blockquote className="font-display text-feature leading-tight font-bold text-safari-green">
                  “{quote.text}”
                </blockquote>
                <p className="max-w-115 text-base text-safari-body">
                  {quote.note}
                </p>
                <ul className="flex flex-wrap gap-3 pt-2">
                  {quote.sources.map((source) => (
                    <li
                      key={source}
                      className="rounded-full border border-safari-chip-line bg-paper px-4 py-2 text-xs font-semibold text-ink-muted"
                    >
                      {source}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {image && (
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="w-full rounded-lg border border-safari-line bg-paper"
              />
            )}
          </div>
        </article>
      </div>
    </li>
  );
};

export default Day;
