import { useState } from "react";
// @ts-ignore
import { Collapse, Button, FloatingSidebar } from "well-rounded-ui";

export default function FloatingSidebarTests() {
  const [isFloatingSidebarLeftOpen, setIsFloatingSidebarLeftOpen] = useState(false);
  const [isFloatingSidebarRightOpen, setIsFloatingSidebarRightOpen] = useState(false);

  return (
    <Collapse title="Floating Sidebar" className="mb-3">
      <Button
        color="primary"
        className="mx-2"
        onClick={() => setIsFloatingSidebarLeftOpen(true)}
        text="Open Left Floating Sidebar"
      />
      <Button
        color="primary"
        className="mx-2"
        onClick={() => setIsFloatingSidebarRightOpen(true)}
        text="Open Right Floating Sidebar"
      />
      <FloatingSidebar
        direction="left"
        show={isFloatingSidebarLeftOpen}
        onClose={() => setIsFloatingSidebarLeftOpen(false)}
        title="Left FloatingSidebar"
      >
        <p className="p-3">Left</p>
      </FloatingSidebar>

      <FloatingSidebar
        direction="right"
        show={isFloatingSidebarRightOpen}
        onClose={() => setIsFloatingSidebarRightOpen(false)}
        title="Right FloatingSidebar"
      >
        <p className="p-3">Right</p>
      </FloatingSidebar>
    </Collapse>
  );
}
