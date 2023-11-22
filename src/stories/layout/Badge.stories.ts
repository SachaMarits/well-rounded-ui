import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "../../components/layout";
import { ThemeColor } from "../../types/Colors";

const meta = {
  title: "Layout/Badge",
  component: Badge,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      defaultValue: "primary"
    }
  }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: ThemeColor.Primary,
    children: "Primary badge"
  }
};
