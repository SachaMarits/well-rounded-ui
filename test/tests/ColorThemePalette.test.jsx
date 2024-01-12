import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ColorThemePalette } from "well-rounded-ui";

describe("<ColorThemePalette>", () => {
  it("should render correctly", () => {
    const { container } = render(<ColorThemePalette />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="color-palette"
      >
        <input
          type="color"
          value=""
        />
        <input
          type="color"
          value=""
        />
        <input
          type="color"
          value=""
        />
        <input
          type="color"
          value=""
        />
        <input
          type="color"
          value=""
        />
        <input
          type="color"
          value=""
        />
      </div>
    `);
  });
});
