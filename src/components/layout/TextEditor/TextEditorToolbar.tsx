import React, { useContext, } from "react";
import ToolbarText from "./ToolbarText";
import ToolbarColor from "./ToolbarColor";
import ToolbarImage from "./ToolbarImage";
import ToolbarLayout from "./ToolbarLayout";
import { TextEditorContext } from "./TextEditorContext";

interface ToolbarColorProps {
  text: HTMLDivElement
}

const TextEditorToolbar  = ({ text } : ToolbarColorProps) => {
  const { options } = useContext(TextEditorContext);

  const handleStyle = (style: string, value: string | undefined = undefined) =>
    document.execCommand(style, false, value);

  return (
    <div className="text-editor-toolbar">
      {options.some((o: string) => o === "text") && <ToolbarText handleStyle={handleStyle} />}
      {options.some((o: string) => o === "color") && <ToolbarColor handleStyle={handleStyle} />}
      {options.some((o: string) => o === "image") && <ToolbarImage text={text} />}
      {options.some((o: string) => o === "layout") && <ToolbarLayout text={text} />}
    </div>
  );
};

export default TextEditorToolbar;
