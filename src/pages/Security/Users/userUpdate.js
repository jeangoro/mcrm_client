import React, { useCallback, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "reactstrap";
import { toggleUpdate } from "../../../store/user/userSlice";
import { updateUser } from "../../../store/user";
import * as Yup from "yup";
import { DevExtremeDataGridContext } from "../../../components/common/DevExtremeDataGridProvider";
import { civilityOptions, genderOptions, localeOptions, paysOptions } from "../../../components/common/FormOptions";
import FormGeneratorV2 from "../../../components/common/FormGeneratorV2";

const UserUpdate = () => {
  const dispatch = useDispatch();
  const { refreshDataGridRef } = useContext(DevExtremeDataGridContext);

  const { isOpenUpdate, userRowToUpdate, updateError, updating, updated, updatedData } = useSelector((state) => state.user);

  const formFields = [
    {
      formGroupName: "",
      formGroupFields: [
        { name: "userId", label: "User id", type: "text", disabled: true, value: userRowToUpdate.userId, validation: Yup.string().required("Champ obligatoire") },
        { name: "civility", label: "Civilité", type: "select", optionsValue: civilityOptions, value: userRowToUpdate.civility, validation: Yup.string().notRequired() },
        { name: "countryResidence", label: "Pays de residence", type: "select", optionsValue: paysOptions, value: userRowToUpdate.countryResidence, validation: Yup.string().notRequired() },
        { name: "createBy", label: "Créé par", type: "text", value: userRowToUpdate.createBy, validation: Yup.string().email("Email invalide").notRequired() },
        { name: "createDate", label: "Date de création", type: "date", value: userRowToUpdate.createDate, validation: Yup.string().notRequired() },
        { name: "email", label: "Email", type: "email", value: userRowToUpdate.email, validation: Yup.string().email("Email invalide").notRequired() },
        { name: "firstName", label: "Nom", type: "text", value: userRowToUpdate.firstName, validation: Yup.string().notRequired() },
        { name: "lastName", label: "Prénom", type: "text", value: userRowToUpdate.lastName, validation: Yup.string().notRequired() },
        { name: "gender", label: "Genre", type: "select", optionsValue: genderOptions, value: userRowToUpdate.gender, validation: Yup.string().notRequired() },
        { name: "locale", label: "Langue", type: "select", optionsValue: localeOptions, value: userRowToUpdate.locale, validation: Yup.string().notRequired() },
        { name: "phoneNumber", label: "Téléphone", type: "text", value: userRowToUpdate.phoneNumber, validation: Yup.string().min(9, "trop court").notRequired() },
        { name: "sponsorCode", label: "sponsorCode", type: "text", value: userRowToUpdate.sponsorCode, validation: Yup.string().notRequired() },
        { name: "activated", label: "Activé", type: "checkbox", value: userRowToUpdate.activated, validation: Yup.boolean().notRequired() },
      ],
    },
  ];

  const onUpdateClick = (formValues) => {
    updateUser(dispatch, formValues);
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
      <Modal id="Update_user_modal" isOpen={isOpenUpdate} toggle={toggleUpdateForm}>
        <FormGeneratorV2
          isModal={true}
          headerName={"Modifier l'utilisateur: " + userRowToUpdate?.name}
          formGroups={formFields}
          formConfig={{
            formId: "update-user-form",
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

export default UserUpdate;
