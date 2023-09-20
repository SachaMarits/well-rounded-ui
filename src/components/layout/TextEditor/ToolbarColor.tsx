import React, { useContext, useState } from "react";
import ToolbarIconGroup from "./ToolbarIconGroup";
import { TextEditorContext } from "./TextEditorContext";

interface ToolbarColorProps {
  handleStyle: (style: string, value: string | undefined) => void;
}

const ToolbarColor = ({ handleStyle } : ToolbarColorProps) => {
  const { hideTitles, hideGroupNames } = useContext(TextEditorContext);
  const [fontColor, setFontColor] = useState("#ff0000");
  const [highlightColor, setHighlightColor] = useState("#ffff00");
  const [fillColor, setFillColor] = useState("#00ff00");

  return (
    <div className="tool-group">
      <div className="tool-group-icons">
        <ToolbarIconGroup
          icon="text"
          color={fontColor}
          onChange={(v) => {
            setFontColor(v);
            handleStyle("foreColor", v);
          }}
          title={hideTitles ? "" : "Font color"}
        />
        <ToolbarIconGroup
          icon="highlight"
          color={highlightColor}
          onChange={(v) => {
            setHighlightColor(v);
            handleStyle("hiliteColor", v);
          }}
          title={hideTitles ? "" : "Font highlight color"}
        />
        <ToolbarIconGroup
          icon="fill"
          color={fillColor}
          onChange={(v) => {
            setFillColor(v);
            handleStyle("backColor", v);
          }}
          title={hideTitles ? "" : "Background color"}
        />
      </div>
      {!hideGroupNames && <p className="tool-group-title">Color</p>}
    </div>
  );
};

export default ToolbarColor;
