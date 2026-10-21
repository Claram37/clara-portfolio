import type { ReactNode } from "react";
import { Sparkles, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface OrderTagProps {
  children: ReactNode;
  shared?: boolean;
}

const OrderTag = ({ children, shared = false }: OrderTagProps) => {
  const Icon = shared ? Users : Sparkles;

  return (
    <p
      className={cn(
        "flex items-center gap-2 font-mono text-xs",
        shared ? "text-muted-foreground" : "text-fitcheck-blue",
      )}
    >
      <Icon className="size-3" aria-hidden="true" />
      {children}
    </p>
  );
};

export default OrderTag;
