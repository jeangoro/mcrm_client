import React, { useContext, useState } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Input, Row, Col, Form } from "reactstrap";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../../store/reporting/reportingSlice";
import * as Yup from "yup";
import { DevExtremeDataGridContext } from "../../components/common/DevExtremeDataGridProvider";
import FormGeneratorV2 from "../../components/common/FormGeneratorV2";

const ReportingFilter = () => {
  const dispatch = useDispatch();

  const { isOpenFilter } = useSelector((state) => state.reporting);

  const { dataFilter, setDataFilter } = useContext(DevExtremeDataGridContext);

  // const [selectCountry, setSelectCountry] = useState(null);

  const onCloseClick = () => {
    console.log("onCloseClick => ");
    dispatch(toggleFilter());
  };

  const onClearClick = () => {
    console.log("onClearClick => ");
    setDataFilter(null);
  };

  const onFilterClick = (formValues) => {
    console.log("onFilterClick => ", formValues);
    // const filterData = { name: "name_value", status: "status_value" };
    setDataFilter(formValues);
    onCloseClick();
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
        { name: "OrderNumber", label: "No commande *", type: "number", value: dataFilter?.OrderNumber, validation: Yup.number().required("Champ obligatoire") },
        { name: "Employee", label: "Employee *", type: "text", value: dataFilter?.Employee, validation: Yup.string().required("Ce champ est obligatoire") },
        { name: "SaleAmount", label: "Sale Amount", type: "number", value: dataFilter?.SaleAmount, validation: Yup.string().notRequired() },
        { name: "StoreCity", label: "Store City", type: "text", value: dataFilter?.StoreCity, validation: Yup.string().notRequired() },
        { name: "StoreState", label: "Store State", type: "select", optionsValue: country[0].options, value: dataFilter?.StoreState, validation: Yup.string().notRequired() },
        { name: "OrderDate", label: "Order Date", type: "text", value: dataFilter?.OrderDate, validation: Yup.string().notRequired() },
        { name: "withError", label: "Simule error", type: "checkbox", value: dataFilter?.withError, validation: Yup.string().notRequired() },
      ],
    },
  ];

  return (
    <Offcanvas direction="end" isOpen={isOpenFilter} id="offcanvasExample" toggle={onCloseClick} scrollable={true}>
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Reporting Fliters
      </OffcanvasHeader>

      <OffcanvasBody>
        <FormGeneratorV2
          isModal={false}
          formGroups={formFields}
          formConfig={{
            formId: "filter-reporting-form",
            fieldWidth: 6,
            onSubmit: onFilterClick,
            onCancel: onClearClick,
            btnSubmitText: "Filtrer",
            btnCancelText: "Reinitialiser",
            buttonsFloatBottom: true,
          }}
        />
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default ReportingFilter;
