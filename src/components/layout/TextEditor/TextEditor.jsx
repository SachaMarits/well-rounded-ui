import React, { useRef } from "react";
import PropTypes from "prop-types";
import TextEditorToolbar from "./TextEditorToolbar";

export default function TextEditor({ initialValue }) {
  const text = useRef(null);

  const handleImageClick = (e) => {
    const clickedImage = e.target;

    text.current.querySelectorAll("img").forEach((img) => {
      img.classList.remove("selected-image");
    });
    disableImageOptions(true);

    if (clickedImage.tagName === "IMG") {
      clickedImage.classList.add("selected-image");
      disableImageOptions(false);
    }
  };

  const disableImageOptions = (disabled) => {
    document.querySelectorAll(".selected-image-option").forEach((button) => {
      button.disabled = disabled;
    });
  };

  return (
    <div className="text-editor">
      <TextEditorToolbar text={text} />

      <div className="text-editor-document">
        <div
          contentEditable
          className="text-editor-content"
          ref={text}
          dangerouslySetInnerHTML={{
            __html: initialValue || "",
          }}
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
}

TextEditor.propTypes = {
  initialValue: PropTypes.string,
};
