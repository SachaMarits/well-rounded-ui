import React, { useState } from "react";
import { Option } from "src/types/Options";

interface DropdownProps {
  toggle: React.ReactNode;
  options: Option[];
  onClick: (id: number) => void;
  openOnHover: boolean;
  closeOnLeave: boolean;
  width: number;
}

export default function Dropdown({ toggle, options, onClick, openOnHover, closeOnLeave, width }: DropdownProps) {
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
      {isOpen && (
        <ul className="options" style={{ width }}>
          {options.map(({ id, text }) => (
            <li
              key={id}
              className="pointer"
              onClick={() => {
                onClick(id);
                setIsOpen(false);
              }}
            >
              {text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
