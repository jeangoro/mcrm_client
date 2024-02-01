import React from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import logo_assurance from "../../../../assets/images/clients/logo_assurance.png";


const Assurance = () => {
  const navigate = useNavigate();
  return (
    <div className="accompagnement">
      <Card>
        <CardHeader>
          <h4>Bienvenue dans votre service d’assurance</h4>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xl={6}>
              <h4>Notre service d'accompagnement procédure :</h4>
              <ul>
                <li>Un entretien  téléphonique pour mieux comprendre vos besoins </li>
                <li>Accompagnement a chaque étape de votre demande d’assurance à savoir :  </li>
                <ul>
                  - Un formulaire vous sera proposé avec les différents choix pour chaque type d’assurance<br></br>
                  - Paiement de vos frais d’assurance<br></br>
                  - Envoi du justificatif de vos frais d’assurance<br></br>
                  - En Envoi de l’attestation d’assurance  qui peut être (Voyage, Mutuelle, Habitation)<br></br>
                </ul>
                <li>Accès a nos experts, un interlocuteur privilégié qui gèrera votre dossier du début jusqu' à la fin</li>
                
              </ul>
            </Col>
            <Col xl={6}>
              <div className="alert alert-info info-zone">
                <div>
                  <h4>
                    {" "}
                    <i className="mdi mdi-information"></i> Prochaines étapes
                  </h4>
                  <p className="p-info-zone">
                    Effectuez votre demande aujourd'hui et l'un de nos experts vous recontactera dans l'heure pour analyser vos besoins. <br />
                    Démarrez la procédure en cliquant sur le bouton <b>Démarrer</b>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <img className="img-logo-accompagnement" src={logo_assurance} alt="Accompagnement" />
          <Row>
            <Col xl={12}>
              <div className="d-flex align-items-start gap-3 mt-4">
            <button
                          type="button"
                          className="btn btn-success btn-label right ms-auto nexttab nexttab"
                          onClick={()=>navigate("/formassurance")}
                        >
                          <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                          Démarrer
                        </button>
                        </div>
            </Col>
            
          </Row>
        </CardBody>
        <CardFooter>
        
              <div className="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/2RZQN_ko0iU" title="YouTube video" allowfullscreen></iframe>
            </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Assurance;
