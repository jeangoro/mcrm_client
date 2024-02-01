import React from 'react';
import { Container } from "reactstrap";
import BreadCrumb from "../../components/common/BreadCrumb";
import {ROLE_BUSINESS_PROVIDER} from "../../routes/roles";
import withAuthProtected from "../../routes/withAuthProtected";
//Import Breadcrumb

const BusinessProvider = () => {
        document.title = "Mes commerciaux| Agence ";   //for meta title
        return (
            <>
                <div className="page-content">
                    <Container fluid={true}>
                        <div className="float-left">
                            <BreadCrumb title="Mes commerciaux" pageTitle="Business Provider"/>
                        </div>
                        <div>
                            write Html code or structure Mes commerciaux ici
                        </div>
                    </Container>
                </div>
            </>
        ); 
}

export default withAuthProtected(BusinessProvider, [ROLE_BUSINESS_PROVIDER]);