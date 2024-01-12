import React, { useEffect, useState } from "react";
import { Button } from "../../components/inputs";
import { FloatingSidebar } from "../../components/interactions";

interface Button {
  color: "primary" | "success" | "warning" | "danger" | "default" | "gradient";
  text: string;
  value: any;
}

interface FloatingSidebarExampleProps {
  show: boolean;
  title?: string;
  direction?: "left" | "right";
}

export default function FloatingSidebarExample({ show, title = "", direction = "right" }: FloatingSidebarExampleProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setIsSidebarOpen(show);
  }, [show]);

  return (
    <>
      <Button color="primary" text="Show sidebar" onClick={() => setIsSidebarOpen(true)} />
      <FloatingSidebar direction={direction} show={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} title={title}>
        <p className="p-3">Any content</p>
      </FloatingSidebar>
    </>
  );
}
