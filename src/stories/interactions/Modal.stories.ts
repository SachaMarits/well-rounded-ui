import type { Meta, StoryObj } from "@storybook/react";

import ModalExample from "./ModalExample";

const meta = {
  title: "Interactions/Modal",
  component: ModalExample,
  parameters: {
    layout: "centered"
  },
  argTypes: {}
} satisfies Meta<typeof ModalExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    show: false,
    closeOnClickOutside: false
  }
};
