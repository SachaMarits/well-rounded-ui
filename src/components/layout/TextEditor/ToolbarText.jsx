import React from "react";
import { Dropdown } from "../../inputs";

const settings = [
  { style: "bold", icon: "bold" },
  { style: "italic", icon: "italic" },
  { style: "underline", icon: "underline" },
  { style: "justifyLeft", icon: "align-left" },
  { style: "justifyCenter", icon: "align-center" },
  { style: "justifyRight", icon: "align-right" },
];

const fontSizeOptions = [
  { id: 1, text: "Smaller" },
  { id: 2, text: "Small" },
  { id: 3, text: "Medium" },
  { id: 4, text: "Large" },
  { id: 5, text: "Larger" },
  { id: 6, text: "Extra Large" },
];

export default function ToolbarText({ handleStyle }) {
  return (
    <div className="tool-group">
      <div className="tool-group-icons">
        {settings.map(({ icon, style }) => (
          <button
            key={icon}
            className="btn btn-option"
            onClick={() => handleStyle(style)}
          >
            <i className={`mdi mdi-format-${icon}`} />
          </button>
        ))}
        <Dropdown
          options={fontSizeOptions}
          toggle={
            <button className="btn btn-option">
              <i className={`mdi mdi-format-font`} />
              <i className={`mdi mdi-chevron-down`} />
            </button>
          }
          onClick={(id) => handleStyle("fontSize", id)}
          closeOnLeave
        />
      </div>
      <p className="tool-group-title">Text</p>
    </div>
  );
}
