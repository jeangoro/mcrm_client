import React, { useContext, useEffect, useState } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Row, FormGroup, Label, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleCreate } from "../../../../store/commercial/contact/contactSlice";
import { DevExtremeDataGridContext } from "../../../../components/common/DevExtremeDataGridProvider";
import Select from "react-select";
import { createContact } from "../../../../store/commercial/contact";
import ContactCreateFormParticular from "./contactCreateForm/contactCreateFormParticular";
import ContactCreateFormPartner from "./contactCreateForm/contactCreateFormPartner";
import ContactCreateFormEnterprise from "./contactCreateForm/contactCreateFormEnterprise";
import { findAllCountry, findAllParameter, findAllProduct, findAllServiceProvider } from "../../../../store/referential";

const ContactCreate = ({ contactCreateData, setContactCreateData }) => {
  const dispatch = useDispatch();

  const { isOpenCreate } = useSelector((state) => state.contact);
  const [typeContact, setTypeContact] = useState({ value: "Particular", label: "Particulier" });

  const { dataCreate, setDataCreate } = useContext(DevExtremeDataGridContext);

  const onCloseClick = () => {
    // console.log("onCloseClick => ");
    dispatch(toggleCreate());
  };

  const onClearClick = () => {
    // console.log("onClearClick => ");
    setContactCreateData(null);
    onCloseClick();
  };

  const onCreateClick = (formValues) => {
    console.log("onCreateClick => ", formValues);

    createContact(dispatch, formValues);
    onCloseClick();
  };

  let typeContactOptionsValue = [
    { label: "Entreprise", value: "Enterprise" },
    { label: "Particulier", value: "Particular" },
    { label: "Partenaire", value: "Partner" },
    // { label: "Agence", value: "Agency" },
    // { label: "Etudiant", value: "etudiant" },
    // { label: "Agent", value: "agent" },
    // { label: "Marketeur", value: "marketer" },
  ];

  useEffect(() => {
    findAllServiceProvider(dispatch);
    findAllParameter(dispatch);
    findAllCountry(dispatch);
    // findAllProduct(dispatch);
  }, [dispatch]);

  return (
    <form action="">
      <Offcanvas direction="end" isOpen={isOpenCreate} id="offcanvas-create" toggle={onCloseClick} scrollable={true}>
        <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
          Creation d'un contact
        </OffcanvasHeader>

        <OffcanvasBody>
          <Row>
            <FormGroup className="mb-2">
              <Label for={"typeContact"} className="form-label text-muted">
                Type de contact
              </Label>
              <Select
                type={"select"}
                id={"typeContact"}
                name={"typeContact"}
                isDisabled={false}
                value={typeContact}
                isMulti={false}
                onChange={(e) => {
                  setTypeContact({ value: e.value, label: e.label });
                }}
                options={typeContactOptionsValue}
              />
            </FormGroup>
          </Row>

          {typeContact.value === "Particular" ? (
            <ContactCreateFormParticular onCreateClick={onCreateClick} onClearClick={onClearClick} />
          ) : typeContact.value === "Enterprise" ? (
            <ContactCreateFormEnterprise onCreateClick={onCreateClick} onClearClick={onClearClick} />
          ) : typeContact.value === "Partner" ? (
            <ContactCreateFormPartner onCreateClick={onCreateClick} onClearClick={onClearClick} />
          ) : (
            <ContactCreateFormParticular onCreateClick={onCreateClick} onClearClick={onClearClick} />
          )}
        </OffcanvasBody>
      </Offcanvas>
    </form>
  );
};

export default ContactCreate;
