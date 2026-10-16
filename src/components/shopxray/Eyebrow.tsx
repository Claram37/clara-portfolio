import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
}
const Eyebrow = ({ children }: EyebrowProps) => {
  return (
    <p className="text-xs font-bold uppercase tracking-eyebrow text-shopxray">
      {children}
    </p>
  );
};

export default Eyebrow;
