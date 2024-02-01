import React from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";

const CautionBancaire = () => {
  const navigate = useNavigate();
  return (
    <div className="accompagnement">
      <Card>
        <CardHeader>
          <h4>Bienvenue dans votre service de demande d’accompagnement pour votre caution bancaire (AVI)</h4>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xl={6}>
              <h4>Notre service d'accompagnement procédure :</h4>
              <ul>
                <li>Vous allez remplir les informations relatives à votre caution bancaire </li>
                <li>Vous aurez un accompagnement a chaque étape de votre demande d’AVI à savoir :   </li>
                <ul>
                  <li>Vous aurez un premier entretien au préalable pour mieux vous orienter pour votre dépôt  de caution</li>
                  <li>Préparation de vos documents pour l’ouverture de compte à savoir : </li>
                  * Votre attestation d’inscription ou lettre d’admission<br></br>
                  * Votre passeport<br></br>
                  * Moyen d’identification valide : 2 photos (4X4); Photocopie de la CNI valide<br></br>
                  *Plan de localisation ou facture de services publics (3 mois maximum)<br></br>
                </ul>
                <li>Ce RIB servira de justificatif pour l’ouverture de votre compte bancaire à l’étranger </li>
                <li>La banque va vous remettre le relevé compte et l’attestation de virement irrévocable (AVI)</li>
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
          
          <Row>
            <Col xl={12}>
              <div className="d-flex align-items-start gap-3 mt-4">
            <button
                          type="button"
                          className="btn btn-success btn-label right ms-auto nexttab nexttab"
                          onClick={()=>navigate("/form-caution-bancaire")}
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

export default CautionBancaire;
