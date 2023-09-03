import PropTypes from "prop-types";

export default function Row({ className, children }) {
   return <div className={`row ${className}`}>{children}</div>;
}

Row.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node.isRequired,
};

Row.defaultProps = {
   className: "",
};
