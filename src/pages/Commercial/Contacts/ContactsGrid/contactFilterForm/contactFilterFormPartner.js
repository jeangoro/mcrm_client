import React, { useEffect } from "react";

import * as Yup from "yup";
// import { countriesFR } from "../../../../../common/data/countries";
import FormGeneratorV2 from "../../../../../components/common/FormGeneratorV2";
import { useSelector } from "react-redux";

const ContactFilterFormPartner = ({ contactFilterData, setContactFilterData, onFilterClick, onClearClick }) => {
  const { leadsType, countries, sourceContactType } = useSelector((state) => state.referential);

  useEffect(() => {
    if (contactFilterData?.contactTypes && contactFilterData?.contactTypes[0] !== "Partner") {
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

  const formFieldsPartner = [
    {
      formGroupName: "",
      formGroupFields: [
        // {
        //   name: "subContactTypes",
        //   label: "Sous type de contact",
        //   type: "select",
        //   isMulti: true,
        //   optionsValue: [
        //     { label: "Banque", value: "Bank" },
        //     { label: "Assurance", value: "Insurance" },
        //     { label: "Agence vente billet", value: "Ticket sales agency" },
        //     { label: "Logement", value: "Accommodation" },
        //     { label: "Admission (Ecole)", value: "Admission" },
        //     { label: "Agence Transfert(Orange,Mtn)", value: "Transfer Agency" },
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

        { name: "ids", label: "ID partenaire", type: "text", value: contactFilterData?.ids || "", validation: Yup.string().notRequired() },
        { name: "commercialRegisterNumbers", label: "Registre de commerce", type: "text", value: contactFilterData?.commercialRegisterNumbers || "", validation: Yup.string().notRequired() },
        { name: "enterpriseNui", label: "NIU", type: "text", value: contactFilterData?.enterpriseNui || "", validation: Yup.string().notRequired() },

        { name: "enterpriseNames", label: "Nom de la société", type: "text", value: contactFilterData?.enterpriseNames || "", validation: Yup.string().notRequired() },
        {
          name: "countryResidences",
          label: "Pays",
          type: "select",
          isMulti: "true",
          optionsValue: countryListFormated || [],
          value: contactFilterData?.countryResidences ? contactFilterData?.countryResidences : [],
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
        formGroups={formFieldsPartner}
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

export default ContactFilterFormPartner;
