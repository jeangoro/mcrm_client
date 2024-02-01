import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

const BreadCrumbCustom = ({ pages }) => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0">{pages[pages.length - 1].title}</h4>

            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                {pages.map((page, key) =>
                  key === pages.length - 1 ? (
                    <li key={key} className="breadcrumb-item active">
                      {page.title}
                    </li>
                  ) : (
                    <li key={key} className="breadcrumb-item">
                      <Link to={page.link}>{page.title}</Link>
                    </li>
                  )
                )}
              </ol>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BreadCrumbCustom;
