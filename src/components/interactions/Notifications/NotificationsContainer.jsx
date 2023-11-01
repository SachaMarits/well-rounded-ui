import React, { useEffect, useState } from "react";
import NotificationsList from "./NotificationsList";

const data = [
   {
      id: 1,
      title: "Messages",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      icon: "mdi mdi-adjust",
   },
   {
      id: 2,
      title: "Messages",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
   },
];

export default function NotificationsContainer() {
   const [isOpen, setIsOpen] = useState(false);
   const [notifications, setNotifications] = useState([]);

   useEffect(() => {
      setNotifications(data);
   }, []);

   return (
      <>
         <div className="pointer" onClick={() => setIsOpen(!isOpen)} aria-hidden="true">
            <i
               id="notification-bell"
               className={`mdi ${notifications.length > 0 ? "mdi-bell-ring" : "mdi-bell"}`}
            />
            {notifications.length > 0 && (
               <span id="notification-number" className="notification-number unselectable">
                  {notifications.length}
               </span>
            )}
         </div>

         <NotificationsList
            isOpen={isOpen}
            notifications={notifications}
            close={() => setIsOpen(false)}
         />
      </>
   );
}
