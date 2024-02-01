import { useState } from "react";
import GridColumnType from "../../../../components/common/GridColumnType";

const ContactDataGrid = () => {
  const [gridHeight, setGridHeight] = useState(window.innerHeight - 190);

  const getGridHeight = () => {
    setGridHeight(window.innerHeight - 190);
  };

  window.addEventListener("resize", getGridHeight);

  // console.log(gridHeight);
  return {
    config: {
      version: 0,

      keyExpr: "id",
      dataGridId: "contactDataGrid",
      dataGridFilter: "contactDataGrid_Filter",
      dataGridHeight: gridHeight, //"68vh",
      dataGridPageSize: 5,
      selectionMode: "single", // single or multiple

      allowRefresh: true,
      allowSearchPanel: true,
      allowExportButton: false,
      allowColumnChooserButton: true,
      allowRowActionButton: false,
      // pagerVisible: false,
      // pagerAllowedPageSizes: [10, 15, 20],
      // scrollingMode: "infinite", // standart or virtual or infinite
    },

    headers: [
      {
        dataField: "contactType",
        label: "Type de contact",
        allowSorting: true,
        allowFiltering: true,
        type: GridColumnType.TEXT,
      },
      {
        dataField: "sourceContactType",
        label: "Source contact",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "suspect",
        label: "Suspects",
        type: GridColumnType.NUMBER,
      },
      {
        dataField: "lead",
        label: "Leads",
        type: GridColumnType.NUMBER,
      },
      {
        dataField: "prospect",
        label: "Prospects",
        type: GridColumnType.NUMBER,
      },
      {
        dataField: "client",
        label: "Clients",
        type: GridColumnType.NUMBER,
      },
      {
        dataField: "totalContact",
        label: "Total contact",
        type: GridColumnType.NUMBER,
      },
      {
        dataField: "modificationDate",
        label: "modificationDate",
        type: GridColumnType.DATE,
      },
      {
        dataField: "modifiedBy",
        label: "modifiedBy",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "creationDate",
        label: "creationDate",
        type: GridColumnType.DATE,
      },
      {
        dataField: "createdBy",
        label: "createdBy",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "deleted",
        label: "deleted",
        type: GridColumnType.BOOLEAN,
      },
      {
        dataField: "disabled",
        label: "disabled",
        type: GridColumnType.BOOLEAN,
      },
      {
        dataField: "opportunityCount",
        label: "opportunityCount",
        type: GridColumnType.NUMBER,
      },
      {
        dataField: "leadStatus",
        label: "leadStatus",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "marketerCountry",
        label: "marketerCountry",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "marketerName",
        label: "marketerName",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "marketerId",
        label: "marketerId",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "marketerType",
        label: "marketerType",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "parentDesignation",
        label: "parentDesignation",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "parentCountry",
        label: "parentCountry",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "parentCode",
        label: "parentCode",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "enterpriseNui",
        label: "enterpriseNui",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "enterpriseCountryResidence",
        label: "enterpriseCountryResidence",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "enterpriseCityResidence",
        label: "enterpriseCityResidence",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "commercialRegisterNumber",
        label: "commercialRegisterNumber",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "enterpriseAddress",
        label: "enterpriseAddress",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "enterpriseTel",
        label: "enterpriseTel",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "enterpriseEmail",
        label: "enterpriseEmail",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "enterpriseDescription",
        label: "enterpriseDescription",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "enterpriseName",
        label: "enterpriseName",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "enterpriseCode",
        label: "enterpriseCode",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "personalType",
        label: "personalType",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "birthDay",
        label: "Date naissance",
        type: GridColumnType.DATE,
      },
      {
        dataField: "birthPlace",
        label: "Lieu de naissance",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "description",
        label: "Description",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "address",
        label: "Address",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "email",
        label: "Email",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "profession",
        label: "Profession",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "destinationCountry",
        label: "Pays de destination",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "firstName",
        label: "Nom",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "lastName",
        label: "Prénom",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "countryResidence",
        label: "Pays de Residence",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "cityResidence",
        label: "Ville de Residence",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "complementAddress",
        label: "Adresse complementaire",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "phoneNumber",
        label: "Téléphone",
        type: GridColumnType.NUMBER,
      },
      {
        dataField: "civility",
        label: "Civilité",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "gender",
        label: "Genre",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "parentId",
        label: "parentId",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "id",
        label: "Id",
        allowSorting: true,
        allowFiltering: true,
        type: GridColumnType.TEXT,
      },
    ],
  };
};
export { ContactDataGrid };
