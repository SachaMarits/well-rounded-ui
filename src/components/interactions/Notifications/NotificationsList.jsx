import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import NoDataPlaceholder from "../../utils/NoDataPlaceholder";
import Notification from "./Notification";

export default function NotificationsList({ isOpen, notifications, close }) {
   const wrapperRef = useRef(null);

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (
            wrapperRef.current &&
            !wrapperRef.current.contains(event.target) &&
            event.target.id !== "notification-bell" &&
            event.target.id !== "notification-number"
         ) {
            close();
         }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
   }, [wrapperRef]);

   return (
      isOpen && (
         <div className="notifications" ref={wrapperRef}>
            {notifications.length > 0 ? (
               <ul>
                  {notifications.map(({ id, title, body, icon }) => (
                     <Notification key={id} title={title} body={body} icon={icon} />
                  ))}
               </ul>
            ) : (
               <NoDataPlaceholder
                  icon="bell-off"
                  text="You are up to date, no notification to display !"
               />
            )}
         </div>
      )
   );
}

NotificationsList.propTypes = {
   isOpen: PropTypes.bool.isRequired,
   notifications: PropTypes.arrayOf(PropTypes.object).isRequired,
   close: PropTypes.func.isRequired,
};
