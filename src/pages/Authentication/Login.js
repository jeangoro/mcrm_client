import React, { useCallback, useEffect, useRef, useState } from "react";
import { Card, CardBody, Col, Container, Input, Label, Row, Button, FormFeedback, Alert, Spinner, UncontrolledTooltip } from "reactstrap";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

// Formik validation
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";

//Social Media Imports
// import { GoogleLogin } from "react-google-login";
// import TwitterLogin from "react-twitter-auth"
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
// actions

// import logoLight from "../../assets/images/logo-light.png";
// import logoLight from "../../assets/images/mcrm/logomcrm.svg";
// import login_img from "../../assets/images/login/login_img.png";
// import login_logo from "../../assets/images/login/logo_long.png";
// import "./login.scss";

//Import config
// import { facebook, google } from "../../config";

import withRouter from "../../components/common/withRouter";
import CardNoteInfosSecurite from "./CardNoteInfosSecurite";
import NumPanel from "./NumPanel";
import { changeAccount, confirmRegister, getUserStatus, login, resendConfirmationCode } from "../../store/auth";
import ValidationCodeInput from "./ValidationCodeInput";
import HeaderFormMcrm from "./HeaderFormMcrm";

import { Player } from "@lottiefiles/react-lottie-player";
import animationDataCheck from "./../../assets/images/json-icon/check-okey-done.json";
import animationDataLogin from "./../../assets/images/json-icon/login.json";
import AuthFooter from "./AuthFooter";

