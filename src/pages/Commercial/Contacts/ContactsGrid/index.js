import React, { createContext, useState } from "react";
import withAuthProtected from "../../../../routes/withAuthProtected";
import ContactList from "./contactList";
import ErrorPageBoundaryRoutes from "../../../../routes/error-page-boundary-routes";
import { Route } from "react-router-dom";
import ContactView from "./contactView.js";
import ContactFilter from "./contactFilter";
import ContactCreate from "./contactCreate";
// import ContactDelete from "./contactDelete";
// import ContactUpdate from "./contactUpdate";
import { DevExtremeDataGridProvider } from "../../../../components/common/DevExtremeDataGridProvider";
import { ROLE_ADMIN } from "../../../../routes/roles";
// import ContactSetGroup from "./contactSetGroup";
// import ContactStatus from "./contactStatus";

const ContactIndex = ({ contactFilterData, setContactFilterData }) => {
  return (
    <React.Fragment>
      <ContactFilter contactFilterData={contactFilterData} setContactFilterData={setContactFilterData} />
      <ContactCreate />
      {/* <ContactDelete /> */}
      {/* <ContactUpdate /> */}
      <ContactList contactFilterData={contactFilterData} setContactFilterData={setContactFilterData} />
      {/* <ContactSetGroup /> */}
      {/* <ContactStatus /> */}
    </React.Fragment>
  );
};

const Contact = () => {
  const [contactFilterData, setContactFilterData] = useState(null);
  return (
    <DevExtremeDataGridProvider>
      <ErrorPageBoundaryRoutes title={"Contact"} pageTitle={"Commercial"}>
        <Route index element={<ContactIndex contactFilterData={contactFilterData} setContactFilterData={setContactFilterData} />} />
        <Route path=":id">
          <Route index element={<ContactView />} />
        </Route>
      </ErrorPageBoundaryRoutes>
    </DevExtremeDataGridProvider>
  );
};

export default withAuthProtected(Contact, [ROLE_ADMIN]);
