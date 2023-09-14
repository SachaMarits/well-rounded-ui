import React, { useRef, useState } from "react";
import { Dropdown } from "../../inputs";
import ToolbarIconGroup from "./ToolbarIconGroup";

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

export default function TextEditorToolbar() {
  const [fontColor, setFontColor] = useState("#ff0000");
  const [highlightColor, setHighlightColor] = useState("#ffff00");
  const [fillColor, setFillColor] = useState("#00ff00");
  const imageInputRef = useRef(null);

  const handleInsertImage = () => {
    imageInputRef.current.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        document.execCommand("insertImage", false, imageUrl);
        setContent(textAreaRef.current.innerHTML);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStyle = (style, value = null) =>
    document.execCommand(style, false, value);

  const handleExportClick = () => {
    const htmlContent = textAreaRef.current.innerHTML;
    console.log(htmlContent); // Vous pouvez le stocker ou le manipuler selon vos besoins.
  };

  return (
    <div className="text-editor-toolbar">
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
      <button className="btn btn-option" onClick={handleInsertImage}>
        <i className={`mdi mdi-image-plus`} />
      </button>
      <input
        type="file"
        accept="image/*"
        ref={imageInputRef}
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
      <button onClick={handleExportClick}>Exporter en HTML</button>
    </div>
  );
}
