import React from "react";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
// Import Images
import offlineImg from "../../assets/images/auth-offline.gif";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const LockScreenUi = (setLock) => {
  return (
    <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100 react-lock-screen__ui">
      {/* <div className="react-lock-screen__ui">
           <img width="32" src={require("../../assets/images/auth-offline.gif")} alt="lock" />
           <p>Just to be safe, we locked the screen</p>
           <button onClick={() => setLock(false)}>unlock</button>
        </div> */}
      <div className="bg-overlay"></div>
      <div className="auth-page-content overflow-hidden pt-lg-5">
        <Container>
          <Row className="justify-content-center">
            <Col xs={11} sm={11} md={6} lg={6}>
              <Card className="overflow-hidden">
                <CardBody className="p-4">
                  <div className="text-center">
                    <Player autoplay loop src={require("../../assets/images/json-icon/locked-screen.json")} style={{ width: "100px", height: "100px" }} />
                    <h3 className="mt-4 fw-semibold">Vérouillage automatique !</h3>
                    <p className="text-muted mb-4 fs-14">Juste pour des besoins sécuritaires, nous avons déconnecté votre compte.</p>
                    <Button
                      className="btn-border mcrm-btn"
                      onClick={() => {
                        setLock(false);
                      }}
                    >
                      <i className="ri-refresh-line align-bottom"></i> Se reconnecter
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LockScreenUi;
