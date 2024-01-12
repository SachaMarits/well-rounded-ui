import type { Meta, StoryObj } from "@storybook/react";

import AlertExample from "./AlertExample";

const meta = {
  title: "Interactions/Alert",
  component: AlertExample,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    title: {
      control: "Text",
      description: "Title of Alert"
    },
    message: {},
    icon: {}
  }
} satisfies Meta<typeof AlertExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "Your title",
    message: "Any message you would like to show",
    icon: "success",
    buttons: []
  }
};

export const Confirmation: Story = {
  args: {
    title: "Your title",
    message: "Any statement that needs an answer",
    icon: "warning",
    buttons: [
      { color: "primary", text: "Yes", value: true },
      { color: "danger", text: "No", value: false }
    ]
  }
};
