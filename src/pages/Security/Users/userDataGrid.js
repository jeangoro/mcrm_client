import { useRef, useState } from "react";
import GridColumnType from "../../../components/common/GridColumnType";

const UserDataGrid = () => {
  const [contentHeight, setContentHeight] = useState(window.innerHeight - 230);
  const getContentHeight = (e) => {
    if (window.innerHeight !== contentHeight) {
      setContentHeight(window.innerHeight - 230);
    }
  };
  window.addEventListener("resize", function (e) {
    getContentHeight(e);
  });
  return {
    config: {
      version: 0,

      keyExpr: "userId",
      dataGridId: "userDataGrid",
      dataGridFilter: "userDataGrid_Filter",
      dataGridHeight: contentHeight, //"68vh",
      dataGridPageSize: 5,
      selectionMode: "single", // single or multiple

      allowRefresh: true,
      allowSearchPanel: true,
      allowExportButton: false,
      allowColumnChooserButton: true,
      allowRowActionButton: false,
      moreActionsIsModal: true,
      // pagerVisible: false,
      // pagerAllowedPageSizes: [10, 15, 20],
      // scrollingMode: "infinite", // standart or virtual or infinite
    },

    headers: [
      {
        dataField: "userId",
        label: "Id user",
        allowSorting: true,
        allowFiltering: true,
        type: GridColumnType.TEXT,
      },
      {
        dataField: "firstName",
        label: "Nom",
        allowSorting: true,
        allowFiltering: true,
        type: GridColumnType.TEXT,
      },
      {
        dataField: "lastName",
        label: "Prénom",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "phoneNumber",
        label: "Téléphone",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "civility",
        label: "Civilité",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "countryResidence",
        label: "Pays de residence",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "disabled",
        label: "Désactivé",
        allowSorting: false,
        allowFiltering: false,
        type: GridColumnType.BOOLEAN,
      },
      {
        dataField: "createBy",
        label: "Créé par",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "createDate",
        label: "Date de création",
        type: GridColumnType.DATE,
      },
      {
        dataField: "email",
        label: "Email",
        type: GridColumnType.TEXT,
        valueExpr: "ID",
        displayExpr: "Name",
        width: 100,
      },
      {
        dataField: "emailVerified",
        label: "Email Verifiée",
        type: GridColumnType.BOOLEAN,
      },
      {
        dataField: "gender",
        label: "Genre",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "locale",
        label: "locale",
        type: GridColumnType.TEXT,
      },
    ],
  };
};
export { UserDataGrid };
