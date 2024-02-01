import React from 'react';
import { Container } from "reactstrap";
import BreadCrumb from "../../components/common/BreadCrumb";
import withAuthProtected from "../../routes/withAuthProtected";
import {ROLE_MARKETING} from "../../routes/roles";
//Import Breadcrumb

    const Campaign = () => {
        document.title = "Campaign | Mes campagnes ";   //for meta title
        return (
            <>
                <div className="page-content">
                    <Container fluid={true}>
                        <div className="float-left">
                            <BreadCrumb title="Mes campagnes" pageTitle="Campagne"/>
                        </div>
                        <div>
                            write Html code or structure des campagnes ici
                        </div>
                    </Container>
                </div>
            </>
        ); 
    }

export default withAuthProtected(Campaign, [ROLE_MARKETING]);
