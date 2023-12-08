import React from "react";

interface ColProps {
  className?: string;
  children?: React.ReactNode;
  xl: number;
  lg: number;
  md: number;
  sm: number;
  xs: number;
}

export default function Col({ className = "", children, xl = 3, lg = 4, md = 6, sm = 12, xs = 12 }: ColProps) {
  return (
    <div
      className={`${className}
      ${xl ? ` col-xl-${xl}` : ""}
      ${lg ? ` col-lg-${lg}` : ""}
      ${md ? ` col-md-${md}` : ""}
      ${sm ? ` col-sm-${sm}` : ""}
      ${xs ? ` col-xs-${xs}` : ""}`}
    >
      {children}
    </div>
  );
}
