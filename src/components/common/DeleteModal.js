import { Player } from "@lottiefiles/react-lottie-player";
import PropTypes from "prop-types";
import React from "react";
import { Modal, ModalBody } from "reactstrap";

import animationDataCheck from "./../../assets/images/json-icon/check-okey-done.json";
import animationDataDelete from "./../../assets/images/json-icon/animation_delete.json";
import CustomButton from "./CustomButton";

const DeleteModal = ({ show, loading, onDeleteClick, onCloseClick }) => {
  return (
    <Modal fade={true} isOpen={show} toggle={onCloseClick} centered={true}>
      <ModalBody className="py-3 px-5">
        <div className="mt-2 text-center">
          <Player autoplay loop src={animationDataDelete} style={{ width: 100, height: 100 }} />
          {/* <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#f7b84b,secondary:#f06548" style={{ width: "100px", height: "100px" }}></lord-icon> */}
          <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
            <h4>Etes-vous sure ?</h4>
            <p className="text-muted mx-4 mb-0">Etes-vous sure de vouloir supprimer cet enregistrement ?</p>
          </div>
        </div>
        <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
          <button type="button" className="mcrm-btn-danger" data-bs-dismiss="modal" onClick={onCloseClick}>
            Fermer
          </button>
          <CustomButton loading={loading} actionName={"Oui, Supprimer le!"} isFormValid={true} onClik={onDeleteClick} />
          {/* <button type="button" className="btn w-sm btn-danger " id="delete-record" onClick={onDeleteClick}>
            Oui, Supprimer le!
          </button> */}
        </div>
      </ModalBody>
    </Modal>
  );
};

DeleteModal.propTypes = {
  onCloseClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  show: PropTypes.bool,
  loading: PropTypes.bool,
};

export default DeleteModal;
