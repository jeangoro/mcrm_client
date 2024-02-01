import React, { useEffect, useState } from "react";
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
    Spinner, Nav, NavItem, NavLink, Table, AccordionItem, Accordion, AccordionBody, AccordionHeader,
} from "reactstrap";
import BreadCrumb from "../common/BreadCrumb";
import avatar1 from "../../assets/images/users/user-dummy-img.jpg";
import profileBg from "../../assets/images/users/avatar-3.jpg";

import '../../assets/scss/pages/_contacts.scss';
import moment from "moment";
export const ContactDetails = ({contact}) => {
    const [open, setOpen] = useState('contact');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
    return (
        contact && <Row>
            <Card >
                <div className="pt-4 mb-4 mb-lg-3 pb-lg-4">
                    <Row className="g-4">
                        <div className="col-auto">
                            <div className="avatar-lg">
                                <img src={avatar1} alt="user-img"
                                     className="img-thumbnail rounded-circle" />
                            </div>
                        </div>

                        <Col>
                            <div className="p-2">
                                <h3 className="mb-1">{contact.firstName} {contact.lastName}</h3>

                            </div>
                        </Col>
                    </Row>
                </div>

                <Accordion flush open={open} toggle={toggle}>
                    <AccordionItem>
                        <AccordionHeader targetId="contact">Information contact</AccordionHeader>
                        <AccordionBody accordionId="contact">
                            <div className="table-responsive">
                                <Table className="table-borderless mb-0">
                                    <tbody>
                                    <tr>
                                        <th className="ps-0" scope="row">Mobile :</th>
                                        <td className="text-muted">{contact.phone}</td>
                                    </tr>
                                    <tr>
                                        <th className="ps-0" scope="row">E-mail :</th>
                                        <td className="text-muted">{contact.email}</td>
                                    </tr>
                                    <tr>
                                        <th className="ps-0" scope="row">Joining Date</th>
                                        <td className="text-muted">{moment(contact.createDate).format('L')}</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="paiements">Information paiements</AccordionHeader>
                        <AccordionBody accordionId="paiements">
                            Information paiements
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="services">Information services</AccordionHeader>
                        <AccordionBody accordionId="services">
                            Information services
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="Agenda">Information Agenda</AccordionHeader>
                        <AccordionBody accordionId="Agenda">
                            Information Agenda
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>

            </Card>

        </Row>
    )};
