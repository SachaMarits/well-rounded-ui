import React from "react";

interface BadgeProps {
  className?: string;
  /**
   * Badge's content, mostly used for text
   */
  children: React.ReactNode;
  color?: "primary" | "secondary" | "success" | "warning" | "danger" | "default";
}

export default function Badge({ className = "", children, color = "primary", ...props }: BadgeProps) {
  return (
    <div className={`badge badge-${color} ${className || ""}`} {...props}>
      {children}
    </div>
  );
}
