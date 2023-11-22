import type { Meta, StoryObj } from "@storybook/react";

import { Progress } from "../../components/layout";

const meta = {
  title: "Layout/Progress",
  component: Progress,
  parameters: {
    layout: "padded"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50
  }
};
