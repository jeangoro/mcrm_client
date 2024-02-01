import React, { useContext, useEffect, useRef } from "react";

import "react-toastify/dist/ReactToastify.css";
import DevExtremeDataGrid from "../../../components/common/DevExtremeDataGrid";
import { GroupDataGrid } from "./groupDataGrid";
import { apiClient } from "../../../helpers/api_helper";
import { useDispatch } from "react-redux";
import { gridActionType, toggleCreate, toggleDelete, toggleUpdate, toggleFilter, toggleView } from "../../../store/group/groupSlice";
import { useNavigate } from "react-router-dom";
import { DevExtremeDataGridContext } from "../../../components/common/DevExtremeDataGridProvider";
import { getAuthorities, getGroupAuthorities } from "../../../store/authority";
import { toggleSetGroupAuthority } from "../../../store/authority/authoritySlice";
import { getUsersList } from "../../../store/user";

const GroupList = ({ groupFilterData, setGroupFilterData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { keyExprRef, dataFilter } = useContext(DevExtremeDataGridContext);

  const dataGridConfig = GroupDataGrid();

  useEffect(() => {
    console.log("Mount");
    getAuthorities(dispatch);
    getUsersList(dispatch, { limit: 1000 });
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
    dispatch(toggleView(rowData));
    navigate(`${rowData.name}`);
  }

  function onClickFilter() {
    // console.log("onClickFilter from =>");
    dispatch(toggleFilter());
  }

  function onClickMoreAction(rowData, action) {
    // console.log("onClickMoreAction from action =>", action);
    // console.log("onClickMoreAction from =>", rowData);
    if (action === "SECURITY_ADD_OR_REMOVE_AUTHORITY") {
      // console.log(action);
      getGroupAuthorities(dispatch, rowData?.name);
      dispatch(toggleSetGroupAuthority(rowData));
    }
  }

  function doLoad(params) {
    // console.log("doLoad => ", dataFilter);

    return apiClient.post(`api/group/search`, { userId: groupFilterData }).then((response) => {
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
      {groupFilterData && <div className="badge bg-info mb-2">Filtre activé sur: {groupFilterData} </div>}
      <DevExtremeDataGrid
        configGrid={dataGridConfig.config}
        configHeader={dataGridConfig.headers}
        doLoad={doLoad}
        doOnSelectionChanged={doOnSelectionChanged}
        // doUpdate={onClickEdit}
        doOpenView={onClickOpenView}
        doMoreAction={onClickMoreAction}
        moreActionsIsModal={dataGridConfig.config.moreActionsIsModal}
        doAdd={onClickAdd}
        doDelete={onClickDelete}
        doFilter={onClickFilter}
        gridActionType={gridActionType().type}
      />
    </>
  );
};

export default GroupList;
