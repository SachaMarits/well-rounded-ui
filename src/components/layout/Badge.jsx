import React from "react"
import PropTypes from "prop-types";

export default function Badge({ className, children, color }) {
   return <div className={`badge badge-${color} ${className || ""}`}>{children}</div>;
}

Badge.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node.isRequired,
   color: PropTypes.string.isRequired,
};

Badge.defaultProps = {
   className: "",
};

