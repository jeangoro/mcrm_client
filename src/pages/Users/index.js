import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../components/common/BreadCrumb";
//Import Breadcrumb

const Users = () => {
  document.title = "Mes utilisateurs | Agence "; //for meta title
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <div className="float-left">
            <BreadCrumb title="Mes utilisateurs" pageTitle="Agence" />
          </div>
          <div>write Html code or structure Mes utilisateurs ici</div>
        </Container>
      </div>
    </>
  );
};

export default Users;
