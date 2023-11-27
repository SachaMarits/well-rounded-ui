import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../../components/inputs";

const meta = {
  title: "Inputs/Input",
  component: Input,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Any label",
    name: "example",
    placeholder: "Example input"
  }
};

export const Textarea: Story = {
  args: {
    label: "Any label",
    name: "example",
    type: "textarea",
    placeholder: "Example input"
  }
};
