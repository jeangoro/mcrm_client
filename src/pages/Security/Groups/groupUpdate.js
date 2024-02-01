import React, { useCallback, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "reactstrap";
import { toggleUpdate } from "../../../store/group/groupSlice";
import { updateGroup } from "../../../store/group";
import * as Yup from "yup";
import { DevExtremeDataGridContext } from "../../../components/common/DevExtremeDataGridProvider";
import FormGeneratorV2 from "../../../components/common/FormGeneratorV2";

const GroupUpdate = () => {
  const dispatch = useDispatch();
  const { refreshDataGridRef } = useContext(DevExtremeDataGridContext);

  const { isOpenUpdate, groupRowToUpdate, updateError, updating, updated, updatedData } = useSelector((state) => state.group);

  const formFields = [
    {
      formGroupName: "",
      formGroupFields: [
        {
          name: "name",
          label: "Nom *",
          type: "text",
          value: groupRowToUpdate?.name,
          validation: Yup.string()
            .required("Ce champ est obligatoire")
            .matches(/^[a-zA-Z0-9@]+$/, "Ce champ ne peut pas contenir des espace vide"),
        },
        { name: "description", label: "Description", type: "text", value: groupRowToUpdate?.description, validation: Yup.string().notRequired() },
        { name: "deleted", label: "Supprimé", type: "checkbox", value: groupRowToUpdate?.deleted, validation: Yup.boolean().notRequired() },
      ],
    },
  ];

  const onUpdateClick = (formValues) => {
    updateGroup(dispatch, formValues);
  };

  const toggleUpdateForm = useCallback(() => {
    dispatch(toggleUpdate());
  }, [dispatch]);

  useEffect(() => {
    if (updated && !updateError) {
      refreshDataGridRef(updatedData);
      toggleUpdateForm();
    } else if (updated && updateError) {
      console.log("error =>", updateError);
    }
  }, [updated, updateError, updatedData, refreshDataGridRef, toggleUpdateForm]);

  return (
    <>
      <Modal id="Update_group_modal" isOpen={isOpenUpdate} toggle={toggleUpdateForm}>
        <FormGeneratorV2
          isModal={true}
          headerName={"Modifier l'autorisation: " + groupRowToUpdate?.Employee}
          formGroups={formFields}
          formConfig={{
            formId: "update-group-form",
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

export default GroupUpdate;
