import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PinProps {
  children: ReactNode;
  className?: string;
}

const Pin = ({ children, className }: PinProps) => {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-full bg-pin text-xs font-bold text-pin-ink",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Pin;
