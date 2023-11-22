import React from "react";
import { StatusColor } from "../../types/Colors";

interface AlertMessageProps {
  className?: string;
  /**
   * AlertMessage's content, mostly used for text
   */
  children: React.ReactNode;
  color?: StatusColor;
}

export default function AlertMessage({ className = "", children, color = StatusColor.Danger }: AlertMessageProps) {
  return <div className={`alert-message alert-message-${color} ${className || ""}`}>{children}</div>;
}
