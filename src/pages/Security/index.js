import React, { useEffect, useState } from "react";
import { Card, CardBody, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import BreadCrumb from "../../components/common/BreadCrumb";
import withAuthProtected from "../../routes/withAuthProtected";
import { ROLE_ADMIN } from "../../routes/roles";
import { useDispatch } from "react-redux";
import Authorities from "./Authorities";
import Groups from "./Groups";
import Users from "./Users";

const Security = () => {
  // Custom Tabs Bordered
  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
  //end Custom Tabs Bordered

  // useEffect(() => {
  //   addEtapeLeadFormik.values.lead = selectedLeadEtape;
  //   console.log(addEtapeLeadFormik.values.lead);
  // }, [selectedLeadEtape]);

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  return (
    <>
      {/* <div className="page-content">
        <Container fluid={true}>
          <div className="float-left">
            <BreadCrumb title="Liste des utilisateurs" pageTitle="Administration" />
          </div>
          <Card>
            <CardBody>
              <Row>
                <h5 className="mb-3">Gestion des utilisateurs</h5>
                <Card>
                  <CardBody>
                    <Nav tabs className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-3">
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: customActiveTab === "1",
                          })}
                          onClick={() => {
                            toggleCustom("1");
                          }}
                        >
                          Utilisateurs
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: customActiveTab === "2",
                          })}
                          onClick={() => {
                            toggleCustom("2");
                          }}
                        >
                          Groupe
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: customActiveTab === "3",
                          })}
                          onClick={() => {
                            toggleCustom("3");
                          }}
                        >
                          Autorisations
                        </NavLink>
                      </NavItem>
                    </Nav>

                    <TabContent activeTab={customActiveTab} className="text-muted">
                      <TabPane tabId="1" id="home1">
                        <div className="d-flex">
                          <div className="flex-grow-1 ms-2">
                            <Users />
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tabId="2">
                        <div className="d-flex">
                          <div className="flex-grow-1 ms-2">
                            <Groups />
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tabId="3">
                        <div className="d-flex">
                          <div className="flex-grow-1 ms-2">
                            <Authorities />
                          </div>
                        </div>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div> */}
    </>
  );
};

export default withAuthProtected(Security, [ROLE_ADMIN]);
