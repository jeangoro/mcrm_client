import React from 'react';
import { Container } from "reactstrap";
import BreadCrumb from "../../components/common/BreadCrumb";
//Import Breadcrumb

    const AgencySetting = () => {
        document.title = "Utilisateurs | Agence ";   //for meta title
        return (
            <>
                <div className="page-content">
                    <Container fluid={true}>
                        <div className="float-left">
                            <BreadCrumb title="Paramètre agence" pageTitle=" Agence"/>
                        </div>
                        <div>
                            write Html code or structure des paramètres de l'agence ici
                        </div>
                    </Container>
                </div>
            </>
        );
    } 

export default AgencySetting;