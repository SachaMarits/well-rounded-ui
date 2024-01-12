import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { FileUpload } from "well-rounded-ui";

describe("<FileUpload>", () => {
  it("should render correctly", () => {
    const { container } = render(<FileUpload allowedExtensions={["jpg", "jpeg", "png"]} dragAndDrop multiple />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="file-upload "
      >
        <div
          class="empty-line-placeholder"
        >
          <p
            class="p-3"
          >
            <i
              class="mdi mdi-upload text-xl"
            />
             Drag and drop or
             
            <u
              class="pointer"
            >
              choose 
              files
            </u>
             
            to upload 
          </p>
        </div>
        <input
          accept=".jpg,.jpeg,.png"
          multiple=""
          style="display: none;"
          type="file"
        />
        <div
          class="flex-center flex-wrap"
        />
      </div>
    `);
  });
});
