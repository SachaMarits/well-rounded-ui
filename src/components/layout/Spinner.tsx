import React from "react";

interface SpinnerProps {
  className?: string;
  color?: "primary" | "success" | "warning" | "danger" | "black" | "white";
  size: "lg" | "md" | "sm" | "xs";
}

export default function Spinner({ className = "", color = "primary", size = "sm" }: SpinnerProps) {
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
