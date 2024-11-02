import * as React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  height?: number;
  width?: number;
}

const SearchIcon = ({ height = 24, width = 24, ...props }: Props) => (
  <svg
    aria-label="Buscar"
    viewBox="0 0 26 26"
    className="x1lliihq x135i0dr x2lah0s x1f5funs x1n2onr6 x1bl4301 x1yxark7"
    style={{
      fill: "transparent",
      height: height,
      width: width,
    }}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M3.5 11.5a8 8 0 1 1 16 0 8 8 0 0 1-16 0m8-10.5C5.701 1 1 5.701 1 11.5S5.701 22 11.5 22c2.449 0 4.702-.838 6.488-2.244l4.378 4.378a1.25 1.25 0 0 0 1.768-1.768l-4.378-4.378A10.46 10.46 0 0 0 22 11.5C22 5.701 17.299 1 11.5 1"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
export default SearchIcon;
