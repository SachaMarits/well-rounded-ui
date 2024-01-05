import { vi, describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "well-rounded-ui";

describe("<Button>", () => {
  it("should render correctly", () => {
    const { container } = render(<Button>Simple button</Button>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class=" btn  btn-primary"
        type="button"
      >
        Simple button
      </button>
    `);
  });
  it("should executes onClick handler correctly", () => {
    const fn = vi.fn();
    const test = fn;
    render(<Button onClick={() => test("ok")}>onClick Test</Button>);
    const button = screen.getByText("onClick Test");
    fireEvent.click(button);
    expect(test).toHaveBeenCalledWith("ok");
  });
});
