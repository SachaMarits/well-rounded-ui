import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ColorPalette } from "well-rounded-ui";

describe("<ColorPalette>", () => {
  it("should render correctly", () => {
    const { container } = render(
      <ColorPalette defaultValue={["#2a9d8f", "#264653", "#a7c957", "#e9c46a", "#e76f51", "#d6ccc2"]} />
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="color-palette"
      >
        <input
          type="color"
          value="#2a9d8f"
        />
        <input
          type="color"
          value="#264653"
        />
        <input
          type="color"
          value="#a7c957"
        />
        <input
          type="color"
          value="#e9c46a"
        />
        <input
          type="color"
          value="#e76f51"
        />
        <input
          type="color"
          value="#d6ccc2"
        />
      </div>
    `);
  });
});
