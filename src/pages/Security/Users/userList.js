import React, { useContext, useEffect, useRef } from "react";

import DevExtremeDataGrid from "../../../components/common/DevExtremeDataGrid";
import { UserDataGrid } from "./userDataGrid";
import { apiClient } from "../../../helpers/api_helper";
import { useDispatch } from "react-redux";
import { gridActionType, toggleCreate, toggleDelete, toggleUpdate, toggleFilter, toggleStatus } from "../../../store/user/userSlice";
import { useNavigate } from "react-router-dom";
import { DevExtremeDataGridContext } from "../../../components/common/DevExtremeDataGridProvider";
import { getAuthorities } from "../../../store/authority";
import { toggleSetUserGroup } from "../../../store/group/groupSlice";
import { activate, deactivate, getUserStatus, resentCode, resetPassword } from "../../../store/user";
import { getGroupList, getUserGroupsList } from "../../../store/group";

const UserList = ({ userFilterData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { keyExprRef, dataFilter } = useContext(DevExtremeDataGridContext);
  const lastEvaluatedKey = useRef(null);
  const dataGridConfig = UserDataGrid();

  useEffect(() => {
    console.log("Mount");
    getAuthorities(dispatch);
    getGroupList(dispatch);
    keyExprRef.current = dataGridConfig.config.keyExpr;
    return () => {
      console.log("Unmount");
    };
  }, [keyExprRef, dataGridConfig, dispatch]);

  function onClickEdit(rowData) {
    dispatch(toggleUpdate(rowData));
  }

  function onClickAdd() {
    dispatch(toggleCreate());
  }

  function onClickDelete(rowData) {
    dispatch(toggleDelete(rowData));
  }

  function onClickOpenView(rowData) {
    navigate(`${rowData.userId}`);
  }

  function onClickFilter() {
    dispatch(toggleFilter());
  }

  function onClickMoreAction(rowData, action) {
    switch (action) {
      case "SECURITY_ADD_OR_REMOVE_GROUP": {
        getUserGroupsList(dispatch, rowData?.userId);
        dispatch(toggleStatus(false));
        dispatch(toggleSetUserGroup(rowData));
        break;
      }
      case "SECURITY_RESET_PASSWORD":
        resetPassword(dispatch, { userId: rowData.userId });
        break;
      // case "UNLINK_SERVICE_PROVIDER":
      //   resetPassword(dispatch, { userName: rowData.userId });
      //   break;
      case "SECURITY_GET_STATUS": {
        console.log("status show");
        getUserStatus(dispatch, rowData.userId);
        dispatch(toggleSetUserGroup(false));
        dispatch(toggleStatus(rowData));
        break;
      }
      // case "LINK_SERVICE_PROVIDER":
      //   resetPassword(dispatch, { userName: rowData.userId });
      //   break;
      case "SECURITY_RESENT_CODE":
        resentCode(dispatch, { userId: rowData.userId });
        break;
      case "SECURITY_ACTIVATE":
        activate(dispatch, { userId: rowData.userId });
        break;
      case "SECURITY_DEACTIVATE":
        deactivate(dispatch, { userId: rowData.userId });
        break;

      default:
        break;
    }
  }

  function doLoad(params) {
    let newParams = userFilterData || {};
    newParams["withTotalCount"] = true;
    newParams["lastEvaluatedKey"] = lastEvaluatedKey.current;
    newParams["limit"] = params.split("&")[1].split("=")[1];

    return apiClient.post(`api/user/search`, newParams).then((response) => {
      lastEvaluatedKey.current = response.data.body.lastEvaluatedKey;
      response.data = { data: response.data.body.users, totalCount: response.data.body.totalCount };
      return response;
    });
  }

  function doOnSelectionChanged(selectedRowsData) {
    // console.log("doOnSelectionChanged from =>", selectedRowsData);
  }

  useEffect(() => {
    lastEvaluatedKey.current = null;
  }, [userFilterData]);

  return (
    <>
      {userFilterData && <div className="badge bg-info mb-2">Filtre activé </div>}
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
        // doDelete={onClickDelete}
        doFilter={onClickFilter}
        gridActionType={gridActionType().type}
        // dataSource={userGridList}
      />
    </>
  );
};

export default UserList;
