import React from "react"
import PropTypes from "prop-types";

export default function Card({ className, children, onClick }) {
   return (
      <div className={`card ${className}`} onClick={onClick}>
         {children}
      </div>
   );
}

Card.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node.isRequired,
   onClick: PropTypes.func,
};

Card.defaultProps = {
   className: "",
   onClick: () => {},
};
