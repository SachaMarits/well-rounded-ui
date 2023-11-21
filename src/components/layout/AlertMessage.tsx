import React from "react";

interface AlertMessageProps {
  className?: string;
  children: React.ReactNode;
  color: string;
}

export default function AlertMessage({ className = "", children, color }: AlertMessageProps) {
  return <div className={`alert-message alert-message-${color} ${className || ""}`}>{children}</div>;
}
