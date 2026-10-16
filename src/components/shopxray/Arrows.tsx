import { useId } from "react";

interface ArrowsProps {
  paths: string[];
}

const Arrows = ({ paths }: ArrowsProps) => {
  const id = useId();
  return (
    <svg
      viewBox="0 0 900 600"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 size-full text-shopxray morph-line"
    >
      <defs>
        <marker
          id={id}
          viewBox="0 0 12 12"
          refX="11"
          refY="6"
          markerWidth="12"
          markerHeight="12"
          markerUnits="userSpaceOnUse"
          orient="auto"
        >
          <path
            d="M1 1l10 5-10 5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          />
        </marker>
      </defs>
      {paths.map((d) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeDasharray="6 5"
          markerEnd={`url(#${id})`}
        />
      ))}
    </svg>
  );
};

export default Arrows;
