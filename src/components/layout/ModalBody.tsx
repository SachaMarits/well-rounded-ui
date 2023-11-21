import React from "react";

interface ModalBodyProps {
  children: React.ReactNode;
}

export default function ModalBody({ children }: ModalBodyProps) {
  return <div className="modal-body">{children}</div>;
}
