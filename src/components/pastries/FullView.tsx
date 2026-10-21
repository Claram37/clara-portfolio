import type { MenuItem } from "@/data/projects/types";
import Phone from "@/components/mockups/Phone";
import Lightbox from "./Lightbox";

interface FullViewProps {
  item: MenuItem | null;
  onClose: () => void;
}

// A card's screen full size, like a product's View Details
const FullView = ({ item, onClose }: FullViewProps) => {
  return (
    <Lightbox
      open={item !== null}
      title={item?.title ?? ""}
      onClose={onClose}
      className={item?.format === "Mobile" ? "max-w-80" : "max-w-content"}
    >
      {item?.format === "Mobile" ? (
        <Phone src={item.screen.src} alt={item.screen.alt} loading="eager" />
      ) : (
        item && (
          <img
            src={item.screen.src}
            alt={item.screen.alt}
            decoding="async"
            className="w-full rounded-card"
          />
        )
      )}
    </Lightbox>
  );
};

export default FullView;
