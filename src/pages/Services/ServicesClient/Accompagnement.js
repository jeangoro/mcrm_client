import React from "react";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";

import logo_accompagnement from "../../../assets/images/clients/logo_accompagnement.png";
import InfoZone from "./InfoZone";

const Accompagnement = () => {
  return (
    <div className="accompagnement">
      <Card>
        <CardHeader>
          <h4>Bienvenue dans votre service d’accompagnement</h4>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xl={6}>
              <h4>Notre service d'accompagnement personnalisé inclut :</h4>
              <ul>
                <li>
                  Un entretien personnalisé pour évaluer votre éligibilité
                </li>
                <li>
                  Accompagnement a chaque étape de votre demande de visa à
                  savoir :{" "}
                </li>
                <ul>
                  <li>
                    Accompagnement pour vos entretiens Campus France et autres
                  </li>
                  <li>
                    Accompagnement pour la préparation de votre entretien à
                    l’ambassade
                  </li>
                  <li>
                    Accompagnement pour la constitution de votre dossier de
                    demande visa
                  </li>
                </ul>
                <li>
                  Un accompagnement vous sera proposé dès votre arrivé sur le
                  territoire du pays d’accueil
                </li>
                <li>
                  Accès a nos experts, un interlocuteur privilégié qui gèrera
                  votre dossier du début jusqu' à la fin
                </li>
              </ul>
            </Col>
            <Col xl={6}>
              <InfoZone />
            </Col>
          </Row>
          <img
            className="img-logo-accompagnement"
            src={logo_accompagnement}
            alt="Accompagnement"
          />
          <Row>
            <Col xl={12}>
              <Button color="info" className="btn-label right btn-demarrer">
                <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                Démarrer
              </Button>
            </Col>
          </Row>
          <br />
          <br />
          <br />
        </CardBody>
      </Card>
    </div>
  );
};

export default Accompagnement;
