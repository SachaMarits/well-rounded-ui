import React from "react";

interface ColProps {
  className?: string;
  children?: React.ReactNode;
  size?: number | null;
  xl: number;
  lg: number;
  md: number;
  sm: number;
  xs: number;
}

export default function Col({
  className = "",
  children,
  size = null,
  xl = 3,
  lg = 4,
  md = 6,
  sm = 12,
  xs = 12
}: ColProps) {
  return (
    <div
      className={`${className}
      ${xl || size ? ` col-xl-${size || xl}` : ""}
      ${lg || size ? ` col-lg-${size || lg}` : ""}
      ${md || size ? ` col-md-${size || md}` : ""}
      ${sm || size ? ` col-sm-${size || sm}` : ""}
      ${xs || size ? ` col-xs-${size || xs}` : ""}`}
    >
      {children}
    </div>
  );
}
