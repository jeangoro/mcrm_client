import React, { useEffect } from "react";

import * as Yup from "yup";
// import { countriesFR } from "../../../../../common/data/countries";
import FormGeneratorV2 from "../../../../../components/common/FormGeneratorV2";
import { useSelector } from "react-redux";

const ContactFilterFormEnterprise = ({ contactFilterData, setContactFilterData, onFilterClick, onClearClick }) => {
  const { countries, sourceContactType, marketerType } = useSelector((state) => state.referential);

  useEffect(() => {
    if (contactFilterData?.contactTypes && contactFilterData?.contactTypes[0] !== "Enterprise") {
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

  const listTypeMarketer =
    marketerType &&
    marketerType.map((type) => {
      return { label: type.description, value: type.value };
    });

  // const listTypeMarketer = [
  //   { label: "Commercial", value: "Commercial" },
  //   { label: "Etudiant", value: "Student" },
  //   { label: "Ambassadeur", value: "Ambassador" },
  //   { label: "Travailleur", value: "Worker" },
  //   { label: "Personnel", value: "Staff" },
  //   { label: "Chômeur", value: "Unemployed" },
  // ];

  const formFieldsEnterprise = [
    {
      formGroupName: "",
      formGroupFields: [
        // {
        //   name: "subContactTypes",
        //   label: "Sous type de contact",
        //   type: "select",
        //   isMulti: true,
        //   optionsValue: [
        //     { label: "Agence", value: "Agency" },
        //     { label: "Société", value: "Company" },
        //   ],
        //   value: contactFilterData?.subContactTypes ? contactFilterData?.subContactTypes : [],
        //   validation: Yup.array().notRequired(),
        // },
        {
          name: "sourceContactTypes",
          label: "Source de contact",
          type: "select",
          isMulti: "true",
          optionsValue: sourceContactTypeOptions || [],
          value: contactFilterData?.sourceContactTypes ? contactFilterData?.sourceContactTypes : [],
          validation: Yup.array().notRequired(),
        },

        {
          name: "marketerTypes",
          label: "Type marketeur",
          type: "select",
          isMulti: "true",
          optionsValue: listTypeMarketer || [],
          value: contactFilterData?.marketerTypes ? contactFilterData?.marketerTypes : [],
          validation: Yup.array().notRequired(),
        },
        { name: "enterpriseNames", label: "Noms de l'agences", type: "text", value: contactFilterData?.enterpriseNames || "", validation: Yup.string().notRequired() },
        { name: "enterpriseCityResidences", label: "Villes de l'agences", type: "text", value: contactFilterData?.enterpriseCityResidences || "", validation: Yup.string().notRequired() },
        { name: "commercialRegisterNumbers", label: "Registres de commerces", type: "text", value: contactFilterData?.commercialRegisterNumbers || "", validation: Yup.string().notRequired() },
        { name: "enterpriseNui", label: "NIUs", type: "text", value: contactFilterData?.enterpriseNui || "", validation: Yup.string().notRequired() },
        { name: "marketerIds", label: "Ids marketeurs", type: "text", value: contactFilterData?.marketerIds || "", validation: Yup.string().notRequired() },
        {
          name: "marketerCountries",
          label: "Pays du marketeur",
          type: "select",
          isMulti: "true",
          optionsValue: countryListFormated || [],
          value: contactFilterData?.marketerCountries ? contactFilterData?.marketerCountries : [],
          validation: Yup.array().notRequired(),
        },
        { name: "startCreationDate", label: "startCreationDate", type: "date", value: contactFilterData?.startCreationDate || "", validation: Yup.string().notRequired() },
        { name: "endCreationDate", label: "endCreationDate", type: "date", value: contactFilterData?.endCreationDate || "", validation: Yup.string().notRequired() },
      ],
    },
  ];

  // const formFieldsEnterprise = ;

  return (
    <>
      <FormGeneratorV2
        isModal={false}
        formGroups={formFieldsEnterprise}
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

export default ContactFilterFormEnterprise;
