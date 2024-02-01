import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import BreadCrumbCustom from "../../../../components/common/BreadCrumbCustom";
import classnames from "classnames";
import "../servicesClient.scss";
import { useNavigate } from "react-router-dom";


const FormulaireCautionBancaire = () => {
  document.title = "Caution bancaire | Bank guarantee"; //for meta title
  const navigate = useNavigate();
  const pages = [
    { title: "Accueil", link: "/dashboard" },
    { title: "Services", link: "/services-clients" },
    { title: "Caution Bancaire", link: "" },
  ];  

  //   const [activeTab, setactiveTab] = useState(1);
  const [activeArrowTab, setactiveArrowTab] = useState(4);
  const [passedarrowSteps, setPassedarrowSteps] = useState([1]);

  function toggleArrowTab(tab) {
    if (activeArrowTab !== tab) {
      var modifiedSteps = [...passedarrowSteps, tab];

      if (tab >= 4 && tab <= 7) {
        setactiveArrowTab(tab);
        setPassedarrowSteps(modifiedSteps);
      }
    }
  }

  return (
    <div className="page-content caution-bancaire">
      <Container fluid={true}>
        <div className="float-left">
          <BreadCrumbCustom pages={pages} />
        </div>

        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <h4 className="card-title mb-0">
                  Formulaire de demande de Caution Bancaire
                </h4>
              </CardHeader>
              <CardBody>
                <Form className="form-steps">
                  <div className="text-center pt-3 pb-4 mb-1">
                    <h4>Informations sur la caution bancaire</h4>
                    {/* <img src={logoDark} alt="" height="17" /> */}
                  </div>
                  <div className="step-arrow-nav mb-4">
                    <Nav
                      className="nav-pills custom-nav nav-justified"
                      role="tablist"
                    >
                      <NavItem>
                        <NavLink
                          href="#"
                          id="steparrow-gen-info-tab"
                          className={classnames({
                            active: activeArrowTab === 4,
                            done: activeArrowTab <= 6 && activeArrowTab > 3,
                          })}
                          onClick={() => {
                            toggleArrowTab(4);
                          }}
                        >
                          Informations personnelles
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="#"
                          id="steparrow-gen-info-tab"
                          className={classnames({
                            active: activeArrowTab === 5,
                            done: activeArrowTab <= 6 && activeArrowTab > 4,
                          })}
                          onClick={() => {
                            toggleArrowTab(5);
                          }}
                        >
                          Informations sur la caution bancaire
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="#"
                          id="steparrow-gen-info-tab"
                          className={classnames({
                            active: activeArrowTab === 6,
                            done: activeArrowTab <= 6 && activeArrowTab > 5,
                          })}
                          onClick={() => {
                            toggleArrowTab(6);
                          }}
                        >
                          Termine
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>

                  <TabContent activeTab={activeArrowTab}>
                    <TabPane id="steparrow-gen-info" tabId={4}>
                      <div>
                        <Row className="row-acomp">
                          <Col lg={4}>
                            <div className="mb-3">
                              <Label
                                className="form-label"
                                htmlFor="steparrow-gen-info-email-input"
                              >
                                Civilité *
                              </Label>
                              <select
                                name="civilite"
                                id="steparrow-gen-info-email-input"
                                className="form-select"
                              >
                                <option value="Monsieur">Monsieur</option>
                                <option value="Madame">Madame</option>
                              </select>
                            </div>
                          </Col>
                          <Col lg={4}>
                            <div className="mb-3">
                              <Label className="form-label" htmlFor="nom">
                                Nom *
                              </Label>
                              <Input
                                name="nom"
                                type="text"
                                className="form-control"
                                id="nom"
                                placeholder="Nom"
                              />
                            </div>
                          </Col>
                          <Col lg={4}>
                            <div className="mb-3">
                              <Label className="form-label" htmlFor="prenom">
                                Prénom
                              </Label>
                              <Input
                                name="prenom"
                                type="text"
                                className="form-control"
                                id="prenom"
                                placeholder="Prénom"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row className="row-acomp">
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label className="form-label" htmlFor="email">
                                Email *
                              </Label>
                              <Input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="E-mail"
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label className="form-label" htmlFor="telephone">
                                Numéro de téléphone *
                              </Label>
                              <Input
                                type="number"
                                className="form-control"
                                id="telephone"
                                placeholder="+237 699 68 77 03"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row className="row-acomp">
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                className="form-label"
                                htmlFor="pays_residence"
                              >
                                Pays de résidence *
                              </Label>
                              <select
                                className="form-select"
                                name="pays_residence"
                                id="pays_residence"
                              >
                                <option value="Choisir le pays">
                                  Choisir le pays
                                </option>
                                <option value="Cameroun">Cameroun</option>
                              </select>
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                className="form-label"
                                htmlFor="ville_residence"
                              >
                                Ville de résidence *
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="ville_residence"
                                placeholder="Ville de résidence"
                              />
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="d-flex align-items-start gap-3 mt-4">
                        <button
                          type="button"
                          className="btn btn-success btn-label right ms-auto nexttab nexttab"
                          onClick={() => {
                            toggleArrowTab(activeArrowTab + 1);
                          }}
                        >
                          <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                          Suivant
                        </button>
                      </div>
                    </TabPane>

                    <TabPane id="steparrow-description-info" tabId={5}>
                      <div>
                      <Row className="row-acomp">
                      <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                className="form-label"
                                htmlFor="pays_residence"
                              >
                                Pays de destinations pour vos études *
                              </Label>
                              <select
                                className="form-select"
                                name="pays_residence"
                                id="pays_residence"                             
                              >
                                <option value="Cameroun">Fance</option>
                                <option value="Cameroun">Belgique</option>
                                <option value="Cameroun">Allemagne</option>
                                <option value="Cameroun">Italie</option>
                              </select>
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label className="form-label" htmlFor="telephone">
                              Avez vous déjà obtenu une admission ? *
                              </Label>
                              <select
                                className="form-select"
                                name="padmission_Y/N"
                                id="admission_Y/N"                          
                              >
                                <option value="Cameroun">No</option>
                                <option value="Cameroun">Yes</option>
                               
                              </select>
                            </div>
                          </Col>
                        </Row>
                        <Row className="row-acomp">
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label className="form-label" htmlFor="email">
                              Qui sera charger de payer votre caution ? *
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="payement_caution"
                                placeholder="payement caution"
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label className="form-label" htmlFor="telephone">
                              Pays de résidence de la personne qui doit payer votre caution   *
                              </Label>
                              <select
                                className="form-select"
                                name="pays_residence"
                                id="pays_residence"                             
                              >
                                <option value="Cameroun">Fance</option>
                                <option value="Cameroun">Belgique</option>
                                <option value="Cameroun">Allemagne</option>
                                <option value="Cameroun">Italie</option>
                              </select>
                            </div>
                          </Col>
                        </Row>
                        <Row className="row-acomp">
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label className="form-label" htmlFor="email">
                              Nom de la formation a laquelle vous voulez postuler  à l’étranger*
                              </Label>
                              <Input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Saisissez le nom de la formation a postuler"
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                          <div className="mb-3">
                          <Label htmlFor="formFile" className="form-label">
                          Choisissez la date probable de votre premier entretien *
                          </Label>
                          <Input
                           type="date"
                           className="form-control"
                           id="date_enterview"
                           
                          />
                        </div>
                          </Col>
                        </Row>
                        <Row className="row-acomp">
                        <Col lg={6}>
                            <div className="mb-3">
                              <Label className="form-label" htmlFor="email">
                              Nom de votre futur école à l’étranger  *
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="Nom_ecole"
                                placeholder="Saisissez le nom de votre futur école"
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                          <div className="mb-3">
                          <Label htmlFor="formFile" className="form-label">
                          Télécharger votre attestation d’inscription ou lettre d’admission*
                          </Label>
                          <Input
                            className="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>
                          </Col>
                        </Row>
                        <Row className="row-acomp">
                          <Col lg={6}>
                          <div className="mb-3">
                          <Label htmlFor="formFile" className="form-label">
                          Télécharger votre passeport *
                          </Label>
                          <Input
                            className="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>
                          </Col>
                          <Col lg={6}>
                          <div className="mb-3">
                          <Label htmlFor="formFile" className="form-label">
                          Télécharger votre plan de localisation *
                          </Label>
                          <Input
                            className="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>
                          </Col>
                        </Row>
                        
                      </div>
                      
                      <div className="d-flex align-items-start gap-3 mt-4">
                        <button
                          type="button"
                          className="btn btn-light btn-label previestab"
                          onClick={() => {
                            toggleArrowTab(activeArrowTab - 1);
                          }}
                        >
                          <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>{" "}
                          Précédent
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-label right ms-auto nexttab nexttab"
                          onClick={() => {
                            toggleArrowTab(activeArrowTab + 1);
                          }}
                        >
                          <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                          Submit
                        </button>
                      </div>
                    </TabPane>

                    <TabPane id="pills-experience" tabId={6}>
                    <Row>
                        <Col lg={6}>
                          <div className="text-center">
                          

                            <h5>Bravo vous avez déjà presque terminé !</h5>
                            <p className="text-muted">
                              Noter ici qu’après la finalisation de votre formulaire d’accompagnement vous pouvez vernir par la suite modifier ces éléments ou soumettre le dossier pour le transmettre
                              aux agents du services d’admissions qui se chargeront de gérer votre dossier d’admission.
                              <br /> Merci .
                            </p>
                          </div>
                          <img src={""} alt="" className="img-logo-admission" />
                        </Col>
                        <Col lg={6}>
                          <div className="alert alert-info info-zone">
                            <div>
                              <h4>
                                <i className="mdi mdi-information"></i>
                                Prochaines étapes
                              </h4>
                              <p className="p-info-zone">
                                Sera la soumission de votre dossier d’accompagnement . Un agent vous recontactera dans l'heure pour analyser vos besoins Pour la soumission de la procédure cliquez sur
                                le bouton <b>Terminer</b>
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <div className="d-flex align-items-start gap-3 mt-4">
                        
                        <button
                          type="button"
                          className="btn btn-success btn-label right ms-auto nexttab nexttab"
                          onClick={()=>navigate("/")}
                        >
                          <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                          Terminer  
                        </button>
                      </div>
                    </TabPane>
                  </TabContent>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormulaireCautionBancaire;
