import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Spinner } from "well-rounded-ui";

describe("<Spinner>", () => {
  it("should render correctly", () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <svg
        class="spinner "
        style="height: 32px; width: 32px;"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          class="path path-primary"
          cx="33"
          cy="33"
          fill="none"
          r="30"
          stroke-linecap="round"
          stroke-width="6"
        />
      </svg>
    `);
  });
});
