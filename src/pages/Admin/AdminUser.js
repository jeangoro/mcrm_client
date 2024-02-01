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

const AdminUser = () => {
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

  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <div className="float-left">
            <BreadCrumb title="Liste des utilisateurs" pageTitle="Administration" />
          </div>
          <Card>
            {/* <CardHeader>Gestion des utilisateurs</CardHeader> */}
            <CardBody>
              <Row>
                <h5 className="mb-3">Gestion des utilisateurs</h5>
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
                          Utilisateurs
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
                          Groupe
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
                          Leads
                        </NavLink>
                      </NavItem>
                      {/* <NavItem>
                          <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({
                              active: customActiveTab === "4",
                            })}
                            onClick={() => {
                              toggleCustom("4");
                            }}
                          >
                            Tickets
                          </NavLink>
                        </NavItem> */}
                    </Nav>

                    <TabContent activeTab={customActiveTab} className="text-muted">
                      <TabPane tabId="1" id="home1">
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <i className="ri-checkbox-multiple-blank-fill text-success"></i>
                          </div>
                          <div className="flex-grow-1 ms-2">Contenu utilisateurs</div>

                          <div>
                            {/* <!-- update user Modals --> */}
                            <Button className="mcrm-btn" onClick={() => tog_update_user()}>
                              Modifier utilisateur
                            </Button>

                            <Modal
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
                            </Modal>
                            {/* end update user modal */}
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tabId="2">
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <i className="ri-checkbox-multiple-blank-fill text-success"></i>
                          </div>
                          <div className="flex-grow-1 ms-2">Contenu Groupes</div>
                          <div>
                            {/* <!-- add group Modals --> */}
                            <Button className="mcrm-btn" onClick={() => tog_add_group()}>
                              Ajouter un groupe
                            </Button>
                            <Modal
                              id="Modal_add_group"
                              isOpen={modal_add_group}
                              toggle={() => {
                                tog_add_group();
                              }}
                            >
                              <ModalHeader className="mcrm-bg pb-4">
                                <h5 className="modal-title" id="myModalLabel">
                                  Ajouter un groupe
                                </h5>
                                <Button
                                  type="button"
                                  className="btn-close"
                                  onClick={() => {
                                    setmodal_add_group(false);
                                  }}
                                  aria-label="Close"
                                ></Button>
                              </ModalHeader>
                              <ModalBody>
                                <form action="">
                                  <Row>
                                    <Col md={6}>
                                      <div className="mb-3">
                                        <Label htmlFor="nom_groupe" className="form-label text-muted">
                                          Nom du groupe
                                        </Label>
                                        <Input id="nom_groupe" type="text" name="nom_groupe" placeholder="Nom du groupe" />
                                      </div>
                                    </Col>
                                    <Col md={6}>
                                      <div className="mb-3">
                                        <Label htmlFor="permissions" className="form-label text-muted">
                                          Permissions
                                        </Label>
                                        <Select
                                          id="permissions"
                                          name="permissions"
                                          value={selectedPermissions}
                                          isMulti={true}
                                          onChange={() => {
                                            handlePermissions();
                                          }}
                                          options={permissionsOptions}
                                        />
                                      </div>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col md={12}>
                                      <div className="mb-3">
                                        <Label htmlFor="libelle" className="form-label text-muted">
                                          Libellé
                                        </Label>
                                        <Input type="textarea" name="libelle" rows={5} placeholder="Libellé du groupe" />
                                      </div>
                                    </Col>
                                  </Row>
                                </form>
                              </ModalBody>
                              <ModalFooter>
                                <Button
                                  className="mcrm-btn"
                                  onClick={() => {
                                    tog_add_group();
                                  }}
                                >
                                  <i className="ri-add-line"></i> Ajouter un groupe
                                </Button>
                              </ModalFooter>
                            </Modal>
                            {/* end add group modal */}
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tabId="3">
                        <div className="d-flex">
                          <div className="flex-grow-1 ms-2">
                            <Card>
                              <CardBody>
                                <Nav tabs className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-3">
                                  <NavItem>
                                    <NavLink
                                      style={{ cursor: "pointer" }}
                                      className={classnames({
                                        active: leadActiveTab === "31",
                                      })}
                                      onClick={() => {
                                        toggleLead("31");
                                      }}
                                    >
                                      Type leads
                                    </NavLink>
                                  </NavItem>
                                  <NavItem>
                                    <NavLink
                                      style={{ cursor: "pointer" }}
                                      className={classnames({
                                        active: leadActiveTab === "32",
                                      })}
                                      onClick={() => {
                                        toggleLead("32");
                                      }}
                                    >
                                      Etapes lead
                                    </NavLink>
                                  </NavItem>
                                </Nav>

                                <TabContent activeTab={leadActiveTab} className="text-muted">
                                  <TabPane tabId="31" id="leadTab1">
                                    <div className="d-flex">
                                      {/* <div className="flex-shrink-0">
                                          <i className="ri-checkbox-multiple-blank-fill text-success"></i>
                                        </div> */}
                                      {/* <div className="flex-grow-1 ms-2">Contenu types leads</div> */}

                                      <div className="flex-grow-1 ms-2">
                                        {/* <!-- update user Modals --> */}
                                        <Button className="mcrm-btn" onClick={() => tog_add_type_lead()}>
                                          Ajouter un type lead
                                        </Button>

                                        <Modal
                                          id="modal_add_type_lead"
                                          isOpen={modal_add_type_lead}
                                          toggle={() => {
                                            tog_add_type_lead();
                                          }}
                                        >
                                          <ModalHeader className="mcrm-bg pb-4">
                                            <h5 className="modal-title" id="myModalLabel">
                                              Ajouter un type de lead
                                            </h5>
                                            <Button
                                              type="button"
                                              className="btn-close"
                                              onClick={() => {
                                                setmodal_add_type_lead(false);
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
                                                      Lead
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
                                                      Statut lead
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
                                                <Col md={12}>
                                                  <div className="mb-3">
                                                    <Label htmlFor="libelle_type_lead" className="form-label text-muted">
                                                      Libellé du type lead
                                                    </Label>
                                                    <Input type="textarea" id="libelle_type_lead" name="libelle_type_lead" rows={5} placeholder="Libellé du type lead" />
                                                  </div>
                                                </Col>
                                              </Row>
                                            </form>
                                          </ModalBody>
                                          <ModalFooter>
                                            <Button
                                              className="mcrm-btn"
                                              onClick={() => {
                                                tog_add_type_lead();
                                              }}
                                            >
                                              <i className="ri-add-line"></i> Ajouter un type lead
                                            </Button>
                                          </ModalFooter>
                                        </Modal>
                                        {/* end update user modal */}
                                      </div>
                                    </div>
                                  </TabPane>
                                  <TabPane tabId="32">
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

export default withAuthProtected(AdminUser, [ROLE_ADMIN]);
