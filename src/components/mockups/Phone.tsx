import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PhoneProps {
  src?: string;
  alt?: string;
  children?: ReactNode; // on the screen instead of an image, like a live prototype
  className?: string;
  shadow?: string;
  loading?: "eager" | "lazy";
}

// A 280×580 phone frame: 9px black bezel, 44px outer and 35px screen corners, scaled to whatever width it is given.
// The rounded-device, p-bezel and rounded-screen tokens are shares of the phone's width, so they need the @container
const Phone = ({
  src,
  alt,
  children,
  className,
  shadow = "shadow-phone",
  loading = "lazy",
}: PhoneProps) => {
  return (
    <div className={cn("@container aspect-280/580", className)}>
      <div className={cn("size-full rounded-device bg-bezel p-bezel", shadow)}>
        {children ? (
          <div className="size-full overflow-hidden rounded-screen">
            {children}
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading={loading}
            decoding="async"
            className="size-full rounded-screen object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default Phone;
