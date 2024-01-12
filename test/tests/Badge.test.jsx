import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Badge } from "well-rounded-ui";

describe("<Badge>", () => {
  it("should render correctly", () => {
    const { container } = render(<Badge>Primary (default value)</Badge>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="badge badge-primary "
      >
        Primary (default value)
      </div>
    `);
  });
});
