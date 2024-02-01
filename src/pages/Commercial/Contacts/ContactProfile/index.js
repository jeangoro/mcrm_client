import React, { useCallback, useEffect, useState } from "react";
import BreadCrumb from "../../../../components/common/BreadCrumb";
import withAuthProtected from "../../../../routes/withAuthProtected";
import { ROLE_CONTACT } from "../../../../routes/roles";

import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Row,
  TabContent,
  Table,
  TabPane,
  UncontrolledCollapse,
  UncontrolledDropdown,
} from "reactstrap";
import classnames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

//Images
import profileBg from "../../../../assets/images/profile-bg.jpg";
import avatar1 from "../../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../../../assets/images/users/avatar-8.jpg";

import smallImage2 from "../../../../assets/images/small/img-2.jpg";
import smallImage3 from "../../../../assets/images/small/img-3.jpg";
import smallImage4 from "../../../../assets/images/small/img-4.jpg";
import smallImage5 from "../../../../assets/images/small/img-5.jpg";
import smallImage6 from "../../../../assets/images/small/img-6.jpg";
import smallImage7 from "../../../../assets/images/small/img-7.jpg";
import smallImage9 from "../../../../assets/images/small/img-9.jpg";
import CompleteProfile from "./VueEnsemble/completeProfile";
import VueEnsemble from "./VueEnsemble";
import { ScrollView } from "devextreme-react";
// import { ScrollView } from "devextreme-react";
// import { ContactForm } from "./contactFormDevxtreme/ContactForm";

// import { projects, documents } from "../../common/data";
//Import Breadcrumb

