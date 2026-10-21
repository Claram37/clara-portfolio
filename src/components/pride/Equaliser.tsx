import { cn } from "@/lib/utils";

const bars = ["h-3", "h-5", "h-2", "h-4"];

interface EqualiserProps {
  playing: boolean;
}

const Equaliser = ({ playing }: EqualiserProps) => {
  return (
    <span aria-hidden="true" className="flex h-5 items-end gap-1">
      {bars.map((height, index) => (
        <span
          key={index}
          className={cn(
            "w-1 origin-bottom rounded-full bg-pride-pink",
            height,
            playing && "motion-safe:animate-equalise",
          )}
          style={{ animationDelay: `${index * -0.15}s` }}
        />
      ))}
    </span>
  );
};

export default Equaliser;
