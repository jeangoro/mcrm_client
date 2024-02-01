import React, { useContext } from "react";

import DataGrid, {
  Column,
  ColumnChooser,
  ColumnChooserSearch,
  ColumnChooserSelection,
  Editing,
  FilterPanel,
  FilterRow,
  Grouping,
  HeaderFilter,
  Item,
  LoadPanel,
  Lookup,
  Pager,
  Paging,
  Position,
  Scrolling,
  SearchPanel,
  Selection,
  Sorting,
  Toolbar,
} from "devextreme-react/data-grid";
import Button2 from "devextreme-react/button";
import GridColumnType from "./GridColumnType";
import CustomStore from "devextreme/data/custom_store";
import DataSource from "devextreme/data/data_source";
import DevExtremeMoreAction from "./DevExtremeMoreAction";
import isFunction from "./Utils";
import { DevExtremeDataGridContext } from "./DevExtremeDataGridProvider";
import { useSelector } from "react-redux";

function isNotEmpty(value) {
  return value !== undefined && value !== null && value !== "";
}

function prefixCellRender(row, doUpdate, doDelete, doOpenView, doMoreAction, moreActionsIsModal) {
  return <DevExtremeMoreAction row={row} doUpdate={doUpdate} doDelete={doDelete} doOpenView={doOpenView} doMoreAction={doMoreAction} moreActionsIsModal={moreActionsIsModal} />;
}

