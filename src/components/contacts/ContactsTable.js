import React, {useState} from "react";
import {Modal, ModalBody, ModalHeader, Row,} from "reactstrap";
import "../../assets/scss/pages/_contacts.scss";
import {
    ActionsCellRenderer,
    columns,
    CONTACT_ITEMS_COLORS,
    getDataSource,
    tableConfigPerContactType
} from "../constants/contacts";
import {SendUserMsgOptions} from "./msg/SendUserMsgOptions";
import {DataTable} from "../common/table/DataTable";
import {ContactsHeader} from "./ContactsHeader";

export const ContactsTable = ({refData}) => {
    const [modalSendMsg, setMsgModal] = useState(false);
    // const [filterValues, setFilterValues] = useState({contactTypes: "Etudiants"});
    const [filterValues, setFilterValues] = useState({});
    const toggleSendMsgModal = () => {
        setMsgModal(!modalSendMsg);
    };
    // const tableConfig = tableConfigPerContactType[filterValues && filterValues['contactTypes']];
    const tableConfig = tableConfigPerContactType['Etudiants'];
    const tableColumns =
        columns.filter( item => tableConfig?.columns?.includes(item.name));
    return (
        <Row>
            <ContactsHeader
                filterValues={filterValues}
                setFilterValues={setFilterValues}
                refData={refData} />
            <hr className="margin-5" />
            <Modal isOpen={modalSendMsg} toggle={toggleSendMsgModal}>
                <ModalHeader toggle={toggleSendMsgModal}>
                    Envoyer un message
                </ModalHeader>
                <ModalBody>
                    <SendUserMsgOptions/>
                </ModalBody>
            </Modal>
            <DataTable className="contacts-table"
                       columns={tableColumns}
                       filters={tableConfig?.filters || []}
                       refData={refData}
                       getDataSource={getDataSource}
                       actionsCellRenderer={(props) => ActionsCellRenderer(toggleSendMsgModal, props)}
                       colorMapping={CONTACT_ITEMS_COLORS}
                       filterValues={filterValues}
                       setFilterValues={setFilterValues}
            />
        </Row>
    );
};
