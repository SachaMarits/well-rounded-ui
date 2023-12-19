import React, { useEffect, useState } from "react";

interface CollapseProps {
  className?: string;
  children: React.ReactNode;
  title?: string | React.ReactNode;
  show?: boolean;
  toggle?: () => void;
}

export default function Collapse({ className, title = "", children, show = false, toggle }: CollapseProps) {
  const [isOpen, setIsOpen] = useState(show || false);
  useEffect(() => setIsOpen(show), [show]);

  return (
    <div className={`collapse-wrapper ${isOpen ? "active" : ""} ${className ? className : ""}`}>
      <div
        className="collapse-title pointer"
        onClick={() => {
          if (toggle) toggle();
          setIsOpen(!isOpen);
        }}
      >
        {title} <i className={`mdi mdi-chevron-${isOpen ? "down" : "up"} text-xl`} />
      </div>
      <div className="collapse-content">{children}</div>
    </div>
  );
}
