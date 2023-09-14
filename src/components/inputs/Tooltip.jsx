import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Tooltip({
  toggle,
  content,
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
      {isOpen && <div className="tooltip">{content}</div>}
    </div>
  );
}

Tooltip.propTypes = {
  toggle: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  openOnHover: PropTypes.bool,
  closeOnLeave: PropTypes.bool,
};

Tooltip.defaultProps = {
  openOnHover: false,
  closeOnLeave: false,
};
