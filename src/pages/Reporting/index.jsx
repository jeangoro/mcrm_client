import React from "react";
import withAuthProtected from "../../routes/withAuthProtected";
import { ROLE_REPORTING } from "../../routes/roles";
import ReportingList from "./reportingList";
import ErrorPageBoundaryRoutes from "../../routes/error-page-boundary-routes";
import { Route } from "react-router-dom";
import ReportingView from "./reportingView";
import ReportingFilter from "./reportingFilter";
import ReportingCreate from "./reportingCreate";
import ReportingDelete from "./reportingDelete";
import ReportingUpdate from "./reportingUpdate";
import { DevExtremeDataGridProvider } from "../../components/common/DevExtremeDataGridProvider";

const ReportingIndex = () => {
  return (
    <React.Fragment>
      <ReportingFilter />
      <ReportingCreate />
      <ReportingDelete />
      <ReportingUpdate />
      <ReportingList />
    </React.Fragment>
  );
};

const Reporting = () => {
  return (
    <DevExtremeDataGridProvider>
      <ErrorPageBoundaryRoutes title={"Reporting"} pageTitle={"List"}>
        <Route index element={<ReportingIndex />} />
        <Route path=":id">
          <Route index element={<ReportingView />} />
        </Route>
      </ErrorPageBoundaryRoutes>
    </DevExtremeDataGridProvider>
  );
};

export default withAuthProtected(Reporting, [ROLE_REPORTING]);
