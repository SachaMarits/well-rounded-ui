import React from "react";
import { Tooltip } from "../../inputs";

export default function ToolbarIconGroup({ icon, color, onChange }) {
  return (
    <Tooltip
      toggle={
        <button className="btn btn-option">
          <div className="icon-collapse">
            <i className={`mdi mdi-format-color-${icon}`} />
            <i className={`mdi mdi-color-helper`} style={{ color }} />
          </div>
          <i className={`mdi mdi-chevron-down`} />
        </button>
      }
      content={
        <input
          type="color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
        />
      }
      closeOnLeave
    />
  );
}
