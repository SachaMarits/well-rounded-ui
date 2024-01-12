import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Row } from "well-rounded-ui";

describe("<Row>", () => {
  it("should render correctly", () => {
    const { container } = render(<Row />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="row "
      />
    `);
  });
});
