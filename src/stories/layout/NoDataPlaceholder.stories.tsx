import "../assets/mdi.min.css";

import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { NoDataPlaceholder } from "../../components/layout";
import { Button } from "../../components/inputs";

const meta = {
  title: "Layout/NoDataPlaceholder",
  component: NoDataPlaceholder,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof NoDataPlaceholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "account-off",
    text: "No user found, would you like to add one?",
    button: <Button color="primary" text="Add user" action="add" />
  }
};
