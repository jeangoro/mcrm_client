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
    Spinner, Nav, NavItem, NavLink, Table, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from "reactstrap";
import BreadCrumb from "../common/BreadCrumb";
import '../../assets/scss/pages/_contacts.scss';
import {Link} from "react-router-dom";
import {documents} from '../../common/data';

export const ContactDocuments = (props) => {
    return (
            <Card>
                Documents
               {/* <CardBody>
                    <div className="d-flex align-items-center mb-4">
                        <h5 className="card-title flex-grow-1 mb-0">Documents</h5>
                        <div className="flex-shrink-0">
                            <Input className="form-control d-none" type="file" id="formFile" />
                            <Label htmlFor="formFile" className="btn btn-danger"><i className="ri-upload-2-fill me-1 align-bottom"></i> Upload
                                File</Label>
                        </div>
                    </div>
                    <Row>
                        <Col>
                            <div className="table-responsive">
                                <Table className="table-borderless align-middle mb-0">
                                    <thead className="table-light">
                                    <tr>
                                        <th scope="col">File Name</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Size</th>
                                        <th scope="col">Upload Date</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {(documents || []).map((item, key) => (
                                        <tr key={key}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-sm">
                                                        <div
                                                            className={`avatar-title bg-soft-${item.iconBackgroundClass} text-${item.iconBackgroundClass} rounded fs-20`}>
                                                            <i className={item.icon}></i>
                                                        </div>
                                                    </div>
                                                    <div className="ms-3 flex-grow-1">
                                                        <h6 className="fs-15 mb-0"><Link to="#">{item.fileName}</Link>
                                                        </h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{item.fileType}</td>
                                            <td>{item.fileSize}</td>
                                            <td>{item.updatedDate}</td>
                                            <td>
                                                <UncontrolledDropdown direction='start'>
                                                    <DropdownToggle tag="a" className="btn btn-light btn-icon" id="dropdownMenuLink15" role="button">
                                                        <i className="ri-equalizer-fill"></i>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem><i className="ri-eye-fill me-2 align-middle text-muted" />View</DropdownItem>
                                                        <DropdownItem><i className="ri-download-2-fill me-2 align-middle text-muted" />Download</DropdownItem>
                                                        <DropdownItem divider />
                                                        <DropdownItem><i className="ri-delete-bin-5-line me-2 align-middle text-muted" />Delete</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
                            </div>
                            <div className="text-center mt-3">
                                <Link to="#" className="text-success "><i
                                    className="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i>
                                    Load more </Link>
                            </div>
                        </Col>
                    </Row>
                </CardBody>*/}
            </Card>

    )};
