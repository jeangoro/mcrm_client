import React, { useState } from "react";
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
import Select from "react-select";
import { countriesFR } from "../../common/data/countries";

//for select and multiple select
const paysOptions = countriesFR.map((pays) => {
  return { value: pays.name, label: pays.name };
});

// [
//   { value: countriesFR, label: "Groupe 1" },
//   { value: "Groupe 2", label: "Groupe 2" },
//   { value: "Groupe 3", label: "Groupe 3" },
//   { value: "Groupe 4", label: "Groupe 4" },
// ];

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
const groupeEcoleOptions = [
  { value: "Groupe Ecole 1", label: "Groupe Ecole 1" },
  { value: "Groupe Ecole 2", label: "Groupe Ecole 2" },
  { value: "Groupe Ecole 3", label: "Groupe Ecole 3" },
  { value: "Groupe Ecole 4", label: "Groupe Ecole 4" },
];
//end for select and multiple select

const ParametresAgence = () => {
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
  // InfoAgence Tabs Bordered
  const [infoAgenceActiveTab, setinfoAgenceActiveTab] = useState("11");
  const toggleInfoAgence = (tab) => {
    if (infoAgenceActiveTab !== tab) {
      setinfoAgenceActiveTab(tab);
    }
  };
  //end InfoAgence Tabs Bordered

  //for modal
  const [modal_update_user, setmodal_update_user] = useState(false);
  const [modal_add_group, setmodal_add_group] = useState(false);
  const [modal_add_type_lead, setmodal_add_type_lead] = useState(false);
  const [modal_add_etape_lead, setmodal_add_etape_lead] = useState(false);
  const [modal_add_rib, setmodal_add_rib] = useState(false);
  const [modal_add_reseauEcoles, setmodal_add_reseauEcoles] = useState(false);
  const [modal_add_formation, setmodal_add_formation] = useState(false);

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
  function tog_add_rib() {
    setmodal_add_rib(!modal_add_rib);
  }
  function tog_add_reseauEcoles() {
    setmodal_add_reseauEcoles(!modal_add_reseauEcoles);
  }
  function tog_add_formation() {
    setmodal_add_formation(!modal_add_formation);
  }
  //end for modal
  //for multiple select
  const [selectedPays, setselectedPays] = useState(null);
  function handlePays(selectedPays) {
    setselectedPays(selectedPays);
  }
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
  const [selectedPaysEntreprise, setselectedPaysEntreprise] = useState(null);
  function handlePaysEntreprise(selectedPaysEntreprise) {
    setselectedPaysEntreprise(selectedPaysEntreprise);
  }
  const [selectedPaysRIB, setselectedPaysRIB] = useState(null);
  function handlePaysRIB(selectedPaysRIB) {
    setselectedPaysRIB(selectedPaysRIB);
  }
  const [selectedPaysRE, setselectedPaysRE] = useState(null);
  function handlePaysRE(selectedPaysRE) {
    setselectedPaysRE(selectedPaysRE);
  }
  const [selectedGroupeEcole, setselectedGroupeEcole] = useState(null);
  function handleGroupeEcole(selectedGroupeEcole) {
    setselectedGroupeEcole(selectedGroupeEcole);
  }

  //end for multiple select

  const navigate = useNavigate();

  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <div className="float-left">
            <BreadCrumb title="Paramètres agence" pageTitle="Administration" />
          </div>
          <Card>
            {/* <CardHeader>Gestion des utilisateurs</CardHeader> */}
            <CardBody>
              <Row>
                <h5 className="mb-3">Gestion des paramètres de votre agence</h5>
                <Card>
                  <CardBody>
                    {/* <p className="text-muted">
                        Use <code>nav-tabs-custom</code> class to create custom tabs with borders.
                      </p> */}
                    <Nav tabs className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-3">
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: customActiveTab === "1",
                          })}
                          onClick={() => {
                            toggleCustom("1");
                          }}
                        >
                          Infos agence
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: customActiveTab === "2",
                          })}
                          onClick={() => {
                            toggleCustom("2");
                          }}
                        >
                          RIB
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: customActiveTab === "3",
                          })}
                          onClick={() => {
                            toggleCustom("3");
                          }}
                        >
                          Groupe d'écoles
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: customActiveTab === "4",
                          })}
                          onClick={() => {
                            toggleCustom("4");
                          }}
                        >
                          Formations
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: customActiveTab === "5",
                          })}
                          onClick={() => {
                            toggleCustom("5");
                          }}
                        >
                          Factures
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: customActiveTab === "6",
                          })}
                          onClick={() => {
                            toggleCustom("6");
                          }}
                        >
                          Pricing
                        </NavLink>
                      </NavItem>
                    </Nav>

                    <TabContent activeTab={customActiveTab} className="text-muted">
                      <TabPane tabId="1" id="home1">
                        <div className="d-flex">
                          <div className="flex-grow-1 ms-2">
                            <Card>
                              <CardBody>
                                <Nav tabs className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-3">
                                  <NavItem>
                                    <NavLink
                                      style={{ cursor: "pointer" }}
                                      className={classnames({
                                        active: infoAgenceActiveTab === "11",
                                      })}
                                      onClick={() => {
                                        toggleInfoAgence("11");
                                      }}
                                    >
                                      Information dirigeant
                                    </NavLink>
                                  </NavItem>
                                  <NavItem>
                                    <NavLink
                                      style={{ cursor: "pointer" }}
                                      className={classnames({
                                        active: infoAgenceActiveTab === "12",
                                      })}
                                      onClick={() => {
                                        toggleInfoAgence("12");
                                      }}
                                    >
                                      Information entreprise
                                    </NavLink>
                                  </NavItem>
                                  <NavItem>
                                    <NavLink
                                      style={{ cursor: "pointer" }}
                                      className={classnames({
                                        active: infoAgenceActiveTab === "13",
                                      })}
                                      onClick={() => {
                                        toggleInfoAgence("13");
                                      }}
                                    >
                                      Changer de mot de passe
                                    </NavLink>
                                  </NavItem>
                                </Nav>

                                <TabContent activeTab={infoAgenceActiveTab} className="text-muted">
                                  <TabPane tabId="11" id="infoAgenceTab1">
                                    <div className="d-flex">
                                      {/* <div className="flex-shrink-0">
                                          <i className="ri-checkbox-multiple-blank-fill text-success"></i>
                                        </div> */}
                                      {/* <div className="flex-grow-1 ms-2">Contenu types leads</div> */}

                                      <div className="flex-grow-1 ms-2">
                                        {/* <!-- update information dirigeant form --> */}
                                        <form action="">
                                          <Row>
                                            <Col md={6}>
                                              <div className="mb-3">
                                                <Label htmlFor="nom" className="form-label text-muted">
                                                  Nom
                                                </Label>
                                                <Input type="text" name="nom" placeholder="nom" />
                                              </div>
                                            </Col>
                                            <Col md={6}>
                                              <div className="mb-3">
                                                <Label htmlFor="prenom" className="form-label text-muted">
                                                  Prénom
                                                </Label>
                                                <Input type="text" name="prenom" placeholder="prenom" />
                                              </div>
                                            </Col>
                                          </Row>
                                          <Row>
                                            <Col md={6}>
                                              <div className="mb-3">
                                                <Label htmlFor="telephone" className="form-label text-muted">
                                                  Numéro de téléphone
                                                </Label>
                                                <Input type="text" name="telephone" placeholder="telephone" />
                                              </div>
                                            </Col>
                                            <Col md={6}>
                                              <div className="mb-3">
                                                <Label htmlFor="email" className="form-label text-muted">
                                                  Adresse email
                                                </Label>
                                                <Input type="email" name="email" placeholder="email" />
                                              </div>
                                            </Col>
                                          </Row>
                                          <Row>
                                            <Col md={6}>
                                              <div className="mb-3">
                                                <Label htmlFor="dataNaissance" className="form-label text-muted">
                                                  Date de naissance
                                                </Label>
                                                <Input type="date" name="dataNaissance" placeholder="dataNaissance" />
                                              </div>
                                            </Col>
                                            <Col md={6}>
                                              <div className="mb-3">
                                                <Label htmlFor="lieuNaissance" className="form-label text-muted">
                                                  Lieu de naissance
                                                </Label>
                                                <Input type="text" name="lieuNaissance" placeholder="lieuNaissance" />
                                              </div>
                                            </Col>
                                          </Row>
                                          <Row>
                                            <Col md={4}>
                                              <div className="mb-3">
                                                <Label htmlFor="ville" className="form-label text-muted">
                                                  Ville
                                                </Label>
                                                <Input type="text" name="ville" placeholder="ville" />
                                              </div>
                                            </Col>
                                            <Col md={4}>
                                              <div className="mb-3">
                                                <Label htmlFor="pays" className="form-label text-muted">
                                                  Pays
                                                </Label>
                                                <Select
                                                  id="pays"
                                                  name="pays"
                                                  value={selectedPays}
                                                  isMulti={false}
                                                  onChange={() => {
                                                    handlePays();
                                                  }}
                                                  options={paysOptions}
                                                />
                                              </div>
                                            </Col>
                                            <Col md={4}>
                                              <div className="mb-3">
                                                <Label htmlFor="adressePostale" className="form-label text-muted">
                                                  Adresse postale
                                                </Label>
                                                <Input type="text" name="adressePostale" placeholder="adressePostale" />
                                              </div>
                                            </Col>
                                          </Row>
                                          <div className="modal-footer">
                                            <Button className="mcrm-btn m-2" onClick={() => {}}>
                                              Mettre à jour
                                            </Button>
                                            <Button className="mcrm-btn-danger m-2">Annuler</Button>
                                          </div>
                                        </form>
                                        {/* end update information dirigeant form */}
                                      </div>
                                    </div>
                                  </TabPane>
                                  <TabPane tabId="12">
                                    <div className="d-flex">
                                      {/* <div className="flex-shrink-0">
                                          <i className="ri-checkbox-multiple-blank-fill text-success"></i>
                                        </div> */}
                                      <div className="flex-grow-1 ms-2">
                                        {/* <!-- update enterprise information form --> */}
                                        <form action="">
                                          <Row>
                                            <Col md={6}>
                                              <div className="mb-3">
                                                <Label htmlFor="nomEntreprise" className="form-label text-muted">
                                                  Nom de l'entreprise
                                                </Label>
                                                <Input type="text" name="nomEntreprise" placeholder="nom Entreprise" />
                                              </div>
                                            </Col>
                                            <Col md={6}>
                                              <div className="mb-3">
                                                <Label htmlFor="registreCommerce" className="form-label text-muted">
                                                  Numéro de registre de commerce
                                                </Label>
                                                <Input type="text" name="registreCommerce" placeholder="registre de Commerce" />
                                              </div>
                                            </Col>
                                          </Row>
                                          <Row>
                                            <Col md={6}>
                                              <div className="mb-3">
                                                <Label htmlFor="telephoneEntreprise" className="form-label text-muted">
                                                  Numéro de téléphone
                                                </Label>
                                                <Input type="text" name="telephoneEntreprise" placeholder="telephone Entreprise" />
                                              </div>
                                            </Col>
                                            <Col md={6}>
                                              <div className="mb-3">
                                                <Label htmlFor="emailEntreprise" className="form-label text-muted">
                                                  Adresse email
                                                </Label>
                                                <Input type="email" name="emailEntreprise" placeholder="email Entreprise" />
                                              </div>
                                            </Col>
                                          </Row>
                                          <Row>
                                            <Col md={6}>
                                              <div className="mb-3">
                                                <Label htmlFor="dataCreationEntreprise" className="form-label text-muted">
                                                  Date de creation de l'entreprise
                                                </Label>
                                                <Input type="date" name="dataCreationEntreprise" placeholder="data de Creation de l'Entreprise" />
                                              </div>
                                            </Col>
                                            <Col md={6}>
                                              <div className="mb-3">
                                                <Label htmlFor="domiciliationEntreprise" className="form-label text-muted">
                                                  Domiciliation de l'entreprise
                                                </Label>
                                                <Input type="text" name="domiciliationEntreprise" placeholder="domiciliationEntreprise" />
                                              </div>
                                            </Col>
                                          </Row>
                                          <Row>
                                            <Col md={4}>
                                              <div className="mb-3">
                                                <Label htmlFor="villeEntreprise" className="form-label text-muted">
                                                  Ville
                                                </Label>
                                                <Input type="text" name="villeEntreprise" placeholder="villeEntreprise" />
                                              </div>
                                            </Col>
                                            <Col md={4}>
                                              <div className="mb-3">
                                                <Label htmlFor="paysEntreprise" className="form-label text-muted">
                                                  Pays
                                                </Label>
                                                <Select
                                                  id="paysEntreprise"
                                                  name="paysEntreprise"
                                                  value={selectedPaysEntreprise}
                                                  isMulti={false}
                                                  onChange={() => {
                                                    handlePaysEntreprise();
                                                  }}
                                                  options={paysOptions}
                                                />
                                              </div>
                                            </Col>
                                            <Col md={4}>
                                              <div className="mb-3">
                                                <Label htmlFor="adressePostaleEntreprise" className="form-label text-muted">
                                                  Adresse postale
                                                </Label>
                                                <Input type="text" name="adressePostaleEntreprise" placeholder="adressePostaleEntreprise" />
                                              </div>
                                            </Col>
                                          </Row>
                                          <Row>
                                            <Col md={6}>
                                              <div className="mb-3">
                                                <Label htmlFor="tvaEntreprise" className="form-label text-muted">
                                                  TVA
                                                </Label>
                                                <Input type="number" name="tvaEntreprise" placeholder="TVA en %" />
                                              </div>
                                            </Col>
                                            <Col md={6}>
                                              <div className="mb-3">
                                                <Label htmlFor="logo" className="form-label text-muted">
                                                  Logo de l'entreprise
                                                </Label>
                                                <Input type="file" name="logo" placeholder="logo" />
                                              </div>
                                            </Col>
                                          </Row>
                                          <div className="modal-footer">
                                            <Button className="mcrm-btn m-2" onClick={() => {}}>
                                              Mettre à jour
                                            </Button>
                                            <Button className="mcrm-btn-danger m-2">Annuler</Button>
                                          </div>
                                        </form>
                                        {/* end update enterprise information form */}
                                      </div>
                                    </div>
                                  </TabPane>
                                  <TabPane tabId="13">
                                    <div className="d-flex">
                                      {/* <div className="flex-shrink-0">
                                          <i className="ri-checkbox-multiple-blank-fill text-success"></i>
                                        </div> */}
                                      <div className="flex-grow-1 ms-2">
                                        {/* <!-- add group Modals --> */}
                                        <Button className="mcrm-btn" onClick={() => tog_add_etape_lead()}>
                                          Ajouter une étape du lead
                                        </Button>
                                        <Modal
                                          id="Modal_add_etape_lead"
                                          isOpen={modal_add_etape_lead}
                                          toggle={() => {
                                            tog_add_etape_lead();
                                          }}
                                        >
                                          <ModalHeader className="mcrm-bg pb-4">
                                            <h5 className="modal-title" id="etapeLeadModalLabel">
                                              Ajouter une étape du lead
                                            </h5>
                                            <Button
                                              type="button"
                                              className="btn-close"
                                              onClick={() => {
                                                setmodal_add_etape_lead(false);
                                              }}
                                              aria-label="Close"
                                            ></Button>
                                          </ModalHeader>
                                          <ModalBody>
                                            <form action="">
                                              <Row>
                                                <Col md={6}>
                                                  <div className="mb-3">
                                                    <Label htmlFor="lead" className="form-label text-muted">
                                                      Lead *
                                                    </Label>
                                                    <Select
                                                      id="lead"
                                                      name="lead"
                                                      value={selectedLead}
                                                      isMulti={false}
                                                      onChange={() => {
                                                        handleLead();
                                                      }}
                                                      options={leadOptions}
                                                    />
                                                  </div>
                                                </Col>
                                                <Col md={6}>
                                                  <div className="mb-3">
                                                    <Label htmlFor="lead_statut" className="form-label text-muted">
                                                      Statut lead *
                                                    </Label>
                                                    <Select
                                                      id="lead_statut"
                                                      name="lead_statut"
                                                      value={selectedLeadStatut}
                                                      isMulti={false}
                                                      onChange={() => {
                                                        handleLeadStatut();
                                                      }}
                                                      options={leadStatutOptions}
                                                    />
                                                  </div>
                                                </Col>
                                              </Row>
                                              <Row>
                                                <Col md={6}>
                                                  <div className="mb-3">
                                                    <Label htmlFor="services" className="form-label text-muted">
                                                      Services *
                                                    </Label>
                                                    <Select
                                                      id="service"
                                                      name="service"
                                                      value={selectedService}
                                                      isMulti={false}
                                                      onChange={() => {
                                                        handleService();
                                                      }}
                                                      options={serviceOptions}
                                                    />
                                                  </div>
                                                </Col>
                                                <Col md={6}>
                                                  <div className="mb-3">
                                                    <Label htmlFor="etape_service" className="form-label text-muted">
                                                      Etape du service *
                                                    </Label>
                                                    <Select
                                                      id="etape_service"
                                                      name="etape_service"
                                                      value={selectedEtapeService}
                                                      isMulti={false}
                                                      onChange={() => {
                                                        handleEtapeService();
                                                      }}
                                                      options={etapeServiceOptions}
                                                    />
                                                  </div>
                                                </Col>
                                              </Row>
                                              <Row>
                                                <Col md={6}>
                                                  <div className="mb-3">
                                                    <Label htmlFor="duree" className="form-label text-muted">
                                                      Durée
                                                    </Label>
                                                    <Input id="duree" type="text" name="duree" placeholder="Durée" />
                                                  </div>
                                                </Col>
                                                <Col md={6}>
                                                  <div className="mb-3">
                                                    <Label htmlFor="statut_service" className="form-label text-muted">
                                                      Statut services
                                                    </Label>
                                                    <Select
                                                      id="statut_service"
                                                      name="statut_service"
                                                      value={selectedStatutService}
                                                      isMulti={false}
                                                      onChange={() => {
                                                        handleStatutService();
                                                      }}
                                                      options={statutServiceOptions}
                                                    />
                                                  </div>
                                                </Col>
                                              </Row>
                                              <Row>
                                                <Col md={12}>
                                                  <div className="mb-3">
                                                    <Label htmlFor="description_statut_lead_service" className="form-label text-muted">
                                                      Description statut lead service
                                                    </Label>
                                                    <Input type="textarea" name="description_statut_lead_service" rows={5} placeholder="Description statut lead service" />
                                                  </div>
                                                </Col>
                                              </Row>
                                            </form>
                                          </ModalBody>
                                          <ModalFooter>
                                            <Button
                                              className="mcrm-btn"
                                              onClick={() => {
                                                tog_add_etape_lead();
                                              }}
                                            >
                                              <i className="ri-add-line"></i> Ajouter étape lead
                                            </Button>
                                          </ModalFooter>
                                        </Modal>
                                        {/* end add group modal */}
                                      </div>
                                    </div>
                                  </TabPane>
                                </TabContent>
                              </CardBody>
                            </Card>
                          </div>

                          <div>
                            {/* <!-- update user Modals --> */}
                            {/* <Button className="mcrm-btn" onClick={() => tog_update_user()}>
                              Modifier utilisateur
                            </Button> */}

                            {/* <Modal
                              id="modal_update_user"
                              isOpen={modal_update_user}
                              toggle={() => {
                                tog_update_user();
                              }}
                            >
                              <ModalHeader className="mcrm-bg pb-4">
                                <h5 className="modal-title" id="myModalLabel">
                                  Modifier l'utilisateur: Sarah jonathan
                                </h5>
                                <Button
                                  type="button"
                                  className="btn-close"
                                  onClick={() => {
                                    setmodal_update_user(false);
                                  }}
                                  aria-label="Close"
                                ></Button>
                              </ModalHeader>
                              <ModalBody>
                                <form action="">
                                  <Row>
                                    <Col md={6}>
                                      <div className="mb-3">
                                        <Label htmlFor="identifiant" className="form-label text-muted">
                                          Identifiant
                                        </Label>
                                        <Input type="text" name="identifiant" placeholder="identifiant" />
                                      </div>
                                    </Col>
                                    <Col md={6}>
                                      <div className="mb-3">
                                        <Label htmlFor="email" className="form-label text-muted">
                                          Email
                                        </Label>
                                        <Input type="email" name="email" placeholder="email" />
                                      </div>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col md={6}>
                                      <div className="mb-3">
                                        <Label htmlFor="groupe" className="form-label text-muted">
                                          Groupe
                                        </Label>
                                        <Select
                                          id="groupe"
                                          name="groupe"
                                          value={selectedGroupe}
                                          isMulti={true}
                                          onChange={() => {
                                            handleGroupe();
                                          }}
                                          options={groupeOptions}
                                        />
                                      </div>
                                    </Col>
                                    <Col md={6}>
                                      <div className="mb-3">
                                        <Label htmlFor="statut" className="form-label text-muted">
                                          Statut
                                        </Label>
                                        <Select
                                          id="statut"
                                          name="statut"
                                          value={selectedStatut}
                                          isMulti={false}
                                          onChange={() => {
                                            handleStatut();
                                          }}
                                          options={statutOptions}
                                        />
                                      </div>
                                    </Col>
                                  </Row>
                                </form>
                              </ModalBody>
                              <ModalFooter>
                                <Button
                                  className="mcrm-btn"
                                  onClick={() => {
                                    tog_update_user();
                                  }}
                                >
                                  Sauvegarder
                                </Button>
                                <Button className="mcrm-btn-danger">Supprimer</Button>
                              </ModalFooter>
                            </Modal> */}
                            {/* end update user modal */}
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tabId="2">
                        <div className="d-flex">
                          <div className="flex-grow-1 ms-2">
                            <div>
                              {/* <!-- add group Modals --> */}
                              <Button className="mcrm-btn" onClick={() => tog_add_rib()}>
                                Ajouter un RIB
                              </Button>
                              <Modal
                                id="Modal_add_rib"
                                isOpen={modal_add_rib}
                                toggle={() => {
                                  tog_add_rib();
                                }}
                              >
                                <ModalHeader className="mcrm-bg pb-4">
                                  <h5 className="modal-title" id="myModalLabelRib">
                                    Ajout un RIB
                                  </h5>
                                  <Button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => {
                                      setmodal_add_rib(false);
                                    }}
                                    aria-label="Close"
                                  ></Button>
                                </ModalHeader>
                                <ModalBody>
                                  <form action="">
                                    <Row>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="paysRIB" className="form-label text-muted">
                                            Pays
                                          </Label>
                                          <Select
                                            id="paysRIB"
                                            name="paysRIB"
                                            value={selectedPaysRIB}
                                            isMulti={false}
                                            onChange={() => {
                                              handlePaysRIB();
                                            }}
                                            options={paysOptions}
                                          />
                                        </div>
                                      </Col>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="villeRIB" className="form-label text-muted">
                                            Ville
                                          </Label>
                                          <Input id="villeRIB" type="text" name="villeRIB" placeholder="Ville" />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="telephoneRIB" className="form-label text-muted">
                                            Téléphone
                                          </Label>
                                          <Input id="telephoneRIB" type="text" name="telephoneRIB" placeholder="Téléphone" />
                                        </div>
                                      </Col>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="agenceRIB" className="form-label text-muted">
                                            Adresse agence banque
                                          </Label>
                                          <Input id="agenceRIB" type="text" name="agenceRIB" placeholder="Agence" />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="codeBanqueRIB" className="form-label text-muted">
                                            Code banque
                                          </Label>
                                          <Input id="codeBanqueRIB" type="text" name="codeBanqueRIB" placeholder="Code banque" />
                                        </div>
                                      </Col>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="codeAgenceRIB" className="form-label text-muted">
                                            Code agence
                                          </Label>
                                          <Input id="codeAgenceRIB" type="text" name="codeAgenceRIB" placeholder="Code agence" />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="numeroCompteRIB" className="form-label text-muted">
                                            Numéro de compte
                                          </Label>
                                          <Input id="numeroCompteRIB" type="number" name="numeroCompteRIB" placeholder="N° compte" />
                                        </div>
                                      </Col>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="cleRIB" className="form-label text-muted">
                                            Clé
                                          </Label>
                                          <Input id="cleRIB" type="number" name="cleRIB" placeholder="Clé" />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="numeroIBANRIB" className="form-label text-muted">
                                            N° IBAN
                                          </Label>
                                          <Input id="numeroIBANRIB" type="text" name="numeroIBANRIB" placeholder="N° IBAN" />
                                        </div>
                                      </Col>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="nomAgenceRIB" className="form-label text-muted">
                                            Nom de l'Agence
                                          </Label>
                                          <Input id="nomAgenceRIB" type="text" name="nomAgenceRIB" placeholder="Nom agence" />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col md={12}>
                                        <div className="mb-3">
                                          <Label htmlFor="RIBFile" className="form-label text-muted">
                                            Télécharger votre RIB
                                          </Label>
                                          <Input id="RIBFile" type="file" name="RIBFile" placeholder="Charger votre RIB" />
                                        </div>
                                      </Col>
                                    </Row>

                                    <ModalFooter>
                                      <Button
                                        type="submit"
                                        className="mcrm-btn"
                                        onClick={() => {
                                          //tog_add_rib();
                                        }}
                                      >
                                        <i className="ri-add-line"></i> Ajouter RIB
                                      </Button>
                                    </ModalFooter>
                                  </form>
                                </ModalBody>
                              </Modal>
                              {/* end add group modal */}
                            </div>
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tabId="3">
                        <div className="d-flex">
                          <div className="flex-grow-1 ms-2">
                            <div>
                              {/* <!-- add group Modals --> */}
                              <Button className="mcrm-btn" onClick={() => tog_add_reseauEcoles()}>
                                Ajouter un réseau d'écoles
                              </Button>
                              <Modal
                                id="Modal_add_reseauEcoles"
                                isOpen={modal_add_reseauEcoles}
                                toggle={() => {
                                  tog_add_reseauEcoles();
                                }}
                              >
                                <ModalHeader className="mcrm-bg pb-4">
                                  <h5 className="modal-title" id="myModalLabelRE">
                                    Ajout un reseau d'écoles
                                  </h5>
                                  <Button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => {
                                      setmodal_add_reseauEcoles(false);
                                    }}
                                    aria-label="Close"
                                  ></Button>
                                </ModalHeader>
                                <ModalBody>
                                  <form action="">
                                    <Row>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="paysRE" className="form-label text-muted">
                                            Pays
                                          </Label>
                                          <Select
                                            id="paysRE"
                                            name="paysRE"
                                            value={selectedPaysRE}
                                            isMulti={false}
                                            onChange={() => {
                                              handlePaysRE();
                                            }}
                                            options={paysOptions}
                                          />
                                        </div>
                                      </Col>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="villeRE" className="form-label text-muted">
                                            Ville (Siège)
                                          </Label>
                                          <Input id="villeRE" type="text" name="villeRE" placeholder="Ville (Siège)" />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="telephoneRE" className="form-label text-muted">
                                            Téléphone
                                          </Label>
                                          <Input id="telephoneRE" type="text" name="telephoneRE" placeholder="Téléphone" />
                                        </div>
                                      </Col>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="adresseRE" className="form-label text-muted">
                                            Adresse groupe d'écoles
                                          </Label>
                                          <Input id="adresseRE" type="text" name="adresseRE" placeholder="Adresse" />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="emailRE" className="form-label text-muted">
                                            Email
                                          </Label>
                                          <Input id="emailRE" type="text" name="emailRE" placeholder="Email" />
                                        </div>
                                      </Col>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="tauxCommissionRE" className="form-label text-muted">
                                            Taux de commission
                                          </Label>
                                          <Input id="tauxCommissionRE" type="text" name="tauxCommissionRE" placeholder="exp: 15%" />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="nomRE" className="form-label text-muted">
                                            Nom du groupe d'écoles
                                          </Label>
                                          <Input id="nomRE" type="text" name="nomRE" placeholder="Nom de groupe d'écoles" />
                                        </div>
                                      </Col>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="nombreEcoles" className="form-label text-muted">
                                            Nombre d'écoles
                                          </Label>
                                          <Input id="nombreEcoles" type="number" name="nombreEcoles" placeholder="Nombre d'écoles" />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="siteWebRE" className="form-label text-muted">
                                            Site web
                                          </Label>
                                          <Input id="siteWebRE" type="text" name="siteWebRE" placeholder="Site web" />
                                        </div>
                                      </Col>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="logoRE" className="form-label text-muted">
                                            Logo du groupe
                                          </Label>
                                          <Input id="logoRE" type="file" name="logoRE" placeholder="Logo du groupe" />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col md={12}>
                                        <div className="mb-3">
                                          <Label htmlFor="contratPartenariatRE" className="form-label text-muted">
                                            Télécharger votre contrat de partenariat
                                          </Label>
                                          <Input id="contratPartenariatRE" type="file" name="contratPartenariatRE" placeholder="Charger votre contrat partenariat" />
                                        </div>
                                      </Col>
                                    </Row>

                                    <ModalFooter>
                                      <Button
                                        type="submit"
                                        className="mcrm-btn"
                                        onClick={() => {
                                          //tog_add_rib();
                                        }}
                                      >
                                        <i className="ri-add-line"></i> Ajouter réseau
                                      </Button>
                                    </ModalFooter>
                                  </form>
                                </ModalBody>
                              </Modal>
                              {/* end add group modal */}
                            </div>
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tabId="4">
                        <div className="d-flex">
                          <div className="flex-grow-1 ms-2">
                            <div>
                              {/* <!-- add group Modals --> */}
                              <Button className="mcrm-btn" onClick={() => tog_add_formation()}>
                                Ajouter une formation
                              </Button>
                              <Modal
                                id="Modal_add_formation"
                                isOpen={modal_add_formation}
                                toggle={() => {
                                  tog_add_formation();
                                }}
                              >
                                <ModalHeader className="mcrm-bg pb-4">
                                  <h5 className="modal-title" id="myModalLabelFormation">
                                    Ajout une formation
                                  </h5>
                                  <Button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => {
                                      setmodal_add_formation(false);
                                    }}
                                    aria-label="Close"
                                  ></Button>
                                </ModalHeader>
                                <ModalBody>
                                  <form action="">
                                    <Row>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="groupeEcole" className="form-label text-muted">
                                            Groupe d'école
                                          </Label>
                                          <Select
                                            id="groupeEcole"
                                            name="groupeEcole"
                                            value={selectedGroupeEcole}
                                            isMulti={false}
                                            onChange={() => {
                                              handleGroupeEcole();
                                            }}
                                            options={groupeEcoleOptions}
                                          />
                                        </div>
                                      </Col>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="nomEcole" className="form-label text-muted">
                                            Nom de l'école
                                          </Label>
                                          <Input id="nomEcole" type="text" name="nomEcole" placeholder="Nom école" />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="telephoneRE" className="form-label text-muted">
                                            Téléphone
                                          </Label>
                                          <Input id="telephoneRE" type="text" name="telephoneRE" placeholder="Téléphone" />
                                        </div>
                                      </Col>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="adresseRE" className="form-label text-muted">
                                            Adresse groupe d'écoles
                                          </Label>
                                          <Input id="adresseRE" type="text" name="adresseRE" placeholder="Adresse" />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="emailRE" className="form-label text-muted">
                                            Email
                                          </Label>
                                          <Input id="emailRE" type="text" name="emailRE" placeholder="Email" />
                                        </div>
                                      </Col>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="tauxCommissionRE" className="form-label text-muted">
                                            Taux de commission
                                          </Label>
                                          <Input id="tauxCommissionRE" type="text" name="tauxCommissionRE" placeholder="exp: 15%" />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="nomRE" className="form-label text-muted">
                                            Nom du groupe d'écoles
                                          </Label>
                                          <Input id="nomRE" type="text" name="nomRE" placeholder="Nom de groupe d'écoles" />
                                        </div>
                                      </Col>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="nombreEcoles" className="form-label text-muted">
                                            Nombre d'écoles
                                          </Label>
                                          <Input id="nombreEcoles" type="number" name="nombreEcoles" placeholder="Nombre d'écoles" />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="siteWebRE" className="form-label text-muted">
                                            Site web
                                          </Label>
                                          <Input id="siteWebRE" type="text" name="siteWebRE" placeholder="Site web" />
                                        </div>
                                      </Col>
                                      <Col md={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="logoRE" className="form-label text-muted">
                                            Logo du groupe
                                          </Label>
                                          <Input id="logoRE" type="file" name="logoRE" placeholder="Logo du groupe" />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col md={12}>
                                        <div className="mb-3">
                                          <Label htmlFor="contratPartenariatRE" className="form-label text-muted">
                                            Télécharger votre contrat de partenariat
                                          </Label>
                                          <Input id="contratPartenariatRE" type="file" name="contratPartenariatRE" placeholder="Charger votre contrat partenariat" />
                                        </div>
                                      </Col>
                                    </Row>

                                    <ModalFooter>
                                      <Button
                                        type="submit"
                                        className="mcrm-btn"
                                        onClick={() => {
                                          //tog_add_rib();
                                        }}
                                      >
                                        <i className="ri-add-line"></i> Ajouter réseau
                                      </Button>
                                    </ModalFooter>
                                  </form>
                                </ModalBody>
                              </Modal>
                              {/* end add group modal */}
                            </div>
                          </div>
                        </div>
                      </TabPane>
                      {/* <TabPane tabId="4">
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <i className="ri-checkbox-multiple-blank-fill text-success"></i>
                            </div>
                            <div className="flex-grow-1 ms-2">Contenu tickes</div>
                          </div>
                        </TabPane> */}
                    </TabContent>
                  </CardBody>
                </Card>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default withAuthProtected(ParametresAgence, [ROLE_ADMIN]);
