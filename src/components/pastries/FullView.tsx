import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";
import type { MenuItem } from "@/data/projects/types";
import Phone from "@/components/mockups/Phone";
import { cn } from "@/lib/utils";

interface FullViewProps {
  item: MenuItem | null;
  onClose: () => void;
}

// A card's screen full size, like a product's View Details. Esc, Close or a click beside it closes it
const FullView = ({ item, onClose }: FullViewProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (item) dialogRef.current?.showModal();
  }, [item]);

  const close = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => event.target === event.currentTarget && close()}
      className="focus-light size-full max-h-none max-w-none overflow-y-auto overscroll-contain bg-ink/95 px-page py-12 animate-in duration-300 fade-in motion-reduce:animate-none"
    >
      {item && (
        <div
          className={cn(
            "mx-auto flex flex-col gap-6 animate-in duration-300 zoom-in-95 motion-reduce:animate-none",
            item.format === "Mobile" ? "max-w-80" : "max-w-content",
          )}
        >
          <div className="flex items-center justify-between gap-4">
            <h2 id={titleId} className="text-2xl font-semibold text-paper">
              {item.title}
            </h2>
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-paper text-ink transition hover:bg-paper/90 focus-ring"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
          {item.format === "Mobile" ? (
            <Phone src={item.screen.src} alt={item.screen.alt} loading="eager" />
          ) : (
            <img
              src={item.screen.src}
              alt={item.screen.alt}
              decoding="async"
              className="w-full rounded-card"
            />
          )}
        </div>
      )}
    </dialog>
  );
};

export default FullView;
