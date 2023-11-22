import type { Meta, StoryObj } from "@storybook/react";

import { Row } from "../components/layout";

const meta = {
  title: "Layout/Col/Row",
  component: Row,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Row>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Any row content"
  }
};
