import React from "react";
import { Card, CardBody } from "reactstrap";

const CardNoteInfosSecurite = () => {
  return (
    <Card className="card-note mt-1 mx-4">
      <CardBody className="pt-1">
        <h4 className="text-center mt-1 mb-1">
          <i className="bx bx-info-circle"></i> Information sur la sécurité
        </h4>
        <p className="mt-1 mb-0 login-note">
          Nous n'entrerons jamais en contact avec vous (que ce soit par mail, par SMS ou par téléphone) pour vous demander de communiquer de quelque manière que ce soit vos mots de passe, codes
          confidentiels ou codes à usage unique reçus par SMS.
        </p>
      </CardBody>
    </Card>
  );
};

export default CardNoteInfosSecurite;
