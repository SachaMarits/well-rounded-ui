import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "../../components/inputs";

const meta = {
  title: "Inputs/Select",
  component: Select,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Any label",
    defaultOption: "Any default option/placeholder",
    name: "Example",
    children: [
      <option value="1">Option 1</option>,
      <option value="2">Option 2</option>,
      <option value="3">Option 3</option>
    ]
  }
};
