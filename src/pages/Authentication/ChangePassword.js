import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";
import { Button, Col, Container, Input, Row, Spinner } from "reactstrap";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import ValidationCodeInput from "./ValidationCodeInput";
import NumPanel from "./NumPanel";
import CardNoteInfosSecurite from "./CardNoteInfosSecurite";
import Footer from "../../layouts/Footer";
import logoLight from "../../assets/images/logo-light.png";
import login_logo from "../../assets/images/login/logo_long.png";
import { changePwd, forgotPwd } from "../../store/auth";

const ChangePasswordPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, getAccountError, getAccountLoading, getAccountLoaded, rememberMe, rememberLogin, getUserStatusLoading, userStatus, errorMessage } = useSelector(
    (state) => state.authentication
  );

  const { loginError, loginLoading, loginSuccess, logoutError, logoutLoading, logoutSuccess } = useSelector((state) => state.login);
  const { registerLoading, userConfirmed, deliveryMedium, destination, codeSent } = useSelector((state) => state.register);
  const { invalidCode, forgotPwdLoading, forgotPwdSuccess, forgotPwdError, confirmForgotPwdLoading, confirmForgotPwdSuccess, confirmForgotPwdError } = useSelector((state) => state.forgotPwd);
  // const [userLogin, setUserLogin] = useState([]);
  //   const [passwordShow, setPasswordShow] = useState(false);

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [canConfirmPassword, setCanConfirmPassword] = useState(false);

  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);

  const renderError = (message) => <div className="alert alert-danger text-center">{message}</div>;
  const renderInputClassError = () => "prive-input-error";

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashbord");
    }
  }, [isAuthenticated, navigate]);

  const getCode = (code) => setCode(code);

  const goToStep3 = () => {
    setStep1(false);
    setStep2(false);
    setStep3(true);
  };

  useEffect(() => {
    if (forgotPwdSuccess) {
      setStep1(false);
      setStep2(true);
      setStep3(false);
      setCanConfirmPassword(false);
    }
  }, [forgotPwdSuccess]);

  const getEnteredPassword = (password) => {
    setPassword(password);
  };
  const getEnteredConfirmPassword = (password) => {
    setConfirmPassword(password);
  };

  useEffect(() => {
    if (confirmForgotPwdSuccess) {
      setStep1(false);
      setStep2(false);
      setStep3(false);
    }
  }, [confirmForgotPwdSuccess]);

  document.title = "Changement de code personnel | Mobility Expert";
  return (
    <React.Fragment>
      <ParticlesAuth>
        <div className="auth-page-content">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="text-center mt-sm-5 mb-4 text-white-50">
                  <div>
                    <Link to="/" className="d-inline-block auth-logo">
                      <img src={logoLight} alt="" height="20" />
                    </Link>
                  </div>
                  <p className="mt-3 fs-15 fw-medium">Conseil en Mobilité</p>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col md={10} lg={8} xl={7} className="login-form-bg justify-content-center px-4 py-4">
                <h4 className="text-center">Changement du code personnel</h4>
                <img src={login_logo} alt="Logo login" className="mx-auto login-logo" />
                {/* {loginError && loginError ? <span className="text-danger"> {loginError} </span> : null} */}
                {errorMessage && errorMessage ? <span className="text-danger"> {forgotPwdError} </span> : null}
                {userStatus ? (userStatus.userFound ? null : renderError("Utilisateur non trouvé! Veuillez verifier l'orthographe de votre Email ou Téléphone.")) : null}

                <Formik
                  enableReinitialize={true}
                  initialValues={{ email: "" }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string().min(5, "Trop court").required("Veuillez saisir votre Email ou téléphone"),
                  })}
                  onSubmit={(values) => {
                    if (!forgotPwdLoading && !confirmForgotPwdLoading) {
                      if (step1 && !forgotPwdSuccess) {
                        setEmail(values.email);
                        forgotPwd(dispatch, values.email);
                      }
                      if (step3 && forgotPwdSuccess && code.length === 6 && password.length === 6) {
                        changePwd(dispatch, email, code, password);
                      }
                    }
                  }}
                >
                  {(formik) => {
                    const { errors, touched, isValid, dirty, handleChange, values, handleBlur, handleSubmit } = formik;
                    return (
                      <div className="container">
                        <Form
                          onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                            return false;
                          }}
                          className="text-center"
                        >
                          {step1 && (
                            <>
                              <h4 className="text-center mt-4 mb-2">Changer votre code personnel</h4>
                              {step1 && forgotPwdError && <>{renderError(forgotPwdError)}</>}

                              <div className="form-group">
                                <label className="label-login" htmlFor="email">
                                  Saisie le numéro téléphone / l’adresse email
                                </label>
                                <Input
                                  id="email"
                                  name="email"
                                  className={errors.email ? "form-control " + renderInputClassError().toString() : "form-control"}
                                  type="text"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.email}
                                  invalid={touched.email && errors.email ? true : false}
                                />
                                <ErrorMessage name="email" render={renderError} />
                              </div>
                              <Row className="mt-4 mb-4 justify-content-center">
                                <Col sm={6}>
                                  <Button color="secondary" disabled={forgotPwdLoading || errors.email ? true : false} className="btn btn-primary rounded-pill w-sm w-100" type="submit">
                                    {forgotPwdLoading ? (
                                      <Spinner size="sm" className="me-2">
                                        Recherche...
                                      </Spinner>
                                    ) : (
                                      "Recevoir mon code personnel"
                                    )}
                                  </Button>
                                </Col>
                              </Row>
                            </>
                          )}

                          {step2 && forgotPwdSuccess && (
                            <>
                              <ValidationCodeInput getCode={getCode} />
                              <Row className="mt-2 justify-content-center">
                                <Link to={"#"} onClick={() => forgotPwd(dispatch, email || destination)}>
                                  <h4 className="text-center mt-1 mb-1">Recevoir à nouveau le code ?</h4>
                                </Link>
                              </Row>
                              <Row className="mt-2 justify-content-center">
                                <Col xs={10} sm={8}>
                                  <Button
                                    onClick={goToStep3}
                                    color="secondary"
                                    disabled={confirmForgotPwdLoading || !(code.length === 6) ? true : false}
                                    className="btn btn-primary rounded-pill w-sm w-100"
                                    type="button"
                                  >
                                    {confirmForgotPwdLoading ? (
                                      <Spinner size="sm" className="me-2" role="status">
                                        Validation du code...
                                      </Spinner>
                                    ) : (
                                      "Créer le code personnel"
                                    )}
                                  </Button>
                                </Col>
                              </Row>
                            </>
                          )}

                          {step3 && (
                            <>
                              {step3 && confirmForgotPwdError && <>{renderError("Veuillez s’il vous plaît saisir un code à 6 chiffres valide pour créer votre code personnel")}</>}

                              {step3 && !canConfirmPassword && (
                                <div className="create-personnal-code-form">
                                  <h4>Créer un nouveau code personnel</h4>
                                  <Row className="justify-content-center mt-4 mx-2 mb-4">
                                    <NumPanel getEnteredPassword={getEnteredPassword} />
                                    <br /> <br />
                                  </Row>
                                  <Button
                                    color="secondary"
                                    disabled={!(password.length === 6) ? true : false}
                                    className="btn btn-primary rounded-pill w-sm w-100"
                                    type="button"
                                    onClick={() => {
                                      setCanConfirmPassword(true);
                                    }}
                                  >
                                    Confirmer le code personnel
                                  </Button>
                                </div>
                              )}
                              {step3 && canConfirmPassword && (
                                <div className="create-personnal-code-form">
                                  <h4>Entrez à nouveau le code personnel</h4>
                                  {step3 && canConfirmPassword && confirmPassword.length === 6 && !(password === confirmPassword) && <>{renderError("Ce code est different du prémier")}</>}

                                  <Row className="justify-content-center mt-4 mx-2 mb-4">
                                    <NumPanel getEnteredPassword={getEnteredConfirmPassword} />
                                    <br /> <br />
                                  </Row>
                                  <Row className="mt-2 justify-content-center">
                                    <Col xs={10} sm={8}>
                                      <Button
                                        color="secondary"
                                        disabled={confirmForgotPwdLoading || email.length < 5 || !(code.length === 6) || !(password.length === 6) || !(password === confirmPassword) ? true : false}
                                        className="btn btn-primary rounded-pill w-sm w-100"
                                        type="submit"
                                      >
                                        {confirmForgotPwdLoading ? (
                                          <Spinner size="sm" className="me-2" role="status">
                                            Création du code personnel...
                                          </Spinner>
                                        ) : (
                                          "Créer le code personnel"
                                        )}
                                      </Button>
                                    </Col>
                                  </Row>
                                </div>
                              )}
                            </>
                          )}

                          {confirmForgotPwdSuccess && (
                            <>
                              <div className="register-successfull-form">
                                <div className="avatar-md mt-3 mb-3 mx-auto">
                                  <div className="avatar-title bg-light text-success display-4 rounded-circle">
                                    <i className="ri-checkbox-circle-fill"></i>
                                  </div>
                                </div>
                                <h4>Félicitations !</h4>
                                <Row className="justify-content-center mt-4 mx-2 mb-4">
                                  <br /> <br />
                                  <h4>
                                    Mes félicitations votre code personnel a été crée avec succès! <br /> veuillez vous connecter dès à présent sur votre compte
                                  </h4>
                                </Row>

                                <Row className="mt-2 justify-content-center">
                                  <Col xs={10} sm={8}>
                                    <Link to={"/login"} className="btn prive-btn-primary rounded-pill w-sm w-100">
                                      {"Se connecter"}
                                    </Link>
                                  </Col>
                                </Row>
                                {/* <Row className="mt-2 justify-content-center">
                                  <Link to={"/register"}>
                                    <h4 className="text-center mt-1 mb-1">S'inscrire</h4>
                                  </Link>
                                </Row> */}
                              </div>
                            </>
                          )}

                          {!confirmForgotPwdSuccess && (
                            <Row className="mt-2 justify-content-center">
                              <Link to="/login">
                                <h4 className="text-center mt-1 mb-1">Se connecter</h4>
                              </Link>
                            </Row>
                          )}
                          <Row className="mt-2 justify-content-center">
                            <Link to="/register">
                              <h4 className="text-center mt-1 mb-1">S’inscrire</h4>
                            </Link>
                          </Row>
                          {/* <Row className="mt-2 justify-content-center">
                            <select className="form-select form-select-sm form-input" aria-label=".form-select-sm example">
                              <option defaultValue={"Français"}>Français</option>
                              <option value={"Anglais"}>Anglais</option>
                            </select>
                          </Row> */}
                        </Form>
                      </div>
                    );
                  }}
                </Formik>

                <CardNoteInfosSecurite />
              </Col>
            </Row>
            <Footer />
          </Container>
        </div>
      </ParticlesAuth>
    </React.Fragment>
  );
};

export default ChangePasswordPage;
