import type { Meta, StoryObj } from "@storybook/react";

import { Pagination } from "../../components/inputs";

const meta = {
  title: "Inputs/Pagination",
  component: Pagination,
  parameters: {
    layout: "padded"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    totalItems: 5,
    itemsPerPage: 1,
    activePage: 1
  }
};
