import PropTypes from "prop-types";

export default function CardHeader({ children }) {
   return <div className="card-header">{children}</div>;
}

CardHeader.propTypes = {
   children: PropTypes.node.isRequired,
};

export { CardHeader as ModalHeader };
