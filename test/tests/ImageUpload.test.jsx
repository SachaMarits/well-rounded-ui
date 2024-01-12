import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ImageUpload } from "well-rounded-ui";

describe("<FileUpload>", () => {
  it("should render correctly", () => {
    const { container } = render(<ImageUpload className="mt-3" dragAndDrop multiple />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="image-upload mt-3"
      >
        <div
          class="d-flex flex-wrap"
        >
          <div
            class="flex-center flex-column p-1 text-sm unselectable pointer mb-3 p-1 text-sm empty-line-placeholder"
            style="flex: 1;"
          >
            <i
              class="mdi mdi-upload text-xl"
            />
            <p
              class=""
            >
              <u>
                Upload image
              </u>
            </p>
            <p
              class="text-secondary mb-2"
            >
              or drag & drop 
            </p>
          </div>
        </div>
        <input
          accept=".jpg,.jpeg,.png"
          multiple=""
          style="display: none;"
          type="file"
        />
      </div>
    `);
  });
});
