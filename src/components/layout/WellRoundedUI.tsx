import "../../scss/app.scss";
import React from "react";

interface WellRoundedUIProps {
  children: React.ReactNode;
}

export default function WellRoundedUI({ children }: WellRoundedUIProps) {
  return (
    <>
      {children}
      <div id="toasts-container" />
    </>
  );
}
