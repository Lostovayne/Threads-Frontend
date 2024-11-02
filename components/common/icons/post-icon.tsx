import * as React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  isFilled?: boolean;
  height?: number;
  width?: number;
}

const SVGComponent = ({ height = 24, width = 24, ...props }: Props) => (
  <svg
    aria-label="Crear"
    viewBox="0 0 26 26"
    className="x1lliihq x135i0dr x2lah0s x1f5funs x1n2onr6 x1bl4301 x3egl4o"
    style={{
      fill: "transparent",
      height: height,
      width: width,
    }}
    {...props}
  >
    <path
      d="M22.75 13v.15c0 3.36 0 5.04-.654 6.324a6 6 0 0 1-2.622 2.622c-1.283.654-2.964.654-6.324.654h-.3c-3.36 0-5.04 0-6.324-.654a6 6 0 0 1-2.622-2.622C3.25 18.19 3.25 16.51 3.25 13.15v-.3c0-3.36 0-5.04.654-6.324a6 6 0 0 1 2.622-2.622C7.81 3.25 9.49 3.25 12.85 3.25H13m8.75 1-8 8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2.5}
    />
  </svg>
);
export default SVGComponent;
