import React, { createContext, useState } from "react";
import withAuthProtected from "../../../routes/withAuthProtected";
import UserList from "./userList";
import ErrorPageBoundaryRoutes from "../../../routes/error-page-boundary-routes";
import { Route } from "react-router-dom";
import UserView from "./userView.js";
import UserFilter from "./userFilter";
import UserCreate from "./userCreate";
import UserDelete from "./userDelete";
import UserUpdate from "./userUpdate";
import { DevExtremeDataGridProvider } from "../../../components/common/DevExtremeDataGridProvider";
import { ROLE_ADMIN } from "../../../routes/roles";
import UserSetGroup from "./userSetGroup";
import UserStatus from "./userStatus";
import { UserDataGrid } from "./userDataGrid";

const UserIndex = ({ userFilterData, setUserFilterData }) => {
  return (
    <React.Fragment>
      <UserFilter userFilterData={userFilterData} setUserFilterData={setUserFilterData} />
      <UserCreate />
      <UserDelete />
      <UserUpdate />
      <UserList userFilterData={userFilterData} setUserFilterData={setUserFilterData} />
      {UserDataGrid().config.moreActionsIsModal ? null : <UserSetGroup />}
      {UserDataGrid().config.moreActionsIsModal ? null : <UserStatus />}
    </React.Fragment>
  );
};

const User = () => {
  const [userFilterData, setUserFilterData] = useState(null);

  return (
    <DevExtremeDataGridProvider>
      <ErrorPageBoundaryRoutes title={"Utilisateurs"} pageTitle={"Securité"}>
        <Route index element={<UserIndex userFilterData={userFilterData} setUserFilterData={setUserFilterData} />} />
        <Route path=":id">
          <Route index element={<UserView />} />
        </Route>
      </ErrorPageBoundaryRoutes>
    </DevExtremeDataGridProvider>
  );
};

export default withAuthProtected(User, [ROLE_ADMIN]);
