import type { Meta, StoryObj } from "@storybook/react";

import { AlertMessage } from "../components/layout";
import { StatusColor } from "../types/Colors";

const meta = {
  title: "Layout/AlertMessage",
  component: AlertMessage,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      defaultValue: "danger"
    }
  }
} satisfies Meta<typeof AlertMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: StatusColor.Danger,
    children: "Any status message you would like to show"
  }
};
