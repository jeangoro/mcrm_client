import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  UncontrolledTooltip,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import classnames from "classnames";
import BreadCrumb from "../../components/common/BreadCrumb";
import withAuthProtected from "../../routes/withAuthProtected";
import { ROLE_ADMIN } from "../../routes/roles";
import { useState } from "react";
import Select from "react-select";

//for select and multiple select
const groupeOptions = [
  { value: "Groupe 1", label: "Groupe 1" },
  { value: "Groupe 2", label: "Groupe 2" },
  { value: "Groupe 3", label: "Groupe 3" },
  { value: "Groupe 4", label: "Groupe 4" },
];
const permissionsOptions = [
  { value: "lecture", label: "Lecture" },
  { value: "ecriture", label: "Ecriture" },
  { value: "modification", label: "modification" },
  { value: "suppression", label: "Suppression" },
];
const statutOptions = [
  { value: "Active", label: "Active" },
  { value: "Désactivé", label: "Désactivé" },
  { value: "En attente", label: "En attente" },
  { value: "Groupe 4", label: "Groupe 4" },
];
const leadOptions = [
  { value: "Active", label: "Active" },
  { value: "Désactivé", label: "Désactivé" },
  { value: "En attente", label: "En attente" },
  { value: "Groupe 4", label: "Groupe 4" },
];
const leadStatutOptions = [
  { value: "Active", label: "Active" },
  { value: "Désactivé", label: "Désactivé" },
  { value: "En attente", label: "En attente" },
  { value: "Groupe 4", label: "Groupe 4" },
];
const serviceOptions = [
  { value: "Active", label: "Active" },
  { value: "Désactivé", label: "Désactivé" },
  { value: "En attente", label: "En attente" },
  { value: "Groupe 4", label: "Groupe 4" },
];
const etapeServiceOptions = [
  { value: "Active", label: "Active" },
  { value: "Désactivé", label: "Désactivé" },
  { value: "En attente", label: "En attente" },
  { value: "Groupe 4", label: "Groupe 4" },
];
const statutServiceOptions = [
  { value: "Active", label: "Active" },
  { value: "Désactivé", label: "Désactivé" },
  { value: "En attente", label: "En attente" },
  { value: "Groupe 4", label: "Groupe 4" },
];
//end for select and multiple select

const Admin = () => {
  // Custom Tabs Bordered
  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
  //end Custom Tabs Bordered
  // Lead Tabs Bordered
  const [leadActiveTab, setleadActiveTab] = useState("31");
  const toggleLead = (tab) => {
    if (leadActiveTab !== tab) {
      setleadActiveTab(tab);
    }
  };
  //end Lead Tabs Bordered

  //for modal
  const [modal_update_user, setmodal_update_user] = useState(false);
  const [modal_add_group, setmodal_add_group] = useState(false);
  const [modal_add_type_lead, setmodal_add_type_lead] = useState(false);
  const [modal_add_etape_lead, setmodal_add_etape_lead] = useState(false);

  function tog_update_user() {
    setmodal_update_user(!modal_update_user);
  }
  function tog_add_group() {
    setmodal_add_group(!modal_add_group);
  }
  function tog_add_type_lead() {
    setmodal_add_type_lead(!modal_add_type_lead);
  }
  function tog_add_etape_lead() {
    setmodal_add_etape_lead(!modal_add_etape_lead);
  }
  //end for modal
  //for multiple select
  const [selectedGroupe, setselectedGroupe] = useState(null);
  function handleGroupe(selectedGroupe) {
    setselectedGroupe(selectedGroupe);
  }
  const [selectedPermissions, setselectedPermissions] = useState(null);
  function handlePermissions(selectedPermissions) {
    setselectedPermissions(selectedPermissions);
  }
  const [selectedStatut, setselectedStatut] = useState(null);
  function handleStatut(selectedStatut) {
    setselectedStatut(selectedStatut);
  }
  const [selectedLead, setselectedLead] = useState(null);
  function handleLead(selectedLead) {
    setselectedLead(selectedLead);
  }
  const [selectedLeadStatut, setselectedLeadStatut] = useState(null);
  function handleLeadStatut(selectedLeadStatut) {
    setselectedLeadStatut(selectedLeadStatut);
  }
  const [selectedService, setselectedService] = useState(null);
  function handleService(selectedService) {
    setselectedService(selectedService);
  }
  const [selectedEtapeService, setselectedEtapeService] = useState(null);
  function handleEtapeService(selectedEtapeService) {
    setselectedEtapeService(selectedEtapeService);
  }
  const [selectedStatutService, setselectedStatutService] = useState(null);
  function handleStatutService(selectedStatutService) {
    setselectedStatutService(selectedStatutService);
  }
  //end for multiple select

  const navigate = useNavigate();

  document.title = "Admin "; //for meta title
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <div className="float-left">
            <BreadCrumb title="Admin" pageTitle="Admin" />
          </div>
          <div>write Html code or structure Admin ici</div>
        </Container>
      </div>
    </>
  );
};

export default withAuthProtected(Admin, [ROLE_ADMIN]);
/*
{ path: "/administration/users", component: <Users /> },
  { path: "/administration/parametres/agence", component: <AgencySetting /> },
  { path: "/administration/parametres/facture", component: <AgencyFacture /> },
  { path: "/administration/parametres/pricing", component: <AgencyPricing /> },
  { path: "/administration/support", component: <Support /> },
 */
