import React from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import logo_assurance from "../../../../assets/images/clients/logo_logement.png";


const Logement = () => {
  const navigate = useNavigate();
  return (
    <div className="accompagnement">
      <Card>
        <CardHeader>
          <h4>Bienvenue dans votre service de logement</h4>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xl={6}>
              <h4>Notre service d'accompagnement procédure :</h4>
              <ul>
                <li>Un entretien  téléphonique pour mieux comprendre vos besoins </li>
                <li>Accompagnement a chaque étape de votre demande de logement:  </li>
                <ul>
                  - Un formulaire vous sera proposé pour les récolter vos différents besoins <br></br>
                  - Par la suite votre dossier sera transmis aux agents de recherche logement<br></br>
                  - Paiement des frais de recherche vous seront demandé<br></br>
                  - Lorsque le logement sera trouvé, payé l'avance sur redevance pour réserver le bien <br></br>
                  - Après paiement loyer une attestation d’hébergement ou contrat de bail ou de réservation  vous sera envoyé<br></br>
                </ul>
                <li>Nos agents seront à votre disposition pour vous accompagner </li>
                
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
                          onClick={()=>navigate("/formlogement")}
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

export default Logement;
