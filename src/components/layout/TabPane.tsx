import React from "react";

interface TabPaneProps {
  name?: string;
  children: React.ReactNode;
  /**
   * Disabled the tab click
   */
  disabled?: boolean;
}

// eslint-disable-next-line no-unused-vars
export default function TabPane({ name = "", children, disabled = false }: TabPaneProps) {
  return <div className="tab-pane">{children}</div>;
}
