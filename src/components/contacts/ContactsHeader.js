import React, {useState} from "react";
import {Modal, ModalBody, ModalHeader, Row,} from "reactstrap";
import BreadCrumb from "../common/BreadCrumb";
import '../../assets/scss/pages/_contacts.scss';
import {EditUserContactForm} from "./forms/EditUserContactForm";
import {EditPartnerContactForm} from "./forms/EditPartnerContactForm";
import {EditCommercialContactForm} from "./forms/EditCommercialContactForm";
import {TableFilters} from "../common/table/filters";
import Button from 'devextreme-react/button';
import {DropDownButton} from "devextreme-react";

export const ContactsHeader = ({refData, filterValues, setFilterValues}) => {
    const [modalEditUserContact, setUserModal] = useState(false);
    const [modalEditPartnerContact, setPartnerModal] = useState(false);
    const [modalEditCommercialContact, setCommercialModal] = useState(false);
    const headerFilters = [
        // {name: 'contactSources', title: 'Sources contacts', filterType: 'select'},
        {name: 'contactTypes', title: 'Sources contacts', filterType: 'select'}
    ]

    const toggleEditUserModal = () => {
        setUserModal(!modalEditUserContact);
    };
    const toggleEditPartnerModal = () => {
        setPartnerModal(!modalEditPartnerContact);
    };
    const toggleEditCommercialModal = () => {
        setCommercialModal(!modalEditCommercialContact);
    };
    const setFilterValue = (col, value) => {
        setFilterValues({...filterValues, [col]: value});
    };
    const importContacts = () => {

    }
    const actions = [
        {id: 1, text: "Utilisateur", onClick: toggleEditUserModal},
        {id: 2, text: "Partenaire", onClick: toggleEditPartnerModal},
        {id: 3, text: "Commercial", onClick: toggleEditCommercialModal}
    ];
    return (<Row>
            <div className="float-left">
                <BreadCrumb title={`Liste des contacts ${filterValues['contactTypes'] || 'Etudiants'}`} pageTitle="Contacts"/>
            </div>

            <div className="pull-right">
                <div className="d-flex">
                    <TableFilters
                        defaultValue={filterValues}
                        refData={refData}
                        filters={headerFilters}
                        onFilterValueChanged={setFilterValue}
                    />
                    <Button icon="import"
                            text="Importer des contacts"
                            onClick={importContacts}
                            height={35} style={{marginTop: 7}}
                    />
                    <DropDownButton
                        text="Créer un contact"
                        icon="add"
                        stylingMode="contained"
                        items={actions}
                        keyExpr="id"
                        displayExpr="text"
                        selectedItemKey={1}
                        height={35} style={{marginTop: 7}}
                    />
                </div>
            </div>
            <Modal isOpen={modalEditUserContact} toggle={toggleEditUserModal} size="lg">
                <ModalHeader toggle={toggleEditUserModal}>Ajouter contact utilisateur</ModalHeader>
                <ModalBody>
                    <EditUserContactForm refData={refData} closeModal={setUserModal}/>
                </ModalBody>
            </Modal>
            <Modal isOpen={modalEditPartnerContact} toggle={toggleEditPartnerModal} size="lg">
                <ModalHeader toggle={toggleEditPartnerModal}>Ajouter contact partenaire</ModalHeader>
                <ModalBody>
                    <EditPartnerContactForm refData={refData} closeModal={setPartnerModal}/>
                </ModalBody>
            </Modal>
            <Modal isOpen={modalEditCommercialContact} toggle={toggleEditCommercialModal} size="lg">
                <ModalHeader toggle={toggleEditCommercialModal}>Ajouter contact commercial</ModalHeader>
                <ModalBody>
                    <EditCommercialContactForm refData={refData} closeModal={setCommercialModal}/>
                </ModalBody>
            </Modal>
        </Row>

    );
};
