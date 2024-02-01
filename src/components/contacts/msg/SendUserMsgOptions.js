import React, {useEffect, useState} from "react";
import {
    Card,
    CardBody,
    Col,
    Container,
    Input,
    Label,
    Row,
    Button,
    Form,
    FormFeedback,
    Alert,
    Spinner, Nav, NavItem, NavLink,
} from "reactstrap";
import '../../../assets/scss/pages/_contacts.scss';

export const SendUserMsgOptions = (props) => {
    return (
        <Row>
            <Card>
                <h5>Type de message :</h5>
                <Row>
                    <Col md={4}>
                        <button className="bx-msg">
                            <i className="bx bx-file text-primary"></i>
                            Note
                        </button>
                    </Col>
                    <Col md={4}>
                        <button className="bx-msg">
                            <i className="bx bx-phone-call text-primary"></i>
                            Téléphone
                        </button>
                    </Col>
                    <Col md={4}>
                        <button className="bx-msg">
                            <i className="bx bx-calendar-event text-primary"></i>
                            Rendez-vous
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <button className="bx-msg">
                            <i className="bx bx-message-rounded-add text-primary"></i>
                            SMS
                        </button>
                    </Col>
                    <Col md={4}>
                        <button className="bx-msg">
                            <i className="bx bx-mail-send text-primary"></i>
                            Email
                        </button>
                    </Col>
                    <Col md={4}>
                        <button className="bx-msg">
                            <i className="bx bxl-whatsapp text-primary"></i>
                            Whatsapp
                        </button>
                    </Col>
                </Row>
            </Card>
        </Row>
    )
};
