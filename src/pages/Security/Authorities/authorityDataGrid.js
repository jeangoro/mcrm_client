import GridColumnType from "../../../components/common/GridColumnType";

const AuthorityDataGrid = () => {
  return {
    config: {
      version: 0,

      keyExpr: "name",
      dataGridId: "authorityDataGrid",
      dataGridFilter: "authorityDataGrid_Filter",
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
        dataField: "name",
        label: "Nom",
        allowSorting: true,
        allowFiltering: true,
        type: GridColumnType.TEXT,
      },
      {
        dataField: "description",
        label: "Description",
        allowSorting: false,
        allowFiltering: false,
        type: GridColumnType.TEXT,
      },
      {
        dataField: "deleted",
        label: "Deleted",
        type: GridColumnType.BOOLEAN,
      },
    ],
  };
};
export { AuthorityDataGrid };
