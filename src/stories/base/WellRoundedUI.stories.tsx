import type { Meta, StoryObj } from "@storybook/react";

import WellRoundedUIExample from "./WellRoundedUIExample";

const meta = {
  title: "Base/Style",
  component: WellRoundedUIExample,
  parameters: {
    layout: "centered"
  },
  argTypes: {}
} satisfies Meta<typeof WellRoundedUIExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomColors: Story = {
  args: {
    options: {
      colors: {
        primary: "#2a9d8f",
        secondary: "#264653",
        success: "#a7c957",
        warning: "#e9c46a",
        danger: "#e76f51",
        default: "#d6ccc2"
      }
    }
  }
};
