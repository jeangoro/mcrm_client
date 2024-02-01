import React, { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { initialise, toggleUpdate } from "../../store/reporting/reportingSlice";
import { updateReporting } from "../../store/reporting";
import * as Yup from "yup";
import { DevExtremeDataGridContext } from "../../components/common/DevExtremeDataGridProvider";
import FormGeneratorV2 from "../../components/common/FormGeneratorV2";

const ReportingUpdate = () => {
  const dispatch = useDispatch();
  const { refreshDataGridRef } = useContext(DevExtremeDataGridContext);

  useEffect(() => {
    return () => {
      // reinitialise de Reporting state on Unmont
      dispatch(initialise());
    };
  }, [dispatch]);

  const { isOpenUpdate, reportingRowToUpdate, updateError, updating, updated, updatedData } = useSelector((state) => state.reporting);

  const country = [
    {
      options: [
        { label: "Nevada", value: "Nevada" },
        { label: "California", value: "California" },
        { label: "Colorado", value: "Colorado" },
        { label: "Washington", value: "Washington" },
        { label: "Utah", value: "Utah" },
        { label: "Idaho", value: "Idaho" },
        { label: "Arizona", value: "Arizona" },
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
        { name: "OrderNumber", label: "No commande *", type: "number", value: reportingRowToUpdate?.OrderNumber, validation: Yup.number().required("Champ obligatoire") },
        { name: "Employee", label: "Employee *", type: "text", value: reportingRowToUpdate?.Employee, validation: Yup.string().required("Ce champ est obligatoire") },
        { name: "SaleAmount", label: "Sale Amount", type: "number", value: reportingRowToUpdate?.SaleAmount, validation: Yup.string().notRequired() },
        { name: "StoreCity", label: "Store City", type: "text", value: reportingRowToUpdate?.StoreCity, validation: Yup.string().notRequired() },
        { name: "StoreState", label: "Store State", type: "select", optionsValue: country[0].options, value: reportingRowToUpdate?.StoreState, validation: Yup.string().notRequired() },
        { name: "OrderDate", label: "Order Date", type: "date", value: reportingRowToUpdate?.OrderDate, validation: Yup.string().notRequired() },
        { name: "withError", label: "Simule error", type: "checkbox", value: false, validation: Yup.string().notRequired() },
      ],
    },
  ];

  const onUpdateClick = (formValues) => {
    updateReporting(dispatch, formValues);
  };

  const toggleUpdateForm = useCallback(() => {
    dispatch(toggleUpdate());
  }, [dispatch]);

  useEffect(() => {
    if (updated && !updateError) {
      console.log(updatedData);
      refreshDataGridRef(updatedData);
      toggleUpdateForm();
    } else if (updated && updateError) {
      console.log("error =>", updateError);
    }
  }, [updated, updateError, updatedData, refreshDataGridRef, toggleUpdateForm]);

  return (
    <>
      <Modal id="Update_reporting_modal" isOpen={isOpenUpdate} toggle={toggleUpdateForm}>
        <FormGeneratorV2
          isModal={true}
          headerName={"Modifier le reporting: " + reportingRowToUpdate?.Employee}
          formGroups={formFields}
          formConfig={{
            formId: "update-reporting-form",
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

export default ReportingUpdate;
