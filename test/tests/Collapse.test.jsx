import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Collapse } from "well-rounded-ui";

describe("<Collapse>", () => {
  it("should render correctly", () => {
    const { container } = render(<Collapse title="Collapse" />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="collapse-wrapper  "
      >
        <div
          class="collapse-title pointer"
        >
          Collapse
           
          <i
            class="mdi mdi-chevron-up text-xl"
          />
        </div>
        <div
          class="collapse-content"
        />
      </div>
    `);
  });
});
