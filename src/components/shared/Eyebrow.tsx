import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}
const Eyebrow = ({ children, className }: EyebrowProps) => {
  return (
    <p
      className={cn(
        "text-xs font-bold uppercase tracking-eyebrow",
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Eyebrow;
