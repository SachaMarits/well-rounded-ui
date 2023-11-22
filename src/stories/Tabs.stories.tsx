import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { TabPane, Tabs } from "../components/layout";

const meta = {
  title: "Layout/Tabs/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <TabPane name="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>,
      <TabPane name="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>,
      <TabPane name="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    ]
  }
};
