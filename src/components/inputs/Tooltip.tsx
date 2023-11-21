import React, { useState } from "react";

interface TooltipProps {
  toggle: React.ReactNode;
  content: React.ReactNode;
  openOnHover: boolean;
  closeOnLeave: boolean;
}

export default function Tooltip({ toggle, content, openOnHover = false, closeOnLeave = false }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  let hoverTimeout: number | undefined = undefined;

  const handleMouseOver = () => {
    clearTimeout(hoverTimeout);
    if (openOnHover) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (closeOnLeave) hoverTimeout = setTimeout(() => setIsOpen(false), 300);
  };

  return (
    <div className="dropdown" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <div onClick={() => setIsOpen(!isOpen)}>{toggle}</div>
      {isOpen && <div className="tooltip">{content}</div>}
    </div>
  );
}
