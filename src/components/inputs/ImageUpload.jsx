import React, { useState, useRef, useEffect } from "react";

export default function ImageUpload({
  allowedExtensions,
  multiple,
  dragAndDrop,
  onChange,
  height = 150,
  width = 150,
  defaultValue = []
}) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [files, setFiles] = useState(defaultValue);
  const fileInputRef = useRef();

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFiles(Array.from(e.dataTransfer.files));
  };

  const handleFiles = async (f) => {
    const filteredFiles = f.filter((file) => {
      const fileExtension = file.name.split(".").pop();
      return allowedExtensions.includes(fileExtension);
    });

    const promises = filteredFiles.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const base64Data = e.target.result;
          file.base64Data = base64Data;
          resolve(file);
        };
        reader.readAsDataURL(file);
      });
    });

    const filesWithBase64 = await Promise.all(promises);
    setFiles(multiple ? [...files, ...filesWithBase64] : [filesWithBase64]);
  };

  useEffect(() => {
    if (onChange) onChange(files);
  }, [files]);

  return (
    <div className="image-upload">
      <div className="d-flex flex-wrap">
        {files
          .map(({ base64Data }, i) => (
            <div key={i} className="position-relative">
              <div
                className="mr-3 mb-3 image-uploaded"
                style={{
                  width,
                  height,
                  backgroundImage: `url(${base64Data})`,
                  backgroundSize: "cover",
                }}
              >
                <i
                  className="mdi mdi-close pointer"
                  onClick={() => setFiles(files.filter((_, fileIndex) => fileIndex !== i))}
                />
              </div>
            </div>
          ))}
        <div
          className={`flex-center flex-column p-1 text-sm unselectable pointer mb-3 p-1 text-sm empty-line-placeholder${
            isDragOver ? "-success" : ""
          }`}
          style={{ height, width }}
          height={height}
          width={width}
          onDragEnter={dragAndDrop ? handleDragEnter : undefined}
          onDragOver={dragAndDrop ? handleDragEnter : undefined}
          onDragLeave={dragAndDrop ? handleDragLeave : undefined}
          onDrop={dragAndDrop ? handleDrop : undefined}
          onClick={() => fileInputRef.current.click()}
        >
          <i className="mdi mdi-upload text-xl" />
          <p className={!dragAndDrop ? "mb-2" : ""}>
            <u>Upload image</u>
          </p>
          {dragAndDrop && <p className="text-secondary mb-2">or drag & drop</p>}
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => handleFiles(Array.from(e.target.files))}
        multiple={multiple}
        style={{ display: "none" }}
        accept={allowedExtensions.map((ext) => `.${ext}`).join(",")}
      />
    </div>
  );
}
