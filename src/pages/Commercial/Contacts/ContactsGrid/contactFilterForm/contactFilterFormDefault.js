import React, { useEffect } from "react";

import * as Yup from "yup";
import FormGeneratorV2 from "../../../../../components/common/FormGeneratorV2";
import { useSelector } from "react-redux";

const ContactFilterFormDefault = ({ contactFilterData, setContactFilterData, onFilterClick, onClearClick }) => {
  const { sourceContactType } = useSelector((state) => state.referential);

  useEffect(() => {
    if (contactFilterData?.contactTypes && contactFilterData?.contactTypes[0] !== "Tout") {
      setContactFilterData(null);
    }
  });

  const sourceContactTypeOptions =
    sourceContactType &&
    sourceContactType.map((source) => {
      return { label: source.description, value: source.value };
    });

  const formFieldsDefault = [
    {
      formGroupName: "",
      formGroupFields: [
        {
          name: "sourceContactTypes",
          label: "Source de contact",
          type: "select",
          isMulti: "true",
          optionsValue: sourceContactTypeOptions || [],
          value: contactFilterData?.sourceContactTypes ? contactFilterData?.sourceContactTypes : [],
          validation: Yup.array().notRequired(),
        },
        { name: "startCreationDate", label: "startCreationDate", type: "date", value: contactFilterData?.startCreationDate || "", validation: Yup.string().notRequired() },
        { name: "endCreationDate", label: "endCreationDate", type: "date", value: contactFilterData?.endCreationDate || "", validation: Yup.string().notRequired() },
      ],
    },
  ];

  return (
    <>
      <FormGeneratorV2
        isModal={false}
        formGroups={formFieldsDefault}
        formConfig={{
          formId: "filter-contact-form",
          fieldWidth: 6,
          onSubmit: onFilterClick,
          onCancel: onClearClick,
          btnSubmitText: "Filtrer",
          btnCancelText: "Reinitialiser",
          buttonsFloatBottom: true,
        }}
      />
    </>
  );
};

export default ContactFilterFormDefault;
