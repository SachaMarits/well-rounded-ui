import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { AlertMessage } from "well-rounded-ui";

describe("<AlertMessage>", () => {
  it("should render correctly", () => {
    const { container } = render(<AlertMessage>Error</AlertMessage>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="alert-message alert-message-danger "
      >
        Error
      </div>
    `);
  });
});
