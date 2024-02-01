import React, { useCallback, useContext, useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleCreate } from "../../../store/user/userSlice";
import { createUser } from "../../../store/user";
import * as Yup from "yup";
import { DevExtremeDataGridContext } from "../../../components/common/DevExtremeDataGridProvider";
import { civilityOptions, genderOptions, localeOptions, paysOptions } from "../../../components/common/FormOptions";
import FormGeneratorV2 from "../../../components/common/FormGeneratorV2";

const UserCreate = () => {
  const dispatch = useDispatch();
  const { isOpenCreate, createError, creating, created, createdData, dataGridUpdated } = useSelector((state) => state.user);

  const { refreshDataGridRef } = useContext(DevExtremeDataGridContext);

  const toggleCreateForm = useCallback(() => {
    dispatch(toggleCreate());
  }, [dispatch]);

  useEffect(() => {
    if (created && !createError) {
      refreshDataGridRef(createdData);
      toggleCreateForm();
    } else if (created && createError) {
      console.log("error =>");
    }
  }, [creating, created, createError, createdData, refreshDataGridRef, toggleCreateForm]);

  const onCreateClick = (formValues) => {
    createUser(dispatch, formValues);
  };

  const formFields = [
    {
      formGroupName: "",
      formGroupFields: [
        { name: "firstName", label: "Nom *", type: "text", value: "", validation: Yup.string().required("Ce champ est obligatoire") },
        { name: "lastName", label: "Prénom", type: "text", value: "", validation: Yup.string().notRequired() },
        { name: "phoneNumber", label: "Téléphone *", type: "phone", value: "", validation: Yup.string().min(9, "trop court").required("Ce champ est obligatoire") },
        { name: "email", label: "Email *", type: "email", value: "", validation: Yup.string().email("Email invalide").required("Ce champ est obligatoire") },
        { name: "countryResidence", label: "Pays de residence *", type: "select", optionsValue: paysOptions, value: "", validation: Yup.string().notRequired() },
        { name: "civility", label: "Civilité", type: "select", optionsValue: civilityOptions, value: "", validation: Yup.string().notRequired() },
        { name: "gender", label: "Genre", type: "select", optionsValue: genderOptions, value: "", validation: Yup.string().notRequired() },
        { name: "complementAddress", label: "Adresse complementaire", type: "text", value: "", validation: Yup.string().notRequired() },
        { name: "sponsorCode", label: "sponsorCode", type: "text", value: "", validation: Yup.string().notRequired() },
        {
          name: "temporaryPassword",
          label: "Mot de passe temporaire *",
          type: "password",
          value: "",
          validation: Yup.number()
            .required("Champ obligatoire")
            .test("len", "Doit être exactement 6 chiffres", (val) => !val || (val && val.toString().length === 6)),
        },
      ],
    },
  ];

  return (
    <>
      <Modal id="create_user_modal" isOpen={isOpenCreate} toggle={toggleCreateForm}>
        <FormGeneratorV2
          isModal={true}
          headerName={"Creation d'un utilisateur"}
          formGroups={formFields}
          formConfig={{ formId: "create-user-form", fieldWidth: 6, onSubmit: onCreateClick, onCancel: toggleCreateForm, btnSubmitText: "Valider", btnCancelText: "Annuler", loading: creating }}
        />
      </Modal>
    </>
  );
};
export default UserCreate;
