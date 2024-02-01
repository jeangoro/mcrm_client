import React, { useCallback, useContext, useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { initialise, toggleCreate } from "../../store/reporting/reportingSlice";
import { createReporting } from "../../store/reporting";
import * as Yup from "yup";
import { DevExtremeDataGridContext } from "../../components/common/DevExtremeDataGridProvider";
import FormGeneratorV2 from "../../components/common/FormGeneratorV2";

const ReportingCreate = () => {
  const dispatch = useDispatch();
  const { isOpenCreate, createError, creating, created, createdData, dataGridUpdated } = useSelector((state) => state.reporting);

  const [checked, setChecked] = useState(false);
  const { refreshDataGridRef } = useContext(DevExtremeDataGridContext);

  useEffect(() => {
    return () => {
      // reinitialise de Reporting state on Unmont
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
    const data = { withError: checked, ...formValues };
    createReporting(dispatch, data);
  };

  const handleCheckbox = (e) => {
    setChecked(!checked);
  };

  const [selectCountry, setSelectCountry] = useState(null);
  const handleselectCountry = (selectCountry) => {
    setSelectCountry(selectCountry);
  };

  const country = [
    {
      options: [
        { label: "Select country", value: "Select country" },
        { label: "Argentina", value: "Argentina" },
        { label: "Belgium", value: "Belgium" },
        { label: "Brazil", value: "Brazil" },
        { label: "Colombia", value: "Colombia" },
        { label: "Denmark", value: "Denmark" },
        { label: "France", value: "France" },
        { label: "Germany", value: "Germany" },
        { label: "Mexico", value: "Mexico" },
        { label: "Russia", value: "Russia" },
        { label: "Spain", value: "Spain" },
        { label: "Syria", value: "Syria" },
        { label: "United Kingdom", value: "United Kingdom" },
        {
          label: "United States of America",
          value: "United States of America",
        },
      ],
    },
  ];

  // const formFieldsDefault = [
  //   {
  //     formGroupName: "",
  //     formGroupFields: [
  //       { name: "startCreationDate", label: "startCreationDate", type: "date", value: contactFilterData?.startCreationDate || "", validation: Yup.string().notRequired() },
  //       { name: "endCreationDate", label: "endCreationDate", type: "date", value: contactFilterData?.endCreationDate || "", validation: Yup.string().notRequired() },
  //     ],
  //   },
  // ];

  const formFields = [
    {
      formGroupName: "",
      formGroupFields: [
        { name: "OrderNumber", label: "No commande *", type: "number", value: "", validation: Yup.number().required("Champ obligatoire") },
        { name: "Employee", label: "Employee *", type: "text", value: "", validation: Yup.string().required("Ce champ est obligatoire") },
        { name: "SaleAmount", label: "Sale Amount", type: "number", value: "", validation: Yup.string().notRequired() },
        { name: "StoreCity", label: "Store City", type: "text", value: "", validation: Yup.string().notRequired() },
        { name: "StoreState", label: "Store State", type: "select", optionsValue: country[0].options, value: "", validation: Yup.string().notRequired() },
        { name: "OrderDate", label: "Order Date", type: "date", value: "", validation: Yup.string().notRequired() },
        { name: "withError", label: "Simule error", type: "checkbox", value: false, validation: Yup.string().notRequired() },
      ],
    },
  ];

  return (
    <>
      <Modal id="create_reporting_modal" isOpen={isOpenCreate} toggle={toggleCreateForm}>
        <FormGeneratorV2
          isModal={true}
          headerName={"Creation d'un utilisateur"}
          formGroups={formFields}
          formConfig={{ formId: "create-reporting-form", fieldWidth: 6, onSubmit: onCreateClick, onCancel: toggleCreateForm, btnSubmitText: "Valider", btnCancelText: "Annuler", loading: creating }}
        />
      </Modal>
    </>
  );
};
export default ReportingCreate;
