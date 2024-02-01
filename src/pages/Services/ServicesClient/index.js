import React from "react";
import { Container } from "reactstrap";
// import Accompagnement from "./Accompagnement";
import Accompagnement from "../ServicesClient/Accompagnement/index";
import "./servicesClient.scss";
import BreadCrumbCustom from "../../../components/common/BreadCrumbCustom";
//Import Breadcrumb

const ServicesClient = () => {
  document.title = "Services client | Client services"; //for meta title
  const pages = [
    { title: "Accueil", link: "/dashboard" },
    { title: "Services", link: "/services-clients" },
    { title: "Accompagnement", link: "" },
  ];
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <div className="float-left">
            <BreadCrumbCustom pages={pages} />
          </div>
          <Accompagnement />
        </Container>
      </div>
    </>
  );
}; 

export default ServicesClient;
