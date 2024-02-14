import React, { useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Progress, Row, TabContent, TabPane, Table } from "reactstrap";
// import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import BreadCrumbCustom from "../../../../components/common/BreadCrumbCustom";
//Import Breadcrumb
import classnames from "classnames";
// import dummyUser from "../../../assets/images/users/user-dummy-img.jpg";
import PriveVerticalProgress from "../PriveVerticalProgress";
import { useNavigate } from "react-router-dom";

import { documentsDataExample } from "../../../../common/data";

const SuiviAssurance = () => {
  document.title = "Suivi accompagnement"; //for meta title
  const pages = [
    { title: "Accueil", link: "/dashboard" },
    { title: "Services", link: "/services-clients" },
    { title: "ASSURANCE", link: "" },
  ];

  const [activeTab, setactiveTab] = useState(1);
  // const [progressbarvalue, setprogressbarvalue] = useState(0);
  const [passedSteps, setPassedSteps] = useState([1]);

  const [activeVerticalTab, setactiveVerticalTab] = useState(7);
  const [progressbarvalue, setprogressbarvalue] = useState(0);
  // const [passedSteps, setPassedSteps] = useState([1]);
  // const [passedarrowSteps, setPassedarrowSteps] = useState([1]);
  const [passedverticalSteps, setPassedverticalSteps] = useState([1]);

  const navigate = useNavigate();

  function toggleVerticalTab(tab) {
    if (activeVerticalTab !== tab) {
      var modifiedSteps = [...passedverticalSteps, tab];

      if (tab >= 7 && tab <= 11) {
        setactiveVerticalTab(tab);
        setPassedverticalSteps(modifiedSteps);
      }
    }
  }

  function toggleTab(tab, value) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab];

      if (tab >= 1 && tab <= 7) {
        setactiveTab(tab);
        setPassedSteps(modifiedSteps);
      }
    }
    setprogressbarvalue(value);
  }

  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <div className="float-left">
            <BreadCrumbCustom pages={pages} />
          </div>

          <div className="my-content">
            <Row>
              <Col lg={2} className="my-nav-progress-bar">
                <div className="progress-nav mb-4">
                  <Nav className="nav-pills progress-bar-tab custom-nav prive-vertical-nav" role="tablist">
                    {/* <PriveVerticalProgress progress={20} /> */}
                    <Col lg={2} md={2} className="col-progress-indicators">
                      {/* <Progress value={progressbarvalue} style={{ height: "2px" }} /> */}
                      <NavItem>
                        <NavLink
                          to="#"
                          id="pills-gen-info-tab"
                          className={classnames(
                            {
                              active: activeTab === 1,
                              done: activeTab <= 6 && activeTab >= 0,
                            },
                            "rounded-pill"
                          )}
                          onClick={() => {
                            toggleTab(1, 0);
                          }}
                          tag="button"
                        >
                          1<Progress value={progressbarvalue} />
                        </NavLink>
                      </NavItem>
                      Formulaire de demande
                    </Col>
                    <Col lg={2} md={2} className="col-progress-indicators">
                      <NavItem>
                        <NavLink
                          to="#"
                          id="pills-gen-info-tab"
                          className={classnames(
                            {
                              active: activeTab === 2,
                              done: activeTab <= 6 && activeTab > 1,
                            },
                            "rounded-pill"
                          )}
                          onClick={() => {
                            toggleTab(2, 20);
                          }}
                          tag="button"
                        >
                          2
                        </NavLink>
                      </NavItem>
                      Entretien 
                    </Col>
                    <Col lg={2} md={2} className="col-progress-indicators">
                      <NavItem>
                        <NavLink
                          to="#"
                          id="pills-gen-info-tab"
                          className={classnames(
                            {
                              active: activeTab === 3,
                              done: activeTab <= 6 && activeTab > 2,
                            },
                            "rounded-pill"
                          )}
                          onClick={() => {
                            toggleTab(3, 40);
                          }}
                          tag="button"
                        >
                          3
                        </NavLink>
                      </NavItem>
                      Paiement 
                    </Col>
                    <Col lg={2} md={2} className="col-progress-indicators">
                      <NavItem>
                        <NavLink
                          to="#"
                          id="pills-gen-info-tab"
                          className={classnames(
                            {
                              active: activeTab === 4,
                              done: activeTab <= 6 && activeTab > 3,
                            },
                            "rounded-pill"
                          )}
                          onClick={() => {
                            toggleTab(4, 60);
                          }}
                          tag="button"
                        >
                          4
                        </NavLink>
                      </NavItem>
                      Attestation assurance
                    </Col>
                   
                    
                  </Nav>
                </div>
              </Col>
              <Col lg={10}>
                <Card>
                  <CardHeader>
                    <h4>Suivi de votre  dossier d’assurance</h4>
                  </CardHeader>
                  <CardBody className="card-body-suivi">
                    <Form action="#" className="form-steps">
                      <TabContent activeTab={activeTab}>
                        <TabPane tabId={1}>
                          <div className="mb-4">
                            <div>
                              <h5 className="mb-1">
                                Etape: <span className="table-title"> Formulaire demande</span>{" "}
                              </h5>
                            </div>
                          </div>

                          <Container fluid>
                            <Row>
                              <Col xl={12}>
                                <div className="table-responsive table-card table-suiv-accomp">
                                  <Table className="align-middle table-nowrap mb-0 ">
                                    <thead className="table-light">
                                      <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Etape</th>
                                        <th scope="col">Commentaire</th>
                                        <th scope="col">Statut</th>
                                        <th scope="col">Date</th>
                                        <th scope="col" style={{ width: "150px" }}>
                                          Action
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Saisie demande assurane</td>
                                        <td>Aucun</td>
                                        <td>
                                          <span className="badge badge-md bg-warning">
                                            <i className="mdi mdi-check-circle"></i> Encours
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td>
                                          <button type="button" className="btn btn-md btn-warning">
                                            <i className="mdi mdi-check-circle"></i> Soumettre
                                          </button>
                                          <button type="button" className="btn btn-md btn-info" onClick={() => navigate("/services-client/formulaire-accompagnement")}>
                                            <i className="mdi mdi-pencil"></i> Modifier
                                          </button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>
                              </Col>
                            </Row>
                          </Container>
                          <div className="mb-4 mt-5">
                            <div>
                              <h5 className="mb-1">
                                <span className="table-title"> Mes documents</span>{" "}
                              </h5>
                            </div>
                          </div>
                          <Container fluid>
                            <Row>
                              <Col xl={12}>
                                <div className="table-responsive table-card table-suiv-accomp">
                                  <Table className="align-middle table-nowrap mb-0 ">
                                    <thead className="table-light">
                                      <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Statut</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Gérant dossier</th>
                                        <th scope="col" style={{ width: "150px" }}>
                                          Action
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Copie de votre passeport </td>

                                        <td>
                                        <span className="badge badge-md bg-warning">
                                            <i className="mdi mdi-check-circle"></i> Encours
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td>NDONGO MARLISE</td>
                                        <td>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-check-circle"></i> Voir
                                          </button>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-pencil"></i> Télécharger
                                          </button>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-cloud"></i> Upload
                                          </button>
                                         
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>
                              </Col>
                            </Row>
                          </Container>
                        </TabPane>

                        <TabPane tabId={2}>
                          <div className="mb-4">
                            <div>
                              <h5 className="mb-1">
                                Etape: <span className="table-title"> Entretien</span>{" "}
                              </h5>
                            </div>
                          </div>

                          <Container fluid>
                            <Row>
                              <Col xl={12}>
                                <div className="table-responsive table-card table-suiv-accomp">
                                  <Table className="align-middle table-nowrap mb-0 ">
                                    <thead className="table-light">
                                      <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Etape</th>
                                        <th scope="col">Commentaire</th>
                                        <th scope="col">Statut</th>
                                        <th scope="col">Date</th>
                                        <th scope="col" style={{ width: "150px" }}>
                                          Action
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Saisie demande accompagnement</td>
                                        <td>Aucun</td>
                                        <td>
                                          <span className="badge badge-md prive-bg-primary">
                                            <i className="mdi mdi-check-circle"></i> Terminé
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td>
                                          <button type="button" className="btn btn-md btn-info">
                                            <i className="mdi mdi-eye"></i> Consulter
                                          </button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>Notification prise rdv entretien</td>
                                        <td>Aucun</td>
                                        <td>
                                          <span className="badge badge-md prive-bg-primary">
                                            <i className="mdi mdi-check-circle"></i> Terminé
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>Confirmation prise de rdv</td>
                                        <td>Aucun</td>
                                        <td>
                                        <span className="badge badge-md bg-warning">
                                            <i className="mdi mdi-check-circle"></i> Encours
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td></td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>
                              </Col>
                            </Row>
                          </Container>
                          <div className="mb-4 mt-5">
                            <div>
                              <h5 className="mb-1">
                                <span className="table-title"> Mes documents</span>{" "}
                              </h5>
                            </div>
                          </div>
                          <Container fluid>
                            <Row>
                              <Col xl={12}>
                                <div className="table-responsive table-card table-suiv-accomp">
                                  <Table className="align-middle table-nowrap mb-0 ">
                                    <thead className="table-light">
                                      <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Statut</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Gérant dossier</th>
                                        <th scope="col" style={{ width: "150px" }}>
                                          Action
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Copie de votre passeport </td>

                                        <td>
                                        <span className="badge badge-md bg-warning">
                                            <i className="mdi mdi-check-circle"></i> Encours
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td>NDONGO MARLISE</td>
                                        <td>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-check-circle"></i> Voir
                                          </button>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-pencil"></i> Télécharger
                                          </button>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-cloud"></i> Upload
                                          </button>
                                         
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>
                              </Col>
                            </Row>
                          </Container>
                        </TabPane>

                        <TabPane tabId={3}>
                          <div className="mb-4">
                            <div>
                              <h5 className="mb-1">
                                Etape: <span className="table-title"> Paiement Assurance</span>{" "}
                              </h5>
                            </div>
                          </div>

                          <Container fluid>
                            <Row>
                              <Col xl={12}>
                                <div className="table-responsive table-card table-suiv-accomp">
                                  <Table className="align-middle table-nowrap mb-0 ">
                                    <thead className="table-light">
                                      <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Etape</th>
                                        <th scope="col">Commentaire</th>
                                        <th scope="col">Statut</th>
                                        <th scope="col">Date</th>
                                        <th scope="col" style={{ width: "150px" }}>
                                          Action
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Saisie demande accompagnement</td>
                                        <td>Aucun</td>
                                        <td>
                                          <span className="badge badge-md prive-bg-primary">
                                            <i className="mdi mdi-check-circle"></i> Terminé
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td>
                                          <button type="button" className="btn btn-md btn-info">
                                            <i className="mdi mdi-eye"></i> Consulter
                                          </button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>Notification prise rdv entretien</td>
                                        <td>Aucun</td>
                                        <td>
                                          <span className="badge badge-md prive-bg-primary">
                                            <i className="mdi mdi-check-circle"></i> Terminé
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>Confirmation prise de rdv</td>
                                        <td>Aucun</td>
                                        <td>
                                          <span className="badge badge-md prive-bg-primary">
                                            <i className="mdi mdi-check-circle"></i> Terminé
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td> 
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>Envoi justificatif paiement</td>
                                        <td>Aucun</td>
                                        <td>
                                        <span className="badge badge-md bg-warning">
                                            <i className="mdi mdi-check-circle"></i> Encours
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td>
                                        <button type="button" className="btn btn-md btn-info">
                                            <i className="mdi mdi-eye"></i> Joindre
                                          </button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>
                              </Col>
                            </Row>
                          </Container>
                          <div className="mb-4 mt-5">
                            <div>
                              <h5 className="mb-1">
                                <span className="table-title"> Mes documents</span>{" "}
                              </h5>
                            </div>
                          </div>
                          <Container fluid>
                            <Row>
                              <Col xl={12}>
                                <div className="table-responsive table-card table-suiv-accomp">
                                  <Table className="align-middle table-nowrap mb-0 ">
                                    <thead className="table-light">
                                      <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Statut</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Gérant dossier</th>
                                        <th scope="col" style={{ width: "150px" }}>
                                          Action
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Copie de votre passeport </td>

                                        <td>
                                          <span className="badge badge-md prive-bg-primary">
                                            <i className="mdi mdi-check-circle"></i> Terminé
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td>NDONGO MARLISE</td>
                                        <td>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-check-circle"></i> Voir
                                          </button>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-pencil"></i> Télécharger
                                          </button>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-cloud"></i> Upload
                                          </button>
                                         
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>Génération RIB & infos assurance</td>

                                        <td>
                                          <span className="badge badge-md prive-bg-primary">
                                            <i className="mdi mdi-check-circle"></i> Généré
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td>NDONGO MARLISE</td>
                                        <td>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-check-circle"></i> Voir
                                          </button>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-pencil"></i> Télécharger
                                          </button>
                                          
                                         
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>
                              </Col>
                            </Row>
                          </Container>
                        </TabPane>
                        <TabPane tabId={4}>
                          <div className="mb-4">
                            <div>
                              <h5 className="mb-1">
                                Etape: <span className="table-title"> Attestation assurance</span>{" "}
                              </h5>
                            </div>
                          </div>

                          <Container fluid>
                            <Row>
                              <Col xl={12}>
                                <div className="table-responsive table-card table-suiv-accomp">
                                  <Table className="align-middle table-nowrap mb-0 ">
                                    <thead className="table-light">
                                      <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Etape</th>
                                        <th scope="col">Commentaire</th>
                                        <th scope="col">Statut</th>
                                        <th scope="col">Date</th>
                                        <th scope="col" style={{ width: "150px" }}>
                                          Action
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Envoi attestation assurance</td>
                                        <td>Aucun</td>
                                        <td>
                                          <span className="badge badge-md prive-bg-primary">
                                            <i className="mdi mdi-check-circle"></i> Terminé
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td>
                                       
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>Validation attestation assurance</td>
                                        <td>Aucun</td>
                                        <td>
                                        <span className="badge badge-md bg-warning">
                                            <i className="mdi mdi-check-circle"></i> Encours
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td>
                                        
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>
                              </Col>
                            </Row>
                          </Container>
                          <div className="mb-4 mt-5">
                            <div>
                              <h5 className="mb-1">
                                <span className="table-title"> Mes documents</span>{" "}
                              </h5>
                            </div>
                          </div>
                          <Container fluid>
                            <Row>
                              <Col xl={12}>
                                <div className="table-responsive table-card table-suiv-accomp">
                                  <Table className="align-middle table-nowrap mb-0 ">
                                    <thead className="table-light">
                                      <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Statut</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Gérant dossier</th>
                                        <th scope="col" style={{ width: "150px" }}>
                                          Action
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Copie de votre passeport </td>

                                        <td>
                                          <span className="badge badge-md prive-bg-primary">
                                            <i className="mdi mdi-check-circle"></i> Terminé
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td>NDONGO MARLISE</td>
                                        <td>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-check-circle"></i> Voir
                                          </button>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-pencil"></i> Télécharger
                                          </button>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-cloud"></i> Upload
                                          </button>
                                         
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>Génération RIB & infos assurance</td>

                                        <td>
                                          <span className="badge badge-md prive-bg-primary">
                                            <i className="mdi mdi-check-circle"></i> Généré
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td>NDONGO MARLISE</td>
                                        <td>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-check-circle"></i> Voir
                                          </button>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-pencil"></i> Télécharger
                                          </button>
                                          
                                         
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>Justificatif de paiement</td>

                                        <td>
                                          <span className="badge badge-md prive-bg-primary">
                                            <i className="mdi mdi-check-circle"></i> Généré
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td>NDONGO MARLISE</td>
                                        <td>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-check-circle"></i> Voir
                                          </button>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-pencil"></i> Télécharger
                                          </button>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-cloud"></i> Upload
                                          </button>
                                          
                                         
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>Attestation assurance</td>

                                        <td>
                                          <span className="badge badge-md bg-warning">
                                            <i className="mdi mdi-check-circle"></i> Encours
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td>NDONGO MARLISE</td>
                                        <td>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-check-circle"></i> Voir
                                          </button>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-pencil"></i> Télécharger
                                          </button>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-cloud"></i> Upload
                                          </button>
                                          
                                         
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>
                              </Col>
                            </Row>
                          </Container>
                        </TabPane>
                        <TabPane tabId={5}>
                          <div className="mb-4">
                            <div>
                              <h5 className="mb-1">
                                Etape: <span className="table-title"> Dossier visa</span>{" "}
                              </h5>
                            </div>
                          </div>

                          <Container fluid>
                            <Row>
                              <Col xl={12}>
                                <div className="table-responsive table-card table-suiv-accomp">
                                  <Table className="align-middle table-nowrap mb-0 ">
                                    <thead className="table-light">
                                      <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Etape</th>
                                        <th scope="col">Commentaire</th>
                                        <th scope="col">Statut</th>
                                        <th scope="col">Date</th>
                                        <th scope="col" style={{ width: "150px" }}>
                                          Action
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Paiement des frais d'accompagnement</td>
                                        <td>Aucun</td>
                                        <td>
                                          <span className="badge badge-md bg-warning">
                                            <i className="mdi mdi-check-circle"></i> Encours
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td>
                                          <button type="button" className="btn btn-md prive-btn-primary">
                                            <i className="mdi mdi-cloud"></i> Upload
                                          </button>
                                          <button type="button" className="btn btn-md btn-info">
                                            <i className="mdi mdi-pencil"></i> Signé
                                          </button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>Notification prise rdv entretien</td>
                                        <td>Aucun</td>
                                        <td>
                                          <span className="badge badge-md prive-bg-primary">
                                            <i className="mdi mdi-check-circle"></i> Terminé
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>Upload signature du contrat d’AVI signé</td>
                                        <td>Aucun</td>
                                        <td>
                                          <span className="badge badge-md prive-bg-primary">
                                            <i className="mdi mdi-check-circle"></i> Terminé
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>Validation de la signature du contrat</td>
                                        <td>Aucun</td>
                                        <td>
                                          <span className="badge badge-md prive-bg-primary">
                                            <i className="mdi mdi-check-circle"></i> Terminé
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>5</td>
                                        <td>Notification paiement accompagnement</td>
                                        <td>Aucun</td>
                                        <td>
                                          <span className="badge badge-md prive-bg-primary">
                                            <i className="mdi mdi-check-circle"></i> Terminé
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td></td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>
                              </Col>
                            </Row>
                          </Container>
                          <div className="mb-4 mt-5">
                            <div>
                              <h5 className="mb-1">
                                <span className="table-title"> Mes documents</span>{" "}
                              </h5>
                            </div>
                          </div>
                          <Container fluid>
                            <Row>
                              <Col xl={12}>
                                <div className="table-responsive table-card table-suiv-accomp">
                                  <Table className="align-middle table-nowrap mb-0 ">
                                    <thead className="table-light">
                                      <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Statut</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Gérant dossier</th>
                                        <th scope="col" style={{ width: "150px" }}>
                                          Action
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Préparation du contrat d'accompagnement</td>

                                        <td>
                                          <span className="badge badge-md prive-bg-primary">
                                            <i className="mdi mdi-check-circle"></i> Généré
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td>NDONGO MARLISE</td>
                                        <td>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-check-circle"></i> Voir
                                          </button>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-pencil"></i> Télécharger
                                          </button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>Contrat signé</td>

                                        <td>
                                          <span className="badge badge-md prive-bg-primary">
                                            <i className="mdi mdi-check-circle"></i> Signé
                                          </span>
                                        </td>

                                        <td>01-12-2021 17:17</td>
                                        <td>NDONGO MARLISE</td>
                                        <td>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-check-circle"></i> Voir
                                          </button>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-pencil"></i> Télécharger
                                          </button>
                                          <button type="button" className="btn btn-md prive-btn-primary-transparent">
                                            <i className="mdi mdi-cloud"></i> Upload
                                          </button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>
                              </Col>
                            </Row>
                          </Container>
                        </TabPane>
                        <TabPane tabId={6}>
                          <div>
                            <div className="text-center">
                              <div className="mb-4">
                               
                              </div>
                              <h5>.....</h5>
                              <p className="text-muted">.</p>
                            </div>
                          </div>
                        </TabPane>
                      </TabContent>
                    </Form>
                  </CardBody>
                  <br />
                  <br />
                  <br />
                </Card>
              </Col>
            </Row>
          </div>

        </Container>
      </div>
    </>
  );
};

export default SuiviAssurance;
