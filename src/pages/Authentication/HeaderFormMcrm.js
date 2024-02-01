import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import logoLight from "../../assets/images/mcrm/logomcrm.svg";

const HeaderFormMcrm = () => {
  return (
    <Row>
      <Col lg={12}>
        <div className="text-center mt-sm-5 mb-2 text-white">
          <div>
            <Link to="/" className="d-inline-block auth-logo">
              <img src={logoLight} alt="" height="60" />
            </Link>
          </div>
          <p className="mt-3 fs-15 fw-medium">Plateforme de mobilité vers l'étranger</p>
        </div>
      </Col>
    </Row>
  );
};

export default HeaderFormMcrm;
