import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";

export default function FileUpload({
  allowedExtensions,
  multiple,
  dragAndDrop,
  onChange
}) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [files, setFiles] = useState([]);
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
    if (onChange) onChange(files)
  }, [files])
  
  return (
    <div
      className="file-upload"
      onDragEnter={dragAndDrop ? handleDragEnter : undefined}
      onDragOver={dragAndDrop ? handleDragEnter : undefined}
      onDragLeave={dragAndDrop ? handleDragLeave : undefined}
      onDrop={dragAndDrop ? handleDrop : undefined}
    >
      {dragAndDrop && (
        <div
          className={`empty-line-placeholder${isDragOver ? "-success" : ""}`}
        >
          <p className="p-3">
            <i className="mdi mdi-upload text-xl" /> Drag and drop or{" "}
            <u className="pointer" onClick={() => fileInputRef.current.click()}>
              choose {multiple ? "files" : "a file"}
            </u>{" "}
            to upload
          </p>
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => handleFiles(Array.from(e.target.files))}
        multiple={multiple}
        style={{ display: "none" }}
        accept={allowedExtensions.map((ext) => `.${ext}`).join(",")}
      />

      {!dragAndDrop && (
        <Button
          color="primary"
          action="upload"
          text="Upload files"
          onClick={() => fileInputRef.current.click()}
        />
      )}

      <div className="flex-center flex-wrap">
        {files
          .filter((f) => f.name)
          .map(({ name }) => (
            <div key={name} className="file-preview">
              {name}{" "}
              <i
                className="mdi mdi-close text-danger pointer ml-2 p-1"
                onClick={() => setFiles(files.filter((f) => f.name !== name))}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
