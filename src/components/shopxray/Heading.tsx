import Eyebrow from "@/components/shared/Eyebrow";
import { cn } from "@/lib/utils";

interface HeadingProps {
  id: string;
  eyebrow: string;
  headline: string;
  className?: string;
}

const Heading = ({ id, eyebrow, headline, className }: HeadingProps) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <Eyebrow className="text-shopxray">{eyebrow}</Eyebrow>
      <h2 id={id} className="text-chapter text-balance">
        {headline}
      </h2>
    </div>
  );
};

export default Heading;
