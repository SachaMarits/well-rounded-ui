import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

const TextEditor = ({ initialValue }) => {
  const [content, setContent] = useState(initialValue || "");
  const [fontSize, setFontSize] = useState(3);
  const textAreaRef = useRef(null);

  const settings = [
    { style: "bold", icon: "bold" },
    { style: "italic", icon: "italic" },
    { style: "underline", icon: "underline" },
    { style: "justifyLeft", icon: "align-left" },
    { style: "justifyCenter", icon: "align-center" },
    { style: "justifyRight", icon: "align-right" },
    { style: "fontSize", value: 1, icon: "font-size-increase" },
    { style: "fontSize", value: -1, icon: "font-size-decrease" },
  ];

  const handleStyle = ({ style, value }) => {
    if (style === "fontSize") {
      value = fontSize + value;
      if (value < 1 || value > 8) return;
      setFontSize = { fontSize };
      value = value.toString();
    }
    document.execCommand(style, true, value);
  };

  const handleExportClick = () => {
    const htmlContent = textAreaRef.current.innerHTML;
    console.log(htmlContent); // Vous pouvez le stocker ou le manipuler selon vos besoins.
  };

  return (
    <div className="text-editor">
      <div>
        {settings.map(({ icon, ...s }) => (
          <button
            key={icon}
            className="btn btn-option"
            onClick={() => handleStyle(s)}
          >
            <i className={`mdi mdi-format-${icon}`} />
          </button>
        ))}
        <button onClick={handleExportClick}>Exporter en HTML</button>
      </div>
      <div className="text-editor-document">
        <div
          contentEditable
          className="text-editor-content"
          style={{ width: "600px", height: "100%" }}
          ref={textAreaRef}
          onBlur={(e) => setContent(e.target.innerHTML)}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

TextEditor.propTypes = {
  initialValue: PropTypes.string,
};

export default TextEditor;
