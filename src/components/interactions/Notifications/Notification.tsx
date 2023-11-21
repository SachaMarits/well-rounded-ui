import React from "react";

interface NotificationProps {
  title: string;
  body: string;
  icon?: string;
}

export default function Notification({ title, body, icon = "mdi mdi-email-outline" }: NotificationProps) {
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
