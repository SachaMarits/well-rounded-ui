import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "../layout";

export default function Button({
  className,
  text,
  color,
  onClick,
  submit,
  action,
  animate,
  isSubmitting,
  disabled,
  children,
}) {
  const styles = () => {
    let classNames = `${className} btn${animate ? " fadeIn" : ""} ${
      isSubmitting ? " btn-disabled" : ""
    }`;
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
            {action && <i className={`${text ? "ml-2": ""} ${icon()}`} />}
          </>
        )
      )}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  submit: PropTypes.bool,
  action: PropTypes.string,
  animate: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node
};

Button.defaultProps = {
  className: "",
  text: "",
  submit: false,
  action: "",
  animate: false,
  isSubmitting: false,
  disabled: false,
  onClick: () => {},
  children: null
};
