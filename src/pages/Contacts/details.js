import React, {useEffect, useState} from "react";
import "../../assets/scss/pages/_contacts.scss";
import {useDispatch, useSelector} from "react-redux";
import {
    Card,
    CardBody, CardHeader,
    Col, DropdownItem, DropdownMenu, DropdownToggle,
    Input,
    Label,
    Nav,
    NavItem,
    NavLink,
    Row,
    Spinner,
    TabContent,
    Table,
    TabPane, UncontrolledDropdown
} from "reactstrap";
import {getContactsDetails} from "../../store/actions";
import {ContactDetails} from "../../components/contacts/ContactDetails";
import {Link, useSearchParams} from "react-router-dom";
import {ContactDocuments} from "../../components/contacts/ContactDocuments";
import {ContactActivities} from "../../components/contacts/ContactActivities";
import {ContactWhatsapp} from "../../components/contacts/ContactWhatsapp";
import {ContactEmails} from "../../components/contacts/ContactEmails";
import {ContactTasks} from "../../components/contacts/ContactTasks";
import {ContactServices} from "../../components/contacts/ContactServices";
import {ContactFinance} from "../../components/contacts/ContactFinance";
import BreadCrumb from "../../components/common/BreadCrumb";
import withAuthProtected from "../../routes/withAuthProtected";
import {ROLE_CONTACT} from "../../routes/roles";
import {getContactById} from "../../helpers/backend_helper";
import "../../assets/scss/pages/_contacts.scss";
import {useParams} from "react-router-dom";

const ContactsDetailsPage = () => {
    document.title = "contacts Details | Mobility CRM";
    const dispatch = useDispatch();
    const [contact, setContact] = useState();
    const [error, setError] = useState("");
    const {id} = useParams();
    useEffect(() => {
        if( document.querySelector(".hamburger-icon")){
            document.querySelector(".hamburger-icon").click();
        }
        getContactById(id).then(c => {
            setContact(c);
            setError("")
        }).catch(e => {
            setError(`Une erreur est survenue lors du chargement des données: ${e}`)
        })
    }, [dispatch, id]);

    const [activeTab, setActiveTab] = useState('activities');

    const tabs = [
        { name: 'activities', title: 'Activités', visible: true},
        { name: 'whatsapp', title: 'Whatsapp', visible: true},
        { name: 'email', title: 'Email', visible: true},
        { name: 'tasks', title: 'Tâche', visible: true},
        { name: 'services', title: 'Services', visible: true},
        { name: 'documents', title: 'Documents', visible: true},
        { name: 'finances', title: 'Finances', visible: true},
    ]
    return (
        <React.Fragment>
            <div className="page-content">
                <div className="float-left">
                    <BreadCrumb title="Détails du contact" pageTitle="Contacts" />
                </div>
                {error && (
                    <div className="auth-center error">
                        {error}
                    </div>
                    )
                }
                {!contact && !error && (
                    <div className="auth-center">
                        <Spinner size="sm">Loading...</Spinner>
                    </div>
                )}

                {contact && !error && (
                    <>
                        <Row>
                            <Col md="3">
                                <ContactDetails contact={contact}/>
                            </Col>
                            <Col md="9">
                                <Card>
                                    <CardHeader>
                                    <Nav pills justified>
                                        { tabs.map(tab => (
                                            tab.visible && <NavItem key={tab.name}>
                                                <NavLink
                                                    className={activeTab === tab.name ? 'active' : ''}
                                                    onClick={() => setActiveTab(tab.name)}
                                                    href="#"
                                                >
                                                    {tab.title}
                                                </NavLink>
                                            </NavItem>
                                        ))}
                                    </Nav>
                                    </CardHeader>
                                    <CardBody>

                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="activities">
                                            <ContactActivities/>
                                        </TabPane>
                                        <TabPane tabId="whatsapp">
                                            <ContactWhatsapp/>
                                        </TabPane>
                                        <TabPane tabId="email">
                                            <ContactEmails/>
                                        </TabPane>
                                        <TabPane tabId="tasks">
                                            <ContactTasks/>
                                        </TabPane>
                                        <TabPane tabId="services">
                                            <ContactServices/>
                                        </TabPane>
                                        <TabPane tabId="documents">
                                            <ContactDocuments/>
                                        </TabPane>
                                        <TabPane tabId="finances">
                                            <ContactFinance/>
                                        </TabPane>
                                    </TabContent>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </>
                )}
            </div>
        </React.Fragment>
    );
};

export default withAuthProtected(ContactsDetailsPage, [ROLE_CONTACT]);
