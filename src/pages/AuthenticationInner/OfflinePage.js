import React from "react";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";

// Import Images
import offlineImg from "../../assets/images/auth-offline.gif";
// import offlineImgJson from "../../assets/images/json-icon/locked-screen.json";

const OfflinePage = () => {
  document.title = "Offline Page | Mobility CRM";
  return (
    <React.Fragment>
      <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div className="bg-overlay"></div>
        <div className="auth-page-content overflow-hidden pt-lg-5">
          <Container>
            <Row className="justify-content-center">
              <Col xl={5}>
                <Card className="overflow-hidden">
                  <CardBody className="p-4">
                    <div className="text-center">
                      <img src={offlineImg} alt="" height="210" />
                      <h3 className="mt-4 fw-semibold">Vous êtes actuellement hors connexion</h3>
                      <p className="text-muted mb-4 fs-14">
                        Nous ne pouvons pas vous affichez cette page car vous n'êtes pas connecté à internet. Vérifiez votre connexion internet et cliquez sur le bouton "Actualiser" ci-dessous
                      </p>
                      <Button className="btn-border mcrm-btn" onClick={() => window.location.reload(window.location.href)}>
                        <i className="ri-refresh-line align-bottom"></i> Actualiser
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OfflinePage;
