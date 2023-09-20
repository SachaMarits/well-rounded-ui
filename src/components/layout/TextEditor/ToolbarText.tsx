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

type Option = {
  id: number;
  text: string;
};

const fontSizeOptions: Option[] = [
  { id: 1, text: "Smaller" },
  { id: 2, text: "Small" },
  { id: 3, text: "Medium" },
  { id: 4, text: "Large" },
  { id: 5, text: "Larger" },
  { id: 6, text: "Extra Large" },
];

const fontOptions = [
  { id: "Arial, sans-serif", text: "Arial" },
  { id: "Times New Roman, serif", text: "Times New Roman" },
  { id: "Verdana, sans-serif", text: "Verdana" },
  { id: "Georgia, serif", text: "Georgia" },
  { id: "Courier New, monospace", text: "Courier New" },
];

type ToolbarTextProps = {
  handleStyle: (style: string, value?: string | undefined) => void;
};


export default function ToolbarText({ handleStyle }: ToolbarTextProps) {
  const { hideTitles, hideGroupNames } = useContext(TextEditorContext);

  const title = (text: string) => capitalizeFirstLetter(text.replace(/-/g, " "));

  const capitalizeFirstLetter = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);

  const overrideFontFaces = () => {
    const fontElements = document.querySelectorAll('font');

    fontElements.forEach((fontElement) => {
      const fontFaceValue = fontElement.getAttribute('face');
      if (fontFaceValue) fontElement.style.fontFamily = fontFaceValue;
    });
  }

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
              <i className={`mdi mdi-format-size`} />
              <i className={`mdi mdi-chevron-down`} />
            </button>
          }
          onClick={(id) => handleStyle("fontSize", id)}
          closeOnLeave
        />
        <Dropdown
          options={fontOptions}
          toggle={
            <button
              className="btn btn-option btn-collapse"
              title={hideTitles ? "" : "Font"}
            >
              <i className={`mdi mdi-format-font`} />
              <i className={`mdi mdi-chevron-down`} />
            </button>
          }
          onClick={(id) => {
            handleStyle("fontName", id);
            overrideFontFaces();
          }}
          closeOnLeave
        />
      </div>
      {!hideGroupNames && <p className="tool-group-title">Text</p>}
    </div>
  );
}
