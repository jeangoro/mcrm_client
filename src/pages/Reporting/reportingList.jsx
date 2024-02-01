import React, { useContext, useEffect, useRef } from "react";

import "react-toastify/dist/ReactToastify.css";
import DevExtremeDataGrid from "../../components/common/DevExtremeDataGrid";
// import { states } from "./data.js";
import { ReportingDataGrid } from "./reportingDataGrid";
import { apiClient } from "../../helpers/api_helper";
import { useDispatch } from "react-redux";
import { gridActionType, toggleCreate, toggleDelete, toggleUpdate, toggleFilter } from "../../store/reporting/reportingSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { DevExtremeDataGridContext } from "../../components/common/DevExtremeDataGridProvider";

const ReportingList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { keyExprRef, dataFilter } = useContext(DevExtremeDataGridContext);

  // const dataGridConfig = ReportingDataGrid({ State: states });
  const dataGridConfig = ReportingDataGrid();

  useEffect(() => {
    console.log("Mount");
    keyExprRef.current = dataGridConfig.config.keyExpr;
    return () => {
      console.log("Unmount");
    };
  }, [keyExprRef, dataGridConfig]);

  function onClickEdit(rowData) {
    console.log("onClickEdit from =>");
    dispatch(toggleUpdate(rowData));
  }

  function onClickAdd() {
    console.log("onClickAdd from =>");
    dispatch(toggleCreate());
  }

  function onClickDelete(rowData) {
    console.log("onClickDelete from =>");
    dispatch(toggleDelete(rowData));
  }

  function onClickOpenView(rowData) {
    console.log("onClickOpen from =>", rowData.OrderNumber);
    navigate(`${rowData.OrderNumber}`);
  }

  function onClickFilter() {
    console.log("onClickFilter from =>");
    dispatch(toggleFilter());
  }

  function onClickMoreAction(rowData, action) {
    console.log("onClickMoreAction from action =>", action);
    console.log("onClickMoreAction from =>", rowData);
  }

  function doLoad(params) {
    console.log("doLoad => ", dataFilter);

    const moreActions = ["SEND_MESSAGE", "ACTIVE_PROFILE", "DEACTIVE_PROFILE", "SEND_OTP_CODE"];

    return apiClient.get(`https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/orders${params}`).then((response) => {
      // if (response && response.data && response.data.data && response.data.data.length > 0) {
      //   response.data.data.forEach((element) => {
      //     element["actions"] = moreActions;
      //   });
      // }
      console.log(response);
      return response;
    });
  }

  function doOnSelectionChanged(selectedRowsData) {
    console.log("doOnSelectionChanged from =>", selectedRowsData);
  }

  useEffect(() => {}, []);

  return (
    <>
      <DevExtremeDataGrid
        configGrid={dataGridConfig.config}
        configHeader={dataGridConfig.headers}
        doLoad={doLoad}
        doOnSelectionChanged={doOnSelectionChanged}
        doUpdate={onClickEdit}
        doOpenView={onClickOpenView}
        doMoreAction={onClickMoreAction}
        moreActionsIsModal={false}
        doAdd={onClickAdd}
        doDelete={onClickDelete}
        doFilter={onClickFilter}
        gridActionType={gridActionType().type}
      />
    </>
  );
};

export default ReportingList;
