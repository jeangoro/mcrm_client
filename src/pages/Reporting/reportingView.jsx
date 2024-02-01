import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";

const ReportingView = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const reportingId = location.pathname.split("/")[2];

  const { reportingRowToView } = useSelector((state) => state.reporting);

  return (
    <div>
      <div>
        <h1>View reporting OrderNumber : {reportingId}</h1>{" "}
      </div>
      <div className="py-3"> Employee : {reportingRowToView?.Employee}</div>
      <div className="py-3"> OrderDate : {reportingRowToView?.OrderDate}</div>
      <div className="py-3"> OrderNumber : {reportingRowToView?.OrderNumber}</div>
      <div className="py-3"> SaleAmount : {reportingRowToView?.SaleAmount}</div>
      <div className="py-3">StoreCity : {reportingRowToView?.StoreCity}</div>
      <div className="py-3">StoreState : {reportingRowToView?.StoreState}</div>
    </div>
  );
};

export default ReportingView;
