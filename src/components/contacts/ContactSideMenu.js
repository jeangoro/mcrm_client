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
    Spinner, Nav, NavItem, NavLink, NavbarBrand, Navbar,
} from "reactstrap";
import BreadCrumb from "../common/BreadCrumb";
import '../../assets/scss/pages/_contacts.scss';
import {getContacts} from "../../helpers/backend_helper";
export const ContactSideMenu = ({id}) => {
    getContacts()
    const menu = [
        {
            title: 'Gestion des tickets',
            description: 'Affiche la liste des alertes dans un dossiers pour son traitement',
            visible: true
        },
        {
            title: 'Gestion des alertes KYC',
            description: 'Affiche la liste des documents en erreur ou à compléter lors d’une soumission ou vérification',
            visible: true
        },
        {
            title: 'Gestion des statuts des leads',
            description: 'Donne la position du statut du lead en matière de tunnel de conversion soit il est en Deal, Froid, Chaud ou le Deal a été conclu par un paiement on le met à Close',
            visible: true
        },
        {
            title: 'Gestion des status des services commentaires',
            description: 'Affiche la liste des commentaires dans le traitement d’un dossier',
            visible: true
        },
        {
            title: 'Attachements',
            description: ' Affiche tout les derniers  fichiers lien ou attachés  à l’ activité du client ou du lead (upload)',
            visible: true
        },
    ]
    return (
        <Row>
            <Card >
                { menu.map(item => (
                    item.visible && <Navbar
                        className="my-2"
                        dark key={item.title}>
                        <NavbarBrand href="#">
                            <i className=" ri-arrow-right-s-line"></i>{item.title } :
                        </NavbarBrand>
                        {item.description}
                    </Navbar>
                ))}

            </Card>
        </Row>
    )};
