import * as React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  isFilled?: boolean;
  height?: number;
  width?: number;
}

const HomeIcon = ({
  isFilled = true,
  height = 24,
  width = 24,
  ...props
}: Props): JSX.Element => (
  <svg
    aria-label="Inicio"
    viewBox="0 0 26 26"
    {...props}
    style={{ height: height, width: height }}
  >
    <path
      d="M2.25 12.886v7.864a2 2 0 0 0 2 2h4a.5.5 0 0 0 .5-.5V17.5a4.25 4.25 0 0 1 8.5 0v4.75a.5.5 0 0 0 .5.5h4a2 2 0 0 0 2-2v-7.864a5 5 0 0 0-1.855-3.887l-5.75-4.654a5 5 0 0 0-6.29 0L4.105 9a5 5 0 0 0-1.855 3.887Z"
      fill={isFilled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2.5}
    />
  </svg>
);
export default HomeIcon;
