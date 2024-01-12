import type { Meta, StoryObj } from "@storybook/react";

import { ColorThemePalette } from "../../components/inputs";

const meta = {
  title: "Inputs/ColorThemePalette",
  component: ColorThemePalette,
  parameters: {
    layout: "centered"
  },
  argTypes: {}
} satisfies Meta<typeof ColorThemePalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
