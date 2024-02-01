import GridColumnType from "../../../components/common/GridColumnType";

const GroupDataGrid = () => {
  return {
    config: {
      version: 0,

      keyExpr: "name",
      dataGridId: "groupDataGrid",
      dataGridFilter: "groupDataGrid_Filter",
      dataGridHeight: 0,
      dataGridPageSize: 10,
      selectionMode: "single", // single or multiple

      allowRefresh: true,
      allowSearchPanel: true,
      allowExportButton: false,
      allowColumnChooserButton: true,
      allowRowActionButton: false,
      moreActionsIsModal: false,
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
export { GroupDataGrid };
