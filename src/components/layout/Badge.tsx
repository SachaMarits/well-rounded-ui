import React from "react";
import { ThemeColor } from "../../types/Colors";

interface BadgeProps {
  className?: string;
  /**
   * Badge's content, mostly used for text
   */
  children: React.ReactNode;
  color?: ThemeColor;
}

export default function Badge({ className = "", children, color = ThemeColor.Primary, ...props }: BadgeProps) {
  return (
    <div className={`badge badge-${color} ${className || ""}`} {...props}>
      {children}
    </div>
  );
}
