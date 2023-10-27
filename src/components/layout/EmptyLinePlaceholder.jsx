import React from "react"
import PropTypes from "prop-types";

export default function EmptyLinePlaceholder({ style, onClick, text, action }) {
   return (
      <div className="empty-line-placeholder pointer mt-3" style={style} onClick={onClick}>
         {text} {action === "add" && <i className="mdi mdi-plus" />}
      </div>
   );
}

EmptyLinePlaceholder.propTypes = {
   style: PropTypes.objectOf(PropTypes.number),
   onClick: PropTypes.func.isRequired,
   text: PropTypes.string.isRequired,
   action: PropTypes.string,
};

EmptyLinePlaceholder.defaultProps = {
   style: {},
   action: "",
};
