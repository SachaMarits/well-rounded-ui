import React from "react";

interface RowProps {
  className?: string;
  children: React.ReactNode;
}

export default function Row({ className = "", children }: RowProps) {
  return <div className={`row ${className}`}>{children}</div>;
}
