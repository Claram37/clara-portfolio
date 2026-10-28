import { useEffect, useId, useRef, type ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface LightboxProps {
  open: boolean;
  title: string;
  onClose: () => void;
  className?: string; // the content's width (and height)
  children: ReactNode;
}

// A full-screen dialog over the page. Esc, Close or a click beside the content closes it.
// Its content stays mounted while it's closed, so a prototype keeps loading and stays loaded
const Lightbox = ({
  open,
  title,
  onClose,
  className,
  children,
}: LightboxProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (open) dialogRef.current?.showModal();
  }, [open]);

  const close = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => event.target === event.currentTarget && close()}
      className="focus-light size-full max-h-none max-w-none overflow-y-auto overscroll-contain bg-ink/95 px-page py-12 animate-in duration-300 fade-in motion-reduce:animate-none"
    >
      <div
        className={cn(
          "mx-auto flex flex-col gap-6 animate-in duration-300 zoom-in-95 motion-reduce:animate-none",
          className,
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <h2 id={titleId} className="text-2xl font-semibold text-paper">
            {title}
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
        {children}
      </div>
    </dialog>
  );
};

export default Lightbox;