export default function DevExtremeDataGrid({ configGrid, configHeader, doLoad, doOnSelectionChanged, doUpdate, doOpenView, doMoreAction, moreActionsIsModal, doAdd, doDelete, doFilter, dataSource }) {
  const { dataGridRef, dataRef, storeRef, canRemoteCallRef } = useContext(DevExtremeDataGridContext);

  const store = new CustomStore({
    key: configGrid.keyExpr,
    requireTotalCount: true,
    loadMode: "processed",
    load: async function (loadOptions) {
      loadOptions["requireTotalCount"] = true;
      let params = "?";
      ["skip", "take", "requireTotalCount"].forEach((i) => {
        if (i in loadOptions && isNotEmpty(loadOptions[i])) {
          params += `${i}=${JSON.stringify(loadOptions[i])}&`;
        }
      });
      params = params.slice(0, -1);
      try {
        const result = await applyDoLoad(params, canRemoteCallRef.current, loadOptions["sort"]);
        canRemoteCallRef.current = true;
        return result;
      } catch (e) {
        console.error(e);
        throw new Error("Data Loading Error");
      }
    },
  });

  const getDataGridRef = () => {
    return dataGridRef.current.instance;
  };

  function setDataGridRef(dataGrid) {
    dataGridRef.current = dataGrid;
    storeRef.current = store;
  }

  const allowUpdating = isFunction(doUpdate);
  const allowAdding = isFunction(doAdd);
  const allowDeleting = isFunction(doDelete);
  const allowOpenView = isFunction(doOpenView);
  const allowFilter = isFunction(doFilter);
  const allowMoreActions = isFunction(doMoreAction);

  function compareAsc(a, b, keyExpr) {
    if (a[keyExpr] === b[keyExpr]) {
      return 0;
    } else if (a[keyExpr] > b[keyExpr]) {
      return 1;
    } else {
      return -1;
    }
  }

  function compareDesc(a, b, keyExpr) {
    if (a[keyExpr] === b[keyExpr]) {
      return 0;
    } else if (a[keyExpr] < b[keyExpr]) {
      return 1;
    } else {
      return -1;
    }
  }

  function applyDoLoad(params, canRemoteCall, sort) {
    if (!canRemoteCall) {
      // console.log("======> with not remote");
      let dataAsList = [];
      dataRef.current.forEach((value, key, map) => {
        dataAsList.push(value);
      });
      if (isSortable(sort)) {
        const selector = sort[0]["selector"];
        const desc = sort[0]["desc"];
        if (desc) {
          dataAsList.sort((a, b) => compareDesc(a, b, selector));
        } else {
          dataAsList.sort((a, b) => compareAsc(a, b, selector));
        }
      }
      return { data: dataAsList, totalCount: dataAsList.length };
    } else {
      // console.log("======> with remote");
      return doLoad(params, canRemoteCall, sort).then((response) => {
        const data = response && response.data;
        for (const value of data.data.values()) {
          dataRef.current.set(value[configGrid.keyExpr], value);
        }
        return { data: data.data, totalCount: data.totalCount };
      });
    }
  }

  function isSortable(sort) {
    if (sort && sort.length > 0 && dataRef && dataRef.current) {
      const selector = sort[0]["selector"];
      for (const value of dataRef.current.values()) {
        if (value && value[selector]) {
          const typeofSelector = typeof value[selector];
          if (typeofSelector && (typeofSelector === "string" || typeofSelector === "number")) {
            return true;
          }
        }
      }
    }
    return false;
  }

  function applyAdd() {
    // console.log("applyAdd => " + configGrid.dataGridId);
    doAdd();
  }

  function applyRefresh() {
    // console.log("applyRefresh => " + configGrid.dataGridId);
    getDataGridRef().refresh();
  }

  function applyFilter() {
    // console.log("applyFilter => " + configGrid.dataGridId);
    canRemoteCallRef.current = false;
    doFilter();
  }

  function applyOnSelectionChanged(row) {
    // console.log("applyOnSelectionChanged => " + configGrid.dataGridId);
    doOnSelectionChanged(row.selectedRowsData);
  }

  function onContentReady(e) {
    //console.log("onContentReady => ", e)
  }

  function onOptionChanged(e) {
    // console.log("onOptionChanged => ", e)
    if ((e.fullName.includes("sortOrder") || e.fullName.includes("filterValues")) && e.name.includes("columns")) {
      canRemoteCallRef.current = false;
    } else {
      canRemoteCallRef.current = true;
    }
  }

  return (
    <DataGrid
      id={configGrid.dataGridId}
      height={configGrid.dataGridHeight || null}
      ref={setDataGridRef}
      dataSource={dataSource || new DataSource({ requireTotalCount: true, store: store })}
      keyExpr={configGrid.keyExpr}
      showColumnLines={true}
      onContentReady={onContentReady}
      onOptionChanged={onOptionChanged}
      showRowLines={true}
      rowAlternationEnabled={true}
      showBorders={true}
      allowColumnResizing={true}
      columnResizingMode={"nextColumn"}
      columnAutoWidth={true}
      columnHidingEnabled={true}
      // customizeColumns={customizeColumns}
      remoteOperations={{ filtering: false, sorting: true, paging: true }}
      export={{ enabled: true }}
      onSelectionChanged={applyOnSelectionChanged}
    >
      <Grouping contextMenuEnabled={true} expandMode="rowClick" />

      {configGrid.selectionMode === "multiple" && <Selection mode="multiple" selectAllMode={"page"} showCheckBoxesMode={"always"} />}

      {configGrid.selectionMode === "single" && <Selection mode="single" />}

      <SearchPanel visible={true} width={200} placeholder={"Search..."} />
      <Sorting mode="multiple" />
      {/* <Scrolling mode="infinite" rowRenderingMode="virtual" /> */}
      <Scrolling mode={configGrid.scrollingMode || "infinite"} rowRenderingMode="virtual" />
      <Paging defaultPageSize={configGrid.dataGridPageSize} />
      <LoadPanel enabled={false} />
      <FilterRow visible={true} />
      <FilterPanel visible={true} />
      <HeaderFilter visible={false} />
      <Pager
        visible={configGrid.pagerVisible || false}
        allowedPageSizes={configGrid.pagerAllowedPageSizes || [5, 10, 15, 20]}
        displayMode={configGrid.pagerDisplayMode || "full"}
        showPageSizeSelector={configGrid.pagerShowPageSizeSelector || true}
        showInfo={configGrid.pagerShowInfo || true}
        showNavigationButtons={configGrid.pagerShowNavigationButtons || true}
      />

      {configHeader &&
        configHeader.length > 0 &&
        configHeader.map((config, key) => {
          const allowSorting = config.allowSorting === undefined ? true : config.allowSorting;
          const allowFiltering = config.allowFiltering === undefined ? true : config.allowFiltering;
          const cellRender = config.cellRender === undefined ? null : config.cellRender;
          const dataSource = config.dataSource === undefined ? null : config.dataSource;
          switch (config.type) {
            case GridColumnType.NUMBER:
              return (
                <Column
                  dataField={config.dataField}
                  key={key}
                  alignment={config.align ? config.align : "left"}
                  visible={true}
                  caption={config.label}
                  dataType={"number"}
                  cellRender={cellRender}
                  allowSorting={allowSorting}
                  allowFiltering={allowFiltering}
                  allowEditing={true}
                />
              );
            case GridColumnType.BOOLEAN:
              return (
                <Column
                  dataField={config.dataField}
                  key={key}
                  alignment={config.align ? config.align : "left"}
                  visible={true}
                  caption={config.label}
                  dataType={"boolean"}
                  cellRender={cellRender}
                  allowSorting={allowSorting}
                  allowFiltering={allowFiltering}
                  allowEditing={true}
                />
              );
            case GridColumnType.TEXT:
              return (
                <Column
                  dataField={config.dataField}
                  key={key}
                  alignment={config.align ? config.align : "left"}
                  visible={true}
                  caption={config.label}
                  dataType={"string"}
                  cellRender={cellRender}
                  allowSorting={allowSorting}
                  allowFiltering={allowFiltering}
                  allowEditing={true}
                />
              );
            case GridColumnType.DATE:
              return (
                <Column
                  dataField={config.dataField}
                  key={key}
                  alignment={config.align ? config.align : "left"}
                  visible={true}
                  caption={config.label}
                  dataType={"date"}
                  cellRender={cellRender}
                  allowSorting={allowSorting}
                  allowFiltering={allowFiltering}
                  allowEditing={true}
                />
              );
            case GridColumnType.DATETIME:
              return (
                <Column
                  dataField={config.dataField}
                  key={key}
                  alignment={config.align ? config.align : "left"}
                  visible={true}
                  caption={config.label}
                  dataType={"datetime"}
                  cellRender={cellRender}
                  allowSorting={allowSorting}
                  allowFiltering={allowFiltering}
                  allowEditing={true}
                />
              );
            case GridColumnType.LIST:
              return (
                <Column
                  dataField={config.dataField}
                  key={key}
                  alignment={config.align ? config.align : "left"}
                  visible={true}
                  caption={config.label}
                  dataType={"object"}
                  cellRender={cellRender}
                  allowSorting={allowSorting}
                  allowFiltering={allowFiltering}
                  allowEditing={true}
                >
                  <Lookup dataSource={dataSource} valueExpr={config.valueExpr} displayExpr={config.displayExpr} />
                </Column>
              );
            default: {
              return null;
            }
          }
        })}

      {<Editing mode="form" useIcons={true} allowUpdating={allowUpdating} allowAdding={allowAdding} allowDeleting={allowDeleting} />}

      {
        <Column
          type="buttons"
          visible={allowUpdating || allowDeleting || allowOpenView || allowMoreActions}
          fixed={true}
          fixedPosition="right"
          cellRender={(rowData) => prefixCellRender(rowData, doUpdate, doDelete, doOpenView, doMoreAction, moreActionsIsModal)}
        />
      }

      <Toolbar>
        <Item name="searchPanel" location="before" visible={configGrid.allowSearchPanel} />
        <Item visible={allowAdding}>
          <Button2 icon="add" onClick={applyAdd} />
        </Item>
        <Item name="exportButton" visible={configGrid.allowExportButton} />
        <Item name="columnChooserButton" visible={configGrid.allowColumnChooserButton} />
        <Item location="after" visible={configGrid.allowRefresh}>
          <Button2 icon="refresh" onClick={applyRefresh} />
        </Item>
        <Item location="after" visible={allowFilter}>
          <Button2 icon="filter" onClick={applyFilter} />
        </Item>
      </Toolbar>

      <ColumnChooser enabled={true} mode={"select"}>
        <Position my="right top" at="right bottom" of=".dx-datagrid-column-chooser-button" />

        <ColumnChooserSearch enabled={true} editorOptions={{ placeholder: "Search column" }} />

        <ColumnChooserSelection allowSelectAll={true} selectByClick={true} recursive={true} />
      </ColumnChooser>
    </DataGrid>
  );
}
