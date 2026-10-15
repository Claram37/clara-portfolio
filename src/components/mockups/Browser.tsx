import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const tones = {
  light: {
    frame: "border-window-line bg-paper",
    bar: "border-window-line bg-window-bar",
    address: "border-window-line bg-paper",
  },
  dark: {
    frame: "border-window-line-dark bg-ink",
    bar: "border-window-line-dark bg-window-bar-dark",
    address: "border-window-line-dark bg-ink",
  },
};

interface BrowserProps {
  src: string;
  alt: string;
  url: string;
  tone?: keyof typeof tones;
  className?: string;
  shadow?: string;
  loading?: "eager" | "lazy";
}

// A desktop browser window: a grey top bar with three window dots and an address bar, above a screenshot
// that sets the window's height. Scaled to whatever width it is given: the window-* tokens are shares of
// the window's width, so they need the @container. The address only shows from 1024px, where it fits
const Browser = ({
  src,
  alt,
  url,
  tone = "light",
  className,
  shadow,
  loading = "lazy",
}: BrowserProps) => {
  return (
    <div className={cn("@container", className)}>
      <div
        className={cn(
          "overflow-hidden rounded-window border",
          tones[tone].frame,
          shadow,
        )}
      >
        <div
          className={cn(
            "relative flex h-window-bar items-center gap-window-gap border-b px-window-pad",
            tones[tone].bar,
          )}
          aria-hidden="true"
        >
          <span className="size-window-dot rounded-full bg-window-close"></span>
          <span className="size-window-dot rounded-full bg-window-minimise"></span>
          <span className="size-window-dot rounded-full bg-window-zoom"></span>
          <span
            className={cn(
              "absolute top-1/2 left-1/2 flex aspect-440/28 w-window-address -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-window-address border text-xs leading-none text-muted-foreground",
              tones[tone].address,
            )}
          >
            <span className="hidden items-center gap-1 lg:flex">
              <Lock className="size-3" />
              {url}
            </span>
          </span>
        </div>
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          className="block w-full"
        />
      </div>
    </div>
  );
};

export default Browser;
