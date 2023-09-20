import React, { useRef, useEffect, useContext } from "react";
import { TextEditorContext } from "./TextEditorContext";

interface ToolbarImageProps {
  text: HTMLDivElement;
}

const ToolbarImage = ({ text }: ToolbarImageProps) => {
  const { hideTitles, hideGroupNames } = useContext(TextEditorContext);
  const imageInputRef = useRef(null);

  useEffect(() => {
    document.querySelectorAll(".selected-image-option").forEach((button: any) => {
      button.disabled = true;
    });
  }, []);

  const handleAlignment = (float: string) => {
    const selectedImage = document.querySelector(".selected-image") as HTMLImageElement;
    if (selectedImage) selectedImage.style.float = float;
  };

  const handleInsertImage = () => imageInputRef.current?.click();

  const handleImageUpload = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const imageUrl = event.target?.result as string;
        document.execCommand("insertImage", false, imageUrl);
        // @ts-ignore
        text.current?.querySelectorAll("img").forEach((img: HTMLImageElement) => {
          img.classList.add("resizable-image");
          img.addEventListener("mousedown", (e: MouseEvent) => {
            if (e.target === img) {
              e.preventDefault();
              const originalWidth = img.offsetWidth;
              const originalHeight = img.offsetHeight;
              const startX = e.clientX;
              const startY = e.clientY;

              document.addEventListener("mousemove", resizeImage);
              document.addEventListener("mouseup", () => {
                document.removeEventListener("mousemove", resizeImage);
              });

              function resizeImage(e: MouseEvent) {
                const newWidth = originalWidth + (e.clientX - startX);
                const newHeight = originalHeight + (e.clientY - startY);
                img.style.width = newWidth + "px";
                img.style.height = newHeight + "px";
              }
            }
          });
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="tool-group">
      <div className="tool-group-icons">
        <button className="btn btn-option" onClick={handleInsertImage} title={hideTitles ? "" : "Insert image"}>
          <i className={`mdi mdi-image-plus`} />
        </button>
        <input
          type="file"
          accept="image/*"
          ref={imageInputRef}
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
        <button
          className="btn btn-option selected-image-option"
          onClick={() => handleAlignment("left")} title={hideTitles ? "" : "Align left"}
        >
          <i className="mdi mdi-align-horizontal-left" />
        </button>
        <button
          className="btn btn-option selected-image-option"
          onClick={() => handleAlignment("right")} title={hideTitles ? "" : "Align right"}
        >
          <i className="mdi mdi-align-horizontal-right" />
        </button>
        <button
          className="btn btn-option selected-image-option"
          onClick={() => handleAlignment("none")} title={hideTitles ? "" : "Remove alignment"}
        >
          <i className="mdi mdi-signature-image" />
        </button>
      </div>
      {!hideGroupNames && <p className="tool-group-title">Image</p>}
    </div>
  );
};

export default ToolbarImage;