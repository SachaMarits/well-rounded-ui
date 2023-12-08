import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

interface ModalProps {
  onClose: () => void;
  /**
   * Show toggle button in the top right of the modal
   */
  toggle: boolean;
  show: boolean;
  children: React.ReactNode;
  size: "sm" | "md" | "lg" | "xl";
}

const Modal = ({ onClose, show, toggle = true, children, size = "sm" }: ModalProps) => {
  const nodeRef = useRef(null);
  const [isOpen, setIsOpen] = useState(show);
  const closeOnEscapeKeyDown = (e: any) => {
    if ((e.charCode || e.keyCode) === 27) {
      setIsOpen(false);
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  useEffect(() => setIsOpen(show), [show]);

  return ReactDOM.createPortal(
    <CSSTransition in={isOpen} unmountOnExit timeout={{ enter: 0, exit: 300 }} nodeRef={nodeRef}>
      <div ref={nodeRef} className={`modal modal-${size}`} role="alert" onClick={onClose}>
        <div className="modal-content" role="alert" onClick={(e) => e.stopPropagation()}>
          {toggle && <i className="mdi mdi-close pointer" onClick={() => setIsOpen(false)} />}
          {children}
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root") ?? document.body
  );
};

export default Modal;
