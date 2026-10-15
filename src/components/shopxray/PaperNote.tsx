import { cn } from "@/lib/utils";

interface PaperNoteProps {
  src: string;
  alt: string;
  className?: string;
}

const PaperNote = ({ src, alt, className }: PaperNoteProps) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={cn(
        "absolute origin-top-left rotate-2 shadow-paper-note morph-from",
        className,
      )}
    />
  );
};

export default PaperNote;
