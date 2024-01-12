import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Input } from "well-rounded-ui";

describe("<Input>", () => {
  it("should render correctly", () => {
    const { container } = render(<Input name="name" type="text" placeholder="Filter by name" />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <input
        class="form-control "
        id="name"
        name="name"
        placeholder="Filter by name"
        type="text"
        value=""
      />
    `);
  });
});
