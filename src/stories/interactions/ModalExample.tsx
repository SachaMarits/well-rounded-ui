import React, { useEffect, useState } from "react";
import { Button } from "../../components/inputs";
import { Modal } from "../../components/interactions";
import { ModalBody, ModalFooter, ModalHeader } from "../../components/layout";

interface Button {
  color: "primary" | "success" | "warning" | "danger" | "default" | "gradient";
  text: string;
  value: any;
}

interface ModalExampleProps {
  show: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  closeOnClickOutside: boolean;
}

export default function ModalExample({ show, size = "sm", closeOnClickOutside }: ModalExampleProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(show);
  }, [show]);

  return (
    <>
      <Button color="primary" text="Show modal" onClick={() => setIsModalOpen(true)} />
      <Modal
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size={size}
        closeOnClickOutside={closeOnClickOutside}
      >
        <ModalHeader>
          <h3>Modal title</h3>
        </ModalHeader>
        <ModalBody>
          <p>This is modal body</p>
        </ModalBody>
        <ModalFooter>
          <Button text="Cancel" color="danger" onClick={() => setIsModalOpen(false)} />
        </ModalFooter>
      </Modal>
    </>
  );
}
