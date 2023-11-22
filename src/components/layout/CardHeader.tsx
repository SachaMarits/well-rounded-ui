import React from "react";

interface CardHeaderProps {
  /**
   * CardHeader's content, mostly used for titles
   */
  children: React.ReactNode;
}

export default function CardHeader({ children }: CardHeaderProps) {
  return <div className="card-header">{children}</div>;
}

export { CardHeader as ModalHeader };
