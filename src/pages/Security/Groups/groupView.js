import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../../components/common/Loader";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { getGroupAuthorities } from "../../../store/authority";
import * as Yup from "yup";
import FormGeneratorV2 from "../../../components/common/FormGeneratorV2";

const GroupView = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const groupId = location.pathname.split("/")[3];
  const navigate = useNavigate();

  const { groupRowToView } = useSelector((state) => state.group);
  const { groupAuthorities } = useSelector((state) => state.authority);

  useEffect(() => {
    getGroupAuthorities(dispatch, groupId);
  }, [dispatch, groupId]);

  const formFields = [
    {
      formGroupName: "",
      formGroupFields: [
        {
          name: "name",
          label: "Nom du groupe",
          type: "text",
          disabled: true,
          value: groupRowToView?.name,
          validation: Yup.string()
            .required("Ce champ est obligatoire")
            .matches(/^[a-zA-Z0-9@]+$/, "Ce champ ne peut pas contenir des espace vide"),
        },
        { name: "description", label: "Description", type: "text", disabled: true, value: groupRowToView?.description, validation: Yup.string().notRequired() },
        { name: "deleted", label: "Supprimé", type: "checkbox", disabled: true, value: groupRowToView?.deleted, validation: Yup.boolean().notRequired() },
      ],
    },
  ];

  return (
    <>
      {!groupAuthorities ? (
        <Loader></Loader>
      ) : (
        <>
          <Card>
            <CardHeader>
              <Row>
                <Col md={6}>
                  <h5>Détails du groupe : {groupRowToView.name}</h5>
                </Col>
                <Col md={6} style={{ textAlign: "right" }}>
                  <Button className="mcrm-btn" onClick={() => navigate(-1)}>
                    <span className="mdi mdi-arrow-left"></span> Retour à la liste des groupes
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <FormGeneratorV2 formGroups={formFields} formConfig={{ formId: "user_view_form", fieldWidth: "6" }} />
            </CardBody>
          </Card>
          <Row>
            <Col md={12}>
              <Card>
                <CardHeader>
                  <h5>Rôles ou Autorisations</h5>
                </CardHeader>
                <CardBody>
                  {!groupAuthorities ? (
                    <Loader></Loader>
                  ) : (
                    groupAuthorities.map((authority, key) => (
                      <span key={key} className="badge bg-info m-1 p-2">
                        {" "}
                        {authority.name}{" "}
                      </span>
                    ))
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default GroupView;
