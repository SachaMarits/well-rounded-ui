import type { Meta, StoryObj } from "@storybook/react";

import FloatingSidebarExample from "./FloatingSidebarExample";

const meta = {
  title: "Interactions/FloatingSidebar",
  component: FloatingSidebarExample,
  parameters: {
    layout: "centered"
  },
  argTypes: {}
} satisfies Meta<typeof FloatingSidebarExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "Any content",
    direction: "right",
    show: false
  }
};
