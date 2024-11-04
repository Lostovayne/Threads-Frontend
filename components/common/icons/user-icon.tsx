import * as React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  isFilled?: boolean;
  height?: number;
  width?: number;
}

const UserIcon = ({
  isFilled = true,
  height = 24,
  width = 24,
  ...props
}: Props) => (
  <svg
    aria-label="Perfil"
    viewBox="0 0 26 26"
    className="x1lliihq x135i0dr x2lah0s x1f5funs x1n2onr6 x1bl4301 x3egl4o"
    style={{
      fill: "transparent",
      height: height,
      width: width,
    }}
    {...props}
  >
    <circle
      cx={13}
      cy={7.25}
      r={4}
      stroke="currentColor"
      strokeWidth={2.5}
      fill={isFilled ? "currentColor" : "none"}
    />
    <path
      fill={isFilled ? "currentColor" : "none"}
      d="M6.267 23.75h13.477c1.859 0 2.756-.531 2.756-1.683 0-2.696-3.696-6.317-9.5-6.317s-9.5 3.621-9.5 6.317c0 1.152.897 1.683 2.767 1.683Z"
      stroke="currentColor"
      strokeWidth={2.5}
    />
  </svg>
);
export default UserIcon;
