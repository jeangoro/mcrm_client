import React from "react";
import { Card, CardBody, Col, Row, Table } from "reactstrap";
import contactImg from "../../../../../assets/images/contacts/imgContact.png";

const DetailsContact = () => {
  return (
    <Card>
      <CardBody>
        <Row>
          {/* <Col md={3}>
            <h6 className="card-title mb-3">Details contact</h6>
          </Col> */}
          <Col md={12} style={{ textAlign: "end", display: "inline-flex", gap: "8px", alignItems: "baseline" }}>
            <h6 className="card-title mb-3">Details contact</h6>
            <div style={{ textAlign: "end", width: "inherit" }}>
              {/* <button className="mcrm-btn btn-contact-details1">Modifier</button> */}
              <button className="mcrm-btn btn-contact-details1 ms-2">Enregistrer</button>
              <button className="mcrm-btn-danger btn-contact-details1 ms-2">Annuler</button>
            </div>
          </Col>

          {/* <Col md={9}>
            
          </Col> */}
        </Row>

        <Row>
          <Col md={3}>
            <img src={contactImg} alt="" style={{ width: "100%", height: "auto" }} />
          </Col>
          <Col md={9}></Col>
        </Row>
        <div className="left">{/* <ContactForm data={data} isLoading={isLoading} /> */}</div>
        <div className="table-responsive">
          <Table className="table-borderless mb-0">
            <tbody>
              <tr>
                <th className="ps-0" scope="row">
                  Full Name :
                </th>
                <td className="text-muted">Anna Adame</td>
              </tr>
              <tr>
                <th className="ps-0" scope="row">
                  Mobile :
                </th>
                <td className="text-muted">+(1) 987 6543</td>
              </tr>
              <tr>
                <th className="ps-0" scope="row">
                  E-mail :
                </th>
                <td className="text-muted">daveadame@velzon.com</td>
              </tr>
              <tr>
                <th className="ps-0" scope="row">
                  Location :
                </th>
                <td className="text-muted">California, United States</td>
              </tr>
              <tr>
                <th className="ps-0" scope="row">
                  Joining Date
                </th>
                <td className="text-muted">24 Nov 2021</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default DetailsContact;
