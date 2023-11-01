import React from "react"
import ReactDOM from "react-dom";
import { Button } from "../../inputs";
import { Error } from "./Error";
import { Success } from "./Success";
import { Warning } from "./Warning";

const Alert = (title = null, text = null, icon = null) => {
  const doesAlertDomExist = document.getElementById("alert-dom");

  if (!doesAlertDomExist) {
    const divElement = document.createElement("div");
    divElement.id = "alert-dom";
    document.body.insertBefore(divElement, document.body.lastChild);
  }

  const renderIcon = () => {
    if (icon === "success") return <Success />;
    if (icon === "warning") return <Warning />;
    if (icon === "error") return <Error />;
    return null;
  };

  const hide = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("alert-dom"));
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

  ReactDOM.render(dom, document.getElementById("alert-dom"));
};

export default Alert;
