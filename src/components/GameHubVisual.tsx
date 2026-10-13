import { useState } from "react";
import Browser from "./Browser";
import { cn } from "@/lib/utils";
import homeDark from "@/assets/game-hub/home-dark.jpg";
import homeLight from "@/assets/game-hub/home-light.jpg";

const GameHubVisual = () => {
  const [dark, setDark] = useState(true);

  return (
    <div className="relative size-full bg-game-hub">
      <Browser
        tone={dark ? "dark" : "light"}
        url="game-hub-black-eta.vercel.app"
        src={dark ? homeDark : homeLight}
        alt="Game Hub's game grid, with genres down the side"
        shadow="shadow-code"
        className="absolute top-[20%] left-[6.58%] w-[105.26%]"
      />
      <button
        type="button"
        role="switch"
        aria-checked={dark}
        onClick={() => setDark(!dark)}
        className="absolute top-6 right-8 flex items-center gap-2 rounded-full border border-window-line-dark bg-ink px-3 py-2 text-xs font-semibold text-paper focus-ring"
      >
        <span
          className={cn(
            "flex h-5 w-9 rounded-full border-2 border-transparent transition-colors",
            dark ? "bg-switch" : "bg-window-line-dark",
          )}
        >
          <span
            className={cn(
              "size-4 rounded-full bg-paper transition-transform",
              dark && "translate-x-4",
            )}
          ></span>
        </span>
        Dark mode
      </button>
    </div>
  );
};

export default GameHubVisual;
