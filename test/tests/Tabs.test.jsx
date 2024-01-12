import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Tabs, TabPane } from "well-rounded-ui";

describe("<Tabs>", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Tabs>
        <TabPane name="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane name="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane name="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="tabs "
      >
        <ul
          class="tab-header"
        >
          <li
            class="active false"
          >
            Tab 1
          </li>
          <li
            class=" false"
          >
            Tab 2
          </li>
          <li
            class=" false"
          >
            Tab 3
          </li>
        </ul>
        <div
          class="tab-content"
        >
          <div
            class="tab-child"
          >
            Content of Tab Pane 1
          </div>
        </div>
      </div>
    `);
  });
});
