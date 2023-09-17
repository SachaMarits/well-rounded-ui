import React, { useRef, useEffect } from "react";

export default function ToolbarImage({ text }) {
  const imageInputRef = useRef(null);

  useEffect(() => {
    document.querySelectorAll(".selected-image-option").forEach((button) => {
      button.disabled = true;
    });
  }, []);

  const handleAlignment = (float) => {
    const selectedImage = document.getElementsByClassName("selected-image");
    console.log(selectedImage);
    if (selectedImage[0]) selectedImage[0].style.float = float;
  };

  const handleInsertImage = () => imageInputRef.current.click();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        document.execCommand("insertImage", false, imageUrl);
        text.current.querySelectorAll("img").forEach((img) => {
          img.classList.add("resizable-image");
          img.addEventListener("mousedown", (e) => {
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

              function resizeImage(e) {
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
        <button
          className="btn btn-option selected-image-option"
          onClick={() => handleAlignment("left")}
        >
          <i className="mdi mdi-align-horizontal-left" />
        </button>
        <button
          className="btn btn-option selected-image-option"
          onClick={() => handleAlignment("right")}
        >
          <i className="mdi mdi-align-horizontal-right" />
        </button>
        <button
          className="btn btn-option selected-image-option"
          onClick={() => handleAlignment("none")}
        >
          <i className="mdi mdi-signature-image" />
        </button>
      </div>
      <p className="tool-group-title">Image</p>
    </div>
  );
}
