import React, { useEffect, useState } from "react";
import { Col, Container, Input, Row, Button, Spinner } from "reactstrap";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

// Formik validation
import * as Yup from "yup";
import { ErrorMessage, Form, Formik } from "formik";

//Social Media Imports
// import { GoogleLogin } from "react-google-login";
// import TwitterLogin from "react-twitter-auth"
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
// actions

import animationDataCheck from "../../assets/images/json-icon/validation-ok.json";

//Import config
// import { facebook, google } from "../../config";

import withRouter from "../../components/common/withRouter";
import NumPanel from "./NumPanel";
import { confirmForgotPwd, forgotPwd, getUserStatus, login } from "../../store/auth";
import ValidationCodeInput from "./ValidationCodeInput";
import HeaderFormMcrm from "./HeaderFormMcrm";
import { Player } from "@lottiefiles/react-lottie-player";
import AuthFooter from "./AuthFooter";

const ForgetPasswordPage = (props) => {
  // console.log(props.match.params.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, isNetworkError, getAccountError, getAccountLoading, getAccountLoaded, rememberMe, rememberLogin, getUserStatusLoading, userStatus, errorMessage } = useSelector(
    (state) => state.authentication
  );

  const { destination, invalidCode, forgotPwdLoading, forgotPwdSuccess, forgotPwdError, confirmForgotPwdLoading, confirmForgotPwdSuccess, confirmForgotPwdError } = useSelector(
    (state) => state.forgotPwd
  );
  const emailUser = useSelector((state) => state.forgotPwd.email);

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
    if (forgotPwdSuccess || confirmForgotPwdError) {
      setStep1(false);
      setStep2(true);
      setStep3(false);
      setCanConfirmPassword(false);
    }
  }, [forgotPwdSuccess, confirmForgotPwdError]);

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

  document.title = "Code personnel oublié | Mobility CRM";
  return (
    <React.Fragment>
      <ParticlesAuth>
        <div className="auth-page-content">
          <Container>
            <HeaderFormMcrm />
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5} className="login-form-bg justify-content-center px-4 py-4">
                {userStatus ? (userStatus.userFound ? null : renderError("Utilisateur non trouvé! Veuillez verifier l'orthographe de votre Email ou Téléphone.")) : null}

                <Formik
                  enableReinitialize={true}
                  initialValues={{ email: "" }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string().min(5, "Trop court").required("Veuillez saisir votre Email ou téléphone"),
                  })}
                  onSubmit={(values) => {
                    if (!confirmForgotPwdLoading) {
                      if (step1 && !forgotPwdSuccess) {
                        forgotPwd(dispatch, values.email);
                      }
                      if (step3 && forgotPwdSuccess && code.length === 6 && password.length === 6) {
                        confirmForgotPwd(dispatch, emailUser, code, password);
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
                            if (emailUser) {
                              values.email = emailUser;
                            }
                            handleSubmit();
                            return false;
                          }}
                          className="text-center"
                        >
                          {step1 && (
                            <>
                              <h4>Code personnel oublié ?</h4>
                              {step1 && forgotPwdError && <>{renderError(forgotPwdError)}</>}
                              <Player autoplay loop src={require("../../assets/images/json-icon/forgot-password.json")} />
                              <div className="form-group">
                                <label className="label-login" htmlFor="email">
                                  Saisie le téléphone / email pour recevoir le code de vérification
                                </label>
                                <Input
                                  id="email"
                                  name="email"
                                  className={errors.email !== undefined ? "form-control " + renderInputClassError().toString() : "form-control"}
                                  type="text"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.email}
                                  invalid={touched.email && errors.email !== undefined ? true : false}
                                />
                                <ErrorMessage name="email" render={renderError} />
                              </div>
                              <Row className="mt-4 mb-4 justify-content-center">
                                <Col sm={12}>
                                  <Button disabled={(forgotPwdLoading && !isNetworkError) || errors.email !== undefined ? true : false} className="btn mcrm-btn w-100" type="submit">
                                    {forgotPwdLoading && !isNetworkError ? (
                                      <Spinner size="sm" className="me-2">
                                        Recherche...
                                      </Spinner>
                                    ) : (
                                      "Recevoir le code de vérification"
                                    )}
                                  </Button>
                                </Col>
                              </Row>
                            </>
                          )}
                          {step2 && forgotPwdSuccess && (
                            <>
                              {step2 && confirmForgotPwdError && <>{renderError(confirmForgotPwdError)}</>}
                              <div className="text-muted text-center mb-4 mx-lg-3">
                                <h4 className="">Vérifiez votre Email</h4>
                                <div className="mb-4">
                                  <div className="avatar-lg mx-auto">
                                    <div className="avatar-title bg-light mcrm-icon-bg display-5 rounded-circle">
                                      <i className="ri-mail-line"></i>
                                    </div>
                                  </div>
                                </div>
                                <p>
                                  S'il vous plait entrez le code à 6 chiffres envoyé à <span className="fw-semibold">{destination}</span>
                                </p>
                              </div>
                              <ValidationCodeInput getCode={getCode} />

                              <div className="mt-4 text-center">
                                <p className="mb-4">
                                  Vous n'avez pas recu le code ?{" "}
                                  <Link onClick={() => forgotPwd(dispatch, emailUser)} className="fw-semibold text-primary text-decoration-underline">
                                    Recevoir à nouveau le code
                                  </Link>{" "}
                                </p>
                              </div>

                              <Row className="mt-2 justify-content-center">
                                <Col xs={10}>
                                  <Button onClick={goToStep3} disabled={confirmForgotPwdLoading || !(code.length === 6) ? true : false} className="btn mcrm-btn w-100" type="button">
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
                              {step3 && confirmForgotPwdError && <>{renderError(confirmForgotPwdError)}</>}
                              {step3 && !canConfirmPassword && (
                                <div className="create-personnal-code-form">
                                  <h4>Créer un nouveau code personnel</h4>
                                  <Row className="justify-content-center mt-4 mx-2 mb-4">
                                    <NumPanel getEnteredPassword={getEnteredPassword} />
                                    <br /> <br />
                                  </Row>
                                  <Button
                                    disabled={!(password.length === 6) ? true : false}
                                    className="btn mcrm-btn w-100"
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
                                  <p>Entrez à nouveau le code personnel</p>
                                  {step3 && canConfirmPassword && confirmPassword.length === 6 && !(password === confirmPassword) && <>{renderError("Ce code est different du prémier")}</>}

                                  <Row className="justify-content-center mt-4 mx-2 mb-4">
                                    <NumPanel getEnteredPassword={getEnteredConfirmPassword} />
                                    <br /> <br />
                                  </Row>
                                  <Row className="mt-2 justify-content-center">
                                    <Col xs={10}>
                                      <Button
                                        disabled={confirmForgotPwdLoading || emailUser.length < 5 || !(code.length === 6) || !(password.length === 6) || !(password === confirmPassword) ? true : false}
                                        className="btn mcrm-btn w-100"
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
                                <h4>Félicitations !</h4>
                                <Player autoplay loop src={animationDataCheck} style={{ width: 100, height: 100 }} />
                                <Row className="justify-content-center mt-1 mx-2 mb-1">
                                  <br />
                                  <p>
                                    Mes félicitations votre code personnel a été crée avec succès! <br /> veuillez vous connecter dès à présent sur votre compte
                                  </p>
                                </Row>

                                <Row className="mt-2 justify-content-center">
                                  <Col xs={10} sm={10}>
                                    <Link to={"/login"} className="btn text-white mcrm-btn w-100">
                                      {"Se connecter"}
                                    </Link>
                                  </Col>
                                </Row>
                              </div>
                            </>
                          )}
                          {!confirmForgotPwdSuccess && (
                            <div className="mt-4 text-center">
                              <p className="mb-0">
                                Je me suis rappeler de mon code personnel{" "}
                                <Link to="/login" className="fw-semibold text-primary text-decoration-underline">
                                  Me connecter
                                </Link>{" "}
                              </p>
                            </div>
                          )}
                        </Form>
                      </div>
                    );
                  }}
                </Formik>
              </Col>
            </Row>
            <AuthFooter />
          </Container>
        </div>
      </ParticlesAuth>
    </React.Fragment>
  );
};

export default withRouter(ForgetPasswordPage);
