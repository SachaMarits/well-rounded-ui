import "../assets/mdi.min.css";

import type { Meta, StoryObj } from "@storybook/react";

import { ImageUpload } from "../../components/inputs";

const meta = {
  title: "Inputs/ImageUpload",
  component: ImageUpload,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof ImageUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dragAndDrop: true,
    multiple: true
  }
};
