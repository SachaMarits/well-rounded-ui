import React, { useContext } from "react";
import { Tooltip } from "../../inputs";
import { TextEditorContext } from "./TextEditorContext";

interface ToolbarIconGroupProps {
  icon: string;
  color: string;
  onChange: (color: string) => void;
  title: string;
}

const ToolbarIconGroup = ({ icon, color, onChange, title }: ToolbarIconGroupProps) => {
  const { hideTitles } = useContext(TextEditorContext);

  return (
    <Tooltip
      toggle={
        <button
          className="btn btn-option btn-collapse"
          title={hideTitles || !title ? "" : title}
        >
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
};

export default ToolbarIconGroup;
