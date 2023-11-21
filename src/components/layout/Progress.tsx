import React from "react";

interface ProgressProps {
  className?: string;
  value: number;
  min: number;
  max: number;
  color: string;
}

export default function Progress({ className = "", value, min, max, color }: ProgressProps) {
  return (
    <div className={`${className || ""} progress`}>
      <div className={`progress-bar bg-${color}`} style={{ width: `${(value / (min + max)) * 100}%` }} />
    </div>
  );
}