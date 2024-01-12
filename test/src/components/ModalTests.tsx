import { useState } from "react";
// @ts-ignore
import { Collapse, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "well-rounded-ui";

export default function ModalTests() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Collapse title="Modals" className="mb-3">
      <Button color="primary" className="mr-2" onClick={() => setIsModalOpen(true)} text="Open Modal" />
      <Modal show={isModalOpen} onClose={() => {}}>
        <ModalHeader>
          <h3>Modal title</h3>
        </ModalHeader>
        <ModalBody>
          <p>This is modal body</p>
        </ModalBody>
        <ModalFooter>
          <Button text="Cancel" color="danger" onClick={() => {}} />
        </ModalFooter>
      </Modal>
    </Collapse>
  );
}
