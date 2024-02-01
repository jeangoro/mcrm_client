import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../components/common/BreadCrumb";
import withAuthProtected from "../../routes/withAuthProtected";
import {ROLE_ADMIN_AGENCY} from "../../routes/roles";
//Import Breadcrumb

const AdminAgency = () => {
  document.title = "Admin Agency "; //for meta title
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <div className="float-left">
            <BreadCrumb title="Mes utilisateurs" pageTitle="Admin Agency" />
          </div>
          <div>write Html code or structure Mes utilisateurs ici</div>
        </Container>
      </div>
    </>
  );
};

export default withAuthProtected(AdminAgency, [ROLE_ADMIN_AGENCY]);
/*
{ path: "/administration/users", component: <Users /> },
  { path: "/administration/parametres/agence", component: <AgencySetting /> },
  { path: "/administration/parametres/facture", component: <AgencyFacture /> },
  { path: "/administration/parametres/pricing", component: <AgencyPricing /> },
  { path: "/administration/support", component: <Support /> },
 */
