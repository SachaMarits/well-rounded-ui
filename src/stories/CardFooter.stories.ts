import type { Meta, StoryObj } from "@storybook/react";

import { CardFooter } from "../components/layout";

const meta = {
  title: "Layout/Card/CardFooter",
  component: CardFooter,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof CardFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Any card footer content"
  }
};
