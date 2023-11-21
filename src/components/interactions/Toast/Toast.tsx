import React from "react";
import { createRoot } from "react-dom/client";
import { ErrorIcon, SuccessIcon, WarningIcon } from "../Icons/Icons";
// @ts-ignore
import { success, danger, warning } from "../../../scss/_variables.module.scss";

const Toast = (
  title: string | null = null,
  text: string | null = null,
  icon: string | null = null,
  delay: number = 0,
  corner: string = "bottomRight"
) => {
  const toastsContainer = document.getElementById("toasts-container");
  if (!toastsContainer) throw new Error("You have to use <WellRoundedUI /> around your app to use Toast()");

  const root = createRoot(toastsContainer);

  if (corner.toLowerCase().includes("bottom")) toastsContainer.style.bottom = "0";
  if (corner.toLowerCase().includes("top")) toastsContainer.style.top = "0";
  if (corner.toLowerCase().includes("left")) toastsContainer.style.left = "0";
  if (corner.toLowerCase().includes("right")) toastsContainer.style.right = "0";

  const renderIcon = () => {
    if (icon === "success") return <SuccessIcon />;
    if (icon === "warning") return <WarningIcon />;
    if (icon === "error") return <ErrorIcon />;
    return null;
  };

  const returnBackground = () => {
    if (icon === "success") return success;
    if (icon === "warning") return warning;
    if (icon === "error") return danger;
    return success;
  };

  const hide = () => root.unmount();

  if (delay > 0) setTimeout(hide, delay);

  const dom = (
    <div className="toast-modal">
      {icon && renderIcon()}
      <div className="toast-text">
        {title && <h3>{title}</h3>}
        {text && <p>{text}</p>}
      </div>
      <i className="mdi mdi-close" onClick={hide} />
      {delay > 0 && (
        <div
          className="toast-progress"
          style={{
            backgroundColor: returnBackground(),
            animationDuration: `${delay}ms`,
            animationPlayState: "running"
          }}
        />
      )}
    </div>
  );

  root.render(dom);
};

export default Toast;
