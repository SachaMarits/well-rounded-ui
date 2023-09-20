import React, { useContext } from "react";
import { Dropdown } from "../../inputs";
import { TextEditorContext } from "./TextEditorContext";

type Setting = {
  style: string;
  icon: string;
};

const settings: Setting[] = [
  { style: "bold", icon: "bold" },
  { style: "italic", icon: "italic" },
  { style: "underline", icon: "underline" },
  { style: "justifyLeft", icon: "align-left" },
  { style: "justifyCenter", icon: "align-center" },
  { style: "justifyRight", icon: "align-right" },
];

type FontSizeOption = {
  id: number;
  text: string;
};

const fontSizeOptions: FontSizeOption[] = [
  { id: 1, text: "Smaller" },
  { id: 2, text: "Small" },
  { id: 3, text: "Medium" },
  { id: 4, text: "Large" },
  { id: 5, text: "Larger" },
  { id: 6, text: "Extra Large" },
];

type ToolbarTextProps = {
  handleStyle: (style: string, value?: string | undefined) => void;
};


export default function ToolbarText({ handleStyle }: ToolbarTextProps) {
  const { hideTitles, hideGroupNames } = useContext(TextEditorContext);

  const title = (text: string) => capitalizeFirstLetter(text.replace(/-/g, " "));

  const capitalizeFirstLetter = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <div className="tool-group">
      <div className="tool-group-icons">
        {settings.map(({ icon, style }) => (
          <button
            key={icon}
            className="btn btn-option"
            onClick={() => handleStyle(style)}
            title={hideTitles ? "" : title(icon)}
          >
            <i className={`mdi mdi-format-${icon}`} />
          </button>
        ))}
        <Dropdown
          options={fontSizeOptions}
          toggle={
            <button
              className="btn btn-option btn-collapse"
              title={hideTitles ? "" : "Font size"}
            >
              <i className={`mdi mdi-format-font`} />
              <i className={`mdi mdi-chevron-down`} />
            </button>
          }
          onClick={(id) => handleStyle("fontSize", id)}
          closeOnLeave
        />
      </div>
      {!hideGroupNames && <p className="tool-group-title">Text</p>}
    </div>
  );
}
