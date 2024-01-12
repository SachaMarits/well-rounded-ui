import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { NoDataPlaceholder } from "well-rounded-ui";

describe("<NoDataPlaceholder>", () => {
  it("should render correctly", () => {
    const { container } = render(
      <NoDataPlaceholder text="No data exist with icon and button string" icon="table-off" button="Any button" />
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="flex-center flex-column h-200 p-3"
      >
        <i
          class="mdi mdi-table-off text-xxl text-secondary mb-2"
        />
        <p
          class="text-center text-secondary mb-3"
        >
          No data exist with icon and button string
        </p>
        Any button
      </div>
    `);
  });
});
