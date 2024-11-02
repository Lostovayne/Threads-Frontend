import * as React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  height?: number;
  width?: number;
}

const PlusIcon = ({ height = 24, width = 24, ...props }: Props) => (
  <svg
    aria-label="Crear"
    viewBox="0 0 12 12"
    className="x1lliihq x135i0dr x2lah0s x1f5funs x1n2onr6 x1bl4301 x1gaogpn"
    style={{
      fill: "currentColor",
      height: height,
      width: width,
    }}
    {...props}
  >
    <path
      d="M6 2v8m4-4H2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
    />
  </svg>
);
export default PlusIcon;
