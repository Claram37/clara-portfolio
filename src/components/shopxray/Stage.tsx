import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface StageProps {
  children: ReactNode;
  className?: string;
}
const Stage = ({ children, className }: StageProps) => {
  return (
    <div
      className={cn(
        "relative aspect-3/2 overflow-hidden rounded-3xl bg-daftari-stage",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Stage;
