import React, { useRef } from "react";
import TextEditorToolbar from "./TextEditorToolbar";
import { TextEditorContext } from "./TextEditorContext";

interface TextEditorProps {
  initialValue?: string;
  hideTitles?: boolean;
  hideGroupNames?: boolean;
  options?: string[];
  vertical?: boolean;
  textWidth?: string;
}

export default function TextEditor({
  initialValue = "",
  hideTitles = false,
  hideGroupNames = false,
  options = ["text", "color", "image", "layout"],
  vertical = false,
  textWidth = "600px"
}: TextEditorProps) {
  const text = useRef(null);

  const handleImageClick = (e) => {
    const clickedImage = e.target as HTMLImageElement;

    if (text.current) {
      text.current.querySelectorAll("img").forEach((img) => {
        img.classList.remove("selected-image");
      });
      disableImageOptions(true);

      if (clickedImage.tagName === "IMG") {
        clickedImage.classList.add("selected-image");
        disableImageOptions(false);
      }
    }
  };

  const disableImageOptions = (disabled: boolean) => {
    document.querySelectorAll(".selected-image-option").forEach((button) => {
      (button as HTMLButtonElement).disabled = disabled;
    });
  };

  return (
    <TextEditorContext.Provider
      value={{ hideTitles, hideGroupNames, options, vertical }}
    >
      <div className={`text-editor${vertical ? "-vertical" : ""}`}>
        {!vertical && <TextEditorToolbar text={text} />}

        <div className="text-editor-document">
          <div
            contentEditable
            className="text-editor-content"
            style={{ width: textWidth }}
            ref={text}
            dangerouslySetInnerHTML={{
              __html: `<div style="width: ${textWidth}">${initialValue || ""}</div>`,
            }}
            onClick={handleImageClick}
          />
        </div>

        {vertical && <TextEditorToolbar text={text} />}
      </div>
    </TextEditorContext.Provider>
  );
}
