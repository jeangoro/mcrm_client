import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ConsultationFormAdmission = () => {
  const [modal_scroll, setmodal_scroll] = useState(false);

  function tog_scroll() {
    setmodal_scroll(!modal_scroll);
  }

  return (
    <div>
      {/* <!-- Scrollable Modal --> */}

      <Button color="primary" onClick={() => setmodal_scroll(true)}>
        Consulter
      </Button>

      <Modal
        isOpen={modal_scroll}
        toggle={() => {
          tog_scroll();
        }}
        scrollable={true}
        id="exampleModalScrollable"
      >
        <ModalHeader>Informations du client</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo provident possimus labore? Voluptas quam explicabo deserunt iste neque beatae, reiciendis commodi enim sequi eligendi
          exercitationem veniam eveniet, rem necessitatibus voluptatum similique magnam saepe consectetur. Voluptate officiis sequi, quis quidem quasi mollitia fuga expedita voluptatem aliquam. Eum,
          similique mollitia, odit dolor at porro aliquam hic, molestiae atque soluta nihil quos beatae alias libero cumque. Hic fuga delectus dicta quaerat dolores quam nam. Laudantium culpa tempora
          ea, numquam ratione excepturi corrupti rem alias sint animi dolorum nobis odit, dolorem veniam odio doloribus nisi ad quos adipisci sequi! Molestias vero praesentium aliquam natus alias
          placeat! Porro, ipsa quas est, ipsum tempora, quos sit molestiae laudantium quaerat tempore totam in vero recusandae maiores. Similique rem saepe sint atque non ipsam autem temporibus id
          incidunt rerum eum nam quae eveniet unde quibusdam, modi excepturi qui placeat aliquid aspernatur dicta nobis. Impedit esse ipsa ipsum iusto?
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
