import React from 'react';
import { Container } from "reactstrap";
import BreadCrumb from "../../components/common/BreadCrumb";

    const AgencyPricing = () => {
        document.title = "Parèmetre pricing | Agence ";   //for meta title
        return (
            <>
                <div className="page-content">
                    <Container fluid={true}>
                        <div className="float-left">
                            <BreadCrumb title="Parèmetre pricing" pageTitle="Agence"/>
                        </div>
                        <div>
                            write Html code or structure des paramètres de pricing ici
                        </div>
                    </Container>
                </div>
            </>
        ); 
    }

export default AgencyPricing ;