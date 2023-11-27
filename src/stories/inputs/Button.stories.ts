import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../components/inputs";

const meta = {
  title: "Inputs/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "primary",
    text: "Primary Button"
  }
};
