import type { Meta, StoryObj } from "@storybook/react";

import { CardHeader } from "../components/layout";

const meta = {
  title: "Layout/Card/CardHeader",
  component: CardHeader,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof CardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Any card header content"
  }
};
