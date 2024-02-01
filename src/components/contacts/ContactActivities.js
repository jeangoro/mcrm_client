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
    Spinner, Nav, NavItem, NavLink, UncontrolledCollapse,
} from "reactstrap";
import BreadCrumb from "../common/BreadCrumb";
import '../../assets/scss/pages/_contacts.scss';
import {Link} from "react-router-dom";
import avatar2 from "../../assets/images/users/avatar-2.jpg";

export const ContactActivities = (props) => {
    return (
        <Row>
            <Card >
                Activités
               {/* <div className="profile-timeline">
                    <div>
                    </div>
                    <div className="accordion accordion-flush" id="todayExample">
                        <div className="accordion-item border-0">
                            <div className="accordion-header">
                                <button className="accordion-button p-2 shadow-none" type="button" id="headingOne" >
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <img src={avatar2} alt="" className="avatar-xs rounded-circle" />
                                        </div>
                                        <div
                                            className="flex-grow-1 ms-3">
                                            <h6
                                                className="fs-14 mb-1">
                                                Jacqueline Steve
                                            </h6>
                                            <small className="text-muted">We has changed 2 attributes on 05:16PM</small>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <UncontrolledCollapse toggler="#headingOne" defaultOpen>
                                <div
                                    className="accordion-body ms-2 ps-5">
                                    details here
                                </div>
                            </UncontrolledCollapse>
                        </div>
                        <div className="accordion-item border-0">
                            <div className="accordion-header" id="headingTwo">
                                <Link to="#" className="accordion-button p-2 shadow-none" id="collapseTwo">
                                    <div className="d-flex">
                                        <div
                                            className="flex-shrink-0 avatar-xs">
                                            <div
                                                className="avatar-title bg-light text-success rounded-circle">
                                                M
                                            </div>
                                        </div>
                                        <div
                                            className="flex-grow-1 ms-3">
                                            <h6
                                                className="fs-14 mb-1">
                                                Megan Elmore
                                            </h6>
                                            <small
                                                className="text-muted">Adding
                                                a new event with
                                                attachments -
                                                04:45PM</small>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <UncontrolledCollapse toggler="collapseTwo" defaultOpen>
                                <div
                                    className="accordion-body ms-2 ps-5">
                                    <Row className="g-2">
                                        <div className="col-auto">
                                            <div
                                                className="d-flex border border-dashed p-2 rounded position-relative">
                                                <div
                                                    className="flex-shrink-0">
                                                    <i
                                                        className="ri-image-2-line fs-17 text-danger"></i>
                                                </div>
                                                <div
                                                    className="flex-grow-1 ms-2">
                                                    <h6><Link to="#"
                                                              className="stretched-link">Business
                                                        Template
                                                        -
                                                        UI/UX
                                                        design</Link>
                                                    </h6>
                                                    <small>685
                                                        KB</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div
                                                className="d-flex border border-dashed p-2 rounded position-relative">
                                                <div
                                                    className="flex-shrink-0">
                                                    <i
                                                        className="ri-file-zip-line fs-17 text-info"></i>
                                                </div>
                                                <div
                                                    className="flex-grow-1 ms-2">
                                                    <h6><Link to="#"
                                                              className="stretched-link">Bank
                                                        Management
                                                        System
                                                        -
                                                        PSD</Link>
                                                    </h6>
                                                    <small>8.78
                                                        MB</small>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </UncontrolledCollapse>
                        </div>
                    </div>

                </div>*/}

            </Card>
        </Row>
    )};
