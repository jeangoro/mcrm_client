import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Input, Row } from "reactstrap";

const ValidationCodeInput = ({ getCode }) => {
  const [code, setCode] = useState("");
  const [chiffre1, setChiffre1] = useState("");
  const [chiffre2, setChiffre2] = useState("");
  const [chiffre3, setChiffre3] = useState("");
  const [chiffre4, setChiffre4] = useState("");
  const [chiffre5, setChiffre5] = useState("");
  const [chiffre6, setChiffre6] = useState("");

  const code1OnChangeHandler = (e) => {
    setChiffre1(e.target.value);
    if (e.target.value.length === 1) {
      document.getElementById("code_chiffre2").focus();
    }
  };
  const code2OnChangeHandler = (e) => {
    setChiffre2(e.target.value);
    if (e.target.value.length === 1) {
      document.getElementById("code_chiffre3").focus();
    }
    if (e.target.value.length === 0) {
      document.getElementById("code_chiffre1").focus();
    }
  };
  const code3OnChangeHandler = (e) => {
    setChiffre3(e.target.value);
    if (e.target.value.length === 1) {
      document.getElementById("code_chiffre4").focus();
    }
    if (e.target.value.length === 0) {
      document.getElementById("code_chiffre2").focus();
    }
  };
  const code4OnChangeHandler = (e) => {
    setChiffre4(e.target.value);
    if (e.target.value.length === 1) {
      document.getElementById("code_chiffre5").focus();
    }
    if (e.target.value.length === 0) {
      document.getElementById("code_chiffre3").focus();
    }
  };
  const code5OnChangeHandler = (e) => {
    setChiffre5(e.target.value);
    if (e.target.value.length === 1) {
      document.getElementById("code_chiffre6").focus();
    }
    if (e.target.value.length === 0) {
      document.getElementById("code_chiffre4").focus();
    }
  };
  const code6OnChangeHandler = (e) => {
    setChiffre6(e.target.value);
    if (e.target.value.length === 0) {
      document.getElementById("code_chiffre5").focus();
    }
  };

  useEffect(() => {
    setCode(chiffre1 + "" + chiffre2 + "" + chiffre3 + "" + chiffre4 + "" + chiffre5 + "" + chiffre6);
  }, [chiffre1, chiffre2, chiffre3, chiffre4, chiffre5, chiffre6]);

  useEffect(() => {
    getCode(code);
  }, [code, getCode]);

  return (
    <div className="validation-code-form">
      <Row className="justify-content-center mt-1 mx-2 mb-2">
        <Col xs={2}>
          <Input
            id="code_chiffre1"
            name="code_chiffre1"
            type="text"
            pattern="\d*"
            maxLength={1}
            className="form-control form-control-lg bg-light border-light text-center"
            onChange={(e) => {
              code1OnChangeHandler(e);
            }}
            value={chiffre1}
          />
        </Col>
        <Col xs={2}>
          <Input
            id="code_chiffre2"
            name="code_chiffre2"
            type="text"
            pattern="\d*"
            maxLength={1}
            className="form-control form-control-lg bg-light border-light text-center"
            onChange={(e) => {
              code2OnChangeHandler(e);
            }}
            value={chiffre2}
          />
        </Col>
        <Col xs={2}>
          <Input
            id="code_chiffre3"
            name="code_chiffre3"
            type="text"
            pattern="\d*"
            maxLength={1}
            className="form-control form-control-lg bg-light border-light text-center"
            onChange={(e) => {
              code3OnChangeHandler(e);
            }}
            value={chiffre3}
          />
        </Col>
        <Col xs={2}>
          <Input
            id="code_chiffre4"
            name="code_chiffre4"
            type="text"
            pattern="\d*"
            maxLength={1}
            className="form-control form-control-lg bg-light border-light text-center"
            onChange={(e) => {
              code4OnChangeHandler(e);
            }}
            value={chiffre4}
          />
        </Col>
        <Col xs={2}>
          <Input
            id="code_chiffre5"
            name="code_chiffre5"
            type="text"
            pattern="\d*"
            maxLength={1}
            className="form-control form-control-lg bg-light border-light text-center"
            onChange={(e) => {
              code5OnChangeHandler(e);
            }}
            value={chiffre5}
          />
        </Col>
        <Col xs={2}>
          <Input
            id="code_chiffre6"
            name="code_chiffre6"
            type="text"
            pattern="\d*"
            maxLength={1}
            className="form-control form-control-lg bg-light border-light text-center"
            onChange={(e) => {
              code6OnChangeHandler(e);
            }}
            value={chiffre6}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ValidationCodeInput;
