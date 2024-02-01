import React, { useCallback, useContext, useEffect } from "react";
import { Modal } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleCreate } from "../../../store/group/groupSlice";
import { createGroup } from "../../../store/group";
import * as Yup from "yup";
import { DevExtremeDataGridContext } from "../../../components/common/DevExtremeDataGridProvider";
import FormGeneratorV2 from "../../../components/common/FormGeneratorV2";

const GroupCreate = () => {
  const dispatch = useDispatch();
  const { isOpenCreate, createError, creating, created, createdData, dataGridUpdated } = useSelector((state) => state.group);
  const { authorityList } = useSelector((state) => state.authority);

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
    createGroup(dispatch, formValues);
  };

  let authorityListFormated =
    authorityList &&
    authorityList.map((el) => {
      return { label: el.name, value: el.name };
    });
  // console.log(authorityListFormated);

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
        {
          name: "description",
          label: "Description",
          type: "text",
          value: "",
          validation: Yup.string().notRequired(),
        },
        {
          name: "actions",
          label: "Actions",
          type: "select",
          isMulti: true,
          value: [],
          optionsValue: [],
          validation: Yup.array().notRequired(),
        },
      ],
    },
  ];

  return (
    <>
      <Modal id="create_group_modal" isOpen={isOpenCreate} toggle={toggleCreateForm}>
        <FormGeneratorV2
          isModal={true}
          headerName={"Creation d'un groupe d'utilisateur"}
          formGroups={formFields}
          formConfig={{ formId: "create-group-form", fieldWidth: 6, onSubmit: onCreateClick, onCancel: toggleCreateForm, btnSubmitText: "Valider", btnCancelText: "Annuler", loading: creating }}
        />
      </Modal>
    </>
  );
};
export default GroupCreate;
