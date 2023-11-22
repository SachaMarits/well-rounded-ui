import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Card, CardHeader, CardFooter } from "../../components/layout";
import { Button } from "../../components/inputs";

const meta = {
  title: "Layout/Card/Card",
  component: Card,
  parameters: {
    layout: "padded"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <h3>Your title</h3>
        </CardHeader>
        <p>Content here</p>
        <CardFooter>
          <Button color="primary" text="Example button" />
        </CardFooter>
      </>
    )
  }
};
