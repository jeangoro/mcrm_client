import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

//redux
import { useSelector, useDispatch } from "react-redux";

import withRouter from "../../components/common/withRouter";
import { Button, Card, CardBody, Col, Container, Row, Spinner } from "reactstrap";
import { logout } from "../../store/auth";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";
import cupAnimation from "../../assets/images/json-icon/hzomhqxz.json";
import HeaderFormMcrm from "./HeaderFormMcrm";
import { Player } from "@lottiefiles/react-lottie-player";

const Logout = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { logoutError, logoutLoading, logoutSuccess } = useSelector((state) => state.logout);

  useEffect(() => {
    logout(dispatch);
  }, [dispatch]);

  // useEffect(() => {
  //   if (logoutSuccess && logoutError === null) {
  //     navigate("/login");
  //   }
  // }, [logoutSuccess, logoutError, navigate]);

  return (
    <React.Fragment>
      {/* {logoutLoading && (
        <div className="btn-deconnexion">
          {logoutError && <div className="alert alert-danger"> {logoutError} </div>}
          <Button className="mb-2" color="danger" disabled size="xl" type="button">
            <Spinner size="sm" role="status"></Spinner> Déconnexion...
          </Button>
        </div>
      )} */}
      {/* {logoutSuccess && <Navigate to={"/login"} />} */}
      <div className="auth-page-content">
        <div className="auth-page-wrapper">
          <ParticlesAuth>
            <div className="auth-page-content">
              <Container>
                <HeaderFormMcrm />

                <Row className="justify-content-center">
                  {logoutSuccess && logoutError === null ? (
                    <Col md={8} lg={6} xl={5}>
                      <Card className="mt-4">
                        <CardBody className="p-4 text-center">
                          <div className="mt-4 pt-2">
                            <h5>Vous êtes actuellement déconnecté</h5>
                            <Player autoplay loop src={cupAnimation} style={{ width: "100px", height: "100px" }} />
                            <p className="text-muted">
                              Merci d'avoir utilisé <span className="fw-semibold">Mobility CRM</span>
                            </p>
                            <div className="mt-4">
                              <Link to="/login" className="btn mcrm-btn w-100">
                                Se connecter
                              </Link>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  ) : logoutLoading ? (
                    <Col md={8} lg={6} xl={5}>
                      <div className="btn-deconnexion">
                        <Button className="mb-2" color="danger" disabled size="xl" type="button">
                          <Spinner size="sm" role="status"></Spinner> Déconnexion...
                        </Button>
                      </div>
                    </Col>
                  ) : (
                    <>
                      <Col md={8} lg={6} xl={5}>
                        <Card className="mt-4">
                          <CardBody className="p-4 text-center">
                            <div className="mt-4 pt-2">
                              {logoutSuccess && logoutError && <div className="alert alert-danger"> {logoutError} </div>}
                              <Player autoplay loop src={cupAnimation} style={{ width: "100px", height: "100px" }} />

                              <div className="mt-4">
                                <Link to="/login" className="btn mcrm-btn w-100">
                                  Se connecter
                                </Link>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </>
                  )}
                </Row>
              </Container>
            </div>
          </ParticlesAuth>
        </div>
      </div>
    </React.Fragment>
  );
};

// Logout.propTypes = {
//   history: PropTypes.object,
// };

export default withRouter(Logout);
