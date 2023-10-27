import React from "react"
import PropTypes from "prop-types";

export default function Col({ className, children, lg, md, sm, xs }) {
   return (
      <div
         className={`${className}
      ${lg ? ` col-lg-${lg}` : ""}
      ${md ? ` col-md-${md}` : ""}
      ${sm ? ` col-sm-${sm}` : ""}
      ${xs ? ` col-xs-${xs}` : ""}`}
      >
         {children}
      </div>
   );
}

Col.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node,
   lg: PropTypes.number,
   md: PropTypes.number,
   sm: PropTypes.number,
   xs: PropTypes.number,
};

Col.defaultProps = {
   className: "",
   lg: 4,
   md: 6,
   sm: 12,
   xs: 12,
   children: null,
};
