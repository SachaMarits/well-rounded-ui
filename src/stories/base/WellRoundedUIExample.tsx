import React from "react";
import { Badge, WellRoundedUI } from "../../components/layout";

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
  options?: Options | null;
}

export default function WellRoundedUIExample({ options = null }: WellRoundedUIProps) {
  return (
    <WellRoundedUI options={options}>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="default">Default</Badge>
    </WellRoundedUI>
  );
}
