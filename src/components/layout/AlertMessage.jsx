import React from "react"
import PropTypes from "prop-types";

export default function AlertMessage({ className, children, color }) {
   return <div className={`alert-message alert-message-${color} ${className || ""}`}>{children}</div>;
}

AlertMessage.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node.isRequired,
   color: PropTypes.string.isRequired,
};

AlertMessage.defaultProps = {
   className: "",
};

