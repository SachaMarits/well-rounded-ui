import React from "react";

interface ProgressProps {
  className?: string;
  value: number;
  min?: number;
  max?: number;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "default" | "orange";
}

export default function Progress({ className = "", value, min = 0, max = 100, color = "primary" }: ProgressProps) {
  return (
    <div className={`${className || ""} progress`}>
      <div className={`progress-bar bg-${color}`} style={{ width: `${((value - min) / (max - min)) * 100}%` }} />
    </div>
  );
}
