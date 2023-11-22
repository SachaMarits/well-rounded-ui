import React from "react";

interface RowProps {
  className?: string;
  /**
   * Row's content, mostly used for <Col />
   */
  children: React.ReactNode;
}

export default function Row({ className = "", children }: RowProps) {
  return <div className={`row ${className}`}>{children}</div>;
}
