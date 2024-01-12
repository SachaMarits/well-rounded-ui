import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Slider } from "well-rounded-ui";

describe("<Slider>", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Slider
        height={400}
        width={600}
        delay={3000}
        items={[
          <img src="https://placehold.jp/24/0FC2C0/ffffff/600x400.png?text=1" />,
          <img src="https://placehold.jp/24/0CABA8/ffffff/600x400.png?text=2" />,
          <img src="https://placehold.jp/24/008F8C/ffffff/600x400.png?text=3" />,
          <img src="https://placehold.jp/24/015958/ffffff/600x400.png?text=4" />,
          <img src="https://placehold.jp/24/023535/ffffff/600x400.png?text=5" />
        ]}
      />
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="slider"
        style="height: 400px; width: 600px;"
      >
        <div
          class="slider-item previous-slide "
        >
          <img
            src="https://placehold.jp/24/023535/ffffff/600x400.png?text=5"
          />
        </div>
        <div
          class="slider-item current-slide"
        >
          <img
            src="https://placehold.jp/24/0FC2C0/ffffff/600x400.png?text=1"
          />
        </div>
        <div
          class="slider-item next-slide "
        >
          <img
            src="https://placehold.jp/24/0CABA8/ffffff/600x400.png?text=2"
          />
        </div>
        <i
          class="mdi mdi-chevron-left pointer"
          style="top: 200px;"
        />
        <i
          class="mdi mdi-chevron-right pointer"
          style="top: 200px;"
        />
      </div>
    `);
  });
});
