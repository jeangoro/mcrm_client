import React, { useState } from "react";

import * as Yup from "yup";
import FormGeneratorV2 from "../../../../../components/common/FormGeneratorV2";
// import { civilityOptions } from "../../../../../components/common/FormOptions";
import { Col, Row } from "reactstrap";
import contactImage from "../../../../../assets/images/profile.png";
import { useSelector } from "react-redux";
import UploadFile from "../../../../../components/common/UploadFile";

const ContactCreateFormParticular = ({ onCreateClick, onClearClick }) => {
  const { genders, leadsType, countries, sourceContactType, civility } = useSelector((state) => state.referential);

  const genderOptions =
    genders &&
    genders.map((gender) => {
      return { label: gender.value, value: gender.value };
    });

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

  const civilityOptions =
    civility &&
    civility.map((element) => {
      return { label: element.description, value: element.value };
    });

  // let sourceContactTypeOptions = [
  //   { value: "Internal", label: "Interne" },
  //   { value: "External", label: "Externe" },
  // ];

  // let leadTypeOptions = [
  //   { value: "Visitor", label: "Visiteur" },
  //   { value: "Suspect", label: "Suspect" },
  //   { value: "Lead", label: "Lead" },
  //   { value: "Prospect", label: "Prospect" },
  //   { value: "Ambassador", label: "Ambassador" },
  //   { value: "Loyal Customer", label: "Loyal Customer" },
  // ];

  const formFieldsParticular = [
    {
      formGroupName: "",
      formGroupFields: [
        // {
        //   name: "subContactTypes",
        //   label: "Sous type de contact",
        //   type: "select",
        //   isMulti: false,
        //   optionsValue: [
        //     { label: "Etudiant", value: "Student" },
        //     { label: "Travailleur", value: "Worker" },
        //   ],
        //   value: "",
        //   validation: Yup.string().notRequired(),
        // },
        { name: "sourceContactType", label: "Source contact", type: "select", disabled: false, optionsValue: sourceContactTypeOptions, value: "", validation: Yup.string().notRequired() },
        { name: "lead", label: "Type de lead", type: "select", disabled: false, optionsValue: leadTypeOptions, value: "", validation: Yup.string().notRequired() },
      ],
    },
    {
      formGroupName: "Informations personnelles",
      formGroupFields: [
        { name: "gender", label: "Genre", type: "select", disabled: false, optionsValue: genderOptions, value: "", validation: Yup.string().notRequired() },
        { name: "civility", label: "Civilité", type: "select", disabled: false, optionsValue: civilityOptions, value: "", validation: Yup.string().notRequired() },
        { name: "firstName", label: "Nom", type: "text", disabled: false, value: "", validation: Yup.string().notRequired() },
        { name: "lastName", label: "Prénom", type: "text", disabled: false, value: "", validation: Yup.string().notRequired() },
        { name: "email", label: "Email", type: "email", disabled: false, value: "", validation: Yup.string().email("Email invalide").notRequired() },
        { name: "phoneNumber", label: "Numéro de téléphone", type: "phone", disabled: false, value: "", validation: Yup.string().min(9, "trop court").notRequired() },
        { name: "countryResidence", label: "Pays de residence", type: "select", disabled: false, optionsValue: paysOptions, value: "", validation: Yup.string().notRequired() },
        { name: "cityResidence", label: "Ville de residence", type: "text", disabled: false, value: "", validation: Yup.string().notRequired() },
        { name: "complementAddress", label: "Adresse complementaire", type: "text", disabled: false, value: "", validation: Yup.string().notRequired() },
        { name: "profession", label: "Profession", type: "text", disabled: false, value: "", validation: Yup.string().notRequired() },
        { name: "birthDay", label: "Date de naissance", type: "date", disabled: false, value: "", validation: Yup.string().notRequired() },
        { name: "birthPlace", label: "Lieu de naissance", type: "text", disabled: false, value: "", validation: Yup.string().notRequired() },
      ],
    },
    {
      formGroupName: "Autres informations",
      formGroupFields: [
        { name: "commercialRegisterNumber", label: "Responsable commercial", type: "text", disabled: false, value: "", validation: Yup.string().notRequired() },
        { name: "sponsor", label: "sponsor", type: "text", disabled: true, value: "", validation: Yup.string().notRequired() },
      ],
    },
    // { formGroupName: "Commentaires", formGroupFields: commentaires },
    // { formGroupName: "Photo de profil", formGroupFields: photoProfil },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const selectImageProfile = () => {
    document.getElementById("input-image-file").click();
  };

  return (
    <>
      <FormGeneratorV2
        isModal={false}
        formGroups={formFieldsParticular}
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
      <h5>Photo de profil</h5>
      <hr />
      <label for="profilPicture" class="form-label text-muted form-label">
        Télécharger votre photo de profil
      </label>

      <UploadFile fileType={"image"} maxFileSize={512000} />

      {/* <div style={{ textAlign: "center" }}>
        <input
          id="input-image-file"
          type="file"
          name="input-image-file"
          accept="image/*"
          hidden={true}
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
        <img id="image-profile" alt="not found" width={"150px"} src={selectedImage ? URL.createObjectURL(selectedImage) : contactImage} onClick={selectImageProfile} />
        {selectedImage && (
          <Row>
            <Col md={6}>
              <button onClick={selectImageProfile}>Changer</button>
            </Col>
            <Col md={6}>
              <button onClick={() => setSelectedImage(null)}>Supprimer</button>
            </Col>
          </Row>
        )}
        <br />
        <br />
        <br />
        <br />
      </div> */}
    </>
  );
};

export default ContactCreateFormParticular;
