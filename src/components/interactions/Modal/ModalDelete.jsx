import PropTypes from "prop-types";
import handleResponse from "../../../services/helpers/handle-response";
import { Button } from "../../inputs";
import { ModalHeader, ModalFooter } from "../../layout";
import Alert from "../Alert/Alert";
import Modal from "./Modal";

export default function ModalDelete({ onClose, endpoint, show }) {
  const deleteEntry = () => {
    const url = `${import.meta.env.VITE_APP_API}/${endpoint}`;

    const requestOptions = {
      method: "DELETE",
    };

    return fetch(url, requestOptions)
      .then(handleResponse)
      .then((reponse) => reponse);
  };

  const handleDelete = () => {
    deleteEntry().then(
      (result) => {
        Alert("Success", result.message, "success");
        onClose();
      },
      (error) => Alert("An error occured", error.message, "error")
    );
  };

  return (
    <Modal onClose={() => onClose()} show={show}>
      <ModalHeader>
        <h3>Are you sure?</h3>
      </ModalHeader>
      <p>Do you want to delete this entry?</p>
      <ModalFooter>
        <Button
          text="Delete"
          color="primary"
          action="delete"
          onClick={() => handleDelete()}
        />
        <Button
          className="mr-3"
          text="Cancel"
          color="danger"
          onClick={() => onClose()}
        />
      </ModalFooter>
    </Modal>
  );
}

ModalDelete.propTypes = {
  onClose: PropTypes.func.isRequired,
  endpoint: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};
