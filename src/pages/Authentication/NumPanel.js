import React, { useEffect, useState } from "react";
import { Button, Input, Row } from "reactstrap";

const NumPanel = ({ getEnteredPassword }) => {
  const [radio1, setRadio1] = useState(false);
  const [radio2, setRadio2] = useState(false);
  const [radio3, setRadio3] = useState(false);
  const [radio4, setRadio4] = useState(false);
  const [radio5, setRadio5] = useState(false);
  const [radio6, setRadio6] = useState(false);

  const [password, setPassword] = useState("");
  const [numPad, setNumPad] = useState([]);
  const [showPanel, setShowPanel] = useState(true);

  useEffect(() => {
    var newNumPad = [];
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 10; i++) {
      let index = Math.floor(Math.random() * numbers.length); // retourne un nombre aleatoire
      let nbre = numbers.splice(index, 1);
      newNumPad = [...newNumPad, nbre[0]];
    }
    setNumPad(newNumPad);
  }, []);

  useEffect(() => {
    getEnteredPassword(password);
  }, [password, getEnteredPassword]);

  useEffect(() => {
    if (showPanel) {
      if (password.length < 1) {
        let btn = document.getElementById("btn-erase");
        btn.setAttribute("hidden", "true");
      } else {
        let btn = document.getElementById("btn-erase");
        btn.removeAttribute("hidden");
      }
      switch (password.length) {
        case 0: {
          setRadio1(false);
          setRadio2(false);
          setRadio3(false);
          setRadio4(false);
          setRadio5(false);
          setRadio6(false);

          let elements = document.getElementsByClassName("btn-password-num");
          for (let i = 0; i < elements.length; i++) {
            elements[i].removeAttribute("disabled");
          }
          break;
        }
        case 1: {
          setRadio1(true);
          setRadio2(false);
          setRadio3(false);
          setRadio4(false);
          setRadio5(false);
          setRadio6(false);
          break;
        }

        case 2: {
          setRadio1(true);
          setRadio2(true);
          setRadio3(false);
          setRadio4(false);
          setRadio5(false);
          setRadio6(false);
          break;
        }
        case 3: {
          setRadio1(true);
          setRadio2(true);
          setRadio3(true);
          setRadio4(false);
          setRadio5(false);
          setRadio6(false);
          break;
        }
        case 4: {
          setRadio1(true);
          setRadio2(true);
          setRadio3(true);
          setRadio4(true);
          setRadio5(false);
          setRadio6(false);
          break;
        }
        case 5: {
          setRadio1(true);
          setRadio2(true);
          setRadio3(true);
          setRadio4(true);
          setRadio5(true);
          setRadio6(false);

          let elements = document.getElementsByClassName("btn-password-num");
          for (let i = 0; i < elements.length; i++) {
            elements[i].removeAttribute("disabled");
          }
          break;
        }
        case 6: {
          setRadio1(true);
          setRadio2(true);
          setRadio3(true);
          setRadio4(true);
          setRadio5(true);
          setRadio6(true);

          let elements = document.getElementsByClassName("btn-password-num");
          for (let i = 0; i < elements.length; i++) {
            elements[i].setAttribute("disabled", "true");
          }
          break;
        }
        default: {
          setRadio1(false);
          setRadio2(false);
          setRadio3(false);
          setRadio4(false);
          setRadio5(false);
          setRadio6(false);
          let elements = document.getElementsByClassName("btn-password-num");
          for (let i = 0; i < elements.length; i++) {
            elements[i].removeAttribute("disabled");
          }
          break;
        }
      }
    }
  }, [password, showPanel]);

  const passwordInputHandler = (value) => {
    if (password.length < 6) {
      setPassword(password + value);
    }
  };
  const passwordEraseHandler = () => {
    if (password.length > 0) {
      setPassword("");
    }
  };

  const onchangeHandler = () => {};

  return (
    <div>
      <div className="form-group login-radios">
        <Input id="num1" className="form-control login-radio" checked={radio1} onChange={onchangeHandler} type="radio" placeholder=".form-control" />
        <Input id="num2" className="form-control login-radio" checked={radio2} onChange={onchangeHandler} type="radio" placeholder=".form-control" />
        <Input id="num3" className="form-control login-radio" checked={radio3} onChange={onchangeHandler} type="radio" placeholder=".form-control" />
        <Input id="num4" className="form-control login-radio" checked={radio4} onChange={onchangeHandler} type="radio" placeholder=".form-control" />
        <Input id="num5" className="form-control login-radio" checked={radio5} onChange={onchangeHandler} type="radio" placeholder=".form-control" />
        <Input id="num6" className="form-control login-radio" checked={radio6} onChange={onchangeHandler} type="radio" placeholder=".form-control" />

        <Button id="btn-erase" onClick={passwordEraseHandler} color="light" className="position-relative p-0 avatar-xs rounded-circle">
          <span className="avatar-title bg-transparent text-reset">
            <i className="bx bx-x"></i>
          </span>
        </Button>
      </div>
      {password && password.length < 6 ? <span className="text text-danger">{"6 chiffres minimum"}</span> : null}
      <br />
      <Row className="form-group login-buttons-group">
        {numPad &&
          numPad.map((nbre, key) => {
            return (
              <div key={key} className="btn-password">
                <Button className="btn-password-num" value={nbre} onClick={(e) => passwordInputHandler(e.target.value)} color="light">
                  {nbre}
                </Button>
              </div>
            );
          })}
      </Row>
    </div>
  );
};

export default NumPanel;
