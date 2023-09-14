import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Dropdown({
  toggle,
  options,
  onClick,
  openOnHover,
  closeOnLeave,
}) {
  const [isOpen, setIsOpen] = useState(false);
  let hoverTimeout = null;

  const handleMouseOver = () => {
    clearTimeout(hoverTimeout);
    if (openOnHover) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (closeOnLeave) hoverTimeout = setTimeout(() => setIsOpen(false), 300);
  };

  return (
    <div
      className="dropdown"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div onClick={() => setIsOpen(!isOpen)}>{toggle}</div>
      {isOpen && (
        <ul className="options">
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

Dropdown.propTypes = {
  toggle: PropTypes.node.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func.isRequired,
  openOnHover: PropTypes.bool,
  closeOnLeave: PropTypes.bool,
};

Dropdown.defaultProps = {
  options: [],
  openOnHover: false,
  closeOnLeave: false,
};
