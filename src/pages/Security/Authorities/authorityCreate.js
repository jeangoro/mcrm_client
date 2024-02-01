import React, { useCallback, useContext, useEffect } from "react";
import { Modal } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { initialise, toggleCreate } from "../../../store/authority/authoritySlice";
import { createAuthority } from "../../../store/authority";
import * as Yup from "yup";
import { DevExtremeDataGridContext } from "../../../components/common/DevExtremeDataGridProvider";
import FormGeneratorV2 from "../../../components/common/FormGeneratorV2";

const AuthorityCreate = () => {
  const dispatch = useDispatch();
  const { isOpenCreate, createError, creating, created, createdData, dataGridUpdated } = useSelector((state) => state.authority);

  const { refreshDataGridRef } = useContext(DevExtremeDataGridContext);

  useEffect(() => {
    return () => {
      // reinitialise de Authority state on Unmont
      dispatch(initialise());
    };
  }, [dispatch]);

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
    createAuthority(dispatch, formValues);
  };

  const formFields = [
    {
      formGroupName: "",
      formGroupFields: [
        {
          name: "name",
          label: "Nom *",
          type: "text",
          value: "",
          validation: Yup.string()
            .required("Ce champ est obligatoire")
            .matches(/^[a-zA-Z0-9@]+$/, "Ce champ ne peut pas contenir des espace vide"),
        },
        { name: "description", label: "Description", type: "text", value: "", validation: Yup.string().notRequired() },
      ],
    },
  ];

  return (
    <>
      <Modal id="create_authority_modal" isOpen={isOpenCreate} toggle={toggleCreateForm}>
        <FormGeneratorV2
          isModal={true}
          headerName={"Creation d'une autorisation"}
          formGroups={formFields}
          formConfig={{ formId: "create-authority-form", fieldWidth: 6, onSubmit: onCreateClick, onCancel: toggleCreateForm, btnSubmitText: "Valider", btnCancelText: "Annuler", loading: creating }}
        />
      </Modal>
    </>
  );
};
export default AuthorityCreate;
