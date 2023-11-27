import type { Meta, StoryObj } from "@storybook/react";

import { MultiSelect } from "../../components/inputs";

const meta = {
  title: "Inputs/MultiSelect",
  component: MultiSelect,
  parameters: {
    layout: "padded"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "User selection",
    name: "users",
    options: [
      { id: 1, text: "Sacha" },
      { id: 2, text: "Eren" },
      { id: 3, text: "Harmine" },
      { id: 4, text: "Mikasa" }
    ]
  }
};
