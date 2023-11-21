import React from "react";

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
  color: string;
}

export default function Badge({ className = "", children, color }: BadgeProps) {
  return <div className={`badge badge-${color} ${className || ""}`}>{children}</div>;
}
