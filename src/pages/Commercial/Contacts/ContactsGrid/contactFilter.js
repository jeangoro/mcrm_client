import React, { useContext, useEffect, useState } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Row, FormGroup, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../../../../store/commercial/contact/contactSlice";
import { DevExtremeDataGridContext } from "../../../../components/common/DevExtremeDataGridProvider";
import Select from "react-select";
import ContactFilterFormPartner from "./contactFilterForm/contactFilterFormPartner";
import ContactFilterFormParticular from "./contactFilterForm/contactFilterFormParticular";
import ContactFilterFormEnterprise from "./contactFilterForm/contactFilterFormEnterprise";
import ContactFilterFormDefault from "./contactFilterForm/contactFilterFormDefault";

const ContactFilter = ({ contactFilterData, setContactFilterData }) => {
  const dispatch = useDispatch();

  const { isOpenFilter } = useSelector((state) => state.contact);
  const [typeContact, setTypeContact] = useState({ value: "Tout", label: "Tout" });

  const { dataFilter, setDataFilter } = useContext(DevExtremeDataGridContext);

  const onCloseClick = () => {
    // console.log("onCloseClick => ");
    dispatch(toggleFilter());
  };

  const onClearClick = () => {
    // console.log("onClearClick => ");
    setContactFilterData(null);
    onCloseClick();
  };

  const onFilterClick = (formValues) => {
    // console.log("onFilterClick => ", formValues);
    formValues["contactTypes"] = [typeContact.value];

    setContactFilterData(formValues);

    onCloseClick();
  };

  let listTypeContact = [
    { label: "Tout", value: "Tout" },
    { label: "Particulier", value: "Particular" },
    { label: "Entreprise", value: "Enterprise" },
    { label: "Partenaire", value: "Partner" },
  ];

  return (
    <form action="">
      <Offcanvas direction="end" isOpen={isOpenFilter} id="offcanvas-filter" toggle={onCloseClick} scrollable={true}>
        <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
          Filtre des contacts
        </OffcanvasHeader>

        <OffcanvasBody>
          <Row>
            <FormGroup className="mb-2">
              <Label for={"contactTypes"} className="form-label text-muted">
                Types de contact
              </Label>
              <Select
                type={"select"}
                id={"contactTypes"}
                name={"contactTypes"}
                isDisabled={false}
                value={typeContact}
                isMulti={false}
                onChange={(e) => {
                  setTypeContact({ value: e.value, label: e.label });
                }}
                options={listTypeContact}
              />
            </FormGroup>
          </Row>
          <>
            {typeContact.value === "Particular" ? (
              <ContactFilterFormParticular contactFilterData={contactFilterData} setContactFilterData={setContactFilterData} onFilterClick={onFilterClick} onClearClick={onClearClick} />
            ) : typeContact.value === "Enterprise" ? (
              <ContactFilterFormEnterprise contactFilterData={contactFilterData} setContactFilterData={setContactFilterData} onFilterClick={onFilterClick} onClearClick={onClearClick} />
            ) : typeContact.value === "Partner" ? (
              <ContactFilterFormPartner contactFilterData={contactFilterData} setContactFilterData={setContactFilterData} onFilterClick={onFilterClick} onClearClick={onClearClick} />
            ) : (
              <ContactFilterFormDefault contactFilterData={contactFilterData} setContactFilterData={setContactFilterData} onFilterClick={onFilterClick} onClearClick={onClearClick} />
            )}
          </>
        </OffcanvasBody>
      </Offcanvas>
    </form>
  );
};

export default ContactFilter;
