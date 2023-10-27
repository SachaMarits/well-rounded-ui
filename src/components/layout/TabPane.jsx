import React from "react"
import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
export default function TabPane({ name, children, disabled }) {
   return <div className="tab-pane">{children}</div>;
}

TabPane.propTypes = {
   name: PropTypes.string,
   children: PropTypes.node.isRequired,
   disabled: PropTypes.bool,
};

TabPane.defaultProps = {
   name: "",
   disabled: false,
};

