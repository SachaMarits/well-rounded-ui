import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

interface FloatingSidebarProps {
  onClose: () => void;
  show: boolean;
  children: React.ReactNode;
  className?: string;
  title?: string;
  direction?: "left" | "right";
}

const FloatingSidebar = ({
  onClose,
  show,
  children,
  className = "",
  title = "",
  direction = "right"
}: FloatingSidebarProps) => {
  const nodeRef = useRef(null);
  const closeOnEscapeKeyDown = (e: any) => {
    if ((e.charCode || e.keyCode) === 27) onClose();
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  if (!document.getElementById("root")) return;

  return ReactDOM.createPortal(
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }} nodeRef={nodeRef}>
      <div ref={nodeRef} className={`floating-sidebar ${direction === "left" ? "left" : "right"} ${className || ""}`}>
        <i className="mdi mdi-close text-xl pointer" onClick={() => onClose()} />
        <h3 className="pt-3 pb-2" style={{ marginLeft: "52px" }}>
          {title}
        </h3>
        {children}
      </div>
    </CSSTransition>,
    document.getElementById("root") ?? document.body
  );
};

export default FloatingSidebar;
