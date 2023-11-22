import type { Meta, StoryObj } from "@storybook/react";

import { TabPane } from "../../components/layout";

const meta = {
  title: "Layout/Tabs/TabPane",
  component: TabPane,
  parameters: {
    layout: "padded"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof TabPane>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Any tab content"
  }
};
