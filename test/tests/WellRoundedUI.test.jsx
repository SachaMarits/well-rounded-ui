import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { WellRoundedUI } from "well-rounded-ui";

describe("<WellRoundedUI>", () => {
  it("should render correctly", () => {
    const { container } = render(<WellRoundedUI />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="well-rounded-ui"
      >
        <div
          id="toasts-container"
        />
      </div>
    `);
  });
});
