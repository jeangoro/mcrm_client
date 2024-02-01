import React, {useState} from 'react';
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
    Progress,
  } from "reactstrap";
import BreadCrumb from "../../components/common/BreadCrumb";
import withAuthProtected from "../../routes/withAuthProtected";
import {ROLE_FINANCE} from "../../routes/roles";
import classnames from "classnames";
import Select from "react-select";
import logoDark from "../../assets/images/logo-dark.png";
import ImgAcomp from "../../assets/images/image-2.png";
import { useNavigate } from "react-router-dom";
// import { loadAnimation } from "lottie-web";
// import { defineLordIconElement } from "lord-icon-element";
//Import Breadcrumb
    const SingleOptions = [
  { value: 'Choices 1', label: "Procédure d'accompagnement  demande visa" },
  { value: 'Choices 2', label: "Procédure d'accompagnement  refus de visa"},
  { value: 'Choices 3', label: "Procédure d'accompagnement   Post Visa (pays d’accueil)" },

  ]; 

    const SingleOptions2 = [
    { value: 'Choices 1', label: "Admission" },
    { value: 'Choices 2', label: "Assurance "},
    { value: 'Choices 3', label: "Caution bancaire (AVI)" },
    { value: 'Choices 4', label: "Achat de billet d’avion" },
    { value: 'Choices 5', label: "Obtention d’une carte bancaire (MasterCard & Visa)"},
    { value: 'Choices 6', label: "Logement" },
  
    ]; 

    const Finances = () => {
        document.title = "Finances | Mes Finances ";   //for meta title
        const navigate = useNavigate();

        const [activeTab, setactiveTab] = useState(1);
        const [activeArrowTab, setactiveArrowTab] = useState(4);
        const [activeVerticalTab, setactiveVerticalTab] = useState(7);
        const [progressbarvalue, setprogressbarvalue] = useState(0);
        const [passedSteps, setPassedSteps] = useState([1]);
        const [passedarrowSteps, setPassedarrowSteps] = useState([1]);
        const [passedverticalSteps, setPassedverticalSteps] = useState([1]);
        const [selectedMulti, setselectedMulti] = useState(null);


        function handleMulti(selectedMulti) {
          setselectedMulti(selectedMulti);
      }
      
        function toggleTab(tab, value) {
          if (activeTab !== tab) {
            var modifiedSteps = [...passedSteps, tab];
      
            if (tab >= 1 && tab <= 4) {
              setactiveTab(tab);
              setPassedSteps(modifiedSteps);
            }
          }
          setprogressbarvalue(value);
        }
      
        function toggleArrowTab(tab) {
          if (activeArrowTab !== tab) {
            var modifiedSteps = [...passedarrowSteps, tab];
      
            if (tab >= 4 && tab <= 7) {
              setactiveArrowTab(tab);
              setPassedarrowSteps(modifiedSteps);
            }
          }
        }
      
        function toggleVerticalTab(tab) {
          if (activeVerticalTab !== tab) {
            var modifiedSteps = [...passedverticalSteps, tab];
      
            if (tab >= 7 && tab <= 11) {
              setactiveVerticalTab(tab);
              setPassedverticalSteps(modifiedSteps);
            }
          }
        }


        return (
            <>
                <div className="page-content">
                    <Container fluid={true}>
                        <div className="float-left">
                            <BreadCrumb title="ACCOMPAGNEMENT" pageTitle="Services"/>
                        </div>
                        <div>
                            <Row>
                              <Col md={12}>
                                <Card>
                                  <CardHeader>
                                    <h4 className="card-title mb-0">Formulaire de demande  d’accompagnement</h4>
                                  </CardHeader>
                                  <CardBody>
                                    <Form className="form-steps"> 
                                      <div className="text-center pt-3 pb-4 mb-1">
                                        <h4>Veillez remplir les informations relatives à votre accompagnement</h4>
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
                                              Informations sur l’accompagnement
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

                                      <TabContent activeTab={activeArrowTab} >
                                        <TabPane id="steparrow-gen-info" tabId={4} >
                                          <div >
                                            <Row className="row-acomp">
                                              <Col lg={4}>
                                                <div className="mb-3">
                                                  <Label
                                                    className="form-label"
                                                    htmlFor="steparrow-gen-info-email-input"
                                                  >
                                                    Civilité *
                                                  </Label>
                                                  <select className="form-select" id="expiry-month-input">
                                                                  
                                                                  <option value="01">Monsieur</option>
                                                                  <option value="02">Madame</option>
                                                                  <option value="03">Mlle</option>
                                                                  
                                                  </select>
                                                </div>
                                              </Col>
                                              <Col lg={4}>
                                                <div className="mb-3">
                                                  <Label
                                                    className="form-label"
                                                    htmlFor="steparrow-gen-info-username-input"
                                                  >
                                                    Nom*
                                                  </Label>
                                                  <Input
                                                    type="text"
                                                    className="form-control"
                                                    id="steparrow-gen-info-username-input"
                                                    placeholder="Nom"
                                                  />
                                                </div>
                                              </Col>
                                              <Col lg={4}>
                                                <div className="mb-3">
                                                  <Label
                                                    className="form-label"
                                                    htmlFor="steparrow-gen-info-username-input"
                                                  >
                                                    Prénom
                                                  </Label>
                                                  <Input
                                                    type="text"
                                                    className="form-control"
                                                    id="steparrow-gen-info-username-input"
                                                    placeholder="Prénom"
                                                  />
                                                </div>
                                              </Col>
                                            </Row>
                                            <div className="mb-3">
                                            <Row className="row-acomp">
                                              <Col lg={6}>
                                                <div className="mb-3">
                                                  <Label
                                                    className="form-label"
                                                    htmlFor="steparrow-gen-info-email-input"
                                                  >
                                                    Email*
                                                  </Label>
                                                  <Input
                                                    type="text"
                                                    className="form-control"
                                                    id="steparrow-gen-info-email-input"
                                                    placeholder="E-mail"
                                                  />
                                                </div>
                                              </Col>
                                              <Col lg={6}>
                                                <div className="mb-3">
                                                  <Label
                                                    className="form-label"
                                                    htmlFor="steparrow-gen-info-username-input"
                                                  >
                                                    Numéro de téléphone*
                                                  </Label>
                                                  <Input
                                                    type="text"
                                                    className="form-control"
                                                    id="steparrow-gen-info-username-input"
                                                    placeholder="(+237) 6 99 68 77 03"
                                                  />
                                                </div>
                                              </Col>
                                              
                                            </Row>
                                            </div>
                                            <div>
                                              <Row className="row-acomp">
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                  <Label
                                                    className="form-label"
                                                    htmlFor="steparrow-gen-info-email-input"
                                                  >
                                                    Pays de résidence*
                                                  </Label>
                                                  <select className="form-select" id="expiry-month-input">
                                                                  
                                                                  <option value="01">Afghanistan</option>
                                                                  <option value="02">Afrique du Sud</option>
                                                                  <option value="03">Albanie</option>
                                                                  <option value="03">Algérie</option>
                                                                  <option value="03">Allemagne</option>
                                                                  <option value="03">Andorre</option>
                                                                  <option value="03">Antigua-et-Barbuda</option>
                                                                  <option value="03">Arabie saoudite</option>
                                                                  <option value="03">Australie</option>
                                                                  <option value="03">Autriche</option>
                                                                  <option value="03">Azerbaïdjan</option>
                                                                  
                                                                  
                                                  </select>
                                                </div>
                                              </Col>
                                              <Col lg={6}>
                                                <div className="mb-3">
                                                  <Label
                                                    className="form-label"
                                                    htmlFor="steparrow-gen-info-username-input"
                                                  >
                                                    Ville de résidence*
                                                  </Label>
                                                  <Input
                                                    type="text"
                                                    className="form-control"
                                                    id="steparrow-gen-info-username-input"
                                                    placeholder="Ville de résidence"
                                                  />
                                                </div>
                                              </Col>
                                              
                                            </Row>
                                              </div>
                                          </div>
                                          <div className="d-flex align-items-start gap-3 mt-4">
                                            <button
                                              type="button"
                                              className="btn btn-primary btn-label right ms-auto nexttab nexttab"
                                              onClick={() => {
                                                toggleArrowTab(activeArrowTab + 1);
                                              }}
                                            >
                                              <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                                              Suivant
                                            </button>
                                          </div>
                                        </TabPane>

                                        <TabPane id="steparrow-description-info" tabId={5}  >
                                          <div>
                                          <div className="mb-3">
                                                <Row className="row-acomp">
                                                  
                                                  <Col lg={6} >
                                                  <Label
                                                    className="form-label"
                                                    htmlFor="steparrow-gen-info-email-input"
                                                  >
                                                    Pays de destinations pour vos études*
                                                  </Label>
                                                  <select className="form-select mb-3" id="expiry-month-input">
                                                                  
                                                                  <option value="01">Afghanistan</option>
                                                                  <option value="02">Afrique du Sud</option>
                                                                  <option value="03">Albanie</option>
                                                                  <option value="03">Algérie</option>
                                                                  <option value="03">Allemagne</option>
                                                                  <option value="03">Andorre</option>
                                                                  <option value="03">Antigua-et-Barbuda</option>
                                                                  <option value="03">Arabie saoudite</option>
                                                                  <option value="03">Australie</option>
                                                                  <option value="03">Autriche</option>
                                                                  <option value="03">Azerbaïdjan</option>
                                                                  
                                                                  
                                                  </select>
                                                  </Col>
                                                  
                                                  <Col lg={6} >
                                                                      <div>
                                                                          <Label htmlFor="choices-multiple-default" className="form-label">
                                                                            Quel(s) type(s) d’accompagnement souhaitez vous ? *
                                                                          </Label>                                                        
                                                                          <Select
                                                                              value={selectedMulti}
                                                                              isMulti={true}                                                            
                                                                              onChange={() => {
                                                                                  handleMulti();
                                                                              }}
                                                                              options={SingleOptions}
                                                                          />
                                                                      </div>
                                                                      <div className="mb-3">
                                                <Row className="row-acomp">
                                                  <Col className="ms-auto"> 
                                                        <h8 >Vous pouvez choisir plusieurs types d’accompagnement</h8>
                                                    </Col>                        
                                                  </Row>
                                            </div>
                                                                  </Col>
                                                  
                                                  </Row>
                                            </div>
                                            
                                            <div className="form-check mb-3 row-acomp me-0">
                                          
                                          <Label className="form-label ">Avez vous déjà obtenu une admission dans une école ? *</Label><br></br>
                                          <Input type="radio" className="form-check-input" id="validationFormCheck3" name="radio-stacked" required />
                                          <label>Oui</label><br></br>
                                          <Input type="radio" className="form-check-input" id="validationFormCheck3" name="radio-stacked" required />
                                          <label>Non</label>
                                          
                                        </div>
                                            <div>
                                            <Row className="row-acomp">
                                                  
                                              <Col lg={6} >
                                                                      <div >
                                                                          <Label htmlFor="choices-multiple-default" className="form-label">
                                                                            Quel(s) service(s) souhaitez vous ? *
                                                                          </Label>                                                        
                                                                          <Select
                                                                              value={selectedMulti}
                                                                              isMulti={true}                                                            
                                                                              onChange={() => {
                                                                                  handleMulti();
                                                                              }}
                                                                              options={SingleOptions2}
                                                                          />
                                                                      </div>
                                            <div className="mb-3">
                                                <Row className="row-acomp">
                                                  <Col> 
                                                        <h8 >Vous pouvez choisir plusieurs types de services</h8>
                                                  </Col>                        
                                                  </Row>
                                            </div>
                                            </Col>
                                                  
                                                  <Col lg={4} >
                                                  <Label
                                                    className="form-label"
                                                    htmlFor="steparrow-gen-info-email-input"
                                                  >
                                                    Choisissez la date probable de votre premier entretien *
                                                  </Label>
                                                  <Input type="date" className="form-control" id="exampleInputdate" />
                                                  </Col>
                                                  
                                                  
                                                  
                                                  </Row>
                                            </div>
                                            
                                          
                                          
                                            
                                            
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
                                              className="btn btn-primary btn-label right ms-auto nexttab nexttab"
                                              onClick={() => {
                                                toggleArrowTab(activeArrowTab + 1);
                                              }}
                                            >
                                              <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                                              Suivant
                                            </button>
                                          
                                          </div>
                                        </TabPane>

                                        <TabPane id="steparrow-description-info" tabId={6}>
                                          <div>
                                            <Row>
                                              <Col>
                                              <div className="fs-16">
                                              <i className="ri-information-fill fs-20" ></i>
                                              <Label className="card-title fs-20">Bravo vous avez déjà presque terminé !</Label>
                                              
                                              </div>
                                              </Col>
                                            </Row>
                                          </div>
                                          <div className="mb-3">
                                                <Row >
                                                  
                                                  <Col lg={6} >
                                                  <Label className="text-muted fs-16 mb-3">
                                                  Noter ici qu’après la finalisation de votre formulaire d’accompagnement vous pouvez vernir par la suite modifier ces éléments ou soumettre le dossier pour le transmettre aux agents du services d’accompagnement qui se chargeront de gérer votre dossier d’accompagnement merci . 

                                                  </Label>
                                                  
                                                  </Col>
                                                  
                                                  
                                                  <Col  md={6}>
                                      <Card className="card-height-100 bg-cardacc">
                                          <CardBody>
                                              <Row>
                                                <Col>
                                              
                                                  <div>
                                                      
                                                          <i className="ri-information-fill fs-20" ></i>
                                                          <Label className="card-title fs-16">Prochaine étape</Label>
                                                          
                                                    
                                                  </div>                                                  
                                                  </Col>
                                                  </Row>
                                                  
                                             
                                              <div className="flex-grow-1 ps-3">
                                                      
                                                     <Row>
                                                      <h5 className="card-title fs-16 mb-0">Sera la soumission de votre dossier d’accompagnement .
                                                      Un agent vous recontactera dans l'heure pour analyser vos besoins.
                                                      Pour la soumission de la procédure cliquez sur le bouton <Label className="card-title fs-19  mb-0">Terminer</Label>
                                                      </h5>
                                                    </Row> 
                                                      
                                                    
                                                      
                                              </div>
                                            
                                          </CardBody>
                                      </Card>
                                      <div>
                                        
                                      </div>
                                  </Col>
                                            
                                                                  
                                                  
                                                  </Row>
                                            </div>
                                            <div>
                                              <Row>
                                                <Col >
                                              <img src={ImgAcomp} alt="" height="100" width="400"></img>
                                              </Col>
                                              
                                              </Row>
                                            </div>
                                          <div className="d-flex align-items-start gap-3 mt-4">
                                          
                                            
                                            <button
                                              type="button"
                                              className="btn btn-primary btn-label right ms-auto nexttab nexttab"
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
                        </div>
                    </Container>
                </div> 
            </>
        );
    }

export default withAuthProtected(Finances, [ROLE_FINANCE]);


