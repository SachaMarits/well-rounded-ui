import React from "react";
import { Spinner } from "../layout";

interface ButtonProps {
  className?: string;
  text?: string;
  color?: "primary" | "success" | "warning" | "danger" | "default" | "gradient";
  onClick?: () => void;
  submit?: boolean;
  action?: string;
  animate?: boolean;
  isSubmitting?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export default function Button({
  className = "",
  text = "",
  submit = false,
  action = "",
  animate = false,
  isSubmitting = false,
  disabled = false,
  onClick = () => {},
  children = null,
  color = "primary"
}: ButtonProps) {
  const styles = () => {
    let classNames = `${className} btn${animate ? " fadeIn" : ""} ${isSubmitting ? " btn-disabled" : ""}`;
    classNames += ` btn-${color}`;
    return classNames;
  };

  const icon = () => {
    switch (action) {
      case "add":
        return "mdi mdi-plus-thick";
      case "delete":
        return "mdi mdi-delete";
      case "edit":
        return "mdi mdi-pencil";
      case "upload":
        return "mdi mdi-upload";
      case "download":
        return "mdi mdi-download";
      case "send":
        return "mdi mdi-send";
      case "navigate":
        return "mdi mdi-chevron-right";
      case "cart":
      case "shop":
        return "mdi mdi-cart";
      case "pay":
        return "mdi mdi-currency-eur";
      default:
        return action;
    }
  };

  return (
    <button
      type={submit ? "submit" : "button"}
      className={styles()}
      onClick={() => onClick()}
      disabled={isSubmitting || disabled}
    >
      {isSubmitting ? (
        <Spinner size="xs" />
      ) : (
        children || (
          <>
            {text}
            {action && <i className={`${text ? "ml-2" : ""} ${icon()}`} />}
          </>
        )
      )}
    </button>
  );
}
