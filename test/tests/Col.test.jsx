import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Col } from "well-rounded-ui";

describe("<Col>", () => {
  it("should render correctly", () => {
    const { container } = render(<Col />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="
             col-xl-3
             col-lg-4
             col-md-6
             col-sm-12
             col-xs-12"
      />
    `);
  });
});
