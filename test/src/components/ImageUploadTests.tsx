// @ts-ignore
import { Collapse, ImageUpload } from "well-rounded-ui";

export default function ImageUploadTests() {
  return (
    <Collapse title="Image Upload" className="mb-3">
      <ImageUpload className="mt-3" dragAndDrop multiple onChange={(test: unknown) => console.log(test)} />
    </Collapse>
  );
}
