import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import TextEditorToolbar from "./TextEditorToolbar";

export default function TextEditor({ initialValue }) {
  const [content, setContent] = useState(initialValue || "");

  const textAreaRef = useRef(null);

  return (
    <div className="text-editor">
      <TextEditorToolbar />

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
}

TextEditor.propTypes = {
  initialValue: PropTypes.string,
};
