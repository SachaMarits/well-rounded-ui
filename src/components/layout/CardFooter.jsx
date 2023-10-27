import React from "react"
import PropTypes from "prop-types";

export default function CardFooter({ children }) {
   return <div className="card-footer d-flex flex-row-reverse">{children}</div>;
}

CardFooter.propTypes = {
   children: PropTypes.node.isRequired,
};

export { CardFooter as ModalFooter };
