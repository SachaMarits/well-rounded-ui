import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Progress } from "well-rounded-ui";

describe("<Progress>", () => {
  it("should render correctly", () => {
    const { container } = render(<Progress value={3} min={0} max={5} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class=" progress"
      >
        <div
          class="progress-bar bg-primary"
          style="width: 60%;"
        />
      </div>
    `);
  });
});
