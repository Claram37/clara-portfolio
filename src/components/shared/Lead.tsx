import { cn } from "@/lib/utils";
import Eyebrow from "./Eyebrow";

interface LeadProps {
  eyebrow: string;
  body: string;
  accent: string; // the eyebrow's colour (and its width, when the design's differs)
  className?: string; // the section's bottom padding
}

// A short label beside one large sentence, just after the hero (Pastries' Overview, Hiring Tracker's Before)
const Lead = ({ eyebrow, body, accent, className }: LeadProps) => {
  return (
    <section className={cn("px-page pt-6 pb-16", className)}>
      <div className="mx-auto flex max-w-content flex-col gap-4 md:flex-row md:gap-16">
        <Eyebrow className={cn("md:w-65 md:shrink-0", accent)}>
          {eyebrow}
        </Eyebrow>
        <p className="font-display text-feature leading-snug text-pretty">
          {body}
        </p>
      </div>
    </section>
  );
};

export default Lead;
