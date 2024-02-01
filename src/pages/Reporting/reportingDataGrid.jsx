import React from "react";
import GridColumnType from "../../components/common/GridColumnType";

const ReportingDataGrid = (listDataSources) => {
  return {
    config: {
      version: 0,

      keyExpr: "OrderNumber",
      dataGridId: "reportingDataGrid",
      dataGridFilter: "reportingDataGrid_Filter",
      dataGridHeight: 0,
      dataGridPageSize: 10,
      selectionMode: "single", // single or multiple

      allowRefresh: true,
      allowSearchPanel: true,
      allowExportButton: false,
      allowColumnChooserButton: true,
      allowRowActionButton: false,
    },

    headers: [
      {
        dataField: "OrderNumber",
        label: "Order Number",
        allowSorting: true,
        allowFiltering: true,
        type: GridColumnType.NUMBER,
      },
      {
        dataField: "Employee",
        label: "Employee",
        allowSorting: false,
        allowFiltering: false,
        type: GridColumnType.TEXT,
      },
      {
        dataField: "SaleAmount",
        label: "Sale Amount",
        type: GridColumnType.NUMBER,
      },
      {
        dataField: "StoreCity",
        label: "Store City",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "StoreState",
        label: "Store State",
        type: GridColumnType.TEXT,
      },
      {
        dataField: "OrderDate",
        label: "Order Date",
        type: GridColumnType.DATE,
      },
      // {
      //   dataField: "State",
      //   label: "State",
      //   type: GridColumnType.LIST,
      //   valueExpr: "ID",
      //   displayExpr: "Name",
      //   width: 225,
      //   dataSource: listDataSources["State"],
      // },
    ],
  };
};
export { ReportingDataGrid };
