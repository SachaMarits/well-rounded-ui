import "../../scss/app.scss";
import React from "react";

interface Colors {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  danger: string;
  default: string;
}

interface Options {
  colors?: Colors;
}

interface WellRoundedUIProps {
  children: React.ReactNode;
  options?: Options | null;
}

export default function WellRoundedUI({ children, options = null }: WellRoundedUIProps) {
  const customStyles = options?.colors
    ? `
    :root {
      ${options.colors.primary ? `--well-rounded-primary: ${options.colors.primary};` : ""}
      ${options.colors.secondary ? `--well-rounded-secondary: ${options.colors.secondary};` : ""}
      ${options.colors.success ? `--well-rounded-success: ${options.colors.success};` : ""}
      ${options.colors.warning ? `--well-rounded-warning: ${options.colors.warning};` : ""}
      ${options.colors.danger ? `--well-rounded-danger: ${options.colors.danger};` : ""}
      ${options.colors.default ? `--well-rounded-default: ${options.colors.default};` : ""}
    }
  `
    : "";

  return (
    <div className="well-rounded-ui">
      {options?.colors && <style>{customStyles}</style>}
      {children}
      <div id="toasts-container" />
    </div>
  );
}
