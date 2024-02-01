import React, { useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import "../servicesClient.scss";
import BreadCrumbCustom from "../../../../components/common/BreadCrumbCustom";
import imgAsuurance from "../../../../assets/images/clients/logo_logement.png";
import { useNavigate } from "react-router-dom";

const FormLogement = () => {
  document.title = "Demande d'accompagnement"; //for meta title
  const navigate = useNavigate();
  const pages = [
    { title: "Accueil", link: "/dashboard" },
    { title: "Services", link: "/services-clients" },
    { title: "Logement", link: "/logement" },
  ];

  function multiSelectSize(id) {
    // console.log(id);
    // console.log(document.getElementById(id));
    // return document.getElementById(id).length + 1;
    return 6;
  }

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
                <h4 className="card-title mb-0">Formulaire de demande  de logement</h4>
              </CardHeader>
              <CardBody>
                <Form className="form-steps">
                  <div className="text-center pt-3 pb-4 mb-1">
                    <h4>Formulaire de demande  de logement</h4>
                  </div>
                  <div className="step-arrow-nav mb-4">
                    <Nav className="nav-pills custom-nav nav-justified" role="tablist" >
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
                          Informations sur logement
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
                          Terminé
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
                              <Label className="form-label" htmlFor="steparrow-gen-info-email-input">
                                Civilité *
                              </Label>
                              <select name="civilite" id="steparrow-gen-info-email-input" className="form-select">
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
                              <Input name="nom" type="text" className="form-control" id="nom" placeholder="Nom" />
                            </div>
                          </Col>
                          <Col lg={4}>
                            <div className="mb-3">
                              <Label className="form-label" htmlFor="prenom">
                                Prénom
                              </Label>
                              <Input name="prenom" type="text" className="form-control" id="prenom" placeholder="Prénom" />
                            </div>
                          </Col>
                        </Row>
                        <Row className="row-acomp">
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label className="form-label" htmlFor="email">
                                Email *
                              </Label>
                              <Input type="email" className="form-control" id="email" placeholder="E-mail" />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label className="form-label" htmlFor="telephone">
                                Numéro de téléphone *
                              </Label>
                              <Input type="number" className="form-control" id="telephone" placeholder="+237 699 68 77 03" />
                            </div>
                          </Col>
                        </Row>
                        <Row className="row-acomp">
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label className="form-label" htmlFor="pays_residence">
                                Pays de résidence *
                              </Label>
                              <select className="form-select" name="pays_residence" id="pays_residence">
                                <option value="Choisir le pays">Choisir le pays</option>
                                <option value="Cameroun">Cameroun</option>
                              </select>
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label className="form-label" htmlFor="ville_residence">
                                Ville de résidence *
                              </Label>
                              <Input type="text" className="form-control" id="ville_residence" placeholder="Ville de résidence" />
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="d-flex align-items-start gap-3 mt-4">
                        <button

                          
                          type="button"
                          className="btn btn-success btn-label right ms-auto nexttab"
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
                          <Col xl={6}>
                            <div className="mb-3">
                              <Label htmlFor="pays_destination" className="form-label">
                                Pays de destinations pour vos études *
                              </Label>
                              <select className="form-select" name="pays_destination" id="pays_destination">
                                <option value="Cameroun">Cameroun</option>
                              </select>
                            </div>
                          </Col>
                          <Col xl={6}>
                            <div className="mb-3">
                              <Label htmlFor="niveau_etude" className="form-label">
                              Quel est la durée de votre séjour  à l’étranger ? *
                              </Label>
                              <select className="form-select" name="niveau_etude" id="niveau_etude">
                                <option value="BAC">6</option>
                                <option value="BAC+2">12</option>
                                <option value="BAC+3">24</option>
                              </select>
                            </div>
                          </Col>
                        </Row>
                        <Row className="row-acomp">
                          <Col xl={6}>
                            <div className="mb-3">
                              <Label htmlFor="niveau_formation" className="form-label">
                              Avez-vous un garant à l’étranger pour votre logement  *?
                              </Label>
                              <select className="form-select" name="niveau_formation" id="niveau_formation">
                                <option value="">Oui</option>
                                <option value="">Non</option>
                                
                              </select>
                            </div>
                          </Col>
                          <Col xl={6}>
                          <div className="mb-3">
                              <Label htmlFor="niveau_formation" className="form-label">
                              Avez-vous obtenu votre admission * ?
                              </Label>
                              <select className="form-select" name="niveau_formation" id="niveau_formation">
                                <option value="">Oui</option>
                                <option value="">Non</option>
                                
                              </select>
                            </div>
                          </Col>
                        </Row>
                        <Row className="row-acomp">
                          <Col xl={6} >
                        <Label>Quels types de logements étudiants souhaités vous  *?</Label>
                          
                            <div className="mb-3">
                              <input type="checkbox" name="question_admis_ecole" id="Col" />
                              <Label htmlFor="Col" className="form-label">
                              Colocation 
                              </Label>
                              <input type="checkbox" name="question_admis_ecole" id="Cha" />
                              <Label htmlFor="Cha" className="form-label">
                              Chambre
                              </Label>
                              <input type="checkbox" name="question_admis_ecole" id="Stu" />
                              <Label htmlFor="Stu" className="form-label">
                              Studio  
                              </Label>
                            </div>
                            <div>
                            <Label>Date probable de votre futur rentrée</Label>
                            </div>
                            <div>
                            <input type="checkbox" name="question_admis_ecole" id="Sep" />
                              <Label htmlFor="Sep" className="form-label">
                              Septembre  
                              </Label>
                              <input type="checkbox" name="question_admis_ecole" id="Fév" />
                              <Label htmlFor="Fév" className="form-label">
                              Février  
                              </Label>
                            </div>
                            </Col>
                            <Col xl={6} >
                        <Label>Quel budget pour votre futur logement (Prix) * ?</Label>
                          
                            <div className="mb-3">
                              <input type="checkbox" name="question_admis_ecole" id="Col" />
                              <Label htmlFor="Col" className="form-label">
                              &lt; 500€ 
                              </Label>
                              <input type="checkbox" name="question_admis_ecole" id="Cha" />
                              <Label htmlFor="Cha" className="form-label" >
                              &lt;800€
                              </Label>
                              <input type="checkbox" name="question_admis_ecole" id="Stu" />
                              <Label htmlFor="Stu" className="form-label" title="">
                              &gt; 1000 € 
                              </Label>
                            </div>
                          
                            </Col>
                        </Row>
                        <hr />
                        <Row className="row-acomp">
                          <Col xl={6}>
                            <div className="mb-3">
                            <Label className="form-label" htmlFor="email">
                            Quel est le nom de la ville  ou vous avez postuler  *?
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="Nom_ecole"
                                placeholder=" nom de la ville  ou vous avez postuler"
                              />
                            </div>
                          </Col>
                          <Col xl={6}>
                            <div className="mb-3">
                              <Label htmlFor="date_entretien" className="form-label">
                              Choisissez la date de votre entretien pour votre logement
                              </Label>
                              <input type="date" name="date_entretien" id="date_entretien" className="form-control" />
                            </div>
                          </Col>
                        </Row>
                        <Row className="row-acomp">
                          <Col xl={6}>
                            <div className="mb-3">
                            <Label className="form-label" htmlFor="email">
                            Numéro de votre passeport *
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="Nom_ecole"
                                placeholder=" nom de la ville  ou vous avez postuler"
                              />
                            </div>
                          </Col>
                          <Col xl={6}>
                            <div className="mb-3">
                              <Label htmlFor="date_entretien" className="form-label">
                              Date d’expiration*
                              </Label>
                              <input type="date" name="date_entretien" id="date_entretien" className="form-control" />
                            </div>
                          </Col>
                        </Row>
                        <Row className="row-acomp">
                        <Col lg={6}>
                          <div className="mb-3">
                          <Label htmlFor="formFile" className="form-label">
                          Joindre votre passeport *
                          </Label>
                          <Input
                            className="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>
                          </Col>
                          <Col xl={6}>
                          <div className="mb-3">
                          <Label htmlFor="formFile" className="form-label">
                          Joindre votre attestation d’inscription  *
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
                          <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i> Précedent
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-label right ms-auto nexttab nexttab"
                          onClick={() => {
                            toggleArrowTab(activeArrowTab + 1);
                          }}
                        >
                          <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                          Envoyer
                        </button>
                      </div>
                    </TabPane>

                    <TabPane id="pills-experience" tabId={6}>
                      <Row>
                        <Col lg={6}>
                          <div className="text-center">
                          

                            <h5>Bravo vous avez déjà presque terminé !</h5>
                            <p className="text-muted">
                            Noter ici qu’après la finalisation de votre formulaire d’accompagnement vous pouvez vernir par la suite modifier ces éléments ou soumettre le dossier pour le transmettre aux agents du services d’accompagnement qui se chargeront de gérer votre dossier d’assurance
                              <br /> Merci .
                            </p>
                          </div>
                          <img src={imgAsuurance} alt="" className="img-logo-admission" />
                        </Col>
                        <Col lg={6}>
                          <div className="alert alert-info info-zone">
                            <div>
                              <h4>
                                <i className="mdi mdi-information"></i>
                                Prochaines étapes
                              </h4>
                              <p className="p-info-zone">
                                Sera la soumission de votre dossier de logement . Un agent vous recontactera dans l'heure pour analyser vos besoins Pour la soumission de la procédure cliquez sur
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

export default FormLogement;
