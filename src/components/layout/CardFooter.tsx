import React from "react";

interface CardFooterProps {
  children: React.ReactNode;
}

export default function CardFooter({ children }: CardFooterProps) {
  return <div className="card-footer d-flex flex-row-reverse">{children}</div>;
}

export { CardFooter as ModalFooter };
