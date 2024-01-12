import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { EmptyLinePlaceholder } from "well-rounded-ui";

describe("<EmptyLinePlaceholder>", () => {
  it("should render correctly", () => {
    const { container } = render(<EmptyLinePlaceholder text="Add element" action="add" />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="empty-line-placeholder pointer "
      >
        Add element
         
        <i
          class="mdi mdi-plus"
        />
      </div>
    `);
  });
});
