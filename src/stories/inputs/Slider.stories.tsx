import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Slider } from "../../components/inputs";

const meta = {
  title: "Inputs/Slider",
  component: Slider,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: 400,
    width: 600,
    delay: 3000,
    items: [
      <img src="https://placehold.jp/24/0FC2C0/ffffff/600x400.png?text=1" />,
      <img src="https://placehold.jp/24/0CABA8/ffffff/600x400.png?text=2" />,
      <img src="https://placehold.jp/24/008F8C/ffffff/600x400.png?text=3" />,
      <img src="https://placehold.jp/24/015958/ffffff/600x400.png?text=4" />,
      <img src="https://placehold.jp/24/023535/ffffff/600x400.png?text=5" />
    ]
  }
};
