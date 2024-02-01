import React, { useEffect, useState } from "react";
import withAuthProtected from "../../../routes/withAuthProtected";
import AuthorityList from "./authorityList";
import ErrorPageBoundaryRoutes from "../../../routes/error-page-boundary-routes";
import { Route } from "react-router-dom";
import AuthorityView from "./authorityView.js";
import AuthorityFilter from "./authorityFilter";
import AuthorityCreate from "./authorityCreate";
import AuthorityDelete from "./authorityDelete";
import AuthorityUpdate from "./authorityUpdate";
import { DevExtremeDataGridProvider } from "../../../components/common/DevExtremeDataGridProvider";
import { ROLE_ADMIN } from "../../../routes/roles";
import { getGroupList } from "../../../store/group";
import { useDispatch } from "react-redux";

const AuthorityIndex = ({ authorityFilterData, setAuthorityFilterData }) => {
  return (
    <React.Fragment>
      <AuthorityFilter authorityFilterData={authorityFilterData} setAuthorityFilterData={setAuthorityFilterData} />
      <AuthorityCreate />
      <AuthorityDelete />
      <AuthorityUpdate />
      <AuthorityList authorityFilterData={authorityFilterData} setAuthorityFilterData={setAuthorityFilterData} />
    </React.Fragment>
  );
};

const Authority = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getGroupList(dispatch);
  }, [dispatch]);

  const [authorityFilterData, setAuthorityFilterData] = useState("");

  return (
    <DevExtremeDataGridProvider>
      <ErrorPageBoundaryRoutes title={"Autorisations"} pageTitle={"Securité"}>
        <Route index element={<AuthorityIndex authorityFilterData={authorityFilterData} setAuthorityFilterData={setAuthorityFilterData} />} />
        <Route path=":id">
          <Route index element={<AuthorityView />} />
        </Route>
      </ErrorPageBoundaryRoutes>
    </DevExtremeDataGridProvider>
  );
};

export default withAuthProtected(Authority, [ROLE_ADMIN]);
