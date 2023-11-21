import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

interface ModalProps {
  onClose: () => void;
  show: boolean;
  children: React.ReactNode;
}

const Modal = ({ onClose, show, children }: ModalProps) => {
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

  return ReactDOM.createPortal(
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }} nodeRef={nodeRef}>
      <div ref={nodeRef} className="modal" role="alert" onClick={onClose}>
        <div className="modal-content" role="alert" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root") ?? document.body
  );
};

export default Modal;
