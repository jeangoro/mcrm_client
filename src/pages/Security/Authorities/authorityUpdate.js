import React, { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "reactstrap";
import { initialise, toggleUpdate } from "../../../store/authority/authoritySlice";
import { updateAuthority } from "../../../store/authority";
import * as Yup from "yup";
import { DevExtremeDataGridContext } from "../../../components/common/DevExtremeDataGridProvider";
import FormGeneratorV2 from "../../../components/common/FormGeneratorV2";

const AuthorityUpdate = () => {
  const dispatch = useDispatch();
  const { refreshDataGridRef } = useContext(DevExtremeDataGridContext);

  useEffect(() => {
    return () => {
      // reinitialise de Authority state on Unmont
      dispatch(initialise());
    };
  }, [dispatch]);

  const { isOpenUpdate, authorityRowToUpdate, updateError, updating, updated, updatedData } = useSelector((state) => state.authority);

  const formFields = [
    {
      formGroupName: "",
      formGroupFields: [
        {
          name: "name",
          label: "Nom *",
          type: "text",
          value: authorityRowToUpdate?.name,
          validation: Yup.string()
            .required("Ce champ est obligatoire")
            .matches(/^[a-zA-Z0-9@]+$/, "Ce champ ne peut pas contenir des espace vide"),
        },
        { name: "description", label: "Description", type: "text", value: authorityRowToUpdate?.description, validation: Yup.string().notRequired() },
        { name: "deleted", label: "Supprimé", type: "checkbox", value: authorityRowToUpdate?.deleted, validation: Yup.boolean().notRequired() },
      ],
    },
  ];

  const onUpdateClick = (formValues) => {
    updateAuthority(dispatch, formValues);
  };

  const toggleUpdateForm = useCallback(() => {
    dispatch(toggleUpdate());
  }, [dispatch]);

  useEffect(() => {
    if (updated && !updateError) {
      // console.log(updatedData);
      refreshDataGridRef(updatedData);
      toggleUpdateForm();
    } else if (updated && updateError) {
      console.log("error =>", updateError);
    }
  }, [updated, updateError, updatedData, refreshDataGridRef, toggleUpdateForm]);

  return (
    <>
      <Modal id="Update_authority_modal" isOpen={isOpenUpdate} toggle={toggleUpdateForm}>
        <FormGeneratorV2
          isModal={true}
          headerName={"Modifier l'autorisation: " + authorityRowToUpdate?.Employee}
          formGroups={formFields}
          formConfig={{
            formId: "update-authority-form",
            fieldWidth: 6,
            onSubmit: onUpdateClick,
            onCancel: toggleUpdateForm,
            btnSubmitText: "Enregistrer",
            btnCancelText: "Annuler",
            loading: updating,
          }}
        />
      </Modal>
    </>
  );
};

export default AuthorityUpdate;
