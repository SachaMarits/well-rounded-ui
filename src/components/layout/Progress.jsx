import React from "react"
import PropTypes from "prop-types";

export default function Progress({ className, value, min, max, color }) {
   return (
      <div className={`${className || ""} progress`}>
         <div
            className={`progress-bar bg-${color}`}
            style={{ width: `${(value / (min + max)) * 100}%` }}
         />
      </div>
   );
}

Progress.propTypes = {
   className: PropTypes.string,
   value: PropTypes.number.isRequired,
   min: PropTypes.number.isRequired,
   max: PropTypes.number.isRequired,
   color: PropTypes.string.isRequired,
};

Progress.defaultProps = {
   className: "",
};
