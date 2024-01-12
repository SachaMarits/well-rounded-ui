import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Card, CardHeader, CardFooter } from "well-rounded-ui";

describe("<Card>", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Card>
        <CardHeader>
          <h3>Card title</h3>
        </CardHeader>
        <p>This is card body</p>
        <CardFooter>
          <p>Card footer</p>
        </CardFooter>
      </Card>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="card "
      >
        <div
          class="card-header"
        >
          <h3>
            Card title
          </h3>
        </div>
        <p>
          This is card body
        </p>
        <div
          class="card-footer d-flex flex-row-reverse"
        >
          <p>
            Card footer
          </p>
        </div>
      </div>
    `);
  });
});
