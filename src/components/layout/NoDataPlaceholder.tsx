import React from "react";
import PropTypes from "prop-types";

interface NoDataPlaceholderProps {
  /**
   * Mdi icon's name
   */
  icon?: string;
  text: string;
  /**
   * Button to add a new entity
   */
  button?: React.ReactNode;
}

export default function NoDataPlaceholder({ icon = "", text, button = null }: NoDataPlaceholderProps) {
  return (
    <div className="flex-center flex-column h-200 p-3">
      {icon && <i className={`mdi mdi-${icon} text-xxl text-secondary mb-2`} />}
      {text && <p className="text-center text-secondary mb-3">{text}</p>}
      {button}
    </div>
  );
}

NoDataPlaceholder.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  button: PropTypes.node
};

NoDataPlaceholder.defaultProps = {
  icon: "",
  button: null
};
