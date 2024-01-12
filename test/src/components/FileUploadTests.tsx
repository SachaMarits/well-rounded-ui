// @ts-ignore
import { Collapse, FileUpload } from "well-rounded-ui";

export default function FileUploadTests() {
  return (
    <Collapse title="File Uploads" className="mb-3">
      <FileUpload
        className="mt-3"
        allowedExtensions={["jpg", "jpeg", "png"]}
        dragAndDrop
        multiple
        onChange={(test: unknown) => console.log(test)}
      />
    </Collapse>
  );
}