const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, getAccountError, isNetworkError, getUserStatusError, getAccountLoading, getAccountLoaded, rememberMe, rememberLogin, getUserStatusLoading, userStatus, errorMessage } =
    useSelector((state) => state.authentication);

  const { loginError, loginLoading, loginSuccess } = useSelector((state) => state.login);
  // const { logoutError, logoutLoading, logoutSuccess } = useSelector((state) => state.logout);

  const {
    userConfirmed,
    deliveryMedium,
    destination,
    invalidCode,
    codeSent,
    userAlreadyExist,
    registerLoading,
    registerSuccess,
    registerError,
    confirmLoading,
    confirmSuccess,
    confirmError,
    resendConfirmationCodeLoading,
    resendConfirmationCodeSuccess,
    resendConfirmationCodeError,
  } = useSelector((state) => state.register);

  const { forgotPwdEmail } = useSelector((state) => ({
    forgotPwdEmail: state.forgotPwd.email,
  }));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [validationStep, setValidationStep] = useState(false);

  const renderError = (message) => <div className="alert alert-danger text-center">{message}</div>;
  const renderInputClassError = () => "prive-input-error";

  const getEnteredPassword = (password) => {
    setPassword(password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashbord");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (userStatus) {
      if (userStatus.status && userStatus.status === "UNCONFIRMED") {
        if (!userConfirmed) {
          setEmail(userStatus.userName);
          setValidationStep(true);
        }
      }
    }
  }, [userStatus, userConfirmed, navigate]);

  const getCode = (code) => setCode(code);

  document.title = "Connexion | Mobility CRM";
  return (
    <React.Fragment>
      <ParticlesAuth>
        <div className="auth-page-content">
          <Container>
            <HeaderFormMcrm />

            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="mt-2 login-form-bg">
                  <CardBody className="p-2">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Bienvenue !</h5>
                      <p className="text-muted mb-0">Connectez-vous pour continuer sur Mobility CRM.</p>
                    </div>
                    <div className="p-1 mt-1">
                      {/* <img src={login_logo} alt="Logo login" className="mx-auto login-logo" /> */}

                      <Formik
                        enableReinitialize={true}
                        initialValues={
                          rememberMe || forgotPwdEmail
                            ? { email: "", password: "", rememberMe: false }
                            : userStatus
                            ? userStatus.userFound
                              ? { email: "", password: "", rememberMe: false }
                              : { email: "" }
                            : { email: "" }
                        }
                        validationSchema={
                          rememberMe || forgotPwdEmail
                            ? Yup.object().shape({
                                email: Yup.string().notRequired(),
                                password: Yup.string().notRequired(),
                                rememberMe: Yup.string().notRequired(),
                              })
                            : userStatus
                            ? userStatus.userFound
                              ? Yup.object().shape({
                                  email: Yup.string().notRequired(),
                                  password: Yup.string().notRequired(),
                                  rememberMe: Yup.string().notRequired(),
                                })
                              : Yup.object().shape({
                                  email: Yup.string().min(5, "Trop court").required("Veuillez saisir votre Email ou téléphone"),
                                })
                            : Yup.object().shape({
                                email: Yup.string().min(5, "Trop court").required("Veuillez saisir votre Email ou téléphone"),
                              })
                        }
                        onSubmit={(values) => {
                          if (!validationStep) {
                            if (!loginLoading && !getUserStatusLoading) {
                              if (rememberMe || forgotPwdEmail) {
                                values.email = rememberLogin || forgotPwdEmail;
                                values.password = password;
                                login(dispatch, values);
                              } else if (userStatus) {
                                if (userStatus.userFound) {
                                  values.email = userStatus.userName || email;
                                  values.password = password;
                                  login(dispatch, values);
                                } else {
                                  setEmail(values.email);
                                  getUserStatus(dispatch, values.email);
                                }
                              } else {
                                setEmail(values.email);
                                getUserStatus(dispatch, values.email);
                              }
                            } else {
                              setEmail(values.email);
                              getUserStatus(dispatch, values.email);
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
                                  if (!confirmLoading && validationStep) {
                                    confirmRegister(dispatch, userStatus ? (userStatus.userName ? userStatus.userName : email) : null, code);
                                  }
                                  return false;
                                }}
                                className="text-center"
                              >
                                {!validationStep ? (
                                  <>
                                    {rememberMe || forgotPwdEmail ? (
                                      <>
                                        <h4 className="text-center mt-1 mb-1">Entrez votre code personnel</h4>
                                        <div className="form-group">
                                          <i className="ri-account-circle-fill login-user-icon"></i>
                                          <h4>{rememberLogin || forgotPwdEmail}</h4>
                                        </div>

                                        {/*zone de mot de passe*/}
                                        {userStatus ? (
                                          userStatus.status ? (
                                            userStatus.status === "RETRY_AUTHENTICATION" ? (
                                              <>
                                                {renderError("Mot de passe incorrect")}
                                                <div className="text-warning text-center">
                                                  <h6>Il vous reste {userStatus.maxRetryCount - userStatus.retryCount} essai</h6>
                                                  <u>Attention:</u> Composer plusieurs fois un code incorrect entrainera le blocage de votre accès
                                                </div>
                                              </>
                                            ) : userStatus.status === "LOCK_TEMPORARY" ? (
                                              <>
                                                {renderError("Votre compte est bloqué temporairement pour 15 minutes.")}
                                                <div className="text-warning text-center">
                                                  <u>NB:</u> Si le problème persiste, Veuillez contacter le support client
                                                </div>
                                              </>
                                            ) : (
                                              userStatus.errorMessage
                                            )
                                          ) : null
                                        ) : null}

                                        <NumPanel getEnteredPassword={getEnteredPassword} />
                                        <Row className="mt-4 justify-content-center">
                                          <Col md={12}>
                                            <div className="form-check form-switch form-switch-secondary mb-3 form-switch-login text-start">
                                              <Input
                                                className="form-check-input label-login"
                                                type="checkbox"
                                                role="switch"
                                                id="rememberMe"
                                                name="rememberMe"
                                                onChange={handleChange}
                                                defaultChecked={rememberMe}
                                              />
                                              <Label className="form-check-label" for="rememberMe">
                                                Se souvenir de moi
                                              </Label>{" "}
                                            </div>{" "}
                                            <i className="bx bx-info-circle" id="tooltipBottomLogin"></i>
                                            <UncontrolledTooltip placement="bottom" target="tooltipBottomLogin">
                                              {" "}
                                              Voulez-vous qu'on se souvienne de votre identifiant à la prochaine connexion ?{" "}
                                            </UncontrolledTooltip>
                                          </Col>
                                        </Row>
                                        <Row className="mt-0 justify-content-center">
                                          <Col sm={10}>
                                            <Button disabled={loginLoading || password.length < 6 ? true : false} className="btn mcrm-btn w-100" type="submit">
                                              {loginLoading ? (
                                                <Spinner size="sm" className="me-2">
                                                  Connexion...
                                                </Spinner>
                                              ) : (
                                                "Se connecter"
                                              )}
                                            </Button>
                                          </Col>
                                        </Row>
                                        <div className="mt-4 text-justify-content-right">
                                          <p className="mb-0">
                                            <Link to="/forgot-password" className="fw-semibold text-primary text-decoration-underline">
                                              Code personnel oublié ?{" "}
                                            </Link>{" "}
                                          </p>
                                        </div>
                                        <div className="mt-2 text-justify-content-end">
                                          <p className="mb-0">
                                            Voulez-vous changer de compte?{" "}
                                            <Link onClick={() => changeAccount(dispatch)} className="fw-semibold text-primary text-decoration-underline">
                                              Changer
                                            </Link>
                                          </p>
                                        </div>
                                      </>
                                    ) : userStatus ? (
                                      userStatus.userFound ? (
                                        <>
                                          <h4 className="text-center mt-1 mb-1">Entrez votre code personnel</h4>
                                          <div className="form-group">
                                            {/* <h1 className="login-user-icon">
                                              
                                            </h1> */}
                                            <i className="ri-account-circle-fill login-user-icon"></i>
                                            <h4>{userStatus.firstName}</h4>
                                          </div>

                                          {/*zone de mot de passe*/}
                                          {userStatus ? (
                                            userStatus.status ? (
                                              userStatus.status === "RETRY_AUTHENTICATION" ? (
                                                <>
                                                  {renderError("Mot de passe incorrect")}
                                                  <div className="text-warning text-center">
                                                    <h6>Il vous reste {userStatus.maxRetryCount - userStatus.retryCount} essai</h6>
                                                    <u>Attention:</u> Composer plusieurs fois un code incorrect entrainera le blocage de votre accès
                                                  </div>
                                                </>
                                              ) : userStatus.status === "LOCK_TEMPORARY" ? (
                                                <>
                                                  {renderError("Votre compte est bloqué temporairement pour 15 minutes.")}
                                                  <div className="text-warning text-center">
                                                    <u>NB:</u> Si le problème persiste, Veuillez contacter le support client
                                                  </div>
                                                </>
                                              ) : (
                                                userStatus.errorMessage
                                              )
                                            ) : null
                                          ) : null}

                                          <NumPanel getEnteredPassword={getEnteredPassword} />
                                          <Row className="mt-4 justify-content-center">
                                            <Col md={12}>
                                              <div className="form-check form-switch form-switch-secondary mb-3 form-switch-login text-start">
                                                <Input
                                                  className="form-check-input label-login"
                                                  type="checkbox"
                                                  role="switch"
                                                  id="rememberMe"
                                                  name="rememberMe"
                                                  onChange={handleChange}
                                                  defaultChecked={rememberMe}
                                                />
                                                <Label className="form-check-label" for="rememberMe">
                                                  Se souvenir de moi
                                                </Label>{" "}
                                              </div>{" "}
                                              <i className="bx bx-info-circle" id="tooltipBottomLogin"></i>
                                              <UncontrolledTooltip placement="bottom" target="tooltipBottomLogin">
                                                {" "}
                                                Voulez-vous qu'on se souvienne de votre identifiant à la prochaine connexion ?{" "}
                                              </UncontrolledTooltip>
                                            </Col>
                                          </Row>
                                          <Row className="mt-0 justify-content-center">
                                            <Col sm={12}>
                                              <Button disabled={loginLoading || password.length < 6 ? true : false} className="btn mcrm-btn w-100" type="submit">
                                                {loginLoading ? (
                                                  <Spinner size="sm" className="me-2">
                                                    Connexion...
                                                  </Spinner>
                                                ) : (
                                                  "Se connecter"
                                                )}
                                              </Button>
                                            </Col>
                                          </Row>
                                          <div className="mt-4 text-justify-content-center">
                                            <p className="mb-0">
                                              {" "}
                                              <Link to="/forgot-password" className="fw-semibold text-primary text-decoration-underline">
                                                {" "}
                                                Code personnel oublié ?{" "}
                                              </Link>{" "}
                                            </p>
                                          </div>
                                        </>
                                      ) : (
                                        <>
                                          {/* Première étaape de connexion */}

                                          <Player autoplay loop src={animationDataLogin} style={{ width: 100, height: 100 }} />
                                          {/* {getUserStatusError && isNetworkError ? renderError(getUserStatusError) : null} */}
                                          {loginError && loginError ? renderError(loginError) : null}
                                          {errorMessage && errorMessage ? renderError(errorMessage) : null}
                                          {userStatus ? (userStatus.userFound ? null : renderError("Utilisateur non trouvé! Veuillez verifier l'orthographe de votre Email ou Téléphone.")) : null}
                                          {errorMessage && errorMessage ? (
                                            <div className="text-muted py-2">
                                              <u>Attention:</u> Composer plusieurs fois un code incorrect entrainera le blocage de votre accès
                                            </div>
                                          ) : null}
                                          <div className="mb-3">
                                            <Label htmlFor="email" className="form-label">
                                              Saisie le numéro téléphone / l’adresse email
                                            </Label>
                                            <Input
                                              id="email"
                                              name="email"
                                              className={errors.email ? "form-control " + renderInputClassError().toString() : "form-control"}
                                              type="text"
                                              placeholder="votre adresse email"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.email}
                                              invalid={touched.email && errors.email !== undefined ? true : false}
                                            />
                                            <ErrorMessage name="email" render={renderError} />
                                          </div>
                                          <div className="mt-4">
                                            <Button disabled={getUserStatusLoading || errors.email !== undefined ? true : false} color="success" className="btn mcrm-btn w-100" type="submit">
                                              {getUserStatusLoading ? (
                                                <Spinner size="sm" className="me-2">
                                                  Recherche...
                                                </Spinner>
                                              ) : (
                                                "Continuer"
                                              )}
                                            </Button>
                                          </div>
                                        </>
                                      )
                                    ) : (
                                      <>
                                        <Player autoplay loop src={animationDataLogin} style={{ width: 100, height: 100 }} />
                                        {/* {getUserStatusError && isNetworkError ? renderError(getUserStatusError) : null} */}
                                        {loginError && loginError ? renderError(loginError) : null}
                                        {errorMessage && errorMessage ? renderError(errorMessage) : null}
                                        {userStatus ? (userStatus.userFound ? null : renderError("Utilisateur non trouvé! Veuillez verifier l'orthographe de votre Email ou Téléphone.")) : null}
                                        {errorMessage && errorMessage ? (
                                          <div className="text-muted py-2">
                                            <u>Attention:</u> Composer plusieurs fois un code incorrect entrainera le blocage de votre accès
                                          </div>
                                        ) : null}
                                        <div className="mb-0">
                                          <Label htmlFor="email" className="form-label">
                                            Saisie le numéro téléphone / l’adresse email
                                          </Label>
                                          <Input
                                            id="email"
                                            name="email"
                                            className={errors.email ? "form-control " + renderInputClassError().toString() : "form-control"}
                                            type="text"
                                            placeholder="votre adresse email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            invalid={touched.email && errors.email !== undefined ? true : false}
                                          />
                                          <ErrorMessage name="email" render={renderError} />
                                        </div>

                                        <div className="mt-1">
                                          <Button
                                            disabled={(getUserStatusLoading && !isNetworkError) || errors.email !== undefined ? true : false}
                                            color="success"
                                            className="btn mcrm-btn w-100"
                                            type="submit"
                                          >
                                            {getUserStatusLoading && !isNetworkError ? (
                                              <Spinner size="sm" className="me-2">
                                                Recherche...
                                              </Spinner>
                                            ) : (
                                              "Continuer"
                                            )}
                                          </Button>
                                        </div>
                                      </>
                                    )}
                                  </>
                                ) : (
                                  <>
                                    {/* <div className="avatar-md mt-1 mb-1 mx-auto">
                                      <div className="avatar-title bg-light text-success display-4 rounded-circle">
                                        <i className="ri-checkbox-circle-fill"></i>
                                      </div>
                                    </div> */}

                                    {validationStep && !confirmSuccess && (
                                      <div className="validation-code-form">
                                        <Player autoplay loop src={animationDataLogin} style={{ width: 100, height: 100 }} />
                                        <h4 className="text-center mt-4 mb-2">Etape 3/3: Activation du compte</h4>
                                        {resendConfirmationCodeError ? renderError(resendConfirmationCodeError) : null}
                                        {confirmError ? renderError(confirmError) : null}
                                        <p>
                                          Entrez le code à 6 chiffres que nous avons envoyé sur votre email: <b>{destination}</b>
                                        </p>
                                        <ValidationCodeInput getCode={getCode} />
                                        <div className="mt-1 text-center">
                                          <p className="mb-0">
                                            <Link
                                              onClick={() => resendConfirmationCode(dispatch, userStatus ? (userStatus.userName ? userStatus.userName : null) : null)}
                                              className="fw-semibold text-primary text-decoration-underline"
                                            >
                                              Recevoir à nouveau le code ?
                                            </Link>
                                          </p>
                                        </div>

                                        <Row className="mt-2 justify-content-center">
                                          <Col xs={10} sm={10}>
                                            <Button disabled={confirmLoading || !(code.length === 6) ? true : false} className="btn mcrm-btn w-100" type="submit">
                                              {confirmLoading ? (
                                                <Spinner size="sm" className="me-2" role="status">
                                                  Activation...
                                                </Spinner>
                                              ) : (
                                                "Activer mon compte"
                                              )}
                                            </Button>
                                          </Col>
                                        </Row>
                                        {/* <div className="mt-4 text-center">
                                          <p className="mb-0">
                                            <Link to={"/register"} className="fw-semibold text-primary text-decoration-underline">
                                              S'inscrire
                                            </Link>
                                          </p>
                                        </div> */}
                                      </div>
                                    )}

                                    {confirmSuccess && (
                                      <div className="register-successfull-form">
                                        <Player autoplay loop src={animationDataCheck} style={{ width: 100, height: 100 }} />
                                        <h4>Félicitations !</h4>
                                        <Row className="justify-content-center mt-4 mx-2 mb-4">
                                          <br /> <br />
                                          <p>
                                            Mes félicitations votre compte a été activé avec succès! <br /> veuillez vous connecter dès à présent sur votre compte
                                          </p>
                                        </Row>

                                        <Row className="mt-0 justify-content-center">
                                          <Col xs={10}>
                                            <Link to={"/"} className="btn mcrm-btn w-100">
                                              {"Se connecter"}
                                            </Link>
                                          </Col>
                                        </Row>
                                      </div>
                                    )}
                                  </>
                                )}

                                {!rememberMe && !forgotPwdEmail && (
                                  <div className="mt-2 text-center">
                                    <p className="mb-0">
                                      Vous n'avez pas de compte ?{" "}
                                      <Link to="/register" className="fw-semibold text-primary text-decoration-underline">
                                        {" "}
                                        S'inscrire{" "}
                                      </Link>{" "}
                                    </p>
                                  </div>
                                )}
                              </Form>
                            </div>
                          );
                        }}
                      </Formik>
                    </div>
                  </CardBody>
                  <CardNoteInfosSecurite />
                  <br />
                </Card>
              </Col>
            </Row>
            <AuthFooter />
          </Container>
        </div>
      </ParticlesAuth>
    </React.Fragment>
  );
};

export default withRouter(Login);
