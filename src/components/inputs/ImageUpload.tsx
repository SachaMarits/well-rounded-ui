import React, { useState, useRef, useEffect } from "react";

interface CustomFile extends File {
  base64Data?: string;
}

interface ImageUploadProps {
  className?: string;
  allowedExtensions?: string[];
  multiple?: boolean;
  dragAndDrop?: boolean;
  onChange: (f: any) => void;
  height?: number;
  width?: number;
  defaultValue?: CustomFile[];
  showAllowedExtensions?: boolean;
}

export default function ImageUpload({
  className = "",
  allowedExtensions = ["jpg", "jpeg", "png"],
  multiple,
  dragAndDrop,
  onChange,
  height = 150,
  width = 150,
  defaultValue = [],
  showAllowedExtensions = false
}: ImageUploadProps) {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [files, setFiles] = useState<CustomFile[]>(defaultValue);
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

  const handleFiles = async (f: CustomFile[]) => {
    const filteredFiles = f.filter((file) => {
      const fileExtension = file.name.split(".").pop();
      return fileExtension ? allowedExtensions.includes(fileExtension) : null;
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
    <div className={`image-upload ${className}`}>
      <div className="d-flex flex-wrap">
        {files.map(({ base64Data }, i) => (
          <div key={i} className="position-relative">
            <div
              className="mr-3 mb-3 image-uploaded"
              style={{
                width,
                height,
                backgroundImage: `url(${base64Data})`,
                backgroundPosition: "center",
                backgroundSize: "cover"
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
          style={{ flex: 1 }}
          onDragEnter={dragAndDrop ? handleDragEnter : undefined}
          onDragOver={dragAndDrop ? handleDragEnter : undefined}
          onDragLeave={dragAndDrop ? handleDragLeave : undefined}
          onDrop={dragAndDrop ? handleDrop : undefined}
          onClick={() => (fileInputRef.current ? fileInputRef.current.click() : {})}
        >
          <i className="mdi mdi-upload text-xl" />
          <p className={!dragAndDrop ? "mb-2" : ""}>
            <u>Upload image</u>
          </p>
          {dragAndDrop && <p className="text-secondary mb-2">or drag & drop {displayAllowedExtensions}</p>}
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => e.target.files && handleFiles(Array.from(e.target.files))}
        multiple={multiple}
        style={{ display: "none" }}
        accept={allowedExtensions.map((ext) => `.${ext}`).join(",")}
      />
    </div>
  );
}
