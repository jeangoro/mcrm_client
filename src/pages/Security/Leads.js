import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import withAuthProtected from "../../routes/withAuthProtected";
import { ROLE_ADMIN } from "../../routes/roles";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

const renderInputError = (message) => <div className="text-danger">{message}</div>;

//for select and multiple select
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

const Leads = () => {
  // formik validation
  const addTypeLeadFormik = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: { lead: {}, leadStatut: {}, libelleTypeLead: "" },
    validationSchema: Yup.object().shape({
      lead: Yup.object().required(),
      leadStatut: Yup.object().required(),
      libelleTypeLead: Yup.string().notRequired(),
    }),
    onSubmit: () => {},
  });
  const addEtapeLeadFormik = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: { lead: {}, leadStatut: {}, service: {}, etapeService: {}, duree: "", statutService: {}, descriptionStatutLeadService: "" },
    validationSchema: Yup.object().shape({
      lead: Yup.object().required("champ obligatoire"),
      leadStatut: Yup.object().required("champ obligatoire"),
      service: Yup.object().required("champ obligatoire"),
      etapeService: Yup.object().required("champ obligatoire"),
      duree: Yup.string().notRequired(),
      statutService: Yup.object().notRequired(),
      descriptionStatutLeadService: Yup.string().notRequired(),
    }),
    onSubmit: () => {},
  });

  // Lead Tabs Bordered
  const [leadActiveTab, setleadActiveTab] = useState("31");
  const toggleLead = (tab) => {
    if (leadActiveTab !== tab) {
      setleadActiveTab(tab);
    }
  };
  //end Lead Tabs Bordered

  //for modal
  const [modal_add_type_lead, setmodal_add_type_lead] = useState(false);
  const [modal_add_etape_lead, setmodal_add_etape_lead] = useState(false);

  function tog_add_type_lead() {
    setmodal_add_type_lead(!modal_add_type_lead);
  }
  function tog_add_etape_lead() {
    setmodal_add_etape_lead(!modal_add_etape_lead);
  }
  //end for modal
  //for multiple select
  const [selectedLead, setselectedLead] = useState({ label: "", value: "" });
  function handleLead(selectLead) {
    // addTypeLeadFormik.values.lead = selectLead;
    setselectedLead(selectLead);
  }
  const [selectedLeadEtape, setselectedLeadEtape] = useState({ label: "", value: "" });
  function handleLeadEtape(selectLead) {
    setselectedLeadEtape(selectLead);
    // addEtapeLeadFormik.values.lead = selectedLeadEtape;
  }
  const [selectedLeadStatut, setselectedLeadStatut] = useState({ label: "", value: "" });
  function handleLeadStatut(selectLeadStatut) {
    // addTypeLeadFormik.values.leadStatut = selectLeadStatut;
    setselectedLeadStatut(selectLeadStatut);
  }
  const [selectedService, setselectedService] = useState({ label: "", value: "" });
  function handleService(selectedService) {
    setselectedService(selectedService);
  }
  const [selectedEtapeService, setselectedEtapeService] = useState({ label: "", value: "" });
  function handleEtapeService(selectedEtapeService) {
    setselectedEtapeService(selectedEtapeService);
  }
  const [selectedStatutService, setselectedStatutService] = useState({ label: "", value: "" });
  function handleStatutService(selectedStatutService) {
    setselectedStatutService(selectedStatutService);
  }
  //end for multiple select

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
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
                      <div className="modal-title" id="myModalLabel">
                        Ajouter un type de lead
                      </div>
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
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          addTypeLeadFormik.handleSubmit();
                          return false;
                        }}
                        action=""
                      >
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
                                onChange={(e) => {
                                  addTypeLeadFormik.setFieldValue("lead", e);
                                  handleLead(e);
                                }}
                                options={leadOptions}
                                onBlur={addTypeLeadFormik.handleBlur}
                                invalid={addTypeLeadFormik.touched.lead && addTypeLeadFormik.errors.lead !== undefined}
                              />
                              {addTypeLeadFormik.errors.lead ? renderInputError(addTypeLeadFormik.errors.lead) : null}
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="mb-3">
                              <Label htmlFor="leadStatut" className="form-label text-muted">
                                Statut lead
                              </Label>
                              <Select
                                id="leadStatut"
                                name="leadStatut"
                                value={selectedLeadStatut}
                                isMulti={false}
                                onChange={(e) => {
                                  addTypeLeadFormik.setFieldValue("leadStatut", e);
                                  handleLeadStatut(e);
                                }}
                                options={leadStatutOptions}
                                onBlur={addTypeLeadFormik.handleBlur}
                                invalid={addTypeLeadFormik.touched.leadStatut && addTypeLeadFormik.errors.leadStatut !== undefined}
                              />
                              {addTypeLeadFormik.errors.leadStatut ? renderInputError(addTypeLeadFormik.errors.leadStatut) : null}
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={12}>
                            <div className="mb-3">
                              <Label htmlFor="libelleTypeLead" className="form-label text-muted">
                                Libellé du type lead
                              </Label>
                              <Input
                                type="textarea"
                                id="libelleTypeLead"
                                name="libelleTypeLead"
                                rows={5}
                                placeholder="Libellé du type lead"
                                onChange={addTypeLeadFormik.handleChange}
                                onBlur={addTypeLeadFormik.handleBlur}
                                value={addTypeLeadFormik.values.libelleTypeLead}
                                invalid={addTypeLeadFormik.touched.libelleTypeLead && addTypeLeadFormik.errors.libelleTypeLead !== undefined}
                              />
                              {addTypeLeadFormik.errors.libelleTypeLead ? renderInputError(addTypeLeadFormik.errors.libelleTypeLead) : null}
                            </div>
                          </Col>
                        </Row>
                        <ModalFooter>
                          <Button
                            className="mcrm-btn"
                            type="submit"
                            disabled={!addTypeLeadFormik.isValid}
                            onClick={() => {
                              tog_add_type_lead();
                            }}
                          >
                            <i className="ri-add-line"></i> Ajouter un type lead
                          </Button>
                        </ModalFooter>
                      </form>
                    </ModalBody>
                  </Modal>
                  {/* end update user modal */}
                </div>
              </div>
            </TabPane>
            <TabPane tabId="32">
              <div className="d-flex">
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
                      <div className="modal-title" id="etapeLeadModalLabel">
                        Ajouter une étape du lead
                      </div>
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
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          addEtapeLeadFormik.handleSubmit();
                          return false;
                        }}
                        action=""
                      >
                        <Row>
                          <Col md={6}>
                            <div className="mb-3">
                              <Label htmlFor="lead" className="form-label text-muted">
                                Lead *
                              </Label>
                              <Select
                                id="lead"
                                name="lead"
                                value={selectedLeadEtape}
                                isMulti={false}
                                onChange={(e) => {
                                  addEtapeLeadFormik.setFieldValue("lead", e);
                                  handleLeadEtape(e);
                                }}
                                options={leadOptions}
                                onBlur={addEtapeLeadFormik.handleBlur}
                                invalid={addEtapeLeadFormik.touched.lead && addEtapeLeadFormik.errors.lead !== undefined}
                              />
                              {addEtapeLeadFormik.errors.lead ? renderInputError(addEtapeLeadFormik.errors.lead) : null}
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
                                onChange={(e) => {
                                  addEtapeLeadFormik.setFieldValue("leadStatut", e);
                                  handleLeadStatut(e);
                                }}
                                options={leadStatutOptions}
                                onBlur={addEtapeLeadFormik.handleBlur}
                                invalid={addEtapeLeadFormik.touched.leadStatut && addEtapeLeadFormik.errors.leadStatut !== undefined}
                              />
                              {addEtapeLeadFormik.errors.leadStatut ? renderInputError(addEtapeLeadFormik.errors.leadStatut) : null}
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
                                onChange={(e) => {
                                  addEtapeLeadFormik.setFieldValue("service", e);
                                  handleService(e);
                                }}
                                options={serviceOptions}
                                onBlur={addEtapeLeadFormik.handleBlur}
                                invalid={addEtapeLeadFormik.touched.service && addEtapeLeadFormik.errors.service !== undefined}
                              />
                              {addEtapeLeadFormik.errors.service ? renderInputError(addEtapeLeadFormik.errors.service) : null}
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="mb-3">
                              <Label htmlFor="etapeService" className="form-label text-muted">
                                Etape du service *
                              </Label>
                              <Select
                                id="etapeService"
                                name="etapeService"
                                value={selectedEtapeService}
                                isMulti={false}
                                onChange={(e) => {
                                  addEtapeLeadFormik.setFieldValue("etapeService", e);
                                  handleEtapeService(e);
                                }}
                                options={etapeServiceOptions}
                                onBlur={addEtapeLeadFormik.handleBlur}
                                invalid={addEtapeLeadFormik.touched.etapeService && addEtapeLeadFormik.errors.etapeService !== undefined}
                              />
                              {addEtapeLeadFormik.errors.etapeService ? renderInputError(addEtapeLeadFormik.errors.etapeService) : null}
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <div className="mb-3">
                              <Label htmlFor="duree" className="form-label text-muted">
                                Durée
                              </Label>
                              <Input
                                id="duree"
                                type="text"
                                name="duree"
                                placeholder="Durée"
                                value={addEtapeLeadFormik.values.duree}
                                onChange={addEtapeLeadFormik.handleChange}
                                onBlur={addEtapeLeadFormik.handleBlur}
                                invalid={addEtapeLeadFormik.touched.libelleTypeLead && addEtapeLeadFormik.errors.libelleTypeLead !== undefined}
                              />
                              {addEtapeLeadFormik.errors.duree ? renderInputError(addEtapeLeadFormik.errors.duree) : null}
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="mb-3">
                              <Label htmlFor="statutService" className="form-label text-muted">
                                Statut services
                              </Label>
                              <Select
                                id="statutService"
                                name="statutService"
                                value={selectedStatutService}
                                isMulti={false}
                                onChange={(e) => {
                                  addEtapeLeadFormik.setFieldValue("statutService", e);
                                  handleStatutService(e);
                                }}
                                options={statutServiceOptions}
                                onBlur={addEtapeLeadFormik.handleBlur}
                                invalid={addEtapeLeadFormik.touched.statutService && addEtapeLeadFormik.errors.statutService !== undefined}
                              />
                              {addEtapeLeadFormik.errors.statutService ? renderInputError(addEtapeLeadFormik.errors.statutService) : null}
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={12}>
                            <div className="mb-3">
                              <Label htmlFor="descriptionStatutLeadService" className="form-label text-muted">
                                Description statut lead service
                              </Label>
                              <Input
                                id="descriptionStatutLeadService"
                                type="textarea"
                                name="descriptionStatutLeadService"
                                rows={5}
                                placeholder="Description statut lead service"
                                defaultValue={addEtapeLeadFormik.values.descriptionStatutLeadService}
                                onChange={addEtapeLeadFormik.handleChange}
                                onBlur={addEtapeLeadFormik.handleBlur}
                                invalid={addEtapeLeadFormik.touched.descriptionStatutLeadService && addEtapeLeadFormik.errors.descriptionStatutLeadService !== undefined}
                              />
                              {addEtapeLeadFormik.errors.descriptionStatutLeadService ? renderInputError(addEtapeLeadFormik.errors.descriptionStatutLeadService) : null}
                            </div>
                          </Col>
                        </Row>
                        <ModalFooter>
                          <Button
                            type="submit"
                            className="mcrm-btn"
                            disabled={!addEtapeLeadFormik.isValid}
                            onClick={() => {
                              tog_add_etape_lead();
                            }}
                          >
                            <i className="ri-add-line"></i> Ajouter étape lead
                          </Button>
                        </ModalFooter>
                      </form>
                    </ModalBody>
                  </Modal>
                  {/* end add group modal */}
                </div>
              </div>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </>
  );
};

export default withAuthProtected(Leads, [ROLE_ADMIN]);
