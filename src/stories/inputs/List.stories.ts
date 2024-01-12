import type { Meta, StoryObj } from "@storybook/react";

import { List } from "../../components/inputs";
import { Alert } from "../../components/interactions";

const meta = {
  title: "Inputs/List",
  component: List,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    keyColumn: "id",
    layout: [
      { column: "Picture", type: "image", size: "sm" },
      { column: "Name", type: "raw", size: "lg" },
      { column: "Active", type: "boolean", size: "sm" }
    ],
    data: [
      { id: 1, picture: "https://picsum.photos/36", name: "Sacha", active: true },
      { id: 2, picture: "https://picsum.photos/37", name: "Jax", active: false },
      { id: 3, picture: "https://picsum.photos/38", name: "Vayne", active: true },
      { id: 4, picture: "https://picsum.photos/39", name: "Morgana", active: true }
    ],
    actions: [
      {
        action: "edit",
        iconOnly: true,
        onClick: (id: number) => Alert("Action", `Edit action detected on ${id}`)
      },
      {
        action: "delete",
        iconOnly: true,
        onClick: (id: number) => Alert("Action", `Delete action detected on ${id}`)
      }
    ]
  }
};