const ContactProfile = () => {
  const [contentHeight, setContentHeight] = useState(window.innerHeight - 180);
  const getContentHeight = (e) => {
    if (window.innerHeight !== contentHeight) {
      setContentHeight(window.innerHeight - 180);
    }
  };
  window.addEventListener("resize", function (e) {
    getContentHeight(e);
  });

  const projects = null;
  const document = null;
  SwiperCore.use([Autoplay]);

  const [activeTab, setActiveTab] = useState("1");
  const [activityTab, setActivityTab] = useState("1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const toggleActivityTab = (tab) => {
    if (activityTab !== tab) {
      setActivityTab(tab);
    }
  };

  // contact details var
  //   const [data, setData] = useState<Contact>();
  const [data, setData] = useState();
  const [messagesCount, setMessagesCount] = useState(0);
  const [notes, setNotes] = useState();
  const [messages, setMessages] = useState([]);
  const [activeOpportunities, setActiveOpportunities] = useState();
  const [closedOpportunities, setClosedOpportunities] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const onMessagesCountChanged = useCallback((count) => {
    setMessagesCount(count);
  }, []);

  //   useEffect(() => {
  //     loadData();
  //   }, []);

  //   const loadData = useCallback(() => {
  //     Promise.all([
  //       getContact(CONTACT_ID)
  //         .then((data) => {
  //           setData(data);
  //         }),
  //       getContactNotes(CONTACT_ID)
  //         .then((data) => {
  //           setNotes(data);
  //         }),
  //       getContactMessages(CONTACT_ID)
  //         .then((data) => {
  //           setMessages(data);
  //           setMessagesCount(data.length);
  //         }),
  //       getActiveContactOpportunities(CONTACT_ID)
  //         .then((data) => {
  //           setActiveOpportunities(data);
  //         }),
  //       getClosedContactOpportunities(CONTACT_ID)
  //         .then((data) => {
  //           setClosedOpportunities(data);
  //         }),
  //     ]).then(() => { setIsLoading(false); }).catch((error) => console.log(error));
  //   }, []);

  //   const refresh = useCallback(() => {
  //     setIsLoading(true);
  //     loadData();
  //   }, []);
  // end contact details var

  //   document.title = "Contacts | Profile "; //for meta title
  return (
    <>
      {contentHeight && (
        <div className="page-content">
          <Container fluid={true}>
            <div className="float-left">
              <BreadCrumb title="Profile" pageTitle="Contacts" />
            </div>
            {/* <div style={{ height: contentHeight, overflowY: "hidden" }}>
              
            </div> */}

            <div className="profile-foreground position-relative mx-n4 mt-n4">
              <div className="profile-wid-bg">
                <img src={profileBg} alt="" className="profile-wid-img" />
              </div>
            </div>
            <div className="pt-4 mb-4 mb-lg-3 pb-lg-4 mcrm-bg">
              <Row className="g-4">
                <div className="col-auto">
                  <div className="avatar-lg">
                    <img src={avatar1} alt="user-img" className="img-thumbnail rounded-circle" />
                  </div>
                </div>

                <Col>
                  <div className="p-2">
                    <h3 className="text-white mb-1">Anna Adame</h3>
                    <p className="text-white-75">Owner & Founder</p>
                    <div className="hstack text-white-50 gap-1">
                      <div className="me-2">
                        <i className="ri-map-pin-user-line me-1 text-white-75 fs-16 align-middle"></i>California, United States
                      </div>
                      <div>
                        <i className="ri-building-line me-1 text-white-75 fs-16 align-middle"></i>Themesbrand
                      </div>
                    </div>
                  </div>
                </Col>

                <Col xs={12} className="col-lg-auto order-last order-lg-0">
                  <Row className="text text-white-50 text-center">
                    <Col lg={6} xs={4}>
                      <div className="p-2">
                        <h4 className="text-white mb-1">24.3K</h4>
                        <p className="fs-14 mb-0">Followers</p>
                      </div>
                    </Col>
                    <Col lg={6} xs={4}>
                      <div className="p-2">
                        <h4 className="text-white mb-1">1.3K</h4>
                        <p className="fs-14 mb-0">Following</p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>

            <Row>
              <Col lg={12}>
                <div>
                  <div className="d-flex">
                    <Nav pills className="animation-nav profile-nav gap-2 gap-lg-3 flex-grow-1" role="tablist">
                      <NavItem>
                        <NavLink
                          href="#overview-tab"
                          className={classnames({ active: activeTab === "1" })}
                          onClick={() => {
                            toggleTab("1");
                          }}
                        >
                          <i className="ri-airplay-fill d-inline-block d-md-none"></i> <span className="d-none d-md-inline-block">Overview</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="#activities"
                          className={classnames({ active: activeTab === "2" })}
                          onClick={() => {
                            toggleTab("2");
                          }}
                        >
                          <i className="ri-list-unordered d-inline-block d-md-none"></i> <span className="d-none d-md-inline-block">Activities</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="#projects"
                          className={classnames({ active: activeTab === "3" })}
                          onClick={() => {
                            toggleTab("3");
                          }}
                        >
                          <i className="ri-price-tag-line d-inline-block d-md-none"></i> <span className="d-none d-md-inline-block">Projects</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="#documents"
                          className={classnames({ active: activeTab === "4" })}
                          onClick={() => {
                            toggleTab("4");
                          }}
                        >
                          <i className="ri-folder-4-line d-inline-block d-md-none"></i> <span className="d-none d-md-inline-block">Documents</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <div className="flex-shrink-0">
                      <Link to="/pages-profile-settings" className="btn btn-success">
                        <i className="ri-edit-box-line align-bottom"></i> Edit Profile
                      </Link>
                    </div>
                  </div>

                  <TabContent activeTab={activeTab} className="pt-4">
                    <TabPane tabId="1">
                      <VueEnsemble />
                    </TabPane>
                    <TabPane tabId="2">
                      <Card>
                        <CardBody>
                          <h5 className="card-title mb-3">Activities</h5>
                          <div className="acitivity-timeline">
                            <div className="acitivity-item d-flex">
                              <div className="flex-shrink-0">
                                <img src={avatar1} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">
                                  Oliver Phillips <span className="badge bg-soft-primary text-primary align-middle">New</span>
                                </h6>
                                <p className="text-muted mb-2">We talked about a project on linkedin.</p>
                                <small className="mb-0 text-muted">Today</small>
                              </div>
                            </div>
                            <div className="acitivity-item py-3 d-flex">
                              <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                <div className="avatar-title bg-soft-success text-success rounded-circle"> N </div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">
                                  Nancy Martino <span className="badge bg-soft-secondary text-secondary align-middle">In Progress</span>
                                </h6>
                                <p className="text-muted mb-2">
                                  <i className="ri-file-text-line align-middle ms-2"></i>
                                  Create new project Buildng product
                                </p>
                                <div className="avatar-group mb-2">
                                  <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Christi">
                                    <img src={avatar4} alt="" className="rounded-circle avatar-xs" />
                                  </Link>
                                  <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Frank Hook">
                                    <img src={avatar3} alt="" className="rounded-circle avatar-xs" />
                                  </Link>
                                  <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title=" Ruby">
                                    <div className="avatar-xs">
                                      <div className="avatar-title rounded-circle bg-light text-primary">R</div>
                                    </div>
                                  </Link>
                                  <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="more">
                                    <div className="avatar-xs">
                                      <div className="avatar-title rounded-circle">2+</div>
                                    </div>
                                  </Link>
                                </div>
                                <small className="mb-0 text-muted">Yesterday</small>
                              </div>
                            </div>
                            <div className="acitivity-item py-3 d-flex">
                              <div className="flex-shrink-0">
                                <img src={avatar2} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">
                                  Natasha Carey <span className="badge bg-soft-success text-success align-middle">Completed</span>
                                </h6>
                                <p className="text-muted mb-2">Adding a new event with attachments</p>
                                <Row>
                                  <Col xxl={4}>
                                    <div className="row border border-dashed gx-2 p-2 mb-2">
                                      <div className="col-4">
                                        <img src={smallImage2} alt="" className="img-fluid rounded" />
                                      </div>

                                      <div className="col-4">
                                        <img src={smallImage3} alt="" className="img-fluid rounded" />
                                      </div>

                                      <div className="col-4">
                                        <img src={smallImage4} alt="" className="img-fluid rounded" />
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                                <small className="mb-0 text-muted">25 Nov</small>
                              </div>
                            </div>
                            <div className="acitivity-item py-3 d-flex">
                              <div className="flex-shrink-0">
                                <img src={avatar6} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">Bethany Johnson</h6>
                                <p className="text-muted mb-2">added a new member to velzon dashboard</p>
                                <small className="mb-0 text-muted">19 Nov</small>
                              </div>
                            </div>
                            <div className="acitivity-item py-3 d-flex">
                              <div className="flex-shrink-0">
                                <div className="avatar-xs acitivity-avatar">
                                  <div className="avatar-title rounded-circle bg-soft-danger text-danger">
                                    <i className="ri-shopping-bag-line"></i>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">
                                  Your order is placed <span className="badge bg-soft-danger text-danger align-middle ms-1">Out of Delivery</span>
                                </h6>
                                <p className="text-muted mb-2">These customers can rest assured their order has been placed.</p>
                                <small className="mb-0 text-muted">16 Nov</small>
                              </div>
                            </div>
                            <div className="acitivity-item py-3 d-flex">
                              <div className="flex-shrink-0">
                                <img src={avatar7} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">Lewis Pratt</h6>
                                <p className="text-muted mb-2">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. </p>
                                <small className="mb-0 text-muted">22 Oct</small>
                              </div>
                            </div>
                            <div className="acitivity-item py-3 d-flex">
                              <div className="flex-shrink-0">
                                <div className="avatar-xs acitivity-avatar">
                                  <div className="avatar-title rounded-circle bg-soft-info text-info">
                                    <i className="ri-line-chart-line"></i>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">Monthly sales report</h6>
                                <p className="text-muted mb-2">
                                  <span className="text-danger">2 days left</span> notification to submit the monthly sales report.{" "}
                                  <Link to="#" className="link-warning text-decoration-underline">
                                    Reports Builder
                                  </Link>
                                </p>
                                <small className="mb-0 text-muted">15 Oct</small>
                              </div>
                            </div>
                            <div className="acitivity-item d-flex">
                              <div className="flex-shrink-0">
                                <img src={avatar8} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">
                                  New ticket received <span className="badge bg-soft-success text-success align-middle">Completed</span>
                                </h6>
                                <p className="text-muted mb-2">
                                  User <span className="text-secondary">Erica245</span> submitted a ticket.
                                </p>
                                <small className="mb-0 text-muted">26 Aug</small>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </TabPane>

                    <TabPane tabId="3">
                      <Card>
                        <CardBody>
                          <Row>
                            {(projects || []).map((item, key) => (
                              <Col xxl={3} sm={6} key={key}>
                                <Card className={`profile-project-card shadow-none profile-project-${item.cardBorderColor}`}>
                                  <CardBody className="p-4">
                                    <div className="d-flex">
                                      <div className="flex-grow-1 text-muted overflow-hidden">
                                        <h5 className="fs-14 text-truncate">
                                          <Link to="#" className="text-dark">
                                            {item.title}
                                          </Link>
                                        </h5>
                                        <p className="text-muted text-truncate mb-0">
                                          Last Update : <span className="fw-semibold text-dark">{item.updatedTime}</span>
                                        </p>
                                      </div>
                                      <div className="flex-shrink-0 ms-2">
                                        <div className={`badge badge-soft-${item.badgeClass} fs-10`}>{item.badgeText}</div>
                                      </div>
                                    </div>

                                    <div className="d-flex mt-4">
                                      <div className="flex-grow-1">
                                        <div className="d-flex align-items-center gap-2">
                                          <div>
                                            <h5 className="fs-12 text-muted mb-0">Members :</h5>
                                          </div>
                                          <div className="avatar-group">
                                            {(item.member || []).map((subitem, key) => (
                                              <div className="avatar-group-item" key={key}>
                                                <div className="avatar-xs">
                                                  <img src={subitem.img} alt="" className="rounded-circle img-fluid" />
                                                </div>
                                              </div>
                                            ))}

                                            {(item.memberName || []).map((element, key) => (
                                              <div className="avatar-group-item" key={key}>
                                                <div className="avatar-xs">
                                                  <div className="avatar-title rounded-circle bg-light text-primary">{element.memberText}</div>
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </CardBody>
                                </Card>
                              </Col>
                            ))}
                            <Col lg={12}>
                              <Pagination listClassName="justify-content-center" className="pagination-separated mb-0">
                                <PaginationItem disabled>
                                  {" "}
                                  <PaginationLink to="#">
                                    {" "}
                                    <i className="mdi mdi-chevron-left" />{" "}
                                  </PaginationLink>{" "}
                                </PaginationItem>
                                <PaginationItem active>
                                  {" "}
                                  <PaginationLink to="#"> 1 </PaginationLink>{" "}
                                </PaginationItem>
                                <PaginationItem>
                                  {" "}
                                  <PaginationLink to="#"> 2 </PaginationLink>{" "}
                                </PaginationItem>
                                <PaginationItem>
                                  {" "}
                                  <PaginationLink to="#"> 3 </PaginationLink>{" "}
                                </PaginationItem>
                                <PaginationItem>
                                  {" "}
                                  <PaginationLink to="#"> 4 </PaginationLink>{" "}
                                </PaginationItem>
                                <PaginationItem>
                                  {" "}
                                  <PaginationLink to="#"> 5 </PaginationLink>{" "}
                                </PaginationItem>
                                <PaginationItem>
                                  {" "}
                                  <PaginationLink to="#">
                                    {" "}
                                    <i className="mdi mdi-chevron-right" />{" "}
                                  </PaginationLink>{" "}
                                </PaginationItem>
                              </Pagination>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </TabPane>

                    <TabPane tabId="4">
                      <Card>
                        <CardBody>
                          <div className="d-flex align-items-center mb-4">
                            <h5 className="card-title flex-grow-1 mb-0">Documents</h5>
                            <div className="flex-shrink-0">
                              <Input className="form-control d-none" type="file" id="formFile" />
                              <Label htmlFor="formFile" className="btn btn-danger">
                                <i className="ri-upload-2-fill me-1 align-bottom"></i> Upload File
                              </Label>
                            </div>
                          </div>
                          <Row>
                            <Col lg={12}>
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
                                    {(document || []).map((item, key) => (
                                      <tr key={key}>
                                        <td>
                                          <div className="d-flex align-items-center">
                                            <div className="avatar-sm">
                                              <div className={`avatar-title bg-soft-${item.iconBackgroundClass} text-${item.iconBackgroundClass} rounded fs-20`}>
                                                <i className={item.icon}></i>
                                              </div>
                                            </div>
                                            <div className="ms-3 flex-grow-1">
                                              <h6 className="fs-15 mb-0">
                                                <Link to="#">{item.fileName}</Link>
                                              </h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>{item.fileType}</td>
                                        <td>{item.fileSize}</td>
                                        <td>{item.updatedDate}</td>
                                        <td>
                                          <UncontrolledDropdown direction="start">
                                            <DropdownToggle tag="a" className="btn btn-light btn-icon" id="dropdownMenuLink15" role="button">
                                              <i className="ri-equalizer-fill"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                              <DropdownItem>
                                                <i className="ri-eye-fill me-2 align-middle text-muted" />
                                                View
                                              </DropdownItem>
                                              <DropdownItem>
                                                <i className="ri-download-2-fill me-2 align-middle text-muted" />
                                                Download
                                              </DropdownItem>
                                              <DropdownItem divider />
                                              <DropdownItem>
                                                <i className="ri-delete-bin-5-line me-2 align-middle text-muted" />
                                                Delete
                                              </DropdownItem>
                                            </DropdownMenu>
                                          </UncontrolledDropdown>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </Table>
                              </div>
                              <div className="text-center mt-3">
                                <Link to="#" className="text-success ">
                                  <i className="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i>
                                  Load more{" "}
                                </Link>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </TabPane>
                  </TabContent>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default withAuthProtected(ContactProfile, [ROLE_CONTACT]);
