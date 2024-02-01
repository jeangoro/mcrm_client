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
    Spinner, Nav, NavItem, NavLink,
} from "reactstrap";
import BreadCrumb from "../common/BreadCrumb";
import '../../assets/scss/pages/_contacts.scss';
export const ContactServices = (props) => {
    return (
        <Row>
            <Card >
                Services
                {/*<table className="table table-borderless table-nowrap">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Service</th>
                        <th scope="col">Statut</th>
                        <th scope="col">Etape</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Accompagnement</td>
                        <td><span className="badge badge-soft-success">En cours</span></td>
                        <td>Signature contrat</td>
                        <td>10, Nov 2021</td>
                        <td>
                            <div className="hstack gap-3 fs-15">

                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>AVI</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <div className="hstack gap-3 fs-15">

                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Assurance</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <div className="hstack gap-3 fs-15">

                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Réservation de billet d'avion</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <div className="hstack gap-3 fs-15">

                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Logement</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <div className="hstack gap-3 fs-15">

                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>*/}
            </Card>
        </Row>
    )};
