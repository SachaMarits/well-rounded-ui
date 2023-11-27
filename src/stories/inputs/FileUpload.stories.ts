import "../assets/mdi.min.css";

import type { Meta, StoryObj } from "@storybook/react";

import { FileUpload } from "../../components/inputs";

const meta = {
  title: "Inputs/FileUpload",
  component: FileUpload,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dragAndDrop: true,
    multiple: true
  }
};
