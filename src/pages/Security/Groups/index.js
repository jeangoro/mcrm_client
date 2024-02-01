import React, { useState } from "react";
import withAuthProtected from "../../../routes/withAuthProtected";
import GroupList from "./groupList";
import ErrorPageBoundaryRoutes from "../../../routes/error-page-boundary-routes";
import { Route } from "react-router-dom";
import GroupView from "./groupView.js";
import GroupFilter from "./groupFilter";
import GroupCreate from "./groupCreate";
import GroupDelete from "./groupDelete";
import GroupUpdate from "./groupUpdate";
import { DevExtremeDataGridProvider } from "../../../components/common/DevExtremeDataGridProvider";
import { ROLE_ADMIN } from "../../../routes/roles";
import GroupSetAuthority from "./groupSetAuthority";
import { GroupDataGrid } from "./groupDataGrid";

const GroupIndex = ({ groupFilterData, setGroupFilterData }) => {
  return (
    <React.Fragment>
      <GroupFilter groupFilterData={groupFilterData} setGroupFilterData={setGroupFilterData} />
      <GroupCreate />
      <GroupDelete />
      <GroupUpdate />
      <GroupList groupFilterData={groupFilterData} setGroupFilterData={setGroupFilterData} />
      {GroupDataGrid().config.moreActionsIsModal ? null : <GroupSetAuthority />}
    </React.Fragment>
  );
};

const Group = () => {
  const [groupFilterData, setGroupFilterData] = useState("");

  return (
    <DevExtremeDataGridProvider>
      <ErrorPageBoundaryRoutes title={"Groupes"} pageTitle={"Securité"}>
        <Route index element={<GroupIndex groupFilterData={groupFilterData} setGroupFilterData={setGroupFilterData} />} />
        <Route path=":id">
          <Route index element={<GroupView />} />
        </Route>
      </ErrorPageBoundaryRoutes>
    </DevExtremeDataGridProvider>
  );
};

export default withAuthProtected(Group, [ROLE_ADMIN]);
