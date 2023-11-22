import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Modal } from "../../components/interactions";
import { ModalHeader, ModalBody, ModalFooter } from "../../components/layout";
import { Button } from "../../components/inputs";

const meta = {
  title: "Interactions/Modal/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    show: false,
    toggle: true,
    children: (
      <>
        <ModalHeader>
          <h3>Modal title</h3>
        </ModalHeader>
        <ModalBody>
          <p>This is modal body</p>
        </ModalBody>
        <ModalFooter>
          <Button text="Cancel" color="danger" onClick={() => {}} />
        </ModalFooter>
      </>
    )
  }
};
