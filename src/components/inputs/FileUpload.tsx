import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";

interface CustomFile extends File {
  base64Data?: string;
}

interface FileUploadProps {
  className?: string;
  allowedExtensions?: string[];
  multiple: boolean;
  dragAndDrop: boolean;
  onChange: (f: any) => void;
  showAllowedExtensions?: boolean;
}

export default function FileUpload({
  className = "",
  allowedExtensions,
  multiple,
  dragAndDrop,
  onChange,
  showAllowedExtensions = false
}: FileUploadProps) {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFiles(Array.from(e.dataTransfer.files));
  };

  const handleFiles = async (f: File[]) => {
    const filteredFiles = f.filter((file) => {
      const fileExtension = file.name.split(".").pop();
      if (allowedExtensions) return fileExtension ? allowedExtensions.includes(fileExtension) : false;
      return true;
    });

    const promises = filteredFiles.map((file: CustomFile) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const base64Data = e?.target?.result;
          if (typeof base64Data === "string") file.base64Data = base64Data;
          resolve(file);
        };
        reader.readAsDataURL(file);
      });
    });

    const filesWithBase64: any = await Promise.all(promises);
    setFiles(multiple ? [...files, ...filesWithBase64] : [filesWithBase64]);
  };

  const displayAllowedExtensions = allowedExtensions && showAllowedExtensions && `(.${allowedExtensions.join(", .")})`;

  useEffect(() => {
    if (onChange) onChange(files);
  }, [files]);

  return (
    <div
      className={`file-upload ${className}`}
      onDragEnter={dragAndDrop ? handleDragEnter : undefined}
      onDragOver={dragAndDrop ? handleDragEnter : undefined}
      onDragLeave={dragAndDrop ? handleDragLeave : undefined}
      onDrop={dragAndDrop ? handleDrop : undefined}
    >
      {dragAndDrop && (
        <div className={`empty-line-placeholder${isDragOver ? "-success" : ""}`}>
          <p className="p-3">
            <i className="mdi mdi-upload text-xl" /> Drag and drop or{" "}
            <u className="pointer" onClick={() => fileInputRef?.current?.click()}>
              choose {multiple ? "files" : "a file"}
            </u>{" "}
            to upload {displayAllowedExtensions}
          </p>
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => e.target.files && handleFiles(Array.from(e.target.files))}
        multiple={multiple}
        style={{ display: "none" }}
        accept={allowedExtensions ? allowedExtensions.map((ext) => `.${ext}`).join(",") : "*"}
      />

      {!dragAndDrop && (
        <Button
          color="primary"
          action="upload"
          text={`Upload files ${displayAllowedExtensions}`}
          onClick={() => (fileInputRef.current ? fileInputRef.current.click() : {})}
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
