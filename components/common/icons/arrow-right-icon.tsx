import React from "react";
import type { SVGProps } from "react";

export default function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "24px", height: "24px" }}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m10 17l5-5l-5-5"
      ></path>
    </svg>
  );
}
