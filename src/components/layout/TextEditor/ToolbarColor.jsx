import React, { useState } from "react";
import ToolbarIconGroup from "./ToolbarIconGroup";

export default function ToolbarColor({ handleStyle }) {
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
        />
        <ToolbarIconGroup
          icon="highlight"
          color={highlightColor}
          onChange={(v) => {
            setHighlightColor(v);
            handleStyle("hiliteColor", v);
          }}
        />
        <ToolbarIconGroup
          icon="fill"
          color={fillColor}
          onChange={(v) => {
            setFillColor(v);
            handleStyle("backColor", v);
          }}
        />
      </div>
      <p className="tool-group-title">Color</p>
    </div>
  );
}
