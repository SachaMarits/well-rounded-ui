import React from "react";
import { CompleteColor } from "../../types/Colors";

export enum SpinnerSize {
  Lg = "lg",
  Md = "md",
  Sm = "sm",
  Xs = "xs"
}

interface SpinnerProps {
  className?: string;
  color?: CompleteColor;
  size: SpinnerSize;
}

export default function Spinner({
  className = "",
  color = CompleteColor.Primary,
  size = SpinnerSize.Sm
}: SpinnerProps) {
  const sizeInPx = () => {
    switch (size) {
      case "lg":
        return 64;
      case "md":
        return 48;
      case "sm":
        return 32;
      case "xs":
        return 16;
      default:
        return 32;
    }
  };

  return (
    <svg
      className={`spinner ${className}`}
      style={{ height: sizeInPx(), width: sizeInPx() }}
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className={`path path-${color}`}
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      />
    </svg>
  );
}
