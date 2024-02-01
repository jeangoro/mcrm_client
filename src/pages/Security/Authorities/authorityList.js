import React, { useContext, useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
import DevExtremeDataGrid from "../../../components/common/DevExtremeDataGrid";
import { AuthorityDataGrid } from "./authorityDataGrid";
import { apiClient } from "../../../helpers/api_helper";
import { useDispatch } from "react-redux";
import { gridActionType, toggleCreate, toggleDelete, toggleUpdate, toggleFilter } from "../../../store/authority/authoritySlice";
import { useNavigate } from "react-router-dom";
import { DevExtremeDataGridContext } from "../../../components/common/DevExtremeDataGridProvider";

const AuthorityList = ({ authorityFilterData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { keyExprRef, dataFilter } = useContext(DevExtremeDataGridContext);

  const dataGridConfig = AuthorityDataGrid();

  useEffect(() => {
    console.log("Mount");
    keyExprRef.current = dataGridConfig.config.keyExpr;
    return () => {
      console.log("Unmount");
    };
  }, [keyExprRef, dataGridConfig, dispatch]);

  function onClickEdit(rowData) {
    // console.log("onClickEdit from =>");
    dispatch(toggleUpdate(rowData));
  }

  function onClickAdd() {
    // console.log("onClickAdd from =>");
    dispatch(toggleCreate());
  }

  function onClickDelete(rowData) {
    // console.log("onClickDelete from =>");
    dispatch(toggleDelete(rowData));
  }

  function onClickOpenView(rowData) {
    // console.log("onClickOpen from =>", rowData.name);
    navigate(`${rowData.name}`);
  }

  function onClickFilter() {
    // console.log("onClickFilter from =>");
    dispatch(toggleFilter());
  }

  function onClickMoreAction(rowData, action) {
    // console.log("onClickMoreAction from action =>", action);
    // console.log("onClickMoreAction from =>", rowData);
  }

  function doLoad(params) {
    // console.log("doLoad => ", dataFilter);

    return apiClient.post(`api/authority/search`, { groupId: authorityFilterData }).then((response) => {
      response.data = { data: response.data.body, totalCount: response.data.body.length };
      // console.log(response);
      return response;
    });
  }

  function doOnSelectionChanged(selectedRowsData) {
    // console.log("doOnSelectionChanged from =>", selectedRowsData);
  }

  return (
    <>
      {authorityFilterData && <div className="badge bg-info mb-2">Filtre activé sur: {authorityFilterData} </div>}
      <DevExtremeDataGrid
        configGrid={dataGridConfig.config}
        configHeader={dataGridConfig.headers}
        doLoad={doLoad}
        doOnSelectionChanged={doOnSelectionChanged}
        // doUpdate={onClickEdit}
        // doOpenView={onClickOpenView}
        // doMoreAction={onClickMoreAction}
        // moreActionsIsModal={true}
        doAdd={onClickAdd}
        doDelete={onClickDelete}
        doFilter={onClickFilter}
        gridActionType={gridActionType().type}
      />
    </>
  );
};

export default AuthorityList;
