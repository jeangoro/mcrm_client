import React, { useState } from "react";

import * as Yup from "yup";
import FormGeneratorV2 from "../../../../../components/common/FormGeneratorV2";
// import { civilityOptions, genderOptions, paysOptions } from "../../../../../components/common/FormOptions";
import { Col, Row } from "reactstrap";
import uploadIcon from "../../../../../assets/images/upload2.jpg";
import { useSelector } from "react-redux";

const ContactCreateFormPartner = ({ onCreateClick, onClearClick }) => {
  const { leadsType, countries, sourceContactType } = useSelector((state) => state.referential);

  const leadTypeOptions =
    leadsType &&
    leadsType.map((lead) => {
      return { label: lead.description, value: lead.value };
    });

  const paysOptions =
    countries &&
    countries.map((country) => {
      return { label: country.name, value: country.alpha2 };
    });

  const sourceContactTypeOptions =
    sourceContactType &&
    sourceContactType.map((source) => {
      return { label: source.description, value: source.value };
    });

  // let sourceContactTypeOptions = [
  //   { value: "interne", label: "Internal" },
  //   { value: "externe", label: "External" },
  // ];

  // let leadTypeOptions = [
  //   { value: "Visiteur", label: "Visitor" },
  //   { value: "Suspect", label: "Suspect" },
  //   { value: "Lead", label: "Lead" },
  //   { value: "Prospect", label: "Prospect" },
  //   { value: "Ambassador", label: "Ambassador" },
  // ];

  const formFieldsPartner = [
    {
      formGroupName: "",
      formGroupFields: [
        // {
        //   name: "subContactTypes",
        //   label: "Sous type de contact",
        //   type: "select",
        //   isMulti: false,
        //   optionsValue: [
        //     { label: "Banque", value: "Bank" },
        //     { label: "Assurance", value: "Insurance" },
        //     { label: "Agence vente billet", value: "Ticket sales agency" },
        //     { label: "Logement", value: "Accommodation" },
        //     { label: "Admission (Ecole)", value: "Admission" },
        //     { label: "Agence Transfert(Orange,Mtn)", value: "Transfer Agency" },
        //   ],
        //   value: "",
        //   validation: Yup.string().notRequired(),
        // },
        { name: "sourceContactType", label: "Source contact", type: "select", disabled: false, optionsValue: sourceContactTypeOptions, value: "", validation: Yup.string().notRequired() },
        { name: "lead", label: "Type de lead", type: "select", disabled: false, optionsValue: leadTypeOptions, value: "", validation: Yup.string().notRequired() },
      ],
    },
    {
      formGroupName: "Informations sur l'entreprise",
      formGroupFields: [
        { name: "enterpriseName", label: "Nom de la société", type: "text", disabled: false, value: "", validation: Yup.string().notRequired() },
        { name: "commercialRegisterNumber", label: "Numéro registre de commerce", type: "text", disabled: false, value: "", validation: Yup.string().notRequired() },
        { name: "enterpriseNui", label: "Numéro d'identification (NIU)", type: "text", disabled: false, value: "", validation: Yup.string().notRequired() },
        { name: "enterpriseAddress", label: "Domiciliation du partenaire", type: "text", disabled: false, value: "", validation: Yup.string().notRequired() },
        { name: "enterpriseTel", label: "Numéro de Téléphone", type: "phone", disabled: false, value: "", validation: Yup.string().min(9, "trop court").notRequired() },
        { name: "enterpriseEmail", label: "Adresse email partenaire", type: "text", disabled: false, value: "", validation: Yup.string().email("Email invalide!").notRequired() },
        { name: "enterpriseCountryResidence", label: "Pays", type: "select", optionsValue: paysOptions, disabled: false, value: "", validation: Yup.string().notRequired() },
        { name: "enterpriseCityResidence", label: "Ville", type: "text", disabled: false, value: "", validation: Yup.string().notRequired() },
      ],
    },
  ];

  const [selectedImageLogo, setSelectedImageLogo] = useState(null);
  const [selectedImagePlan, setSelectedImagePlan] = useState(null);

  const selectImageLogo = () => {
    document.getElementById("input-image-file-logo").click();
  };
  const selectImagePlan = () => {
    document.getElementById("input-image-file-plan").click();
  };

  return (
    <>
      <FormGeneratorV2
        isModal={false}
        formGroups={formFieldsPartner}
        formConfig={{
          formId: "create-contact-form",
          fieldWidth: 4,
          onSubmit: onCreateClick,
          onCancel: onClearClick,
          btnSubmitText: "Ajouter",
          btnCancelText: "Annuler",
          buttonsFloatBottom: true,
        }}
      />

      <Row>
        <Col md={6}>
          <h5>Logo du partenaire</h5>
          <hr />
          <label for="profilPicture" class="form-label text-muted form-label">
            Télécharger votre logo
          </label>
          <div style={{ textAlign: "center", border: "4px dashed gray" }}>
            <input
              id="input-image-file-logo"
              type="file"
              name="input-image-file-logo"
              accept="image/*"
              hidden={true}
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImageLogo(event.target.files[0]);
              }}
            />
            <img id="image-profile" alt="not found" width={"150px"} src={selectedImageLogo != null ? URL.createObjectURL(selectedImageLogo) : uploadIcon} onClick={selectImageLogo} />
            {selectedImageLogo && (
              <Row>
                <Col md={6}>
                  <button onClick={selectImageLogo}>Changer</button>
                </Col>
                <Col md={6}>
                  <button onClick={() => setSelectedImageLogo(null)}>Supprimer</button>
                </Col>
              </Row>
            )}

            <br />
            <br />
          </div>
          <br />
          <br />
        </Col>
        <Col md={6}>
          <h5>Plan de localisation</h5>
          <hr />
          <label for="profilPicture" class="form-label text-muted form-label">
            Télécharger votre plan de localisation
          </label>
          <div style={{ textAlign: "center", border: "4px dashed gray" }}>
            <input
              id="input-image-file-plan"
              type="file"
              name="input-image-file-plan"
              accept="image/*"
              hidden={true}
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImagePlan(event.target.files[0]);
              }}
            />
            <img id="image-profile" alt="not found" width={"150px"} src={selectedImagePlan != null ? URL.createObjectURL(selectedImagePlan) : uploadIcon} onClick={selectImagePlan} />
            {selectedImagePlan && (
              <Row>
                <Col md={6}>
                  <button onClick={selectImagePlan}>Changer</button>
                </Col>
                <Col md={6}>
                  <button onClick={() => setSelectedImagePlan(null)}>Supprimer</button>
                </Col>
              </Row>
            )}
            <br />
            <br />
          </div>
          <br />
          <br />
          <br />
          <br />
        </Col>
      </Row>
    </>
  );
};

export default ContactCreateFormPartner;
