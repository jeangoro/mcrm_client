import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from "reactstrap";
import "./PubSlider.scss";
import { Link } from "react-router-dom";
import { pubData } from "../../common/data";
// import PubMsg from "./PubMsg";

const PubSlider = ({ pubData }) => {
  return (
    <>
    <Row>
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
      <div className="carousel-indicators">
          {pubData.map((pub, key) =>
            key === 0 ? (
              <button key={key} type="button" data-target="#carouselExampleCaptions" data-slide-to={key} className="active" ></button>
            ) : (
              <button key={key} type="button" data-target="#carouselExampleCaptions" data-slide-to={key} ></button>
            )
          )}
        </div>
        <div className="carousel-inner">
          {pubData.map((pub, key) => (
            <div key={key} className={key === 0 ? "carousel-item active" : "carousel-item"}>
              <Row>
                <Col >
                  <Card className="card-pub">
                    <CardHeader className="card-pub-title">{pub.title}</CardHeader>
                    <CardBody>
                      <img className="img-pub" src={pub.imageLink} alt="" />
                      <p className="pub-text">{pub.message} </p>
                    </CardBody>
                    <CardFooter>
                      <Link to={pub.link} className="btn btn-pub">
                        En savoir plus ...
                      </Link>
                    </CardFooter>
                  </Card>
                </Col>
                <Col >
                  <Card className="card-pub">
                    <CardHeader className="card-pub-title">{pub.title}</CardHeader>
                    <CardBody>
                      <img className="img-pub" src={pub.imageLink} alt="" />
                      <p className="pub-text">{pub.message} </p>
                    </CardBody>
                    <CardFooter>
                      <Link to={pub.link} className="btn btn-pub">
                        En savoir plus ...
                      </Link>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>

              <div className="carousel-caption d-block d-md-block"></div>
            </div>
          ))}
        </div>
       
      </div>
    </Row>
    </>
  );
};

export default PubSlider;
