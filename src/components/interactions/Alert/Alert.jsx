import React from "react"
import { createRoot } from 'react-dom/client';
import { Button } from "../../inputs";
import { ErrorIcon, SuccessIcon, WarningIcon } from "../Icons/Icons";

const Alert = (title = null, text = null, icon = null) => {
  const doesAlertDomExist = document.getElementById("alert-dom");
  
  if (!doesAlertDomExist) {
    const divElement = document.createElement("div");
    divElement.id = "alert-dom";
    document.body.insertBefore(divElement, document.body.lastChild);
  }
  
  const root = createRoot(document.getElementById("alert-dom"));
  const renderIcon = () => {
    if (icon === "success") return <SuccessIcon />;
    if (icon === "warning") return <WarningIcon />;
    if (icon === "error") return <ErrorIcon />;
    return null;
  };

  const hide = () => {
    root.unmount(document.getElementById("alert-dom"));
  };

  const dom = (
    <div id="alert-container">
      <div className="alert-modal">
        {icon && renderIcon()}
        {title && <h2>{title}</h2>}
        {text && <p>{text}</p>}
        <Button text="Close" color="primary" onClick={() => hide()} />
      </div>
    </div>
  );

  root.render(dom);
};

export default Alert;
