import React, { useRef } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Card, CardBody, Container } from "reactstrap";
import BreadCrumb from "../components/common/BreadCrumb";
import { useState } from "react";
import { ScrollView } from "devextreme-react";

const ErrorPageBoundaryRoutes = ({ children, title, pageTitle }) => {
  const [contentHeight, setContentHeight] = useState(window.innerHeight - 180);
  const getContentHeight = (e) => {
    if (window.innerHeight !== contentHeight) {
      setContentHeight(window.innerHeight - 180);
    }
  };
  window.addEventListener("resize", function (e) {
    getContentHeight(e);
  });
  return (
    <Routes>
      <Route
        element={
          <React.Fragment>
            <div className="page-content">
              <Container fluid>
                <BreadCrumb title={title} pageTitle={pageTitle} />
                <Card style={{ height: contentHeight }}>
                  <ScrollView showScrollbar="always">
                    <CardBody className="pt-3">
                      <Outlet />
                    </CardBody>
                  </ScrollView>
                </Card>
              </Container>
            </div>
          </React.Fragment>
        }
      >
        {children}
      </Route>
    </Routes>
  );
};

export default ErrorPageBoundaryRoutes;
