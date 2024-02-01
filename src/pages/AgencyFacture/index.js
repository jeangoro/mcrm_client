import React from 'react';
import { Container } from "reactstrap";
import BreadCrumb from "../../components/common/BreadCrumb";
//Import Breadcrumb

    const AgencyFacture = () => {
        document.title = "Parèmetres facture | Agence ";   //for meta title
        return (
            <>
                <div className="page-content">
                    <Container fluid={true}>
                        <div className="float-left">
                            <BreadCrumb title="Parèmetre facture" pageTitle="Agence"/>
                        </div>
                        <div>
                            write Html code or structure des paramètres de la facture ici
                        </div>
                    </Container>
                </div>
            </>
        );
    } 

export default AgencyFacture;