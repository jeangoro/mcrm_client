import React, { useEffect, useState } from "react";
import { Row, Col, Container, Input, Form, Button, Spinner } from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { ErrorMessage, Formik } from "formik";

import "react-toastify/dist/ReactToastify.css";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import fr from "react-phone-number-input/locale/fr";

import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";
import { countriesFR } from "../../common/data/countries";

import { Player } from "@lottiefiles/react-lottie-player";
import animationDataCheck from "./../../assets/images/json-icon/check-okey-done.json";
import animationDataLogin from "./../../assets/images/json-icon/login.json";
import animationDataSignup from "./../../assets/images/json-icon/animation_ljy4dgj6_register.json";

import NumPanel from "./NumPanel";
import { confirmRegister, register, resendConfirmationCode } from "../../store/auth";
import ValidationCodeInput from "./ValidationCodeInput";
import HeaderFormMcrm from "./HeaderFormMcrm";
import AuthFooter from "./AuthFooter";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [canConfirmPassword, setCanConfirmPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const renderError = (message) => <div className="alert alert-danger">{message}</div>;
  const renderInputClassError = () => "prive-input-error";

  const {
    userConfirmed,
    deliveryMedium,
    destination,
    invalidCode,
    codeSent,
    email,
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

  const { isAuthenticated, getAccountError, getAccountLoading, getAccountLoaded, rememberMe, rememberLogin, getUserStatusLoading, userStatus } = useSelector((state) => state.authentication);

  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [userEmail, setUserEmail] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (registerSuccess && userAlreadyExist && registerError !== null) {
      setStep1(true);
      setStep2(false);
      setStep3(false);
    }
  }, [userAlreadyExist, registerSuccess, registerError]);

  useEffect(() => {
    if (registerSuccess && !userConfirmed && registerError === null) {
      setStep1(false);
      setStep2(false);
      setStep3(true);
    }
  }, [registerSuccess, userConfirmed, registerError]);

  useEffect(() => {
    if (registerSuccess && userStatus) {
      if (userStatus.status && userStatus.status === "UNCONFIRMED") {
        setStep1(false);
        setStep2(false);
        setStep3(true);
        setUserEmail(userStatus.userName);
      }
    }
  }, [registerSuccess, userStatus, navigate]);

  const getEnteredPassword = (password) => {
    setPassword(password);
  };
  const getEnteredConfirmPassword = (password) => {
    setConfirmPassword(password);
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  const getCode = (code) => setCode(code);

  document.title = "Inscription | Mobility CRM";

  return (
    <>
      <React.Fragment>
        <ParticlesAuth>
          <div className="auth-page-content">
            <Container>
              <HeaderFormMcrm />

              <Row className="justify-content-center">
                <Col md={8} lg={6} xl={5} className="login-form-bg justify-content-center px-0 py-2">
                  <Formik
                    enableReinitialize={true}
                    initialValues={{
                      email: "",
                      phoneNumber: "",
                      password: "",
                      confirmPassword: "",
                      civility: "",
                      firstName: "",
                      lastName: "",
                      countryResidence: "",
                      sponsorCode: "",
                      gender: "",
                      complementAddress: "",
                      accepte_contrat: false,
                    }}
                    validationSchema={Yup.object().shape({
                      email: Yup.string().required("Champ obligatoire").email("Email non-valide"),
                      phoneNumber: Yup.string().notRequired(),
                      password: Yup.string().notRequired(),
                      confirmPassword: Yup.string().notRequired(),
                      civility: Yup.string().required("Champ obligatoire"),
                      firstName: Yup.string().required("Champ obligatoire").min(3, "trop court"),
                      lastName: Yup.string().notRequired(),
                      countryResidence: Yup.string().required("Champ obligatoire"),
                      sponsorCode: Yup.string().notRequired(),
                      gender: Yup.string().required("Champ obligatoire"),
                      complementAddress: Yup.string().notRequired(),
                      accepte_contrat: Yup.string().required("Champ obligatoire"),
                    })}
                    onSubmit={(values) => {
                      if (!registerLoading && (step1 || step2)) {
                        values.phoneNumber = phoneNumber;
                        values.password = password;
                        values.confirmPassword = confirmPassword;
                        setUserEmail(values.email);
                        register(dispatch, values);
                      }
                    }}
                  >
                    {(formik) => {
                      const { errors, touched, isValid, dirty, handleSubmit, handleChange, values, handleBlur } = formik;
                      return (
                        <div className="container">
                          <Form
                            className="text-center"
                            onSubmit={(e) => {
                              e.preventDefault();
                              handleSubmit();
                              if (!confirmLoading && step3) {
                                confirmRegister(dispatch, userStatus ? (userStatus.userName ? userStatus.userName : userEmail) : email ? email : userEmail, code);
                              }
                              return false;
                            }}
                          >
                            <div className="inscription-form">
                              <h3 className="text-center mt-2 mb-2">Création du compte</h3>
                              {step1 && (
                                <>
                                  <Player autoplay loop src={animationDataSignup} style={{ width: 100, height: 100 }} />
                                  {registerSuccess && userAlreadyExist && registerError ? renderError(registerError) : null}
                                  <h4 className="text-center mt-2 mb-4">Etape 1/3 : Collecte d'information</h4>
                                  <Row>
                                    <Col md={6}>
                                      <div className="form-group mb-3">
                                        <label className="register-label" htmlFor="login">
                                          Civilité
                                        </label>
                                        <select
                                          id="civility"
                                          name="civility"
                                          className={errors.civility ? "form-control form-select " + renderInputClassError().toString() : "form-control form-select"}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.civility}
                                          invalid={touched.civility && errors.civility ? true : false}
                                        >
                                          <option>---votre civilité---</option>
                                          <option value={"Célibataire"}>Célibataire</option>
                                          <option value={"Marié"}>Marié</option>
                                          <option value={"Divorcé"}>Divorcé</option>
                                        </select>
                                        <ErrorMessage name="civility" render={renderError} />
                                      </div>
                                    </Col>
                                    <Col md={6}>
                                      <div className="form-group mb-3">
                                        <label className="register-label" htmlFor="gender">
                                          Genre
                                        </label>
                                        <select
                                          id="gender"
                                          name="gender"
                                          className={errors.gender ? "form-control form-select " + renderInputClassError().toString() : "form-control form-select"}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.gender}
                                          invalid={touched.gender && errors.gender ? true : false}
                                        >
                                          <option>---Votre genre---</option>
                                          <option value={"masculin"}>Masculin</option>
                                          <option value={"féminin"}>Féminin</option>
                                        </select>
                                        <ErrorMessage name="gender" render={renderError} />
                                      </div>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col md={6}>
                                      <div className="form-group mb-3">
                                        <label className="register-label" htmlFor="firstName">
                                          Nom
                                        </label>
                                        <Input
                                          id="firstName"
                                          name="firstName"
                                          placeholder="Votre nom"
                                          className={errors.firstName ? "form-control " + renderInputClassError().toString() : "form-control"}
                                          type="text"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.firstName}
                                          invalid={touched.firstName && errors.firstName !== undefined ? true : false}
                                        />
                                        <ErrorMessage name="firstName" render={renderError} />
                                      </div>
                                    </Col>
                                    <Col md={6}>
                                      <div className="form-group  mb-3">
                                        <label className="register-label" htmlFor="lastName">
                                          Prénom
                                        </label>
                                        <Input
                                          id="lastName"
                                          name="lastName"
                                          placeholder="Votre prénom"
                                          className={errors.lastName ? "form-control " + renderInputClassError().toString() : "form-control"}
                                          type="text"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.lastName}
                                          invalid={touched.lastName && errors.lastName ? true : false}
                                        />
                                        <ErrorMessage name="lastName" render={renderError} />
                                      </div>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col md={6}>
                                      <div className="form-group  mb-3">
                                        <label className="register-label" htmlFor="email">
                                          Email
                                        </label>
                                        <Input
                                          id="email"
                                          name="email"
                                          placeholder="Votre email"
                                          className={errors.email ? "form-control " + renderInputClassError().toString() : "form-control"}
                                          type="text"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.email}
                                          invalid={touched.email && errors.email ? true : false}
                                        />
                                        <ErrorMessage name="email" render={renderError} />
                                      </div>
                                    </Col>
                                    <Col md={6}>
                                      <div className="form-group  mb-3">
                                        <label className="register-label" htmlFor="phoneNumber">
                                          Téléphone
                                        </label>
                                        <PhoneInput
                                          id="phoneNumber"
                                          name="phoneNumber"
                                          international
                                          defaultCountry="CM"
                                          countryCallingCodeEditable={false}
                                          labels={fr}
                                          flags={flags}
                                          error={phoneNumber ? (isValidPhoneNumber(phoneNumber) ? undefined : "Numero de téléphone invalide") : "Le numero de téléphone est obligatoire"}
                                          value={phoneNumber}
                                          onChange={handlePhoneChange}
                                          onBlur={handleBlur}
                                          className={touched.phone && !isValidPhoneNumber(phoneNumber) ? "form-control ps-2 " + renderInputClassError().toString() : null}
                                          invalid={touched.phone && !isValidPhoneNumber(phoneNumber) ? true : false}
                                        />

                                        {phoneNumber ? (
                                          isValidPhoneNumber(phoneNumber) ? null : (
                                            <span className="text text-danger">Numero de téléphone invalide</span>
                                          )
                                        ) : (
                                          <span className="text text-danger">Téléphone obligatoire</span>
                                        )}
                                      </div>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col md={6}>
                                      <div className="form-group mb-3">
                                        <label className="register-label" htmlFor="countryResidence">
                                          Pays de résidence
                                        </label>
                                        <select
                                          id="countryResidence"
                                          name="countryResidence"
                                          className={errors.countryResidence ? "form-control form-select " + renderInputClassError().toString() : "form-control form-select"}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.countryResidence}
                                          invalid={touched.countryResidence && errors.countryResidence ? true : false}
                                        >
                                          <option>--Pays de residence--</option>
                                          {countriesFR.map((country, key) => (
                                            <option key={key} value={country.alpha2}>
                                              {country.name}
                                            </option>
                                          ))}
                                        </select>
                                        <ErrorMessage name="countryResidence" render={renderError} />
                                      </div>
                                    </Col>
                                    <Col md={6}>
                                      <div className="form-group mb-3">
                                        <label className="register-label" htmlFor="complementAddress">
                                          Adresse complementaire
                                        </label>
                                        <Input
                                          id="complementAddress"
                                          name="complementAddress"
                                          className={errors.complementAddress ? "form-control " + renderInputClassError().toString() : "form-control"}
                                          type="text"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.complementAddress}
                                          invalid={touched.complementAddress && errors.complementAddress ? true : false}
                                        />
                                        <ErrorMessage name="complementAddress" render={renderError} />
                                      </div>
                                    </Col>
                                  </Row>

                                  <Row>
                                    <Col md={6}>
                                      <div className="form-group mb-3">
                                        <label className="register-label" htmlFor="sponsorCode">
                                          Sponsor Code
                                        </label>
                                        <Input
                                          id="sponsorCode"
                                          name="sponsorCode"
                                          className={errors.sponsorCode ? "form-control " + renderInputClassError().toString() : "form-control"}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.sponsorCode}
                                          invalid={touched.sponsorCode && errors.sponsorCode ? true : false}
                                        />

                                        <ErrorMessage name="sponsorCode" render={renderError} />
                                      </div>
                                    </Col>
                                    <Col md={6}></Col>
                                  </Row>
                                  <Row className="justify-content-center termes-politique">
                                    <Input
                                      id="accepte_contrat"
                                      name="accepte_contrat"
                                      type="checkbox"
                                      className="form-control me-4"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.accepte_contrat}
                                      invalid={values.accepte_contrat && errors.accepte_contrat !== undefined ? true : false}
                                    />
                                    {"  "}
                                    J'accepte les <Link to="#">termes</Link> et la <Link to="#">politique de confidentialité</Link>
                                    <ErrorMessage name="accepte_contrat" render={renderError} />
                                  </Row>
                                </>
                              )}
                            </div>

                            <div>
                              <Row className="mt-1 justify-content-center">
                                <Col sm={10}>
                                  {step1 && (
                                    <Button
                                      disabled={registerLoading || !isValid || !isValidPhoneNumber(phoneNumber) || !values.accepte_contrat ? true : false}
                                      className="btn mcrm-btn w-100"
                                      type="button"
                                      onClick={() => {
                                        setStep1(false);
                                        setStep2(true);
                                      }}
                                    >
                                      {registerLoading ? (
                                        <Spinner size="sm" className="me-2" role="status">
                                          Enregistrement...
                                        </Spinner>
                                      ) : (
                                        "Suivant"
                                      )}
                                    </Button>
                                  )}
                                  {step2 && !canConfirmPassword && (
                                    <div className="create-personnal-code-form">
                                      <h4>Etape 2/3 : Créez votre code personnel</h4>
                                      <Row className="justify-content-center mt-4 mx-2 mb-4">
                                        <NumPanel getEnteredPassword={getEnteredPassword} />
                                        <br /> <br />
                                      </Row>
                                    </div>
                                  )}
                                  {step2 && canConfirmPassword && (
                                    <div className="create-personnal-code-form">
                                      <h4>Etape 2/3 : Créez votre code personnel</h4>
                                      <p>Entrez à nouveau votre code personnel</p>
                                      {step2 && canConfirmPassword && confirmPassword.length === 6 && !(password === confirmPassword) && <>{renderError("Ce code est different du prémier")}</>}

                                      <Row className="justify-content-center mt-4 mx-2 mb-4">
                                        <NumPanel getEnteredPassword={getEnteredConfirmPassword} />
                                        <br /> <br />
                                      </Row>
                                    </div>
                                  )}

                                  {step2 && !canConfirmPassword && (
                                    <>
                                      <Button
                                        disabled={registerLoading || !isValid || !isValidPhoneNumber(phoneNumber) || !values.accepte_contrat || !(password.length === 6) ? true : false}
                                        className="btn mcrm-btn w-100"
                                        type="button"
                                        onClick={() => {
                                          setCanConfirmPassword(true);
                                        }}
                                      >
                                        {registerLoading ? (
                                          <Spinner size="sm" className="me-2" role="status">
                                            Chargement...
                                          </Spinner>
                                        ) : (
                                          "Confirmer le code personnel"
                                        )}
                                      </Button>
                                    </>
                                  )}

                                  {step2 && canConfirmPassword && (
                                    <>
                                      <Button
                                        disabled={registerLoading || !isValid || !isValidPhoneNumber(phoneNumber) || !values.accepte_contrat || !(password === confirmPassword) ? true : false}
                                        className="btn mcrm-btn w-100"
                                        type="submit"
                                      >
                                        {registerLoading ? (
                                          <Spinner size="sm" className="me-2" role="status">
                                            Création...
                                          </Spinner>
                                        ) : (
                                          "Créer le compte"
                                        )}
                                      </Button>
                                    </>
                                  )}
                                </Col>
                              </Row>
                            </div>

                            {step3 && !confirmSuccess && (
                              <div className="validation-code-form">
                                <Player autoplay loop src={animationDataLogin} style={{ width: 100, height: 100 }} />
                                <h4 className="text-center mt-0 mb-2">Etape 3/3: Activation du compte</h4>
                                {resendConfirmationCodeError ? renderError(resendConfirmationCodeError) : null}
                                {confirmError ? renderError("Code d'activation incorrect! Veuillez réessayez SVP!") : null}
                                <p>
                                  Entrez le code de confirmation à 6 chiffres que nous avons envoyé à votre email: <b>{destination}</b>
                                </p>
                                <ValidationCodeInput getCode={getCode} />
                                <div className="mt-2 text-center">
                                  <p>
                                    Vous n'avez pas reçu le code?{" "}
                                    <Link
                                      onClick={() => resendConfirmationCode(dispatch, userStatus ? (userStatus.userName ? userStatus.userName : email) : null)}
                                      className="fw-semibold text-primary text-decoration-underline"
                                    >
                                      Renvoyer le code
                                    </Link>
                                  </p>
                                </div>

                                <Row className="mt-2 justify-content-center">
                                  <Button disabled={confirmLoading || !(code.length === 6) ? true : false} className="btn mcrm-btn w-100" type="submit">
                                    {confirmLoading ? (
                                      <Spinner size="sm" className="me-2" role="status">
                                        Activation...
                                      </Spinner>
                                    ) : (
                                      "Activer mon compte"
                                    )}
                                  </Button>
                                </Row>
                              </div>
                            )}

                            {confirmSuccess && (
                              <div className="register-successfull-form">
                                <Player autoplay loop src={animationDataCheck} style={{ width: "100px", height: "100px" }} />

                                <h4>Félicitations !</h4>
                                <Row className="justify-content-center mt-4 mx-2 mb-4">
                                  <br /> <br />
                                  <p>
                                    Mes félicitations votre compte a été activé avec succès! <br /> veuillez vous connecter dès à présent sur votre compte
                                  </p>
                                </Row>

                                <Row className="mt-2 justify-content-center">
                                  <Link to={"/login"} className="btn mcrm-btn w-100">
                                    Se connecter
                                  </Link>
                                </Row>
                              </div>
                            )}

                            {!confirmSuccess && (
                              <div className="mt-4 text-center">
                                <p>
                                  Vous avez déjà un compte?{" "}
                                  <Link to={"/login"} className="fw-semibold text-primary text-decoration-underline">
                                    Se connecter
                                  </Link>
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

      <div></div>
    </>
  );
};

export default Register;
