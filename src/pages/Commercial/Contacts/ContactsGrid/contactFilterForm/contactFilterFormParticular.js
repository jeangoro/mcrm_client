import React, { useEffect } from "react";

import * as Yup from "yup";
// import { countriesFR } from "../../../../../common/data/countries";
import FormGeneratorV2 from "../../../../../components/common/FormGeneratorV2";
import { useSelector } from "react-redux";

const ContactFilterFormParticular = ({ contactFilterData, setContactFilterData, onFilterClick, onClearClick }) => {
  const { countries, sourceContactType } = useSelector((state) => state.referential);

  useEffect(() => {
    if (contactFilterData?.contactTypes && contactFilterData?.contactTypes[0] !== "Particular") {
      setContactFilterData(null);
    }
  });

  const countryListFormated =
    countries &&
    countries.map((country) => {
      return { label: country.name, value: country.alpha2 };
    });

  const sourceContactTypeOptions =
    sourceContactType &&
    sourceContactType.map((source) => {
      return { label: source.description, value: source.value };
    });

  // const listTypeMarketer =
  //   marketerType &&
  //   marketerType.map((type) => {
  //     return { label: type.description, value: type.value };
  //   });

  // let countryListFormated =
  //   countriesFR &&
  //   countriesFR.map((country) => {
  //     return { label: country.name, value: country.alpha2 };
  //   });

  // const formFieldsDefault = [
  //   {
  //     formGroupName: "",
  //     formGroupFields: [
  //       { name: "startCreationDate", label: "startCreationDate", type: "date", value: contactFilterData?.startCreationDate || "", validation: Yup.string().notRequired() },
  //       { name: "endCreationDate", label: "endCreationDate", type: "date", value: contactFilterData?.endCreationDate || "", validation: Yup.string().notRequired() },
  //     ],
  //   },
  // ];
  const formFieldsParticular = [
    {
      formGroupName: "",
      formGroupFields: [
        // {
        //   name: "subContactTypes",
        //   label: "Sous type de contact",
        //   type: "select",
        //   isMulti: true,
        //   optionsValue: [
        //     { label: "Student", value: "Student" },
        //     { label: "Worker", value: "Worker" },
        //   ],
        //   value: contactFilterData?.subContactTypes ? contactFilterData?.subContactTypes : [],
        //   validation: Yup.array().notRequired(),
        // },
        {
          name: "sourceContactTypes",
          label: "Source de contact",
          type: "select",
          isMulti: true,
          optionsValue: sourceContactTypeOptions || [],
          value: contactFilterData?.sourceContactTypes ? contactFilterData?.sourceContactTypes : [],
          validation: Yup.array().notRequired(),
        },

        { name: "ids", label: "Ids User", type: "text", value: contactFilterData?.ids || "", validation: Yup.string().notRequired() },
        // { name: "name", label: "Nom complet", type: "text", value: contactFilterData?.idUser || "", validation: Yup.string().notRequired() },
        { name: "emails", label: "Email", type: "text", value: contactFilterData?.emails ? contactFilterData?.emails.replace(/\s+/g, "") : "", validation: Yup.string().notRequired() },

        {
          name: "phoneNumbers",
          label: "Téléphone",
          type: "text",
          value: contactFilterData?.phoneNumbers ? contactFilterData?.phoneNumbers.replace(/\s+/g, "") : "",
          validation: Yup.string().notRequired(),
        },
        {
          name: "countryResidences",
          label: "Pays de residence",
          type: "select",
          isMulti: "true",
          optionsValue: countryListFormated || [],
          value: contactFilterData ? contactFilterData?.countryResidences : [],
          validation: Yup.array().notRequired(),
        },
        {
          name: "cityResidences",
          label: "Villes de residences",
          type: "text",
          value: contactFilterData?.cityResidences ? contactFilterData?.cityResidences.replace(/\s+/g, "") : "",
          validation: Yup.string().notRequired(),
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
        formGroups={formFieldsParticular}
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

export default ContactFilterFormParticular;
