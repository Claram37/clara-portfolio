import { useId } from "react";
import { Sparkles } from "lucide-react";
import type { Reader } from "@/data/projects/types";

interface ReadingAsProps {
  readers: Reader[];
  current: Reader;
  onPick: (reader: Reader) => void;
}

const ReadingAs = ({ readers, current, onPick }: ReadingAsProps) => {
  const labelId = useId();

  return (
    <div className="sticky top-0 z-10 border-y border-window-line bg-paper px-page py-3 md:py-4">
      <div className="mx-auto flex max-w-content items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <p
            id={labelId}
            className="font-semibold text-muted-foreground max-md:sr-only"
          >
            Reading as
          </p>
          <div
            role="radiogroup"
            aria-labelledby={labelId}
            className="flex gap-1 rounded-full bg-surface p-1"
          >
            {readers.map((reader) => {
              const { id, name, icon: Icon } = reader;
              return (
                <label
                  key={id}
                  className="group flex cursor-pointer items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition-colors has-checked:bg-ink has-checked:text-paper has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-ring sm:px-4 sm:text-base"
                >
                  <input
                    type="radio"
                    name="reader"
                    value={id}
                    checked={id === current.id}
                    onChange={() => onPick(reader)}
                    className="sr-only"
                  />
                  <Icon
                    className="size-4 text-muted-foreground group-has-checked:text-paper max-md:hidden"
                    aria-hidden="true"
                  />
                  {name}
                </label>
              );
            })}
          </div>
        </div>

        <p className="hidden items-center gap-2 text-muted-foreground lg:flex">
          <Sparkles className="size-4 text-fitcheck-blue" aria-hidden="true" />
          The story below re-orders for each reader.
        </p>
      </div>
    </div>
  );
};

export default ReadingAs;
