import PropTypes from "prop-types";

export default function Notification({ title, body, icon }) {
   return (
      <li className="d-flex align-items-center">
         <div className="notification-icon">
            <i className={icon || "mdi mdi-email-outline"} />
         </div>
         <div>
            <h5>{title}</h5>
            <p className="text-xs text-secondary">{body}</p>
         </div>
      </li>
   );
}

Notification.propTypes = {
   title: PropTypes.string.isRequired,
   body: PropTypes.string.isRequired,
   icon: PropTypes.string,
};

Notification.defaultProps = {
   icon: "mdi mdi-email-outline",
};
