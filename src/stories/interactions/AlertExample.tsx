import React from "react";
import { Button } from "../../components/inputs";
import { Alert } from "../../components/interactions";

interface Button {
  color: "primary" | "success" | "warning" | "danger" | "default" | "gradient";
  text: string;
  value: any;
}

interface AlertExampleProps {
  title: string;
  message: string;
  icon: "success" | "warning" | "error";
  buttons: Button[];
}

export default function AlertExample({ title, message, icon, buttons = [] }: AlertExampleProps) {
  return <Button color="primary" text="Show alert" onClick={() => Alert(title, message, icon, buttons)} />;
}
