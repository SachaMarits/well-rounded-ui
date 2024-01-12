import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "well-rounded-ui";

describe("<Modal>", () => {
  it("should render correctly (modal structure)", () => {
    const { container } = render(
      <div>
        <ModalHeader>
          <h3>Modal title</h3>
        </ModalHeader>
        <ModalBody>
          <p>This is modal body</p>
        </ModalBody>
        <ModalFooter>
          <p>Modal footer</p>
        </ModalFooter>
      </div>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div>
        <div
          class="card-header"
        >
          <h3>
            Modal title
          </h3>
        </div>
        <div
          class="modal-body"
        >
          <p>
            This is modal body
          </p>
        </div>
        <div
          class="card-footer d-flex flex-row-reverse"
        >
          <p>
            Modal footer
          </p>
        </div>
      </div>
    `);
  });

  it("should render correctly (modal)", () => {
    const { container } = render(
      <Modal>
        <p>Content</p>
      </Modal>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`null`);
  });
});
