import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ConsultationFormAdmission = ({openModal, setOpenModal}) => {
  const [modal_scroll, setmodal_scroll] = useState(false);

  function tog_scroll() {
    // setmodal_scroll(!modal_scroll);
    setOpenModal(!openModal);
  }

  return (
    <div>
      {/* <!-- Scrollable Modal --> */}

      {/* <Button color="primary" onClick={() => setmodal_scroll(true)}>
        Consulter
      </Button> */}

      <Modal
        isOpen={openModal}
        toggle={() => {
          tog_scroll();
        }}
        scrollable={true}
        id="exampleModalScrollable"
      >
        <ModalHeader>Informations du client</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit
        </ModalBody>

        <ModalFooter>
          <Button
            color="light"
            onClick={() => {
              tog_scroll();
            }}
          >
            Close
          </Button>
          <Button color="primary">Save changes</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ConsultationFormAdmission;
