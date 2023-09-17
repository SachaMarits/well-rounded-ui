import React from "react";
import ToolbarText from "./ToolbarText";
import ToolbarColor from "./ToolbarColor";
import ToolbarImage from "./ToolbarImage";
import ToolbarLayout from "./ToolbarLayout";

export default function TextEditorToolbar({ text }) {
  const handleStyle = (style, value = null) =>
    document.execCommand(style, false, value);
  return (
    <div className="text-editor-toolbar">
      <ToolbarText handleStyle={handleStyle} />
      <ToolbarColor handleStyle={handleStyle} />
      <ToolbarImage text={text} />
      <ToolbarLayout text={text} />
    </div>
  );
}
