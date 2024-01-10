import type { Meta, StoryObj } from "@storybook/react";

import { EmptyLinePlaceholder } from "../../components/layout";

const meta = {
  title: "Layout/EmptyLinePlaceholder",
  component: EmptyLinePlaceholder,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof EmptyLinePlaceholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Add element",
    action: "add"
  }
};
