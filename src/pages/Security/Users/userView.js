import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserById, getUserStatus } from "../../../store/user";
import Loader from "../../../components/common/Loader";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { getUserGroupsList } from "../../../store/group";
import { getUserAuthorities } from "../../../store/authority";
import { initialise } from "../../../store/authority/authoritySlice";
import * as Yup from "yup";
import { civilityOptions, genderOptions, localeOptions, paysOptions } from "../../../components/common/FormOptions";
import FormGeneratorV2 from "../../../components/common/FormGeneratorV2";
import { ScrollView } from "devextreme-react";
import { useState } from "react";

const UserView = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const userId = location.pathname.split("/")[3];
  const navigate = useNavigate();
  // const [contentHeight, setContentHeight] = useState(window.innerHeight - 250);
  // const getContentHeight = (e) => {
  //   if (window.innerHeight !== contentHeight) {
  //     setContentHeight(window.innerHeight - 250);
  //   }
  // };
  // window.addEventListener("resize", function (e) {
  //   getContentHeight(e);
  // });

  const { userRowToView, getUserByIdLoading, getUserByIdSuccess, getUserByIdError, userById, userStatus } = useSelector((state) => state.user);
  const { userGroupsList, getGroupListLoading } = useSelector((state) => state.group);
  const { groupAuthorities, getGroupAuthoritiesLoading, getGroupAuthoritiesSuccess, getGroupAuthoritiesError, userAuthorities, getUserAuthoritiesLoading, getUserAuthoritiesSuccess } = useSelector(
    (state) => state.authority
  );

  useEffect(() => {
    return () => {
      // reinitialise de User state on Unmont
      dispatch(initialise());
    };
  }, [dispatch]);

  useEffect(() => {
    getUserById(dispatch, userId);
    getUserGroupsList(dispatch, userId);
    getUserStatus(dispatch, userId);
  }, [dispatch, userId]);

  useEffect(() => {
    if (userGroupsList !== null) {
      getUserAuthorities(dispatch, userGroupsList);
    }
  }, [dispatch, userGroupsList]);

  const formGroups = [
    {
      formGroupName: "Informations personnelles",
      formGroupFields: [
        { name: "userId", label: "User id", type: "text", disabled: true, value: userById?.userId, validation: Yup.string().required("Champ obligatoire") },
        { name: "civility", label: "Civilité", type: "select", disabled: true, optionsValue: civilityOptions, value: userById?.civility, validation: Yup.string().notRequired() },
        { name: "firstName", label: "Nom", type: "text", disabled: true, value: userById?.firstName, validation: Yup.string().notRequired() },
        { name: "lastName", label: "Prénom", type: "text", disabled: true, value: userById?.lastName, validation: Yup.string().notRequired() },
        { name: "email", label: "Email", type: "email", disabled: true, value: userById?.email, validation: Yup.string().email("Email invalide").notRequired() },
        { name: "phoneNumber", label: "Numéro de téléphone", type: "text", disabled: true, value: userById?.phoneNumber, validation: Yup.string().min(9, "trop court").notRequired() },
        { name: "countryResidence", label: "Pays de residence", type: "select", disabled: true, optionsValue: paysOptions, value: userById?.countryResidence, validation: Yup.string().notRequired() },
        { name: "sponsorCode", label: "sponsorCode", type: "text", disabled: true, value: userById?.sponsorCode, validation: Yup.string().notRequired() },
        { name: "complementAddress", label: "Adresse complementaire", type: "text", disabled: true, value: userById?.complementAddress, validation: Yup.string().notRequired() },
      ],
    },
    {
      formGroupName: "Autres informations",
      formGroupFields: [{ name: "locale", label: "Langue", type: "select", disabled: true, optionsValue: localeOptions, value: userById?.locale, validation: Yup.string().notRequired() }],
    },
    {
      formGroupName: "Informations sur l'activation du compte",
      formGroupFields: [
        { name: "disabled", label: "Compte désactivé", type: "checkbox", disabled: true, value: userById?.disabled, validation: Yup.boolean().notRequired() },
        { name: "emailVerified", label: "Email vérifié", type: "checkbox", disabled: true, value: userById?.emailVerified, validation: Yup.boolean().notRequired() },
        { name: "createBy", label: "Gestionnaire du compte", type: "text", disabled: true, value: userById?.createBy, validation: Yup.string().email("Email invalide").notRequired() },
        { name: "createDate", label: "Date de création", type: "date", disabled: true, value: userById?.createDate, validation: Yup.string().notRequired() },
        { name: "gender", label: "Genre", type: "select", disabled: true, optionsValue: genderOptions, value: userById?.gender, validation: Yup.string().notRequired() },
      ],
    },
  ];

  return (
    <>
      {!userById || !userGroupsList ? (
        <Loader></Loader>
      ) : (
        <Card>
          <ScrollView>
            <Card>
              <CardHeader>
                <Row>
                  <Col md={6}>
                    <h5>
                      Détails : {userById.firstName} {userById.lastName}
                    </h5>
                  </Col>
                  <Col md={6} style={{ textAlign: "right" }}>
                    <Button className="mcrm-btn" onClick={() => navigate(-1)}>
                      <span className="mdi mdi-arrow-left"></span> Retour à la liste des utilisateurs
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <FormGeneratorV2 formGroups={formGroups} formConfig={{ formId: "user_view_form", fieldWidth: "6" }} />
              </CardBody>
            </Card>
            <div className="border-bottom mb-2">
              <h5> Les autorisations </h5>
            </div>
            <Row>
              <Col md={4}>
                <Card>
                  <CardHeader>
                    <label className="form-label text-muted">Groupes d'appartenance</label>
                  </CardHeader>
                  <CardBody>
                    {userGroupsList?.map((group, key) => (
                      <span key={key} className="badge bg-info m-1 p-2">
                        {" "}
                        {group.name}{" "}
                      </span>
                    ))}
                  </CardBody>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <CardHeader>
                    <label className="form-label text-muted">Rôles ou Autorisations</label>
                  </CardHeader>
                  <CardBody>
                    {getUserAuthoritiesLoading && !getUserAuthoritiesSuccess ? (
                      <Loader></Loader>
                    ) : (
                      [...new Set(userAuthorities.map((auth) => auth.name))].map((authority, key) => (
                        <span key={key} className="badge bg-info m-1 p-2">
                          {" "}
                          {authority}{" "}
                        </span>
                      ))
                    )}
                  </CardBody>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <CardHeader>
                    <label className="form-label text-muted">Etat du compte</label>
                  </CardHeader>
                  <CardBody>
                    <Row className="pt-1">
                      <Col sm={8}>
                        <h6>Créé par l'admin:</h6>
                      </Col>
                      <Col sm={4}>
                        <h6 className="text-muted">{userStatus?.byAdmin ? "Oui" : "Non"}</h6>
                      </Col>
                    </Row>
                    <Row className="pt-1">
                      <Col sm={8}>
                        <h6>Utilisateur trouvé:</h6>
                      </Col>
                      <Col sm={4}>
                        <h6 className="text-muted">{userStatus?.userFound ? "Oui" : "Non"}</h6>
                      </Col>
                    </Row>
                    <Row className="pt-1">
                      <Col sm={8}>
                        <h6>Nbre max d'essai:</h6>
                      </Col>
                      <Col sm={4}>
                        <h6 className="text-muted">{userStatus?.maxRetryCount}</h6>
                      </Col>
                    </Row>
                    <Row className="pt-1">
                      <Col sm={8}>
                        <h6>Temps d'attente:</h6>
                      </Col>
                      <Col sm={4}>
                        <h6 className="text-muted">{userStatus?.timeToWait}</h6>
                      </Col>
                    </Row>
                    <Row className="pt-1">
                      <Col sm={8}>
                        <h6>Nbre d'essai effectué:</h6>
                      </Col>
                      <Col sm={4}>
                        <h6 className="text-muted">{userStatus?.retryCount}</h6>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </ScrollView>
        </Card>
      )}
    </>
  );
};

export default UserView;
